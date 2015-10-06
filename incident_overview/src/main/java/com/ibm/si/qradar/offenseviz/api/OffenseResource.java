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

package com.ibm.si.qradar.offenseviz.api;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Random;

import javax.annotation.Resource;
import javax.persistence.EntityManager;
import javax.servlet.ServletContext;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.api.client.util.Lists;
import com.ibm.si.qradar.offenseviz.conf.QRadarConfig;
import com.ibm.si.qradar.offenseviz.dao.OffenseDao;
import com.ibm.si.qradar.offenseviz.jpa.Offense;
import com.ibm.si.qradar.offenseviz.model.OffenseBucket;
import com.ibm.si.qradar.offenseviz.util.PersistenceUtil;

@Path("/offenses")
public class OffenseResource {

	@Resource ServletContext servletContext;
    private static final Logger logger = LoggerFactory.getLogger(OffenseResource.class);
    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss"); 
    
	@GET
	@Produces( MediaType.APPLICATION_JSON )
	public Response getOffenses(@QueryParam("buckets") Integer bucketCount) {
		List<OffenseBucket> buckets = buildOffenseBuckets(bucketCount);
		
		GenericEntity<List<OffenseBucket>> entity = new GenericEntity<List<OffenseBucket>>(
				Lists.newArrayList(buckets)) {
		};
		
		Response response = Response.ok().entity(entity).build();

		return response;
	}
	
	private List<OffenseBucket> buildOffenseBuckets(int bucketCount) {
		EntityManager em = PersistenceUtil.getEntityManagerFactory().createEntityManager();
		OffenseDao offenseDao = new OffenseDao(em);
		
		Long mostRecentBucketMillis = getLastBucketTime();
		Timestamp mostRecentTimestamp = new Timestamp(mostRecentBucketMillis);
		Timestamp oldestLastSeenTimestamp = calculateAge(bucketCount, mostRecentBucketMillis);

		List<Offense> offensesInTimeRange = offenseDao.findByTimestamp(oldestLastSeenTimestamp, mostRecentTimestamp);
		em.close();
		
		Date now = new Date(mostRecentTimestamp.getTime());
		Date then = new Date(oldestLastSeenTimestamp.getTime());
		
		logger.debug(String.format("We found %s offenses in between %s and %s",
				offensesInTimeRange.size(), 
				dateFormat.format(then),
				dateFormat.format(now)));
		
		List<OffenseBucket> buckets = new ArrayList<OffenseBucket>();
		for(int i = 0; i < bucketCount; i++) {
			Timestamp bucketTime = calculateAge(i, mostRecentTimestamp.getTime());
			OffenseBucket bucket = new OffenseBucket(bucketTime, offensesInTimeRange);
			buckets.add(bucket);
		}
		
		return buckets;
	}

	private Long getLastBucketTime() {
		Long startupTime = QRadarConfig.getInstance().getStartupTime();
		Long interval = Long.valueOf(QRadarConfig.getInstance().getUpdateInterval() * 1000);
		Long now = Calendar.getInstance().getTimeInMillis();
		Long delta = now - startupTime;
		Long modulo = delta % interval;
		Long maxBucketTime = now - modulo; 
		
		return maxBucketTime;
	}

	private Timestamp calculateAge(int bucketCount, long nowMillis) {
		int interval = QRadarConfig.getInstance().getUpdateInterval();
		int seconds = interval * bucketCount;

		Timestamp original = new Timestamp(nowMillis);
        Calendar cal = Calendar.getInstance();
        cal.setTimeInMillis(original.getTime());
        cal.add(Calendar.SECOND, -seconds);
        Timestamp maxAge = new Timestamp(cal.getTimeInMillis());
        
        return maxAge;
	}
	
}
