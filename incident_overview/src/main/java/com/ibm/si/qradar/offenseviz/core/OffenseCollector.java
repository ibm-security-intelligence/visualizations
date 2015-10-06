/******************************************************
Copyright (c) 2015, IBM

Licensed under the Apache License, Version 2.0 (the "License"); you may not use 
this file except in compliance with the License. You may obtain a copy of the 
License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed 
under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR 
CONDITIONS OF ANY KIND, either express or implied. See the License for the 
specific language governing permissions and limitations under the License.
*********************************************************/

package com.ibm.si.qradar.offenseviz.core;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URI;
import java.net.URISyntaxException;
import java.security.KeyManagementException;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;

import javax.persistence.EntityManager;

import org.apache.commons.lang3.StringUtils;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.conn.ssl.AllowAllHostnameVerifier;
import org.apache.http.conn.ssl.SSLContextBuilder;
import org.apache.http.conn.ssl.TrustStrategy;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ibm.si.qradar.offenseviz.conf.QRadarConfig;
import com.ibm.si.qradar.offenseviz.dao.DestinationDao;
import com.ibm.si.qradar.offenseviz.dao.OffenseDao;
import com.ibm.si.qradar.offenseviz.dao.SourceDao;
import com.ibm.si.qradar.offenseviz.geoip.GeoInfo;
import com.ibm.si.qradar.offenseviz.geoip.GeoipUtil;
import com.ibm.si.qradar.offenseviz.jpa.Destination;
import com.ibm.si.qradar.offenseviz.jpa.GeographicEndpoint;
import com.ibm.si.qradar.offenseviz.jpa.Offense;
import com.ibm.si.qradar.offenseviz.jpa.Source;
import com.ibm.si.qradar.offenseviz.util.PersistenceUtil;

public class OffenseCollector implements Runnable {

	private static final Logger logger = LoggerFactory.getLogger(OffenseCollector.class);
	private static final String OFFENSE_API_PATH = "/api/siem/offenses"; 
	private static final String SOURCE_API_PATH = "/api/siem/source_addresses";
	private static final String DEST_API_PATH = "/api/siem/local_destination_addresses";
	
	private final Double defaultLatitude;
	private final Double defaultLongitude;
	private final String defaultCountry;
	private final String defaultCity;
	
	private static final SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss.SSS"); 
	
	private enum EntityType { SOURCE, DEST };
	
	private OffenseDao offenseDao;
	private SourceDao sourceDao;
	private DestinationDao destDao;
	private GeoipUtil geoipUtil = null;
	
	ObjectMapper mapper;
	
	public OffenseCollector() {
		defaultLatitude = QRadarConfig.getInstance().getDefaultLatitude();
		defaultLongitude = QRadarConfig.getInstance().getDefaultLongitude();
		defaultCountry = QRadarConfig.getInstance().getDefaultCountry();
		defaultCity = QRadarConfig.getInstance().getDefaultCity();
	}
	
	@Override
	public void run() {
		EntityManager entityManager = null;

		try {
			geoipUtil = new GeoipUtil();
			mapper = new ObjectMapper();
			
			entityManager = PersistenceUtil.getEntityManagerFactory().createEntityManager();
			offenseDao = new OffenseDao(entityManager);
			sourceDao = new SourceDao(entityManager);
			destDao = new DestinationDao(entityManager);
			
			getOffenses();

		} catch (Exception e) {
			logger.error("Could not get offense list from QRadar", e);
		} finally {
			if(entityManager != null) {
				entityManager.close();
			}
			if(geoipUtil != null) {
				geoipUtil.dispose();
			}
		}
	}

	public void getOffenses() throws Exception {
		Date now = new Date();
		Timestamp timestamp = new Timestamp(now.getTime());
		
		logger.debug("Grabbing offenses at " + dateFormat.format(now));
		
		String authToken = QRadarConfig.getInstance().getAuthorizationToken();
		CloseableHttpClient httpclient = getHttpClient();
		URI uri = getURI(OFFENSE_API_PATH);
		String json = executeGet(uri, httpclient, authToken);
		
		Date after = new Date();
		logger.debug("Returned with offenses from QRadar at " + dateFormat.format(after));
		logger.debug("It took " + (after.getTime() - now.getTime()) + " milliseconds to retrieve those offenses");
		
		processOffenses(json, timestamp);
	}
	
	private String getSourcesOrDestsById(Set<Integer> ids, EntityType type) throws Exception {
		String path;
		
		if (type == EntityType.SOURCE) {
			path = SOURCE_API_PATH;
		} else {
			path = DEST_API_PATH;
		}

		String authToken = QRadarConfig.getInstance().getAuthorizationToken();
		CloseableHttpClient httpclient = getHttpClient();
		String filter = buildIdFilter(ids);
		
		String qradarUrl = QRadarConfig.getInstance().getUrl();
		URI uri = new URIBuilder().setScheme("https")
				.setHost(qradarUrl)
				.setPath(path)
				.setParameter("filter", filter)
				.build();
		
		String json = executeGet(uri, httpclient, authToken);
		return json;
		
	}
	
