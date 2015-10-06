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

import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.conn.ssl.AllowAllHostnameVerifier;
import org.apache.http.conn.ssl.SSLContextBuilder;
import org.apache.http.conn.ssl.TrustStrategy;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ibm.si.qradar.offenseviz.conf.QRadarConfig;

public class XForceUtil {

	private static final String XFORCE_API_AUTH_TOKEN_PATH = "/auth/anonymousToken";

	public String getXForceAuthToken(String xforceUrl) {
		String token = null;
		
		try {
			CloseableHttpClient httpclient = getHttpClient();
			URI uri = getURI(xforceUrl, XFORCE_API_AUTH_TOKEN_PATH);
			String json = executeGet(uri, httpclient);
			XForceToken xforceToken = getToken(json);
			token = xforceToken.getToken();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return token;
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
	
	private URI getURI(String url, String path) throws URISyntaxException {
		URI uri = new URIBuilder().setScheme("https")
				.setHost(url)
				.setPath(path)
				.build();
		
		return uri;
	}
	
	private String executeGet(URI uri, CloseableHttpClient httpclient) throws ClientProtocolException, IOException {
		HttpGet httpget = new HttpGet(uri);
		CloseableHttpResponse response = httpclient.execute(httpget);
		BufferedReader reader = new BufferedReader(new InputStreamReader(response.getEntity().getContent(), "UTF-8"));
		String json = reader.readLine();
		response.close();
		return json;
	}
	
	private XForceToken getToken(String json) throws JsonParseException, JsonMappingException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		XForceToken token = mapper.readValue(json, XForceToken.class);
		return token;
	}
	
}
