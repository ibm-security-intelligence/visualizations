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

package com.ibm.si.qradar.offenseviz.util;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class PropertiesReader {

	public Properties getProperties(String filename) throws IOException {
		Properties properties = new Properties();
		InputStream inputStream = getClass().getClassLoader().getResourceAsStream(filename);

		if (inputStream != null) {
			properties.load(inputStream);
		} else {
			throw new FileNotFoundException(String.format("Properties file %s was not found in the classpath", filename));
		}

		return properties;
	}
	
	public Properties getPropertiesFile(String filename) throws IOException {
		Properties properties = new Properties();
		InputStream inputStream = new FileInputStream("/opt/" + filename);
		properties.load(inputStream);
		return properties;
	}
 
}