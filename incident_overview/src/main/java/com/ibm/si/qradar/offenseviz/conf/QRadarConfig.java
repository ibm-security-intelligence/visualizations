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

package com.ibm.si.qradar.offenseviz.conf;

import java.io.IOException;
import java.util.Calendar;
import java.util.Properties;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.ibm.si.qradar.offenseviz.util.PropertiesReader;
import com.ibm.si.qradar.offenseviz.util.XForceToken;
import com.ibm.si.qradar.offenseviz.util.XForceUtil;

public class QRadarConfig {

	private static final Logger logger = LoggerFactory.getLogger(QRadarConfig.class);
	private static QRadarConfig instance = new QRadarConfig();
	private static final String QRADAR_CONFIG_FILENAME = "qradar.properties";
	private static final int DEFAULT_CLEANUP_INTERVAL = 60;
	
	private String authorizationToken;
	private String url;
	private String updateInterval;
	private Double defaultLongitude;
	private Double defaultLatitude;
	private String defaultCountry;
	private String defaultCity;
	private String xforceApiUrl;
	private String xforceWebUrl;
	private String xforceAuthToken;
	private Long startupTime;
	private String qradarTimeZone;
	private String cleanupIntervalMinutes;
		
	public String getQradarTimeZone() {
		return qradarTimeZone;
	}

	public void setQradarTimeZone(String qradarTimeZone) {
		this.qradarTimeZone = qradarTimeZone;
	}

	public static QRadarConfig getInstance() {
		return instance;
	} 
	
	private QRadarConfig() {
		refreshConfig();
	}

	public void refreshConfig() {
		Properties qradarProperties = new Properties();
		PropertiesReader propReader = new PropertiesReader();
		try {
			qradarProperties = propReader.getProperties(QRADAR_CONFIG_FILENAME);
			authorizationToken = qradarProperties.getProperty("auth_token");
			url = qradarProperties.getProperty("url");
			updateInterval = qradarProperties.getProperty("update_interval_seconds");
			defaultLatitude = Double.valueOf(qradarProperties.getProperty("default_latitude"));
			defaultLongitude = Double.valueOf(qradarProperties.getProperty("default_longitude"));
			xforceApiUrl = qradarProperties.getProperty("xforce_api_url");
			xforceWebUrl = qradarProperties.getProperty("xforce_web_url");
			defaultCountry = qradarProperties.getProperty("default_country");
			defaultCity = qradarProperties.getProperty("default_city");
			cleanupIntervalMinutes = qradarProperties.getProperty("cleanup_old_offense_interval");
			
			XForceUtil xforceTokenUtil = new XForceUtil();
			xforceAuthToken = xforceTokenUtil.getXForceAuthToken(xforceApiUrl);
			
			Calendar calendar = Calendar.getInstance();
			startupTime = calendar.getTimeInMillis();
			qradarTimeZone = qradarProperties.getProperty("qradar_timeZone");

		} catch (IOException e) {
			logger.error("There was a problem loading email configuration file.", e);
		}
	}

	public String getAuthorizationToken() {
		return authorizationToken;
	}

	public String getUrl() {
		return url;
	}
	
	public int getUpdateInterval() {
		return Integer.parseInt(updateInterval);
	}

	public Double getDefaultLongitude() {
		return defaultLongitude;
	}

	public void setDefaultLongitude(Double defaultLongitude) {
		this.defaultLongitude = defaultLongitude;
	}

	public Double getDefaultLatitude() {
		return defaultLatitude;
	}

	public void setDefaultLatitude(Double defaultLatitude) {
		this.defaultLatitude = defaultLatitude;
	}

	public String getXforceApiUrl() {
		return xforceApiUrl;
	}

	public void setXforceApiUrl(String xforceApiUrl) {
		this.xforceApiUrl = xforceApiUrl;
	}

	public String getXforceWebUrl() {
		return xforceWebUrl;
	}

	public void setXforceWebUrl(String xforceWebUrl) {
		this.xforceWebUrl = xforceWebUrl;
	}

	public String getXforceAuthToken() {
		return xforceAuthToken;
	}

	public void setXforceAuthToken(String xforceAuthToken) {
		this.xforceAuthToken = xforceAuthToken;
	}

	public String getDefaultCountry() {
		return defaultCountry;
	}

	public void setDefaultCountry(String defaultCountry) {
		this.defaultCountry = defaultCountry;
	}

	public String getDefaultCity() {
		return defaultCity;
	}

	public void setDefaultCity(String defaultCity) {
		this.defaultCity = defaultCity;
	}

	public Long getStartupTime() {
		return startupTime;
	}
	
	public int getCleanupIntervalMinutes() {
		int minutes;
		try {
			minutes = Integer.parseInt(this.cleanupIntervalMinutes);
		} catch (NumberFormatException e) {
			minutes = DEFAULT_CLEANUP_INTERVAL;
		}
		return minutes;
	}
	
}