	private List<Source> updateSources(Set<Integer> ids) throws Exception{
		
		Date before = new Date();
		logger.debug("Getting sources at " + dateFormat.format(before));
		
		String json = getSourcesOrDestsById(ids, EntityType.SOURCE);
		List<Source> sources = mapper.readValue(json, mapper.getTypeFactory()
				.constructCollectionType(List.class, Source.class));
		
		List<Source> mergedSources = new ArrayList<Source>();
		for(Source source : sources) {
			updateGeographicInfo(source);
			mergedSources.add(sourceDao.merge(source));
		}
		
		Date after = new Date();
		logger.debug("Sources retrieved at " + dateFormat.format(after));
		logger.debug(String.valueOf(sources.size()) + " sources were processed in " + (after.getTime() - before.getTime()) + " milliseconds");
		
		return mergedSources;
	}
	
	private List<Destination> updateDestinations(Set<Integer> ids) throws Exception {
		
		Date before = new Date();
		logger.debug("Getting destinations at " + dateFormat.format(before));
		
		String json = getSourcesOrDestsById(ids, EntityType.DEST);
		
		List<Destination> dests = mapper.readValue(json, mapper.getTypeFactory()
				.constructCollectionType(List.class, Destination.class));
		
		List<Destination> mergedDests = new ArrayList<Destination>();
		for(Destination dest: dests) {
			updateGeographicInfo(dest);
			mergedDests.add(destDao.merge(dest));
		}
		
		Date after = new Date();
		logger.debug("Destinations retrieved at " + dateFormat.format(after));
		logger.debug(String.valueOf(dests.size()) + " destinations were processed in " + (after.getTime() - before.getTime()) + " milliseconds");
		
		return mergedDests;
	}
	
	private void updateGeographicInfo(GeographicEndpoint endpoint) throws Exception{
		GeoInfo	ginfo = geoipUtil.getGeoInfo(endpoint.getIp());
		if(ginfo == null) {
			logger.debug("Could not lookup ip " + endpoint.getIp());
			endpoint.setLatitude(defaultLatitude);
			endpoint.setLongitude(defaultLongitude);
			endpoint.setCountry(defaultCountry);
			endpoint.setCity(defaultCity);
			endpoint.setInternal(false);
		} else {
			logger.debug("Successfully looked up ip " + endpoint.getIp());
			endpoint.setLatitude(ginfo.getLatitude());
			endpoint.setLongitude(ginfo.getLongitude());
			endpoint.setCountry(ginfo.getCountry());
			endpoint.setCity(ginfo.getCity());
			endpoint.setInternal(false);
		}
	}
	
	private String buildIdFilter(Set<Integer> ids) {
		String filterPrefix = "id in %s";
		String idString = StringUtils.join((Object) ids);
		String formattedIds = idString
			    .replace("[", "(")
			    .replace("]", ")")
			    .trim(); 
		String filter = String.format(filterPrefix, formattedIds);
		return filter;
	}
	
	private void processOffenses(String json, Timestamp timestamp) throws Exception {
		List<Offense> offenses = mapper.readValue(json, mapper.getTypeFactory()
				.constructCollectionType(List.class, Offense.class));
		
		logger.debug("Processing " + String.valueOf(offenses.size()) + " offenses at " + dateFormat.format(new Date()));
		
		for (Offense offense : offenses) {
			offense.setSeenAt(timestamp);
			offense.setSourceList(new ArrayList<Source>());
			offense.setDestinationList(new ArrayList<Destination>());
			
			for (Integer id : offense.getSourceIds()) {
				Source source = new Source(id);
				offense.getSourceList().add(sourceDao.merge(source));
			}
			
			for (Integer id : offense.getDestIds()) {
				Destination dest = new Destination(id);
				offense.getDestinationList().add(destDao.merge(dest));
			}
			
			offenseDao.persist(offense);
		}
		
		updateSourcesAndDests(offenses);
	}
	
	private void updateSourcesAndDests(List<Offense> offenses) {
		Set<Integer> sourceIdSet = new HashSet<Integer>();
		Set<Integer> destIdSet = new HashSet<Integer>();
		
		for (Offense offense : offenses) {
			sourceIdSet.addAll(offense.getSourceIds());
			destIdSet.addAll(offense.getDestIds());
		}
		
		try {
			updateSources(sourceIdSet);
			updateDestinations(destIdSet);
		} catch (Exception e) {
			logger.error("Failed to update offense sources and dests", e);
		}
	}

	private String executeGet(URI uri, CloseableHttpClient httpclient, String authToken) throws ClientProtocolException, IOException {
		HttpGet httpget = new HttpGet(uri);
		httpget.addHeader("SEC", authToken);
		CloseableHttpResponse response = httpclient.execute(httpget);
		BufferedReader reader = new BufferedReader(new InputStreamReader(response.getEntity().getContent(), "UTF-8"));
		String json = reader.readLine();
		response.close();
		return json;
	}
	
	private CloseableHttpClient getHttpClient() throws KeyManagementException, NoSuchAlgorithmException, KeyStoreException {
		CloseableHttpClient httpclient = HttpClients.custom().
                setHostnameVerifier(new AllowAllHostnameVerifier()).
                setSslcontext(new SSLContextBuilder().loadTrustMaterial(null, new TrustStrategy()
                {
                    public boolean isTrusted(X509Certificate[] arg0, String arg1) throws CertificateException
                    {
                        return true;
                    }
                }).build()).build();
		
		return httpclient;
	}

	private URI getURI(String path) throws URISyntaxException {
		String qradarUrl = QRadarConfig.getInstance().getUrl(); 
		URI uri = new URIBuilder().setScheme("https")
				.setHost(qradarUrl)
				.setPath(path)
				.addParameter("filter", "inactive=false and status=\"OPEN\"")
				.build();
		
		return uri;
	}
	
}
