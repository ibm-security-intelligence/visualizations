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

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.core.Application;

import com.fasterxml.jackson.jaxrs.json.JacksonJsonProvider;
import com.ibm.si.qradar.offenseviz.util.JsonProcessingExceptionMapper;

public class OffenseVizApplication extends Application{
	
	private Set<Object> singletons = Collections.emptySet();

	public OffenseVizApplication() {
	    Set<Object> s = new HashSet<Object>();
	    JacksonJsonProvider jsonProvider = new JacksonJsonProvider();
	    s.add(jsonProvider);
	    setSingletons(s);
	}
	
	private void setSingletons(final Set<Object> singletons) {
		this.singletons = singletons;
	}
	
	public Set<Class<?>> getClasses() {
		HashSet<Class<?>> classes = new HashSet<Class<?>>();
		
		// Resources
		classes.add(OffenseResource.class);
		classes.add(IPLookupResource.class);
		
		// Providers
		classes.add(JsonProcessingExceptionMapper.class);
	    
		return classes;
	}
	
	@Override
	public Set<Object> getSingletons() {
		return singletons;
	}
}









