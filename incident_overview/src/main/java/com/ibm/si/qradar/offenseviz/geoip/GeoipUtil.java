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

package com.ibm.si.qradar.offenseviz.geoip;

import java.io.File;
import java.io.IOException;
import java.net.InetAddress;
import java.net.URISyntaxException;
import java.net.URL;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.maxmind.geoip2.DatabaseReader;
import com.maxmind.geoip2.exception.GeoIp2Exception;
import com.maxmind.geoip2.model.CityResponse;
import com.maxmind.geoip2.record.City;
import com.maxmind.geoip2.record.Country;
import com.maxmind.geoip2.record.Location;

public class GeoipUtil {
	
	private static final Logger logger = LoggerFactory.getLogger(GeoipUtil.class);
	static final ClassLoader loader = GeoipUtil.class.getClassLoader();
	String databaseFilename = "GeoLite2-City.mmdb";
	DatabaseReader reader;
	File database;
	
	public GeoipUtil() throws URISyntaxException, IOException {
		try	{
			URL resourceUrl = loader.getResource(databaseFilename);
			//database = new File(resourceUrl.toURI());
			database = new File("/opt/" + databaseFilename);
			reader = new DatabaseReader.Builder(database).build();
		} catch (Exception e) {
			reader = null;
			logger.info("Could not load geo lookup db", e);
		}
	}
	
	public GeoInfo getGeoInfo(String ipAddressIn ) throws IOException {
		if( reader != null) {
			try {
				InetAddress ipAddress = InetAddress.getByName(ipAddressIn);
				CityResponse response = reader.city(ipAddress);
				City city = response.getCity();
				Country country = response.getCountry();
				Location loc = response.getLocation();
				
				GeoInfo gInfo = new GeoInfo(loc);
				gInfo.setCity(city.getName());
				gInfo.setCountry(country.getName());
				
				return gInfo;
			} catch(GeoIp2Exception geoE) {
				logger.info(String.format("Could not lookup country of %s", ipAddressIn));
				return null;
			}
		} else { 
			return null;
		}
	}
	
	public void dispose() {
		try {
			if(reader != null) {
				reader.close();
			}
		} catch (IOException e) {
			logger.error("Could not close GeoIP reader.", e);
		}
	}
}
