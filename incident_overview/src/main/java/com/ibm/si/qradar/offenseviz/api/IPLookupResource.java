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

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.ibm.si.qradar.offenseviz.conf.QRadarConfig;
import com.ibm.si.qradar.offenseviz.geoip.GeoInfo;
import com.ibm.si.qradar.offenseviz.geoip.GeoipUtil;

@Path("/iplookup")
public class IPLookupResource {

	private static final Logger logger = LoggerFactory.getLogger(IPLookupResource.class);
	private static final Double defaultLatitude = QRadarConfig.getInstance().getDefaultLatitude();
	private static final Double defaultLongitude = QRadarConfig.getInstance().getDefaultLongitude();
	private static final String defaultCountry = QRadarConfig.getInstance().getDefaultCountry();
	private static final String defaultCity = QRadarConfig.getInstance().getDefaultCity();
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response lookupIpAddress(@QueryParam("ip") String ipAddress) {
		Response response;
		GeoipUtil geoipUtil = null;
		
		if(ipAddress != null) {
			GeoInfo ginfo = null;

			try {
				geoipUtil = new GeoipUtil();
				ginfo = geoipUtil.getGeoInfo(ipAddress);
				if(ginfo == null) {
					ginfo = new GeoInfo(defaultLatitude, defaultLongitude, defaultCountry, defaultCity);
				}
			} catch (Exception e) {
				logger.debug("Couldn't look up IP", e);
			} finally {
				geoipUtil.dispose();
			}
			response = Response.ok().entity(ginfo.asArray()).build();
		} else {
			response = Response.ok().build();
		}
		return response;
	}
	
}
