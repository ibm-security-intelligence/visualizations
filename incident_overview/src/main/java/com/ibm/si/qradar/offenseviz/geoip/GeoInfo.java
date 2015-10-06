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

import java.util.ArrayList;
import java.util.List;

import com.maxmind.geoip2.record.Location;

public class GeoInfo {
	private Double latitude;
	private Double longitude;
	private String country;
	private String city;
	
	public GeoInfo(Location location) {
		this.latitude = location.getLatitude();
		this.longitude = location.getLongitude();
	}
	
	public GeoInfo(Double latitude, Double longitude, String country, String city) {
		this.latitude = latitude;
		this.longitude = longitude;
		this.country = country;
		this.city = city;
	}
	
	public Double getLatitude() {
		return latitude;
	}
	
	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}
	
	public Double getLongitude() {
		return longitude;
	}
	
	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}
	
	public List<String> asArray() {
		List<String> list = new ArrayList<String>();
		list.add(longitude.toString());
		list.add(latitude.toString());
		list.add(country);
		list.add(city);
		return list;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}
}
