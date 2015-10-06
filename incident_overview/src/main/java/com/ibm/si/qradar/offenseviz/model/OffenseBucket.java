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

package com.ibm.si.qradar.offenseviz.model;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import com.ibm.si.qradar.offenseviz.conf.QRadarConfig;
import com.ibm.si.qradar.offenseviz.jpa.Offense;

public class OffenseBucket {

	private Timestamp bucketTime; 
	private List<Offense> offenses;
	SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-mm-dd hh:mm:ss");
	
	public OffenseBucket(Timestamp bucketTime, List<Offense> offenses) {
		this.bucketTime = bucketTime;
		this.offenses = processOffenseList(offenses);
	}

	private List<Offense> processOffenseList(List<Offense> allOffenses) {
		int interval = QRadarConfig.getInstance().getUpdateInterval();
		Timestamp maxAge = calculateMaxAge(interval, bucketTime);
		List<Offense> offensesWithinInterval = new ArrayList<Offense>();

		for (Offense offense : allOffenses) {
			if (offense.getSeenAt().before(bucketTime)
					&& offense.getSeenAt().after(maxAge)) {
				offensesWithinInterval.add(offense);
			}
		}
		
		return offensesWithinInterval;
	}
	
	private Timestamp calculateMaxAge(int interval, Timestamp bucketTime) {
		Calendar cal = Calendar.getInstance();
		cal.setTimeInMillis(bucketTime.getTime());
		cal.add(Calendar.SECOND, -interval);
		Timestamp maxAge = new Timestamp(cal.getTime().getTime());
		return maxAge;
	}

	public Timestamp getBucketTime() {
		return bucketTime;
	}

	public void setBucketTime(Timestamp bucketTime) {
		this.bucketTime = bucketTime;
	}

	public List<Offense> getOffenses() {
		return offenses;
	}

	public void setOffenses(List<Offense> offenses) {
		this.offenses = offenses;
	}
	
	@Override
	public String toString() {
		return "OffenseBucket [\n\tbucketTime=" + dateFormat.format(new Date(bucketTime.getTime()))
				+ ", \n\toffenseCount =" + String.valueOf(offenses.size()) + "\n]";
	}
}
