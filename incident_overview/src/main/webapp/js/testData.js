/*******************************************************************************
 Copyright (c) 2015, IBM

 Licensed under the Apache License, Version 2.0 (the "License"); you may not use 
 this file except in compliance with the License. You may obtain a copy of the 
 License at http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software distributed 
 under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR 
 CONDITIONS OF ANY KIND, either express or implied. See the License for the 
 specific language governing permissions and limitations under the License.

*******************************************************************************/

/*
 * Test data for usage in the controller
 */
var randomSources = 
	[
	  {
	    "id": 0,
	    "isActive": false,
	    "source_ip": "140.10.114.32",
	    "vulnerable": true,
	    "event_flow_count": 42857,
	    "magnitude": 3,
	    "first_event_flow_seen": 1390172215656,
	    "last_event_flow_seen": 1390172219000,
	    "user": "Jocelyn",
	    "mac": null,
	    "weight": null,
	    "domain_id": 2,
	    "location": {
	      "city": "Fredericton",
	      "latitude": 56.245571,
	      "longitude": -69.108908
	    }
	  },
	  {
	    "id": 1,
	    "isActive": true,
	    "source_ip": "250.169.108.8",
	    "vulnerable": false,
	    "event_flow_count": 48570,
	    "magnitude": 10,
	    "first_event_flow_seen": 1390172215656,
	    "last_event_flow_seen": 1390172219000,
	    "user": "Kim",
	    "mac": null,
	    "weight": null,
	    "domain_id": 1,
	    "location": {
	      "city": "Fredericton",
	      "latitude": -38.641662,
	      "longitude": 88.069728
	    }
	  },
	  {
	    "id": 2,
	    "isActive": true,
	    "source_ip": "174.244.185.243",
	    "vulnerable": true,
	    "event_flow_count": 72567,
	    "magnitude": 3,
	    "first_event_flow_seen": 1390172215656,
	    "last_event_flow_seen": 1390172219000,
	    "user": "Decker",
	    "mac": null,
	    "weight": null,
	    "domain_id": 1,
	    "location": {
	      "city": "Fredericton",
	      "latitude": -18.600234,
	      "longitude": -153.216186
	    }
	  },
	  {
	    "id": 3,
	    "isActive": false,
	    "source_ip": "177.10.193.85",
	    "vulnerable": false,
	    "event_flow_count": 29709,
	    "magnitude": 6,
	    "first_event_flow_seen": 1390172215656,
	    "last_event_flow_seen": 1390172219000,
	    "user": "Peggy",
	    "mac": null,
	    "weight": null,
	    "domain_id": 2,
	    "location": {
	      "city": "Fredericton",
	      "latitude": 78.09399,
	      "longitude": -62.370303
	    }
	  },
	  {
	    "id": 4,
	    "isActive": true,
	    "source_ip": "250.106.46.3",
	    "vulnerable": true,
	    "event_flow_count": 19426,
	    "magnitude": 7,
	    "first_event_flow_seen": 1390172215656,
	    "last_event_flow_seen": 1390172219000,
	    "user": "Summers",
	    "mac": null,
	    "weight": null,
	    "domain_id": 1,
	    "location": {
	      "city": "Austin",
	      "latitude": -10.455983,
	      "longitude": -123.431603
	    }
	  },
	  {
	    "id": 5,
	    "isActive": false,
	    "source_ip": "193.220.236.85",
	    "vulnerable": false,
	    "event_flow_count": 31250,
	    "magnitude": 2,
	    "first_event_flow_seen": 1390172215656,
	    "last_event_flow_seen": 1390172219000,
	    "user": "Beth",
	    "mac": null,
	    "weight": null,
	    "domain_id": 2,
	    "location": {
	      "city": "Dublin",
	      "latitude": 27.41457,
	      "longitude": 54.93802
	    }
	  },
	  {
	    "id": 6,
	    "isActive": false,
	    "source_ip": "130.123.155.1",
	    "vulnerable": true,
	    "event_flow_count": 73506,
	    "magnitude": 7,
	    "first_event_flow_seen": 1390172215656,
	    "last_event_flow_seen": 1390172219000,
	    "user": "Erna",
	    "mac": null,
	    "weight": null,
	    "domain_id": 2,
	    "location": {
	      "city": "Fredericton",
	      "latitude": 84.969022,
	      "longitude": -100.911586
	    }
	  },
	  {
	    "id": 7,
	    "isActive": false,
	    "source_ip": "152.131.178.3",
	    "vulnerable": true,
	    "event_flow_count": 22444,
	    "magnitude": 2,
	    "first_event_flow_seen": 1390172215656,
	    "last_event_flow_seen": 1390172219000,
	    "user": "Jillian",
	    "mac": null,
	    "weight": null,
	    "domain_id": 1,
	    "location": {
	      "city": "Austin",
	      "latitude": -36.167647,
	      "longitude": 107.981609
	    }
	  },
	  {
	    "id": 8,
	    "isActive": false,
	    "source_ip": "29.111.178.172",
	    "vulnerable": true,
	    "event_flow_count": 25223,
	    "magnitude": 9,
	    "first_event_flow_seen": 1390172215656,
	    "last_event_flow_seen": 1390172219000,
	    "user": "Meredith",
	    "mac": null,
	    "weight": null,
	    "domain_id": 1,
	    "location": {
	      "city": "Dublin",
	      "latitude": 63.449474,
	      "longitude": 122.361483
	    }
	  },
	  {
	    "id": 9,
	    "isActive": true,
	    "source_ip": "105.130.233.182",
	    "vulnerable": false,
	    "event_flow_count": 19936,
	    "magnitude": 6,
	    "first_event_flow_seen": 1390172215656,
	    "last_event_flow_seen": 1390172219000,
	    "user": "Becky",
	    "mac": null,
	    "weight": null,
	    "domain_id": 1,
	    "location": {
	      "city": "Fredericton",
	      "latitude": -42.439295,
	      "longitude": -113.917187
	    }
	  },
	  {
	    "id": 10,
	    "isActive": false,
	    "source_ip": "192.127.73.18",
	    "vulnerable": false,
	    "event_flow_count": 49224,
	    "magnitude": 4,
	    "first_event_flow_seen": 1390172215656,
	    "last_event_flow_seen": 1390172219000,
	    "user": "Victoria",
	    "mac": null,
	    "weight": null,
	    "domain_id": 2,
	    "location": {
	      "city": "Fredericton",
	      "latitude": 48.659606,
	      "longitude": -107.843923
	    }
	  },
	  {
	    "id": 11,
	    "isActive": true,
	    "source_ip": "37.157.186.25",
	    "vulnerable": false,
	    "event_flow_count": 5747,
	    "magnitude": 1,
	    "first_event_flow_seen": 1390172215656,
	    "last_event_flow_seen": 1390172219000,
	    "user": "Geneva",
	    "mac": null,
	    "weight": null,
	    "domain_id": 1,
	    "location": {
	      "city": "Fredericton",
	      "latitude": -37.515378,
	      "longitude": -157.22393
	    }
	  },
	  {
	    "id": 12,
	    "isActive": false,
	    "source_ip": "17.36.138.178",
	    "vulnerable": false,
	    "event_flow_count": 43227,
	    "magnitude": 9,
	    "first_event_flow_seen": 1390172215656,
	    "last_event_flow_seen": 1390172219000,
	    "user": "Eleanor",
	    "mac": null,
	    "weight": null,
	    "domain_id": 1,
	    "location": {
	      "city": "Austin",
	      "latitude": -75.232462,
	      "longitude": -148.119255
	    }
	  },
	  {
	    "id": 13,
	    "isActive": false,
	    "source_ip": "184.88.218.239",
	    "vulnerable": false,
	    "event_flow_count": 60041,
	    "magnitude": 3,
	    "first_event_flow_seen": 1390172215656,
	    "last_event_flow_seen": 1390172219000,
	    "user": "Johnston",
	    "mac": null,
	    "weight": null,
	    "domain_id": 1,
	    "location": {
	      "city": "Fredericton",
	      "latitude": 63.578626,
	      "longitude": 82.220587
	    }
	  },
	  {
	    "id": 14,
	    "isActive": true,
	    "source_ip": "35.234.196.40",
	    "vulnerable": true,
	    "event_flow_count": 66504,
	    "magnitude": 3,
	    "first_event_flow_seen": 1390172215656,
	    "last_event_flow_seen": 1390172219000,
	    "user": "Harrison",
	    "mac": null,
	    "weight": null,
	    "domain_id": 1,
	    "location": {
	      "city": "Dublin",
	      "latitude": 47.308353,
	      "longitude": -124.30123
	    }
	  },
	  {
	    "id": 15,
	    "isActive": false,
	    "source_ip": "243.222.87.29",
	    "vulnerable": true,
	    "event_flow_count": 57747,
	    "magnitude": 10,
	    "first_event_flow_seen": 1390172215656,
	    "last_event_flow_seen": 1390172219000,
	    "user": "Anita",
	    "mac": null,
	    "weight": null,
	    "domain_id": 1,
	    "location": {
	      "city": "Fredericton",
	      "latitude": -30.63633,
	      "longitude": -86.465216
	    }
	  }
	];


var randomDestinations = [
                          {
                        	    "id": 0,
                        	    "isActive": false,
                        	    "destination_ip": "50.189.43.148",
                        	    "vulnerable": false,
                        	    "event_flow_count": 90534,
                        	    "magnitude": 2,
                        	    "first_event_flow_seen": 1390172215656,
                        	    "last_event_flow_seen": 1390172219000,
                        	    "user": "Mable",
                        	    "mac": null,
                        	    "weight": null,
                        	    "domain_id": 2,
                        	    "location": {
                        	      "city": "Austin",
                        	      "latitude": -18.367296,
                        	      "longitude": 135.296285
                        	    }
                        	  },
                        	  {
                        	    "id": 1,
                        	    "isActive": true,
                        	    "destination_ip": "180.211.194.29",
                        	    "vulnerable": true,
                        	    "event_flow_count": 89752,
                        	    "magnitude": 4,
                        	    "first_event_flow_seen": 1390172215656,
                        	    "last_event_flow_seen": 1390172219000,
                        	    "user": "Rosario",
                        	    "mac": null,
                        	    "weight": null,
                        	    "domain_id": 2,
                        	    "location": {
                        	      "city": "Austin",
                        	      "latitude": 52.166732,
                        	      "longitude": -73.218401
                        	    }
                        	  },
                        	  {
                        	    "id": 2,
                        	    "isActive": true,
                        	    "destination_ip": "76.32.196.128",
                        	    "vulnerable": true,
                        	    "event_flow_count": 70558,
                        	    "magnitude": 10,
                        	    "first_event_flow_seen": 1390172215656,
                        	    "last_event_flow_seen": 1390172219000,
                        	    "user": "Little",
                        	    "mac": null,
                        	    "weight": null,
                        	    "domain_id": 2,
                        	    "location": {
                        	      "city": "Fredericton",
                        	      "latitude": -45.890215,
                        	      "longitude": 58.575402
                        	    }
                        	  },
                        	  {
                        	    "id": 3,
                        	    "isActive": true,
                        	    "destination_ip": "64.125.165.76",
                        	    "vulnerable": false,
                        	    "event_flow_count": 28737,
                        	    "magnitude": 10,
                        	    "first_event_flow_seen": 1390172215656,
                        	    "last_event_flow_seen": 1390172219000,
                        	    "user": "Charlotte",
                        	    "mac": null,
                        	    "weight": null,
                        	    "domain_id": 1,
                        	    "location": {
                        	      "city": "Dublin",
                        	      "latitude": 79.347954,
                        	      "longitude": 60.285383
                        	    }
                        	  },
                        	  {
                        	    "id": 4,
                        	    "isActive": true,
                        	    "destination_ip": "32.243.1.227",
                        	    "vulnerable": true,
                        	    "event_flow_count": 34027,
                        	    "magnitude": 7,
                        	    "first_event_flow_seen": 1390172215656,
                        	    "last_event_flow_seen": 1390172219000,
                        	    "user": "Lamb",
                        	    "mac": null,
                        	    "weight": null,
                        	    "domain_id": 1,
                        	    "location": {
                        	      "city": "Dublin",
                        	      "latitude": 19.320446,
                        	      "longitude": 156.266317
                        	    }
                        	  },
                        	  {
                        	    "id": 5,
                        	    "isActive": false,
                        	    "destination_ip": "242.115.242.60",
                        	    "vulnerable": true,
                        	    "event_flow_count": 15280,
                        	    "magnitude": 1,
                        	    "first_event_flow_seen": 1390172215656,
                        	    "last_event_flow_seen": 1390172219000,
                        	    "user": "Cortez",
                        	    "mac": null,
                        	    "weight": null,
                        	    "domain_id": 1,
                        	    "location": {
                        	      "city": "Fredericton",
                        	      "latitude": -32.529315,
                        	      "longitude": -113.251716
                        	    }
                        	  },
                        	  {
                        	    "id": 6,
                        	    "isActive": false,
                        	    "destination_ip": "252.92.42.183",
                        	    "vulnerable": true,
                        	    "event_flow_count": 76566,
                        	    "magnitude": 8,
                        	    "first_event_flow_seen": 1390172215656,
                        	    "last_event_flow_seen": 1390172219000,
                        	    "user": "Wilma",
                        	    "mac": null,
                        	    "weight": null,
                        	    "domain_id": 2,
                        	    "location": {
                        	      "city": "Fredericton",
                        	      "latitude": -82.641822,
                        	      "longitude": -177.329424
                        	    }
                        	  }
                        	];

var jsonOffenses0mini = [
                          {
                        	   "id": 115,
                        	    "credibility": 4,
                        	    "remote_destination_count": 1,
                        	    "assigned_to": "Rick McCaskill",
                        	    "local_destination_count": 0,
                        	    "source_count": 2,
                        	    "start_time": 1426637820000,
                        	    "destination_networks": [
                        	      "other"
                        	    ],
                        	    "inactive": false,
                        	    "protected": false,
                        	    "policy_category_count": 0,
                        	    "description": "0M - SHORT - M4",
                        	    "category_count": 1,
                        	    "relevance": 1,
                        	    "device_count": 2,
                        	    "security_category_count": 1,
                        	    "flow_count": 0,
                        	    "event_count": 1296,
                        	    "offense_source": "127.0.0.1",
                        	    "status": "OPEN",
                        	    "magnitude": 4,
                        	    "severity": 10,
                        	    "username_count": 0,
                        	    "closing_user": null,
                        	    "follow_up": false,
                        	    "closing_reason_id": null,
                        	    "close_time": null,
                        	    "source_network": "other",
                        	    "last_updated_time": 1426641420000
                        	    ,
                        	    "categories": [
                        	      "Awesome"
                        	    ],
                        	    "offense_type": 1,
                        	    "sourceList": [
                                  	    	 {
                                 	    		"id": 1,
                                 	    		"internal": true,
                                 	    		"latitude": -37.71859,
                                 	    		"local_source_ip": "172.16.50.1",
                                 	    		"longitude": -17.226563,
                                 	    		"network": "Net-10-172-192.Net_172_16_0_0",
                                 	    		"user": null
                                 	    	 }
                                 	    	],
                                 	    	
                        	    "destinationList": 
                        	    	[
                        	    	 {
                        	    		"id": 2,
                        	    		"internal": true,
                        	    		"latitude": -37.71859,
                        	    		"local_destination_ip": "172.16.50.1",
                        	    		"longitude": -17.226563,
                        	    		"network": "Net-10-172-192.Net_172_16_0_0",
                        	    		"user": null
                        	    	 }
                        	    	]
                        	  }
                          ];
jsonOffenses1mini = [
                     {
                   	   "id": 115,
                   	    "credibility": 4,
                   	    "remote_destination_count": 1,
                   	    "assigned_to": null,
                   	    "local_destination_count": 0,
                   	    "source_count": 2,
                   	    "start_time": 1414592174754,
                   	    "destination_networks": [
                   	      "other"
                   	    ],
                   	    "inactive": false,
                   	    "protected": false,
                   	    "policy_category_count": 0,
                   	    "description": "1M - SHORT LONGER - M5",
                   	    "category_count": 1,
                   	    "relevance": 1,
                   	    "device_count": 2,
                   	    "security_category_count": 1,
                   	    "flow_count": 0,
                   	    "event_count": 1296,
                   	    "offense_source": "127.0.0.1",
                   	    "status": "OPEN",
                   	    "magnitude": 7,
                   	    "severity": 10,
                   	    "username_count": 0,
                   	    "closing_user": null,
                   	    "follow_up": false,
                   	    "closing_reason_id": null,
                   	    "close_time": null,
                   	    "source_network": "other",
                   	    "last_updated_time": 1413590216864,
                   	    "categories": [
                   	      "Awesome"
                   	    ],
                   	    "offense_type": 1,
                   	    "sourceList": [
                             	    	 {
                            	    		"id": 1,
                            	    		"internal": true,
                            	    		"latitude": -37.71859,
                            	    		"local_source_ip": "172.16.50.1",
                            	    		"longitude": -17.226563,
                            	    		"network": "Net-10-172-192.Net_172_16_0_0",
                            	    		"user": null
                            	    	 }
                            	    	],
                            	    	
                   	    "destinationList": 
                   	    	[
                   	    	 {
                   	    		"id": 2,
                   	    		"internal": true,
                   	    		"latitude": -37.71859,
                   	    		"local_destination_ip": "172.16.50.1",
                   	    		"longitude": -17.226563,
                   	    		"network": "Net-10-172-192.Net_172_16_0_0",
                   	    		"user": null
                   	    	 }
                   	    	]
                   	  }
                     ];














var jsonOffenses0 = [
                {
             	   "id": 46,
             	    "credibility": 4,
             	    "remote_destination_count": 1,
             	    "assigned_to": null,
             	    "local_destination_count": 0,
             	    "source_count": 2,
             	    "start_time": 1429192522000,
             	    "destination_networks": [
             	      "other"
             	    ],
             	    "inactive": false,
             	    "protected": false,
             	    "policy_category_count": 0,
             	    "description": "Exploit Followed by Suspicious Host Activity",
             	    "category_count": 1,
             	    "relevance": 1,
             	    "device_count": 2,
             	    "security_category_count": 1,
             	    "flow_count": 0,
             	    "event_count": 1296,
             	    "offense_source": "127.0.0.1",
             	    "status": "OPEN",
             	    "magnitude": 5,
             	    "severity": 10,
             	    "username_count": 0,
             	    "closing_user": null,
             	    "follow_up": false,
             	    "closing_reason_id": null,
             	    "close_time": null,
             	    "source_network": "other",
             	    "last_updated_time": 1429195522000,
             	    "categories": [
             	      "Awesome"
             	    ],
             	    "offense_type": 1,
             	    "sourceList": [
                       	    	 {
                      	    		"id": 1,
                      	    		"internal": true,
                      	    		"latitude": -37.71859,
                      	    		"local_source_ip": "172.16.50.1",
                      	    		"longitude": -17.226563,
                      	    		"network": "Net-10-172-192.Net_172_16_0_0",
                      	    		"user": null
                      	    	 }
                      	    	],
                      	    	
             	    "destinationList": 
             	    	[
             	    	 {
             	    		"id": 2,
             	    		"internal": true,
             	    		"latitude": -37.71859,
             	    		"local_destination_ip": "172.16.50.1",
             	    		"longitude": -17.226563,
             	    		"network": "Net-10-172-192.Net_172_16_0_0",
             	    		"user": null
             	    	 }
             	    	]
             	  },
             	               	  
             	  {
               	    "id": 2,
             	    "credibility": 5,
             	    "remote_destination_count": 1,
             	    "assigned_to": null,
             	    "local_destination_count": 0,
             	    "source_count": 2,
             	    "start_time": 1415592185666,
             	    "destination_networks": [
             	      "other"
             	    ],
             	    "inactive": false,
             	    "protected": false,
             	    "policy_category_count": 0,
             	    "description": "User Login\n preceded by unknown\n - M9",
             	    "category_count": 3,
             	    "relevance": 1,
             	    "device_count": 1,
             	    "security_category_count": 3,
             	    "flow_count": 0,
             	    "event_count": 302,
             	    "offense_source": "9.21.123.54",
             	    "status": "OPEN",
             	    "magnitude": 9,
             	    "severity": 10,
             	    "username_count": 1,
             	    "closing_user": null,
             	    "follow_up": false,
             	    "closing_reason_id": null,
             	    "close_time": null,
             	    "source_network": "other",
             	    "last_updated_time": 1315592213017,
             	    "categories": [
             	      "Routing Policy Anomaly",
             	      "SIM User Authentication",
             	      "SIM User Action"
             	    ],
             	    "offense_type": 1,
             	    "sourceList": [
                         	    	 {
                        	    		"id": 1,
                        	    		"internal": true,
                        	    		"latitude": -37.71859,
                        	    		"local_source_ip": "172.16.50.1",
                        	    		"longitude": -17.226563,
                        	    		"network": "Net-10-172-192.Net_172_16_0_0",
                        	    		"user": null
                        	    	 }
                        	    	],
                        	    	
               	    "destinationList": 
               	    	[
               	    	 {
               	    		"id": 2,
               	    		"internal": true,
               	    		"latitude": -37.71859,
               	    		"local_destination_ip": "172.16.50.1",
               	    		"longitude": -17.226563,
               	    		"network": "Net-10-172-192.Net_172_16_0_0",
               	    		"user": null
               	    	 }
               	    	]
             	  },
             	  
             	  
                   {
                	"id": 3,
               	    "credibility": 6,
               	    "remote_destination_count": 1,
               	    "assigned_to": null,
               	    "local_destination_count": 0,
               	    "source_count": 2,
               	    "start_time": 1414592174754,
               	    "destination_networks": [
               	      "other"
               	    ],
               	    "inactive": false,
               	    "protected": false,
               	    "policy_category_count": 0,
               	    "description": "Information Message - M6",
               	    "category_count": 1,
               	    "relevance": 1,
               	    "device_count": 2,
               	    "security_category_count": 1,
               	    "flow_count": 0,
               	    "event_count": 45,
               	    "offense_source": "127.0.0.1",
               	    "status": "OPEN",
               	    "magnitude": 6,
               	    "severity": 10,
               	    "username_count": 0,
               	    "closing_user": null,
               	    "follow_up": false,
               	    "closing_reason_id": null,
               	    "close_time": null,
               	    "source_network": "other",
               	    "last_updated_time": 1401592216864,
               	    "categories": [
               	      "Information"
               	    ],
               	    "offense_type": 2,
             	    "sourceList": [
                         	    	 {
                        	    		"id": 1,
                        	    		"internal": true,
                        	    		"latitude": -37.71859,
                        	    		"local_source_ip": "172.16.50.1",
                        	    		"longitude": -17.226563,
                        	    		"network": "Net-10-172-192.Net_172_16_0_0",
                        	    		"user": null
                        	    	 }
                        	    	],
                        	    	
               	    "destinationList": 
               	    	[
               	    	 {
               	    		"id": 2,
               	    		"internal": true,
               	    		"latitude": -37.71859,
               	    		"local_destination_ip": "172.16.50.1",
               	    		"longitude": -17.226563,
               	    		"network": "Net-10-172-192.Net_172_16_0_0",
               	    		"user": null
               	    	 }
               	    	]
               	  },
               	  
               	  
               	  {
                	"id": 6,
               	    "credibility": 9,
               	    "remote_destination_count": 1,
               	    "assigned_to": null,
               	    "local_destination_count": 0,
               	    "source_count": 2,
               	    "start_time": 1414592185666,
               	    "destination_networks": [
               	      "other"
               	    ],
               	    "inactive": false,
               	    "protected": false,
               	    "policy_category_count": 0,
               	    "description": "Target Vulnerable to Exploit - M5",
               	    "category_count": 3,
               	    "relevance": 1,
               	    "device_count": 1,
               	    "security_category_count": 3,
               	    "flow_count": 0,
               	    "event_count": 2,
               	    "offense_source": "9.21.123.54",
               	    "status": "OPEN",
               	    "magnitude": 5,
               	    "severity": 10,
               	    "username_count": 1,
               	    "closing_user": null,
               	    "follow_up": false,
               	    "closing_reason_id": null,
               	    "close_time": null,
               	    "source_network": "other",
               	    "last_updated_time": 1414592213017,
               	    "categories": [
               	      "Unknown",
               	      "SIM User Authentication",
               	      "SIM User Action"
               	    ],
               	    "offense_type": 2,
             	    "sourceList": [
                         	    	 {
                        	    		"id": 1,
                        	    		"internal": true,
                        	    		"latitude": -37.71859,
                        	    		"local_source_ip": "172.16.50.1",
                        	    		"longitude": -17.226563,
                        	    		"network": "Net-10-172-192.Net_172_16_0_0",
                        	    		"user": null
                        	    	 }
                        	    	],
                        	    	
               	    "destinationList": 
               	    	[
               	    	 {
               	    		"id": 2,
               	    		"internal": true,
               	    		"latitude": -37.71859,
               	    		"local_destination_ip": "172.16.50.1",
               	    		"longitude": -17.226563,
               	    		"network": "Net-10-172-192.Net_172_16_0_0",
               	    		"user": null
               	    	 }
               	    	]
               	  },
               	  
               	  
             	  
             	  {
                	"id": 7,
               	    "credibility": 2,
               	    "remote_destination_count": 1,
               	    "assigned_to": null,
               	    "local_destination_count": 0,
               	    "source_count": 2,
               	    "start_time": 1414592185666,
               	    "destination_networks": [
               	      "other"
               	    ],
               	    "inactive": false,
               	    "protected": false,
               	    "policy_category_count": 0,
               	    "description": "Recon - External",
               	    "category_count": 3,
               	    "relevance": 1,
               	    "device_count": 1,
               	    "security_category_count": 3,
               	    "flow_count": 0,
               	    "event_count": 76,
               	    "offense_source": "9.21.123.54",
               	    "status": "OPEN",
               	    "magnitude": 6,
               	    "severity": 10,
               	    "username_count": 1,
               	    "closing_user": null,
               	    "follow_up": false,
               	    "closing_reason_id": null,
               	    "close_time": null,
               	    "source_network": "other",
               	    "last_updated_time": 1414692213017,
               	    "categories": [
               	      "Unknown",
               	      "SIM User Authentication",
               	      "SIM User Action"
               	    ],
               	    "offense_type": 2,
             	    "sourceList": [
                         	    	 {
                        	    		"id": 1,
                        	    		"internal": true,
                        	    		"latitude": -37.71859,
                        	    		"local_source_ip": "172.16.50.1",
                        	    		"longitude": -17.226563,
                        	    		"network": "Net-10-172-192.Net_172_16_0_0",
                        	    		"user": null
                        	    	 },
                        	    	 {
                            	    		"id": 2,
                               	    		"internal": true,
                               	    		"latitude": -37.71859,
                               	    		"local_destination_ip": "172.16.50.1",
                               	    		"longitude": -17.226563,
                               	    		"network": "Net-10-172-192.Net_172_16_0_0",
                               	    		"user": null
                        	    		 
                        	    	 }
                        	    	 
                        	    	],
                        	    	
               	    "destinationList": 
               	    	[
               	    	 {
               	    		"id": 2,
               	    		"internal": true,
               	    		"latitude": -37.71859,
               	    		"local_destination_ip": "172.16.50.1",
               	    		"longitude": -17.226563,
               	    		"network": "Net-10-172-192.Net_172_16_0_0",
               	    		"user": null
               	    	 }
               	    	]
               	  },
               	  
             	  {
                	"id": 8,
               	    "credibility": 2,
               	    "remote_destination_count": 1,
               	    "assigned_to": null,
               	    "local_destination_count": 0,
               	    "source_count": 2,
               	    "start_time": 1414592185666,
               	    "destination_networks": [
               	      "other"
               	    ],
               	    "inactive": false,
               	    "protected": false,
               	    "policy_category_count": 0,
               	    "description": "Exploit Followed by Suspicious Activity",
               	    "category_count": 3,
               	    "relevance": 1,
               	    "device_count": 1,
               	    "security_category_count": 3,
               	    "flow_count": 0,
               	    "event_count": 1,
               	    "offense_source": "9.21.123.54",
               	    "status": "OPEN",
               	    "magnitude": 10,
               	    "severity": 10,
               	    "username_count": 1,
               	    "closing_user": null,
               	    "follow_up": false,
               	    "closing_reason_id": null,
               	    "close_time": null,
               	    "source_network": "other",
               	    "last_updated_time": 1424592213017,
               	    "categories": [
               	      "Unknown",
               	      "SIM User Authentication",
               	      "SIM User Action"
               	    ],
               	    "offense_type": 3,
             	    "sourceList": [
                         	    	 {
                        	    		"id": 1,
                        	    		"internal": true,
                        	    		"latitude": -37.71859,
                        	    		"local_source_ip": "172.16.50.1",
                        	    		"longitude": -17.226563,
                        	    		"network": "Net-10-172-192.Net_172_16_0_0",
                        	    		"user": null
                        	    	 }
                        	    	],
                        	    	
               	    "destinationList": 
               	    	[
               	    	 {
               	    		"id": 2,
               	    		"internal": true,
               	    		"latitude": -37.71859,
               	    		"local_destination_ip": "172.16.50.1",
               	    		"longitude": -17.226563,
               	    		"network": "Net-10-172-192.Net_172_16_0_0",
               	    		"user": null
               	    	 }
               	    	]
               	  }
             	];

var jsonOffenses1 = [
                     {
                  	   "id": 1,
                  	    "credibility": 6,
                  	    "remote_destination_count": 1,
                  	    "assigned_to": null,
                  	    "local_destination_count": 0,
                  	    "source_count": 2,
                  	    "start_time": 1414592174754,
                  	    "destination_networks": [
                  	      "other"
                  	    ],
                  	    "inactive": false,
                  	    "protected": false,
                  	    "policy_category_count": 0,
                  	    "description": "O1 - Information Message - M7",
                  	    "category_count": 1,
                  	    "relevance": 1,
                  	    "device_count": 2,
                  	    "security_category_count": 1,
                  	    "flow_count": 0,
                  	    "event_count": 1296,
                  	    "offense_source": "127.0.0.1",
                  	    "status": "OPEN",
                  	    "magnitude": 7,
                  	    "severity": 10,
                  	    "username_count": 0,
                  	    "closing_user": null,
                  	    "follow_up": false,
                  	    "closing_reason_id": null,
                  	    "close_time": null,
                  	    "source_network": "other",
                  	    "last_updated_time": 1413590216864,
                  	    "categories": [
                  	      "Awesome"
                  	    ],
                  	    "offense_type": 1,
                  	    "sourceList": [
                            	    	 {
                           	    		"id": 1,
                           	    		"internal": true,
                           	    		"latitude": -37.71859,
                           	    		"local_source_ip": "172.16.50.1",
                           	    		"longitude": -17.226563,
                           	    		"network": "Net-10-172-192.Net_172_16_0_0",
                           	    		"user": null
                           	    	 }
                           	    	],
                           	    	
                  	    "destinationList": 
                  	    	[
                  	    	 {
                  	    		"id": 2,
                  	    		"internal": true,
                  	    		"latitude": -37.71859,
                  	    		"local_destination_ip": "172.16.50.1",
                  	    		"longitude": -17.226563,
                  	    		"network": "Net-10-172-192.Net_172_16_0_0",
                  	    		"user": null
                  	    	 }
                  	    	]
                  	  },
                  	               	  
                  	  {
                    	    "id": 2,
                  	    "credibility": 8,
                  	    "remote_destination_count": 1,
                  	    "assigned_to": null,
                  	    "local_destination_count": 0,
                  	    "source_count": 2,
                  	    "start_time": 1415592185666,
                  	    "destination_networks": [
                  	      "other"
                  	    ],
                  	    "inactive": false,
                  	    "protected": false,
                  	    "policy_category_count": 0,
                  	    "description": "User Login\n preceded by unknown\n",
                  	    "category_count": 3,
                  	    "relevance": 1,
                  	    "device_count": 1,
                  	    "security_category_count": 3,
                  	    "flow_count": 0,
                  	    "event_count": 302,
                  	    "offense_source": "9.21.123.54",
                  	    "status": "OPEN",
                  	    "magnitude": 9,
                  	    "severity": 10,
                  	    "username_count": 1,
                  	    "closing_user": null,
                  	    "follow_up": false,
                  	    "closing_reason_id": null,
                  	    "close_time": null,
                  	    "source_network": "other",
                  	    "last_updated_time": 1315592213017,
                  	    "categories": [
                  	      "Routing Policy Anomaly",
                  	      "SIM User Authentication",
                  	      "SIM User Action"
                  	    ],
                  	    "offense_type": 1,
                  	    "sourceList": [
                              	    	 {
                             	    		"id": 1,
                             	    		"internal": true,
                             	    		"latitude": -37.71859,
                             	    		"local_source_ip": "172.16.50.1",
                             	    		"longitude": -17.226563,
                             	    		"network": "Net-10-172-192.Net_172_16_0_0",
                             	    		"user": null
                             	    	 }
                             	    	],
                             	    	
                    	    "destinationList": 
                    	    	[
                    	    	 {
                    	    		"id": 2,
                    	    		"internal": true,
                    	    		"latitude": -37.71859,
                    	    		"local_destination_ip": "172.16.50.1",
                    	    		"longitude": -17.226563,
                    	    		"network": "Net-10-172-192.Net_172_16_0_0",
                    	    		"user": null
                    	    	 }
                    	    	]
                  	  },
                  	  
                  	  
                        {
                     	"id": 3,
                    	    "credibility": 4,
                    	    "remote_destination_count": 1,
                    	    "assigned_to": null,
                    	    "local_destination_count": 0,
                    	    "source_count": 2,
                    	    "start_time": 1414592174754,
                    	    "destination_networks": [
                    	      "other"
                    	    ],
                    	    "inactive": false,
                    	    "protected": false,
                    	    "policy_category_count": 0,
                    	    "description": "Information Message",
                    	    "category_count": 1,
                    	    "relevance": 1,
                    	    "device_count": 2,
                    	    "security_category_count": 1,
                    	    "flow_count": 0,
                    	    "event_count": 45,
                    	    "offense_source": "127.0.0.1",
                    	    "status": "OPEN",
                    	    "magnitude": 6,
                    	    "severity": 10,
                    	    "username_count": 0,
                    	    "closing_user": null,
                    	    "follow_up": false,
                    	    "closing_reason_id": null,
                    	    "close_time": null,
                    	    "source_network": "other",
                    	    "last_updated_time": 1401592216864,
                    	    "categories": [
                    	      "Information"
                    	    ],
                    	    "offense_type": 2,
                  	    "sourceList": [
                              	    	 {
                             	    		"id": 1,
                             	    		"internal": true,
                             	    		"latitude": -37.71859,
                             	    		"local_source_ip": "172.16.50.1",
                             	    		"longitude": -17.226563,
                             	    		"network": "Net-10-172-192.Net_172_16_0_0",
                             	    		"user": null
                             	    	 }
                             	    	],
                             	    	
                    	    "destinationList": 
                    	    	[
                    	    	 {
                    	    		"id": 2,
                    	    		"internal": true,
                    	    		"latitude": -37.71859,
                    	    		"local_destination_ip": "172.16.50.1",
                    	    		"longitude": -17.226563,
                    	    		"network": "Net-10-172-192.Net_172_16_0_0",
                    	    		"user": null
                    	    	 }
                    	    	]
                    	  },
                    	  
                    	  
                    	  {
                     	"id": 4,
                    	    "credibility": 3,
                    	    "remote_destination_count": 1,
                    	    "assigned_to": null,
                    	    "local_destination_count": 0,
                    	    "source_count": 2,
                    	    "start_time": 1414592185666,
                    	    "destination_networks": [
                    	      "other"
                    	    ],
                    	    "inactive": false,
                    	    "protected": false,
                    	    "policy_category_count": 0,
                    	    "description": "Blubber",
                    	    "category_count": 3,
                    	    "relevance": 1,
                    	    "device_count": 1,
                    	    "security_category_count": 3,
                    	    "flow_count": 0,
                    	    "event_count": 117,
                    	    "offense_source": "9.21.123.54",
                    	    "status": "OPEN",
                    	    "magnitude": 1,
                    	    "severity": 10,
                    	    "username_count": 1,
                    	    "closing_user": null,
                    	    "follow_up": false,
                    	    "closing_reason_id": null,
                    	    "close_time": null,
                    	    "source_network": "other",
                    	    "last_updated_time": 1413492213017,
                    	    "categories": [
                    	      "Unknown",
                    	      "SIM User Authentication",
                    	      "SIM User Action"
                    	    ],
                    	    "offense_type": 3,
                  	    "sourceList": [
                              	    	 {
                             	    		"id": 1,
                             	    		"internal": true,
                             	    		"latitude": -37.71859,
                             	    		"local_source_ip": "172.16.50.1",
                             	    		"longitude": -17.226563,
                             	    		"network": "Net-10-172-192.Net_172_16_0_0",
                             	    		"user": null
                             	    	 }
                             	    	],
                             	    	
                    	    "destinationList": 
                    	    	[
                    	    	 {
                    	    		"id": 2,
                    	    		"internal": true,
                    	    		"latitude": -37.71859,
                    	    		"local_destination_ip": "172.16.50.1",
                    	    		"longitude": -17.226563,
                    	    		"network": "Net-10-172-192.Net_172_16_0_0",
                    	    		"user": null
                    	    	 }
                    	    	]
                    	  },
                    	  
                        {
                     	"id": 5,
                    	    "credibility": 2,
                    	    "remote_destination_count": 1,
                    	    "assigned_to": null,
                    	    "local_destination_count": 0,
                    	    "source_count": 2,
                    	    "start_time": 1414592174754,
                    	    "destination_networks": [
                    	      "other"
                    	    ],
                    	    "inactive": false,
                    	    "protected": false,
                    	    "policy_category_count": 0,
                    	    "description": "What?",
                    	    "category_count": 1,
                    	    "relevance": 1,
                    	    "device_count": 2,
                    	    "security_category_count": 1,
                    	    "flow_count": 0,
                    	    "event_count": 28,
                    	    "offense_source": "127.0.0.1",
                    	    "status": "OPEN",
                    	    "magnitude": 3,
                    	    "severity": 10,
                    	    "username_count": 0,
                    	    "closing_user": null,
                    	    "follow_up": false,
                    	    "closing_reason_id": null,
                    	    "close_time": null,
                    	    "source_network": "other",
                    	    "last_updated_time": 1414592216864,
                    	    "categories": [
                    	      "Information"
                    	    ],
                    	    "offense_type": 6,
                  	    "sourceList": [
                              	    	 {
                             	    		"id": 1,
                             	    		"internal": true,
                             	    		"latitude": -37.71859,
                             	    		"local_source_ip": "172.16.50.1",
                             	    		"longitude": -17.226563,
                             	    		"network": "Net-10-172-192.Net_172_16_0_0",
                             	    		"user": null
                             	    	 }
                             	    	],
                             	    	
                    	    "destinationList": 
                    	    	[
                    	    	 {
                    	    		"id": 2,
                    	    		"internal": true,
                    	    		"latitude": -37.71859,
                    	    		"local_destination_ip": "172.16.50.1",
                    	    		"longitude": -17.226563,
                    	    		"network": "Net-10-172-192.Net_172_16_0_0",
                    	    		"user": null
                    	    	 }
                    	    	]
                    	  },
                    	  
                    	  
                    	  {
                     	"id": 6,
                    	    "credibility": 9,
                    	    "remote_destination_count": 1,
                    	    "assigned_to": null,
                    	    "local_destination_count": 0,
                    	    "source_count": 2,
                    	    "start_time": 1414592185666,
                    	    "destination_networks": [
                    	      "other"
                    	    ],
                    	    "inactive": false,
                    	    "protected": false,
                    	    "policy_category_count": 0,
                    	    "description": "Target Vulnerable to Exploit - M9",
                    	    "category_count": 3,
                    	    "relevance": 1,
                    	    "device_count": 1,
                    	    "security_category_count": 3,
                    	    "flow_count": 0,
                    	    "event_count": 2,
                    	    "offense_source": "9.21.123.54",
                    	    "status": "OPEN",
                    	    "magnitude": 9,
                    	    "severity": 10,
                    	    "username_count": 1,
                    	    "closing_user": null,
                    	    "follow_up": false,
                    	    "closing_reason_id": null,
                    	    "close_time": null,
                    	    "source_network": "other",
                    	    "last_updated_time": 1414592213017,
                    	    "categories": [
                    	      "Unknown",
                    	      "SIM User Authentication",
                    	      "SIM User Action"
                    	    ],
                    	    "offense_type": 2,
                  	    "sourceList": [
                              	    	 {
                             	    		"id": 1,
                             	    		"internal": true,
                             	    		"latitude": -37.71859,
                             	    		"local_source_ip": "172.16.50.1",
                             	    		"longitude": -17.226563,
                             	    		"network": "Net-10-172-192.Net_172_16_0_0",
                             	    		"user": null
                             	    	 }
                             	    	],
                             	    	
                    	    "destinationList": 
                    	    	[
                    	    	 {
                    	    		"id": 2,
                    	    		"internal": true,
                    	    		"latitude": -37.71859,
                    	    		"local_destination_ip": "172.16.50.1",
                    	    		"longitude": -17.226563,
                    	    		"network": "Net-10-172-192.Net_172_16_0_0",
                    	    		"user": null
                    	    	 }
                    	    	]
                    	  },
                    	  
                    	  
                  	  
                  	  {
                     	"id": 7,
                    	    "credibility": 9,
                    	    "remote_destination_count": 1,
                    	    "assigned_to": null,
                    	    "local_destination_count": 0,
                    	    "source_count": 2,
                    	    "start_time": 1414592185666,
                    	    "destination_networks": [
                    	      "other"
                    	    ],
                    	    "inactive": false,
                    	    "protected": false,
                    	    "policy_category_count": 0,
                    	    "description": "Recon - External",
                    	    "category_count": 3,
                    	    "relevance": 1,
                    	    "device_count": 1,
                    	    "security_category_count": 3,
                    	    "flow_count": 0,
                    	    "event_count": 76,
                    	    "offense_source": "9.21.123.54",
                    	    "status": "OPEN",
                    	    "magnitude": 6,
                    	    "severity": 10,
                    	    "username_count": 1,
                    	    "closing_user": null,
                    	    "follow_up": false,
                    	    "closing_reason_id": null,
                    	    "close_time": null,
                    	    "source_network": "other",
                    	    "last_updated_time": 1414692213017,
                    	    "categories": [
                    	      "Unknown",
                    	      "SIM User Authentication",
                    	      "SIM User Action"
                    	    ],
                    	    "offense_type": 2,
                  	    "sourceList": [
                              	    	 {
                             	    		"id": 1,
                             	    		"internal": true,
                             	    		"latitude": -37.71859,
                             	    		"local_source_ip": "172.16.50.1",
                             	    		"longitude": -17.226563,
                             	    		"network": "Net-10-172-192.Net_172_16_0_0",
                             	    		"user": null
                             	    	 },
                             	    	 {
                                 	    		"id": 2,
                                    	    		"internal": true,
                                    	    		"latitude": -37.71859,
                                    	    		"local_destination_ip": "172.16.50.1",
                                    	    		"longitude": -17.226563,
                                    	    		"network": "Net-10-172-192.Net_172_16_0_0",
                                    	    		"user": null
                             	    		 
                             	    	 }
                             	    	 
                             	    	],
                             	    	
                    	    "destinationList": 
                    	    	[
                    	    	 {
                    	    		"id": 2,
                    	    		"internal": true,
                    	    		"latitude": -37.71859,
                    	    		"local_destination_ip": "172.16.50.1",
                    	    		"longitude": -17.226563,
                    	    		"network": "Net-10-172-192.Net_172_16_0_0",
                    	    		"user": null
                    	    	 }
                    	    	]
                    	  },
                    	  
                  	  {
                     	"id": 8,
                    	    "credibility": 2,
                    	    "remote_destination_count": 1,
                    	    "assigned_to": null,
                    	    "local_destination_count": 0,
                    	    "source_count": 2,
                    	    "start_time": 1414592185666,
                    	    "destination_networks": [
                    	      "other"
                    	    ],
                    	    "inactive": false,
                    	    "protected": false,
                    	    "policy_category_count": 0,
                    	    "description": "Exploit Followed by Suspicious Activity",
                    	    "category_count": 3,
                    	    "relevance": 1,
                    	    "device_count": 1,
                    	    "security_category_count": 3,
                    	    "flow_count": 0,
                    	    "event_count": 1,
                    	    "offense_source": "9.21.123.54",
                    	    "status": "OPEN",
                    	    "magnitude": 10,
                    	    "severity": 10,
                    	    "username_count": 1,
                    	    "closing_user": null,
                    	    "follow_up": false,
                    	    "closing_reason_id": null,
                    	    "close_time": null,
                    	    "source_network": "other",
                    	    "last_updated_time": 1424592213017,
                    	    "categories": [
                    	      "Unknown",
                    	      "SIM User Authentication",
                    	      "SIM User Action"
                    	    ],
                    	    "offense_type": 3,
                  	    "sourceList": [
                              	    	 {
                             	    		"id": 1,
                             	    		"internal": true,
                             	    		"latitude": -37.71859,
                             	    		"local_source_ip": "172.16.50.1",
                             	    		"longitude": -17.226563,
                             	    		"network": "Net-10-172-192.Net_172_16_0_0",
                             	    		"user": null
                             	    	 }
                             	    	],
                             	    	
                    	    "destinationList": 
                    	    	[
                    	    	 {
                    	    		"id": 2,
                    	    		"internal": true,
                    	    		"latitude": -37.71859,
                    	    		"local_destination_ip": "172.16.50.1",
                    	    		"longitude": -17.226563,
                    	    		"network": "Net-10-172-192.Net_172_16_0_0",
                    	    		"user": null
                    	    	 }
                    	    	]
                    	  }
                  	];

var jsonOffenses3 = [];
jsonOffenses3 = jsonOffenses3.concat(jsonOffenses1);
jsonOffenses3 = jsonOffenses3.concat(jsonOffenses1);
jsonOffenses3 = jsonOffenses3.concat(jsonOffenses1);
jsonOffenses3 = jsonOffenses3.concat(jsonOffenses1);
jsonOffenses3 = jsonOffenses3.concat(jsonOffenses1);
jsonOffenses3 = jsonOffenses3.concat(jsonOffenses1);
jsonOffenses3 = jsonOffenses3.concat(jsonOffenses1);

var dummyOffenseBuckets = 
[
{
	bucketTime: 1428003882640,
	offenses: jsonOffenses0
},

{
	bucketTime: 1428003702640,
	offenses: jsonOffenses1
},

{
	bucketTime: 1428003522640,
	offenses: jsonOffenses1
},

{
	bucketTime: 1428003342640,
	offenses: jsonOffenses1
},

{
	bucketTime: 1428003162640,
	offenses: jsonOffenses3
},
{
	bucketTime: 1428002982640,
	offenses: []
}
,
{
	bucketTime: 1428002802640,
	offenses: []
}
,
{
	bucketTime: 1428002622640,
	offenses: []
}
,
{
	bucketTime: 1428002442640,
	offenses: []
}
,
{
	bucketTime: 1428002262640,
	offenses: []
}

];







var RSAData = 
	[
	    {
	        "bucketTime": 1431175965845,
	        "offenses": [
	            {
	            	"position": {
	            		"x" : 500,
	            		"y" : 200
	            	},
	                "seenAt": 1431175906570,
	                "categories": [
	                    "Cross Site Scripting",
	                    "Access Denied"
	                ],
	                "credibility": 2,
	                "description": "B0 - Exploit Alert: Cross Site Scripting Attempt detected\n",
	                "inactive": false,
	                "magnitude": 5,
	                "relevance": 4,
	                "severity": 8,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 2,
	                        "network": "other",
	                        "latitude": 35.994,
	                        "longitude": -78.8986,
	                        "country": "United States",
	                        "city": "Durham",
	                        "internal": false,
	                        "source_ip": "9.77.139.99",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "id": 1,
	                "assigned_to": null,
	                "category_count": 2,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 2,
	                "event_count": 4,
	                "flow_count": 0,
	                "follow_up": false,
	                "last_updated_time": 1431116622860,
	                "offense_source": "9.77.139.99",
	                "offense_type": 0,
	                "policy_category_count": 0,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431114823160,
	                "username_count": 0
	            },
	            {
	            	"position": {
	            		"x" : 1000,
	            		"y" : 150
	            	},
	                "seenAt": 1431175906570,
	                "categories": [
	                    "Cross Site Scripting",
	                    "Access Denied"
	                ],
	                "credibility": 2,
	                "description": "Exploit Alert: Cross Site Scripting detected on WebServer\n",
	                "inactive": false,
	                "magnitude": 5,
	                "relevance": 4,
	                "severity": 8,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 2,
	                        "network": "other",
	                        "latitude": 35.994,
	                        "longitude": -78.8986,
	                        "country": "United States",
	                        "city": "Durham",
	                        "internal": false,
	                        "source_ip": "9.77.139.99",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "id": 2,
	                "assigned_to": null,
	                "category_count": 2,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 2,
	                "event_count": 4,
	                "flow_count": 0,
	                "follow_up": false,
	                "last_updated_time": 1431116622860,
	                "offense_source": "172.21.119.175",
	                "offense_type": 1,
	                "policy_category_count": 0,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431114823160,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175906570,
	                "categories": [
	                    "User Right Assigned",
	                    "Misc Exploit",
	                    "Access Denied",
	                    "Remote Access",
	                    "Compliance Policy Violation"
	                ],
	                "credibility": 3,
	                "description": "Policy: Remote: Clear Text Application Usage\n preceded by Exploit Followed by Suspicious Host Activity - Chained\n preceded by Unauthorized Privilege Escalation Detected\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 4,
	                "severity": 6,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "source_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "id": 3,
	                "assigned_to": null,
	                "category_count": 5,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 2,
	                "event_count": 4,
	                "flow_count": 9,
	                "follow_up": false,
	                "last_updated_time": 1431114945100,
	                "offense_source": "172.21.119.175",
	                "offense_type": 0,
	                "policy_category_count": 1,
	                "protected": false,
	                "remote_destination_count": 3,
	                "security_category_count": 4,
	                "source_count": 1,
	                "source_network": "Net-10-172-192.Net_172_16_0_0",
	                "start_time": 1431114845150,
	                "username_count": 1
	            },
	            {
	                "seenAt": 1431175906570,
	                "categories": [
	                    "Remote Access",
	                    "Compliance Policy Violation",
	                    "Access Denied"
	                ],
	                "credibility": 2,
	                "description": "Unauthorized Communication to Sensitive Host\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 4,
	                "severity": 5,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 3,
	                        "network": "other",
	                        "latitude": 34.0119,
	                        "longitude": -118.4682,
	                        "country": "United States",
	                        "city": "Santa Monica",
	                        "internal": false,
	                        "source_ip": "192.16.60.101",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 4,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.202",
	                        "user": null
	                    },
	                    {
	                        "id": 3,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.203",
	                        "user": null
	                    },
	                    {
	                        "id": 2,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.201",
	                        "user": null
	                    }
	                ],
	                "id": 4,
	                "assigned_to": null,
	                "category_count": 3,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 1,
	                "event_count": 29,
	                "flow_count": 21,
	                "follow_up": false,
	                "last_updated_time": 1431115077880,
	                "offense_source": "192.16.60.101",
	                "offense_type": 0,
	                "policy_category_count": 1,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431114960120,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175906570,
	                "categories": [
	                    "Remote Access",
	                    "Access Denied",
	                    "Compliance Policy Violation"
	                ],
	                "credibility": 3,
	                "description": "Unauthorized Communication to Sensitive Host\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 4,
	                "severity": 5,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 4,
	                        "network": "other",
	                        "latitude": 34.0119,
	                        "longitude": -118.4682,
	                        "country": "United States",
	                        "city": "Santa Monica",
	                        "internal": false,
	                        "source_ip": "192.16.60.103",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 4,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.202",
	                        "user": null
	                    },
	                    {
	                        "id": 3,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.203",
	                        "user": null
	                    },
	                    {
	                        "id": 2,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.201",
	                        "user": null
	                    }
	                ],
	                "id": 5,
	                "assigned_to": null,
	                "category_count": 3,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 1,
	                "event_count": 14,
	                "flow_count": 9,
	                "follow_up": false,
	                "last_updated_time": 1431115075820,
	                "offense_source": "192.16.60.103",
	                "offense_type": 0,
	                "policy_category_count": 1,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431115027260,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175906570,
	                "categories": [
	                    "Access Denied",
	                    "Remote Access",
	                    "Compliance Policy Violation"
	                ],
	                "credibility": 3,
	                "description": "Unauthorized Communication to Sensitive Host\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 5,
	                "severity": 5,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 5,
	                        "network": "other",
	                        "latitude": 34.0119,
	                        "longitude": -118.4682,
	                        "country": "United States",
	                        "city": "Santa Monica",
	                        "internal": false,
	                        "source_ip": "192.16.60.102",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 4,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.202",
	                        "user": null
	                    },
	                    {
	                        "id": 3,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.203",
	                        "user": null
	                    },
	                    {
	                        "id": 2,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.201",
	                        "user": null
	                    }
	                ],
	                "id": 6,
	                "assigned_to": null,
	                "category_count": 3,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 1,
	                "event_count": 15,
	                "flow_count": 9,
	                "follow_up": false,
	                "last_updated_time": 1431115071420,
	                "offense_source": "192.16.60.102",
	                "offense_type": 0,
	                "policy_category_count": 1,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431115033730,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175906570,
	                "categories": [
	                    "Data Transfer",
	                    "ACL Deny"
	                ],
	                "credibility": 3,
	                "description": "Flow Source/Interface Stopped Sending Flows\n",
	                "inactive": false,
	                "magnitude": 2,
	                "relevance": 3,
	                "severity": 0,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 5,
	                        "network": "other",
	                        "latitude": 34.0119,
	                        "longitude": -118.4682,
	                        "country": "United States",
	                        "city": "Santa Monica",
	                        "internal": false,
	                        "source_ip": "192.16.60.102",
	                        "user": null
	                    }
	                ],
	                "destinationList": [],
	                "id": 7,
	                "assigned_to": null,
	                "category_count": 2,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 1,
	                "event_count": 2,
	                "flow_count": 0,
	                "follow_up": false,
	                "last_updated_time": 1431116862250,
	                "offense_source": "System: Flow Source Stopped Sending Flows",
	                "offense_type": 14,
	                "policy_category_count": 0,
	                "protected": false,
	                "remote_destination_count": 1,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431116862250,
	                "username_count": 0
	            }
	        ]
	    },
	    {
	        "bucketTime": 1431175905845,
	        "offenses": [
	            {
	                "seenAt": 1431175846560,
	                "categories": [
	                    "Cross Site Scripting",
	                    "Access Denied"
	                ],
	                "credibility": 2,
	                "description": "B1 - Exploit Alert: Cross Site Scripting Attempt detected\n",
	                "inactive": false,
	                "magnitude": 5,
	                "relevance": 4,
	                "severity": 8,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 2,
	                        "network": "other",
	                        "latitude": 35.994,
	                        "longitude": -78.8986,
	                        "country": "United States",
	                        "city": "Durham",
	                        "internal": false,
	                        "source_ip": "9.77.139.99",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "id": 1,
	                "assigned_to": null,
	                "category_count": 2,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 2,
	                "event_count": 4,
	                "flow_count": 0,
	                "follow_up": false,
	                "last_updated_time": 1431116622860,
	                "offense_source": "9.77.139.99",
	                "offense_type": 0,
	                "policy_category_count": 0,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431114823160,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175846560,
	                "categories": [
	                    "Cross Site Scripting",
	                    "Access Denied"
	                ],
	                "credibility": 2,
	                "description": "Exploit Alert: Cross Site Scripting detected on WebServer\n",
	                "inactive": false,
	                "magnitude": 5,
	                "relevance": 4,
	                "severity": 8,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 2,
	                        "network": "other",
	                        "latitude": 35.994,
	                        "longitude": -78.8986,
	                        "country": "United States",
	                        "city": "Durham",
	                        "internal": false,
	                        "source_ip": "9.77.139.99",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "id": 2,
	                "assigned_to": null,
	                "category_count": 2,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 2,
	                "event_count": 4,
	                "flow_count": 0,
	                "follow_up": false,
	                "last_updated_time": 1431116622860,
	                "offense_source": "172.21.119.175",
	                "offense_type": 1,
	                "policy_category_count": 0,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431114823160,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175846560,
	                "categories": [
	                    "User Right Assigned",
	                    "Misc Exploit",
	                    "Access Denied",
	                    "Remote Access",
	                    "Compliance Policy Violation"
	                ],
	                "credibility": 3,
	                "description": "Policy: Remote: Clear Text Application Usage\n preceded by Exploit Followed by Suspicious Host Activity - Chained\n preceded by Unauthorized Privilege Escalation Detected\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 4,
	                "severity": 6,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "source_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "id": 3,
	                "assigned_to": null,
	                "category_count": 5,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 2,
	                "event_count": 4,
	                "flow_count": 9,
	                "follow_up": false,
	                "last_updated_time": 1431114945100,
	                "offense_source": "172.21.119.175",
	                "offense_type": 0,
	                "policy_category_count": 1,
	                "protected": false,
	                "remote_destination_count": 3,
	                "security_category_count": 4,
	                "source_count": 1,
	                "source_network": "Net-10-172-192.Net_172_16_0_0",
	                "start_time": 1431114845150,
	                "username_count": 1
	            },
	            {
	                "seenAt": 1431175846560,
	                "categories": [
	                    "Remote Access",
	                    "Compliance Policy Violation",
	                    "Access Denied"
	                ],
	                "credibility": 2,
	                "description": "Unauthorized Communication to Sensitive Host\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 4,
	                "severity": 5,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 3,
	                        "network": "other",
	                        "latitude": 34.0119,
	                        "longitude": -118.4682,
	                        "country": "United States",
	                        "city": "Santa Monica",
	                        "internal": false,
	                        "source_ip": "192.16.60.101",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 4,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.202",
	                        "user": null
	                    },
	                    {
	                        "id": 3,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.203",
	                        "user": null
	                    },
	                    {
	                        "id": 2,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.201",
	                        "user": null
	                    }
	                ],
	                "id": 4,
	                "assigned_to": null,
	                "category_count": 3,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 1,
	                "event_count": 29,
	                "flow_count": 21,
	                "follow_up": false,
	                "last_updated_time": 1431115077880,
	                "offense_source": "192.16.60.101",
	                "offense_type": 0,
	                "policy_category_count": 1,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431114960120,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175846560,
	                "categories": [
	                    "Remote Access",
	                    "Access Denied",
	                    "Compliance Policy Violation"
	                ],
	                "credibility": 3,
	                "description": "Unauthorized Communication to Sensitive Host\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 4,
	                "severity": 5,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 4,
	                        "network": "other",
	                        "latitude": 34.0119,
	                        "longitude": -118.4682,
	                        "country": "United States",
	                        "city": "Santa Monica",
	                        "internal": false,
	                        "source_ip": "192.16.60.103",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 4,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.202",
	                        "user": null
	                    },
	                    {
	                        "id": 3,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.203",
	                        "user": null
	                    },
	                    {
	                        "id": 2,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.201",
	                        "user": null
	                    }
	                ],
	                "id": 5,
	                "assigned_to": null,
	                "category_count": 3,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 1,
	                "event_count": 14,
	                "flow_count": 9,
	                "follow_up": false,
	                "last_updated_time": 1431115075820,
	                "offense_source": "192.16.60.103",
	                "offense_type": 0,
	                "policy_category_count": 1,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431115027260,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175846560,
	                "categories": [
	                    "Access Denied",
	                    "Remote Access",
	                    "Compliance Policy Violation"
	                ],
	                "credibility": 3,
	                "description": "Unauthorized Communication to Sensitive Host\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 5,
	                "severity": 5,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 5,
	                        "network": "other",
	                        "latitude": 34.0119,
	                        "longitude": -118.4682,
	                        "country": "United States",
	                        "city": "Santa Monica",
	                        "internal": false,
	                        "source_ip": "192.16.60.102",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 4,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.202",
	                        "user": null
	                    },
	                    {
	                        "id": 3,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.203",
	                        "user": null
	                    },
	                    {
	                        "id": 2,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.201",
	                        "user": null
	                    }
	                ],
	                "id": 6,
	                "assigned_to": null,
	                "category_count": 3,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 1,
	                "event_count": 15,
	                "flow_count": 9,
	                "follow_up": false,
	                "last_updated_time": 1431115071420,
	                "offense_source": "192.16.60.102",
	                "offense_type": 0,
	                "policy_category_count": 1,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431115033730,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175846560,
	                "categories": [
	                    "Data Transfer",
	                    "ACL Deny"
	                ],
	                "credibility": 3,
	                "description": "Flow Source/Interface Stopped Sending Flows\n",
	                "inactive": false,
	                "magnitude": 2,
	                "relevance": 3,
	                "severity": 0,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 5,
	                        "network": "other",
	                        "latitude": 34.0119,
	                        "longitude": -118.4682,
	                        "country": "United States",
	                        "city": "Santa Monica",
	                        "internal": false,
	                        "source_ip": "192.16.60.102",
	                        "user": null
	                    }
	                ],
	                "destinationList": [],
	                "id": 7,
	                "assigned_to": null,
	                "category_count": 2,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 1,
	                "event_count": 2,
	                "flow_count": 0,
	                "follow_up": false,
	                "last_updated_time": 1431116862250,
	                "offense_source": "System: Flow Source Stopped Sending Flows",
	                "offense_type": 14,
	                "policy_category_count": 0,
	                "protected": false,
	                "remote_destination_count": 1,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431116862250,
	                "username_count": 0
	            }
	        ]
	    },
	    {
	        "bucketTime": 1431175845845,
	        "offenses": [
	            {
	                "seenAt": 1431175786560,
	                "categories": [
	                    "Cross Site Scripting",
	                    "Access Denied"
	                ],
	                "credibility": 2,
	                "description": "B2 - Exploit Alert: Cross Site Scripting Attempt detected\n",
	                "inactive": false,
	                "magnitude": 5,
	                "relevance": 4,
	                "severity": 8,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 2,
	                        "network": "other",
	                        "latitude": 35.994,
	                        "longitude": -78.8986,
	                        "country": "United States",
	                        "city": "Durham",
	                        "internal": false,
	                        "source_ip": "9.77.139.99",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "id": 1,
	                "assigned_to": null,
	                "category_count": 2,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 2,
	                "event_count": 4,
	                "flow_count": 0,
	                "follow_up": false,
	                "last_updated_time": 1431116622860,
	                "offense_source": "9.77.139.99",
	                "offense_type": 0,
	                "policy_category_count": 0,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431114823160,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175786560,
	                "categories": [
	                    "Cross Site Scripting",
	                    "Access Denied"
	                ],
	                "credibility": 2,
	                "description": "Exploit Alert: Cross Site Scripting detected on WebServer\n",
	                "inactive": false,
	                "magnitude": 5,
	                "relevance": 4,
	                "severity": 8,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 2,
	                        "network": "other",
	                        "latitude": 35.994,
	                        "longitude": -78.8986,
	                        "country": "United States",
	                        "city": "Durham",
	                        "internal": false,
	                        "source_ip": "9.77.139.99",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "id": 2,
	                "assigned_to": null,
	                "category_count": 2,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 2,
	                "event_count": 4,
	                "flow_count": 0,
	                "follow_up": false,
	                "last_updated_time": 1431116622860,
	                "offense_source": "172.21.119.175",
	                "offense_type": 1,
	                "policy_category_count": 0,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431114823160,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175786560,
	                "categories": [
	                    "User Right Assigned",
	                    "Misc Exploit",
	                    "Access Denied",
	                    "Remote Access",
	                    "Compliance Policy Violation"
	                ],
	                "credibility": 3,
	                "description": "Policy: Remote: Clear Text Application Usage\n preceded by Exploit Followed by Suspicious Host Activity - Chained\n preceded by Unauthorized Privilege Escalation Detected\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 4,
	                "severity": 6,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "source_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "id": 3,
	                "assigned_to": null,
	                "category_count": 5,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 2,
	                "event_count": 4,
	                "flow_count": 9,
	                "follow_up": false,
	                "last_updated_time": 1431114945100,
	                "offense_source": "172.21.119.175",
	                "offense_type": 0,
	                "policy_category_count": 1,
	                "protected": false,
	                "remote_destination_count": 3,
	                "security_category_count": 4,
	                "source_count": 1,
	                "source_network": "Net-10-172-192.Net_172_16_0_0",
	                "start_time": 1431114845150,
	                "username_count": 1
	            },
	            {
	                "seenAt": 1431175786560,
	                "categories": [
	                    "Remote Access",
	                    "Compliance Policy Violation",
	                    "Access Denied"
	                ],
	                "credibility": 2,
	                "description": "Unauthorized Communication to Sensitive Host\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 4,
	                "severity": 5,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 3,
	                        "network": "other",
	                        "latitude": 34.0119,
	                        "longitude": -118.4682,
	                        "country": "United States",
	                        "city": "Santa Monica",
	                        "internal": false,
	                        "source_ip": "192.16.60.101",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 4,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.202",
	                        "user": null
	                    },
	                    {
	                        "id": 3,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.203",
	                        "user": null
	                    },
	                    {
	                        "id": 2,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.201",
	                        "user": null
	                    }
	                ],
	                "id": 4,
	                "assigned_to": null,
	                "category_count": 3,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 1,
	                "event_count": 29,
	                "flow_count": 21,
	                "follow_up": false,
	                "last_updated_time": 1431115077880,
	                "offense_source": "192.16.60.101",
	                "offense_type": 0,
	                "policy_category_count": 1,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431114960120,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175786560,
	                "categories": [
	                    "Remote Access",
	                    "Access Denied",
	                    "Compliance Policy Violation"
	                ],
	                "credibility": 3,
	                "description": "Unauthorized Communication to Sensitive Host\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 4,
	                "severity": 5,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 4,
	                        "network": "other",
	                        "latitude": 34.0119,
	                        "longitude": -118.4682,
	                        "country": "United States",
	                        "city": "Santa Monica",
	                        "internal": false,
	                        "source_ip": "192.16.60.103",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 4,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.202",
	                        "user": null
	                    },
	                    {
	                        "id": 3,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.203",
	                        "user": null
	                    },
	                    {
	                        "id": 2,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.201",
	                        "user": null
	                    }
	                ],
	                "id": 5,
	                "assigned_to": null,
	                "category_count": 3,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 1,
	                "event_count": 14,
	                "flow_count": 9,
	                "follow_up": false,
	                "last_updated_time": 1431115075820,
	                "offense_source": "192.16.60.103",
	                "offense_type": 0,
	                "policy_category_count": 1,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431115027260,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175786560,
	                "categories": [
	                    "Access Denied",
	                    "Remote Access",
	                    "Compliance Policy Violation"
	                ],
	                "credibility": 3,
	                "description": "Unauthorized Communication to Sensitive Host\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 5,
	                "severity": 5,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 5,
	                        "network": "other",
	                        "latitude": 34.0119,
	                        "longitude": -118.4682,
	                        "country": "United States",
	                        "city": "Santa Monica",
	                        "internal": false,
	                        "source_ip": "192.16.60.102",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 4,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.202",
	                        "user": null
	                    },
	                    {
	                        "id": 3,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.203",
	                        "user": null
	                    },
	                    {
	                        "id": 2,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.201",
	                        "user": null
	                    }
	                ],
	                "id": 6,
	                "assigned_to": null,
	                "category_count": 3,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 1,
	                "event_count": 15,
	                "flow_count": 9,
	                "follow_up": false,
	                "last_updated_time": 1431115071420,
	                "offense_source": "192.16.60.102",
	                "offense_type": 0,
	                "policy_category_count": 1,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431115033730,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175786560,
	                "categories": [
	                    "Data Transfer",
	                    "ACL Deny"
	                ],
	                "credibility": 3,
	                "description": "Flow Source/Interface Stopped Sending Flows\n",
	                "inactive": false,
	                "magnitude": 2,
	                "relevance": 3,
	                "severity": 0,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 5,
	                        "network": "other",
	                        "latitude": 34.0119,
	                        "longitude": -118.4682,
	                        "country": "United States",
	                        "city": "Santa Monica",
	                        "internal": false,
	                        "source_ip": "192.16.60.102",
	                        "user": null
	                    }
	                ],
	                "destinationList": [],
	                "id": 7,
	                "assigned_to": null,
	                "category_count": 2,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 1,
	                "event_count": 2,
	                "flow_count": 0,
	                "follow_up": false,
	                "last_updated_time": 1431116862250,
	                "offense_source": "System: Flow Source Stopped Sending Flows",
	                "offense_type": 14,
	                "policy_category_count": 0,
	                "protected": false,
	                "remote_destination_count": 1,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431116862250,
	                "username_count": 0
	            }
	        ]
	    },
	    {
	        "bucketTime": 1431175785845,
	        "offenses": [
	            {
	                "seenAt": 1431175726560,
	                "categories": [
	                    "Cross Site Scripting",
	                    "Access Denied"
	                ],
	                "credibility": 2,
	                "description": "B3 - Exploit Alert: Cross Site Scripting Attempt detected\n",
	                "inactive": false,
	                "magnitude": 5,
	                "relevance": 4,
	                "severity": 8,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 2,
	                        "network": "other",
	                        "latitude": 35.994,
	                        "longitude": -78.8986,
	                        "country": "United States",
	                        "city": "Durham",
	                        "internal": false,
	                        "source_ip": "9.77.139.99",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "id": 1,
	                "assigned_to": null,
	                "category_count": 2,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 2,
	                "event_count": 4,
	                "flow_count": 0,
	                "follow_up": false,
	                "last_updated_time": 1431116622860,
	                "offense_source": "9.77.139.99",
	                "offense_type": 0,
	                "policy_category_count": 0,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431114823160,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175726560,
	                "categories": [
	                    "Cross Site Scripting",
	                    "Access Denied"
	                ],
	                "credibility": 2,
	                "description": "Exploit Alert: Cross Site Scripting detected on WebServer\n",
	                "inactive": false,
	                "magnitude": 5,
	                "relevance": 4,
	                "severity": 8,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 2,
	                        "network": "other",
	                        "latitude": 35.994,
	                        "longitude": -78.8986,
	                        "country": "United States",
	                        "city": "Durham",
	                        "internal": false,
	                        "source_ip": "9.77.139.99",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "id": 2,
	                "assigned_to": null,
	                "category_count": 2,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 2,
	                "event_count": 4,
	                "flow_count": 0,
	                "follow_up": false,
	                "last_updated_time": 1431116622860,
	                "offense_source": "172.21.119.175",
	                "offense_type": 1,
	                "policy_category_count": 0,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431114823160,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175726560,
	                "categories": [
	                    "User Right Assigned",
	                    "Misc Exploit",
	                    "Access Denied",
	                    "Remote Access",
	                    "Compliance Policy Violation"
	                ],
	                "credibility": 3,
	                "description": "Policy: Remote: Clear Text Application Usage\n preceded by Exploit Followed by Suspicious Host Activity - Chained\n preceded by Unauthorized Privilege Escalation Detected\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 4,
	                "severity": 6,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "source_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "id": 3,
	                "assigned_to": null,
	                "category_count": 5,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 2,
	                "event_count": 4,
	                "flow_count": 9,
	                "follow_up": false,
	                "last_updated_time": 1431114945100,
	                "offense_source": "172.21.119.175",
	                "offense_type": 0,
	                "policy_category_count": 1,
	                "protected": false,
	                "remote_destination_count": 3,
	                "security_category_count": 4,
	                "source_count": 1,
	                "source_network": "Net-10-172-192.Net_172_16_0_0",
	                "start_time": 1431114845150,
	                "username_count": 1
	            },
	            {
	                "seenAt": 1431175726560,
	                "categories": [
	                    "Remote Access",
	                    "Compliance Policy Violation",
	                    "Access Denied"
	                ],
	                "credibility": 2,
	                "description": "Unauthorized Communication to Sensitive Host\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 4,
	                "severity": 5,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 3,
	                        "network": "other",
	                        "latitude": 34.0119,
	                        "longitude": -118.4682,
	                        "country": "United States",
	                        "city": "Santa Monica",
	                        "internal": false,
	                        "source_ip": "192.16.60.101",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 4,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.202",
	                        "user": null
	                    },
	                    {
	                        "id": 3,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.203",
	                        "user": null
	                    },
	                    {
	                        "id": 2,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.201",
	                        "user": null
	                    }
	                ],
	                "id": 4,
	                "assigned_to": null,
	                "category_count": 3,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 1,
	                "event_count": 29,
	                "flow_count": 21,
	                "follow_up": false,
	                "last_updated_time": 1431115077880,
	                "offense_source": "192.16.60.101",
	                "offense_type": 0,
	                "policy_category_count": 1,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431114960120,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175726560,
	                "categories": [
	                    "Remote Access",
	                    "Access Denied",
	                    "Compliance Policy Violation"
	                ],
	                "credibility": 3,
	                "description": "Unauthorized Communication to Sensitive Host\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 4,
	                "severity": 5,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 4,
	                        "network": "other",
	                        "latitude": 34.0119,
	                        "longitude": -118.4682,
	                        "country": "United States",
	                        "city": "Santa Monica",
	                        "internal": false,
	                        "source_ip": "192.16.60.103",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 4,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.202",
	                        "user": null
	                    },
	                    {
	                        "id": 3,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.203",
	                        "user": null
	                    },
	                    {
	                        "id": 2,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.201",
	                        "user": null
	                    }
	                ],
	                "id": 5,
	                "assigned_to": null,
	                "category_count": 3,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 1,
	                "event_count": 14,
	                "flow_count": 9,
	                "follow_up": false,
	                "last_updated_time": 1431115075820,
	                "offense_source": "192.16.60.103",
	                "offense_type": 0,
	                "policy_category_count": 1,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431115027260,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175726560,
	                "categories": [
	                    "Access Denied",
	                    "Remote Access",
	                    "Compliance Policy Violation"
	                ],
	                "credibility": 3,
	                "description": "Unauthorized Communication to Sensitive Host\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 5,
	                "severity": 5,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 5,
	                        "network": "other",
	                        "latitude": 34.0119,
	                        "longitude": -118.4682,
	                        "country": "United States",
	                        "city": "Santa Monica",
	                        "internal": false,
	                        "source_ip": "192.16.60.102",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 4,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.202",
	                        "user": null
	                    },
	                    {
	                        "id": 3,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.203",
	                        "user": null
	                    },
	                    {
	                        "id": 2,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.201",
	                        "user": null
	                    }
	                ],
	                "id": 6,
	                "assigned_to": null,
	                "category_count": 3,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 1,
	                "event_count": 15,
	                "flow_count": 9,
	                "follow_up": false,
	                "last_updated_time": 1431115071420,
	                "offense_source": "192.16.60.102",
	                "offense_type": 0,
	                "policy_category_count": 1,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431115033730,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175726560,
	                "categories": [
	                    "Data Transfer",
	                    "ACL Deny"
	                ],
	                "credibility": 3,
	                "description": "Flow Source/Interface Stopped Sending Flows\n",
	                "inactive": false,
	                "magnitude": 2,
	                "relevance": 3,
	                "severity": 0,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 5,
	                        "network": "other",
	                        "latitude": 34.0119,
	                        "longitude": -118.4682,
	                        "country": "United States",
	                        "city": "Santa Monica",
	                        "internal": false,
	                        "source_ip": "192.16.60.102",
	                        "user": null
	                    }
	                ],
	                "destinationList": [],
	                "id": 7,
	                "assigned_to": null,
	                "category_count": 2,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 1,
	                "event_count": 2,
	                "flow_count": 0,
	                "follow_up": false,
	                "last_updated_time": 1431116862250,
	                "offense_source": "System: Flow Source Stopped Sending Flows",
	                "offense_type": 14,
	                "policy_category_count": 0,
	                "protected": false,
	                "remote_destination_count": 1,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431116862250,
	                "username_count": 0
	            }
	        ]
	    },
	    {
	        "bucketTime": 1431175725845,
	        "offenses": [
	            {
	                "seenAt": 1431175666560,
	                "categories": [
	                    "Cross Site Scripting",
	                    "Access Denied"
	                ],
	                "credibility": 2,
	                "description": "B4 - Exploit Alert: Cross Site Scripting Attempt detected\n",
	                "inactive": false,
	                "magnitude": 5,
	                "relevance": 4,
	                "severity": 8,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 2,
	                        "network": "other",
	                        "latitude": 35.994,
	                        "longitude": -78.8986,
	                        "country": "United States",
	                        "city": "Durham",
	                        "internal": false,
	                        "source_ip": "9.77.139.99",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "id": 1,
	                "assigned_to": null,
	                "category_count": 2,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 2,
	                "event_count": 4,
	                "flow_count": 0,
	                "follow_up": false,
	                "last_updated_time": 1431116622860,
	                "offense_source": "9.77.139.99",
	                "offense_type": 0,
	                "policy_category_count": 0,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431114823160,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175666560,
	                "categories": [
	                    "Cross Site Scripting",
	                    "Access Denied"
	                ],
	                "credibility": 2,
	                "description": "Exploit Alert: Cross Site Scripting detected on WebServer\n",
	                "inactive": false,
	                "magnitude": 5,
	                "relevance": 4,
	                "severity": 8,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 2,
	                        "network": "other",
	                        "latitude": 35.994,
	                        "longitude": -78.8986,
	                        "country": "United States",
	                        "city": "Durham",
	                        "internal": false,
	                        "source_ip": "9.77.139.99",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "id": 2,
	                "assigned_to": null,
	                "category_count": 2,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 2,
	                "event_count": 4,
	                "flow_count": 0,
	                "follow_up": false,
	                "last_updated_time": 1431116622860,
	                "offense_source": "172.21.119.175",
	                "offense_type": 1,
	                "policy_category_count": 0,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431114823160,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175666560,
	                "categories": [
	                    "User Right Assigned",
	                    "Misc Exploit",
	                    "Access Denied",
	                    "Remote Access",
	                    "Compliance Policy Violation"
	                ],
	                "credibility": 3,
	                "description": "Policy: Remote: Clear Text Application Usage\n preceded by Exploit Followed by Suspicious Host Activity - Chained\n preceded by Unauthorized Privilege Escalation Detected\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 4,
	                "severity": 6,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "source_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "id": 3,
	                "assigned_to": null,
	                "category_count": 5,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 2,
	                "event_count": 4,
	                "flow_count": 9,
	                "follow_up": false,
	                "last_updated_time": 1431114945100,
	                "offense_source": "172.21.119.175",
	                "offense_type": 0,
	                "policy_category_count": 1,
	                "protected": false,
	                "remote_destination_count": 3,
	                "security_category_count": 4,
	                "source_count": 1,
	                "source_network": "Net-10-172-192.Net_172_16_0_0",
	                "start_time": 1431114845150,
	                "username_count": 1
	            },
	            {
	                "seenAt": 1431175666560,
	                "categories": [
	                    "Remote Access",
	                    "Compliance Policy Violation",
	                    "Access Denied"
	                ],
	                "credibility": 2,
	                "description": "Unauthorized Communication to Sensitive Host\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 4,
	                "severity": 5,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 3,
	                        "network": "other",
	                        "latitude": 34.0119,
	                        "longitude": -118.4682,
	                        "country": "United States",
	                        "city": "Santa Monica",
	                        "internal": false,
	                        "source_ip": "192.16.60.101",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 4,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.202",
	                        "user": null
	                    },
	                    {
	                        "id": 3,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.203",
	                        "user": null
	                    },
	                    {
	                        "id": 2,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.201",
	                        "user": null
	                    }
	                ],
	                "id": 4,
	                "assigned_to": null,
	                "category_count": 3,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 1,
	                "event_count": 29,
	                "flow_count": 21,
	                "follow_up": false,
	                "last_updated_time": 1431115077880,
	                "offense_source": "192.16.60.101",
	                "offense_type": 0,
	                "policy_category_count": 1,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431114960120,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175666560,
	                "categories": [
	                    "Remote Access",
	                    "Access Denied",
	                    "Compliance Policy Violation"
	                ],
	                "credibility": 3,
	                "description": "Unauthorized Communication to Sensitive Host\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 4,
	                "severity": 5,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 4,
	                        "network": "other",
	                        "latitude": 34.0119,
	                        "longitude": -118.4682,
	                        "country": "United States",
	                        "city": "Santa Monica",
	                        "internal": false,
	                        "source_ip": "192.16.60.103",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 4,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.202",
	                        "user": null
	                    },
	                    {
	                        "id": 3,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.203",
	                        "user": null
	                    },
	                    {
	                        "id": 2,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.201",
	                        "user": null
	                    }
	                ],
	                "id": 5,
	                "assigned_to": null,
	                "category_count": 3,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 1,
	                "event_count": 14,
	                "flow_count": 9,
	                "follow_up": false,
	                "last_updated_time": 1431115075820,
	                "offense_source": "192.16.60.103",
	                "offense_type": 0,
	                "policy_category_count": 1,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431115027260,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175666560,
	                "categories": [
	                    "Access Denied",
	                    "Remote Access",
	                    "Compliance Policy Violation"
	                ],
	                "credibility": 3,
	                "description": "Unauthorized Communication to Sensitive Host\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 5,
	                "severity": 5,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 5,
	                        "network": "other",
	                        "latitude": 34.0119,
	                        "longitude": -118.4682,
	                        "country": "United States",
	                        "city": "Santa Monica",
	                        "internal": false,
	                        "source_ip": "192.16.60.102",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 4,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.202",
	                        "user": null
	                    },
	                    {
	                        "id": 3,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.203",
	                        "user": null
	                    },
	                    {
	                        "id": 2,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.201",
	                        "user": null
	                    }
	                ],
	                "id": 6,
	                "assigned_to": null,
	                "category_count": 3,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 1,
	                "event_count": 15,
	                "flow_count": 9,
	                "follow_up": false,
	                "last_updated_time": 1431115071420,
	                "offense_source": "192.16.60.102",
	                "offense_type": 0,
	                "policy_category_count": 1,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431115033730,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175666560,
	                "categories": [
	                    "Data Transfer",
	                    "ACL Deny"
	                ],
	                "credibility": 3,
	                "description": "Flow Source/Interface Stopped Sending Flows\n",
	                "inactive": false,
	                "magnitude": 2,
	                "relevance": 3,
	                "severity": 0,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 5,
	                        "network": "other",
	                        "latitude": 34.0119,
	                        "longitude": -118.4682,
	                        "country": "United States",
	                        "city": "Santa Monica",
	                        "internal": false,
	                        "source_ip": "192.16.60.102",
	                        "user": null
	                    }
	                ],
	                "destinationList": [],
	                "id": 7,
	                "assigned_to": null,
	                "category_count": 2,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 1,
	                "event_count": 2,
	                "flow_count": 0,
	                "follow_up": false,
	                "last_updated_time": 1431116862250,
	                "offense_source": "System: Flow Source Stopped Sending Flows",
	                "offense_type": 14,
	                "policy_category_count": 0,
	                "protected": false,
	                "remote_destination_count": 1,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431116862250,
	                "username_count": 0
	            }
	        ]
	    },
	    {
	    	//Bucket 5
	        "bucketTime": 1431175665845,
	        "offenses": [
	            {
	                "seenAt": 1431175650930,
	                "categories": [
	                    "Cross Site Scripting",
	                    "Access Denied"
	                ],
	                "credibility": 2,
	                "description": "B5 - Exploit Alert: Cross Site Scripting Attempt detected\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 4,
	                "severity": 8,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 2,
	                        "network": "other",
	                        "latitude": 35.994,
	                        "longitude": -78.8986,
	                        "country": "United States",
	                        "city": "Durham",
	                        "internal": false,
	                        "source_ip": "9.77.139.99",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "id": 1,
	                "assigned_to": null,
	                "category_count": 2,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 2,
	                "event_count": 4,
	                "flow_count": 0,
	                "follow_up": false,
	                "last_updated_time": 1431116622860,
	                "offense_source": "9.77.139.99",
	                "offense_type": 0,
	                "policy_category_count": 0,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431114823160,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175650930,
	                "categories": [
	                    "Cross Site Scripting",
	                    "Access Denied"
	                ],
	                "credibility": 2,
	                "description": "Exploit Alert: Cross Site Scripting detected on WebServer\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 4,
	                "severity": 8,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 2,
	                        "network": "other",
	                        "latitude": 35.994,
	                        "longitude": -78.8986,
	                        "country": "United States",
	                        "city": "Durham",
	                        "internal": false,
	                        "source_ip": "9.77.139.99",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "id": 2,
	                "assigned_to": null,
	                "category_count": 2,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 2,
	                "event_count": 4,
	                "flow_count": 0,
	                "follow_up": false,
	                "last_updated_time": 1431116622860,
	                "offense_source": "172.21.119.175",
	                "offense_type": 1,
	                "policy_category_count": 0,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431114823160,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175650930,
	                "categories": [
	                    "User Right Assigned",
	                    "Misc Exploit",
	                    "Access Denied",
	                ],
	                "credibility": 3,
	                "description": "Policy: Remote: Clear Text Application Usage\n preceded by Exploit Followed by Suspicious Host Activity - Chained\n preceded by Unauthorized Privilege Escalation Detected\n",
	                "inactive": false,
	                "magnitude": 5,
	                "relevance": 4,
	                "severity": 6,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "source_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "id": 3,
	                "assigned_to": null,
	                "category_count": 5,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 2,
	                "event_count": 4,
	                "flow_count": 9,
	                "follow_up": false,
	                "last_updated_time": 1431114945100,
	                "offense_source": "172.21.119.175",
	                "offense_type": 0,
	                "policy_category_count": 1,
	                "protected": false,
	                "remote_destination_count": 3,
	                "security_category_count": 4,
	                "source_count": 1,
	                "source_network": "Net-10-172-192.Net_172_16_0_0",
	                "start_time": 1431114845150,
	                "username_count": 1
	            }
	        ]
	    },
	    {
	        "bucketTime": 1431175605845,
	        "offenses": []
	    },
	    {
	        "bucketTime": 1431175545845,
	        "offenses": [
	            {
	                "seenAt": 1431175492080,
	                "categories": [
	                    "Cross Site Scripting",
	                    "Access Denied"
	                ],
	                "credibility": 2,
	                "description": "B7 - Exploit Alert: Cross Site Scripting Attempt detected\n",
	                "inactive": false,
	                "magnitude": 5,
	                "relevance": 4,
	                "severity": 8,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 2,
	                        "network": "other",
	                        "latitude": 35.994,
	                        "longitude": -78.8986,
	                        "country": "United States",
	                        "city": "Durham",
	                        "internal": false,
	                        "source_ip": "9.77.139.99",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "id": 1,
	                "assigned_to": null,
	                "category_count": 2,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 2,
	                "event_count": 4,
	                "flow_count": 0,
	                "follow_up": false,
	                "last_updated_time": 1431116622860,
	                "offense_source": "9.77.139.99",
	                "offense_type": 0,
	                "policy_category_count": 0,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431114823160,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175492080,
	                "categories": [
	                    "Cross Site Scripting",
	                    "Access Denied"
	                ],
	                "credibility": 2,
	                "description": "Exploit Alert: Cross Site Scripting detected on WebServer\n",
	                "inactive": false,
	                "magnitude": 5,
	                "relevance": 4,
	                "severity": 8,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 2,
	                        "network": "other",
	                        "latitude": 35.994,
	                        "longitude": -78.8986,
	                        "country": "United States",
	                        "city": "Durham",
	                        "internal": false,
	                        "source_ip": "9.77.139.99",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "id": 2,
	                "assigned_to": null,
	                "category_count": 2,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 2,
	                "event_count": 4,
	                "flow_count": 0,
	                "follow_up": false,
	                "last_updated_time": 1431116622860,
	                "offense_source": "172.21.119.175",
	                "offense_type": 1,
	                "policy_category_count": 0,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431114823160,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175492080,
	                "categories": [
	                    "User Right Assigned",
	                    "Misc Exploit",
	                    "Access Denied",
	                    "Remote Access",
	                    "Compliance Policy Violation"
	                ],
	                "credibility": 3,
	                "description": "Policy: Remote: Clear Text Application Usage\n preceded by Exploit Followed by Suspicious Host Activity - Chained\n preceded by Unauthorized Privilege Escalation Detected\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 4,
	                "severity": 6,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "source_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "id": 3,
	                "assigned_to": null,
	                "category_count": 5,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 2,
	                "event_count": 4,
	                "flow_count": 9,
	                "follow_up": false,
	                "last_updated_time": 1431114945100,
	                "offense_source": "172.21.119.175",
	                "offense_type": 0,
	                "policy_category_count": 1,
	                "protected": false,
	                "remote_destination_count": 3,
	                "security_category_count": 4,
	                "source_count": 1,
	                "source_network": "Net-10-172-192.Net_172_16_0_0",
	                "start_time": 1431114845150,
	                "username_count": 1
	            },
	            {
	                "seenAt": 1431175492080,
	                "categories": [
	                    "Remote Access",
	                    "Compliance Policy Violation",
	                    "Access Denied"
	                ],
	                "credibility": 2,
	                "description": "Unauthorized Communication to Sensitive Host\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 4,
	                "severity": 5,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 3,
	                        "network": "other",
	                        "latitude": 34.0119,
	                        "longitude": -118.4682,
	                        "country": "United States",
	                        "city": "Santa Monica",
	                        "internal": false,
	                        "source_ip": "192.16.60.101",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 4,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.202",
	                        "user": null
	                    },
	                    {
	                        "id": 3,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.203",
	                        "user": null
	                    },
	                    {
	                        "id": 2,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.201",
	                        "user": null
	                    }
	                ],
	                "id": 4,
	                "assigned_to": null,
	                "category_count": 3,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 1,
	                "event_count": 29,
	                "flow_count": 21,
	                "follow_up": false,
	                "last_updated_time": 1431115077880,
	                "offense_source": "192.16.60.101",
	                "offense_type": 0,
	                "policy_category_count": 1,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431114960120,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175492080,
	                "categories": [
	                    "Remote Access",
	                    "Access Denied",
	                    "Compliance Policy Violation"
	                ],
	                "credibility": 3,
	                "description": "Unauthorized Communication to Sensitive Host\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 4,
	                "severity": 5,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 4,
	                        "network": "other",
	                        "latitude": 34.0119,
	                        "longitude": -118.4682,
	                        "country": "United States",
	                        "city": "Santa Monica",
	                        "internal": false,
	                        "source_ip": "192.16.60.103",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 4,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.202",
	                        "user": null
	                    },
	                    {
	                        "id": 3,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.203",
	                        "user": null
	                    },
	                    {
	                        "id": 2,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.201",
	                        "user": null
	                    }
	                ],
	                "id": 5,
	                "assigned_to": null,
	                "category_count": 3,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 1,
	                "event_count": 14,
	                "flow_count": 9,
	                "follow_up": false,
	                "last_updated_time": 1431115075820,
	                "offense_source": "192.16.60.103",
	                "offense_type": 0,
	                "policy_category_count": 1,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431115027260,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175492080,
	                "categories": [
	                    "Access Denied",
	                    "Remote Access",
	                    "Compliance Policy Violation"
	                ],
	                "credibility": 3,
	                "description": "Unauthorized Communication to Sensitive Host\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 5,
	                "severity": 5,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 5,
	                        "network": "other",
	                        "latitude": 34.0119,
	                        "longitude": -118.4682,
	                        "country": "United States",
	                        "city": "Santa Monica",
	                        "internal": false,
	                        "source_ip": "192.16.60.102",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 4,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.202",
	                        "user": null
	                    },
	                    {
	                        "id": 3,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.203",
	                        "user": null
	                    },
	                    {
	                        "id": 2,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.201",
	                        "user": null
	                    }
	                ],
	                "id": 6,
	                "assigned_to": null,
	                "category_count": 3,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 1,
	                "event_count": 15,
	                "flow_count": 9,
	                "follow_up": false,
	                "last_updated_time": 1431115071420,
	                "offense_source": "192.16.60.102",
	                "offense_type": 0,
	                "policy_category_count": 1,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431115033730,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175492080,
	                "categories": [
	                    "Data Transfer",
	                    "ACL Deny"
	                ],
	                "credibility": 3,
	                "description": "Flow Source/Interface Stopped Sending Flows\n",
	                "inactive": false,
	                "magnitude": 2,
	                "relevance": 3,
	                "severity": 0,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 5,
	                        "network": "other",
	                        "latitude": 34.0119,
	                        "longitude": -118.4682,
	                        "country": "United States",
	                        "city": "Santa Monica",
	                        "internal": false,
	                        "source_ip": "192.16.60.102",
	                        "user": null
	                    }
	                ],
	                "destinationList": [],
	                "id": 7,
	                "assigned_to": null,
	                "category_count": 2,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 1,
	                "event_count": 2,
	                "flow_count": 0,
	                "follow_up": false,
	                "last_updated_time": 1431116862250,
	                "offense_source": "System: Flow Source Stopped Sending Flows",
	                "offense_type": 14,
	                "policy_category_count": 0,
	                "protected": false,
	                "remote_destination_count": 1,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431116862250,
	                "username_count": 0
	            }
	        ]
	    },
	    {
	        "bucketTime": 1431175485845,
	        "offenses": [
	            {
	                "seenAt": 1431175426550,
	                "categories": [
	                    "Cross Site Scripting",
	                    "Access Denied"
	                ],
	                "credibility": 2,
	                "description": "B8 - Exploit Alert: Cross Site Scripting Attempt detected\n",
	                "inactive": false,
	                "magnitude": 5,
	                "relevance": 4,
	                "severity": 8,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 2,
	                        "network": "other",
	                        "latitude": 35.994,
	                        "longitude": -78.8986,
	                        "country": "United States",
	                        "city": "Durham",
	                        "internal": false,
	                        "source_ip": "9.77.139.99",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "id": 1,
	                "assigned_to": null,
	                "category_count": 2,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 2,
	                "event_count": 4,
	                "flow_count": 0,
	                "follow_up": false,
	                "last_updated_time": 1431116622860,
	                "offense_source": "9.77.139.99",
	                "offense_type": 0,
	                "policy_category_count": 0,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431114823160,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175426550,
	                "categories": [
	                    "Cross Site Scripting",
	                    "Access Denied"
	                ],
	                "credibility": 2,
	                "description": "Exploit Alert: Cross Site Scripting detected on WebServer\n",
	                "inactive": false,
	                "magnitude": 5,
	                "relevance": 4,
	                "severity": 8,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 2,
	                        "network": "other",
	                        "latitude": 35.994,
	                        "longitude": -78.8986,
	                        "country": "United States",
	                        "city": "Durham",
	                        "internal": false,
	                        "source_ip": "9.77.139.99",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "id": 2,
	                "assigned_to": null,
	                "category_count": 2,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 2,
	                "event_count": 4,
	                "flow_count": 0,
	                "follow_up": false,
	                "last_updated_time": 1431116622860,
	                "offense_source": "172.21.119.175",
	                "offense_type": 1,
	                "policy_category_count": 0,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431114823160,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175426550,
	                "categories": [
	                    "User Right Assigned",
	                    "Misc Exploit",
	                    "Access Denied",
	                    "Remote Access",
	                    "Compliance Policy Violation"
	                ],
	                "credibility": 3,
	                "description": "Policy: Remote: Clear Text Application Usage\n preceded by Exploit Followed by Suspicious Host Activity - Chained\n preceded by Unauthorized Privilege Escalation Detected\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 4,
	                "severity": 6,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "source_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "id": 3,
	                "assigned_to": null,
	                "category_count": 5,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 2,
	                "event_count": 4,
	                "flow_count": 9,
	                "follow_up": false,
	                "last_updated_time": 1431114945100,
	                "offense_source": "172.21.119.175",
	                "offense_type": 0,
	                "policy_category_count": 1,
	                "protected": false,
	                "remote_destination_count": 3,
	                "security_category_count": 4,
	                "source_count": 1,
	                "source_network": "Net-10-172-192.Net_172_16_0_0",
	                "start_time": 1431114845150,
	                "username_count": 1
	            },
	            {
	                "seenAt": 1431175426550,
	                "categories": [
	                    "Remote Access",
	                    "Compliance Policy Violation",
	                    "Access Denied"
	                ],
	                "credibility": 2,
	                "description": "Unauthorized Communication to Sensitive Host\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 4,
	                "severity": 5,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 3,
	                        "network": "other",
	                        "latitude": 34.0119,
	                        "longitude": -118.4682,
	                        "country": "United States",
	                        "city": "Santa Monica",
	                        "internal": false,
	                        "source_ip": "192.16.60.101",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 4,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.202",
	                        "user": null
	                    },
	                    {
	                        "id": 3,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.203",
	                        "user": null
	                    },
	                    {
	                        "id": 2,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.201",
	                        "user": null
	                    }
	                ],
	                "id": 4,
	                "assigned_to": null,
	                "category_count": 3,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 1,
	                "event_count": 29,
	                "flow_count": 21,
	                "follow_up": false,
	                "last_updated_time": 1431115077880,
	                "offense_source": "192.16.60.101",
	                "offense_type": 0,
	                "policy_category_count": 1,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431114960120,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175426550,
	                "categories": [
	                    "Remote Access",
	                    "Access Denied",
	                    "Compliance Policy Violation"
	                ],
	                "credibility": 3,
	                "description": "Unauthorized Communication to Sensitive Host\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 4,
	                "severity": 5,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 4,
	                        "network": "other",
	                        "latitude": 34.0119,
	                        "longitude": -118.4682,
	                        "country": "United States",
	                        "city": "Santa Monica",
	                        "internal": false,
	                        "source_ip": "192.16.60.103",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 4,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.202",
	                        "user": null
	                    },
	                    {
	                        "id": 3,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.203",
	                        "user": null
	                    },
	                    {
	                        "id": 2,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.201",
	                        "user": null
	                    }
	                ],
	                "id": 5,
	                "assigned_to": null,
	                "category_count": 3,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 1,
	                "event_count": 14,
	                "flow_count": 9,
	                "follow_up": false,
	                "last_updated_time": 1431115075820,
	                "offense_source": "192.16.60.103",
	                "offense_type": 0,
	                "policy_category_count": 1,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431115027260,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175426550,
	                "categories": [
	                    "Access Denied",
	                    "Remote Access",
	                    "Compliance Policy Violation"
	                ],
	                "credibility": 3,
	                "description": "Unauthorized Communication to Sensitive Host\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 5,
	                "severity": 5,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 5,
	                        "network": "other",
	                        "latitude": 34.0119,
	                        "longitude": -118.4682,
	                        "country": "United States",
	                        "city": "Santa Monica",
	                        "internal": false,
	                        "source_ip": "192.16.60.102",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 4,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.202",
	                        "user": null
	                    },
	                    {
	                        "id": 3,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.203",
	                        "user": null
	                    },
	                    {
	                        "id": 2,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.201",
	                        "user": null
	                    }
	                ],
	                "id": 6,
	                "assigned_to": null,
	                "category_count": 3,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 1,
	                "event_count": 15,
	                "flow_count": 9,
	                "follow_up": false,
	                "last_updated_time": 1431115071420,
	                "offense_source": "192.16.60.102",
	                "offense_type": 0,
	                "policy_category_count": 1,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431115033730,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175426550,
	                "categories": [
	                    "Data Transfer",
	                    "ACL Deny"
	                ],
	                "credibility": 3,
	                "description": "Flow Source/Interface Stopped Sending Flows\n",
	                "inactive": false,
	                "magnitude": 2,
	                "relevance": 3,
	                "severity": 0,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 5,
	                        "network": "other",
	                        "latitude": 34.0119,
	                        "longitude": -118.4682,
	                        "country": "United States",
	                        "city": "Santa Monica",
	                        "internal": false,
	                        "source_ip": "192.16.60.102",
	                        "user": null
	                    }
	                ],
	                "destinationList": [],
	                "id": 7,
	                "assigned_to": null,
	                "category_count": 2,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 1,
	                "event_count": 2,
	                "flow_count": 0,
	                "follow_up": false,
	                "last_updated_time": 1431116862250,
	                "offense_source": "System: Flow Source Stopped Sending Flows",
	                "offense_type": 14,
	                "policy_category_count": 0,
	                "protected": false,
	                "remote_destination_count": 1,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431116862250,
	                "username_count": 0
	            }
	        ]
	    },
	    {
	        "bucketTime": 1431175425845,
	        "offenses": [
	            {
	                "seenAt": 1431175366550,
	                "categories": [
	                    "Cross Site Scripting",
	                    "Access Denied"
	                ],
	                "credibility": 2,
	                "description": "Exploit Alert: Cross Site Scripting Attempt detected\n",
	                "inactive": false,
	                "magnitude": 5,
	                "relevance": 4,
	                "severity": 8,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 2,
	                        "network": "other",
	                        "latitude": 35.994,
	                        "longitude": -78.8986,
	                        "country": "United States",
	                        "city": "Durham",
	                        "internal": false,
	                        "source_ip": "9.77.139.99",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "id": 1,
	                "assigned_to": null,
	                "category_count": 2,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 2,
	                "event_count": 4,
	                "flow_count": 0,
	                "follow_up": false,
	                "last_updated_time": 1431116622860,
	                "offense_source": "9.77.139.99",
	                "offense_type": 0,
	                "policy_category_count": 0,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431114823160,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175366550,
	                "categories": [
	                    "Cross Site Scripting",
	                    "Access Denied"
	                ],
	                "credibility": 2,
	                "description": "Exploit Alert: Cross Site Scripting detected on WebServer\n",
	                "inactive": false,
	                "magnitude": 5,
	                "relevance": 4,
	                "severity": 8,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 2,
	                        "network": "other",
	                        "latitude": 35.994,
	                        "longitude": -78.8986,
	                        "country": "United States",
	                        "city": "Durham",
	                        "internal": false,
	                        "source_ip": "9.77.139.99",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "id": 2,
	                "assigned_to": null,
	                "category_count": 2,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 2,
	                "event_count": 4,
	                "flow_count": 0,
	                "follow_up": false,
	                "last_updated_time": 1431116622860,
	                "offense_source": "172.21.119.175",
	                "offense_type": 1,
	                "policy_category_count": 0,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431114823160,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175366550,
	                "categories": [
	                    "User Right Assigned",
	                    "Misc Exploit",
	                    "Access Denied",
	                    "Remote Access",
	                    "Compliance Policy Violation"
	                ],
	                "credibility": 3,
	                "description": "Policy: Remote: Clear Text Application Usage\n preceded by Exploit Followed by Suspicious Host Activity - Chained\n preceded by Unauthorized Privilege Escalation Detected\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 4,
	                "severity": 6,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "source_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 1,
	                        "network": "Net-10-172-192.Net_172_16_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "172.21.119.175",
	                        "user": null
	                    }
	                ],
	                "id": 3,
	                "assigned_to": null,
	                "category_count": 5,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 2,
	                "event_count": 4,
	                "flow_count": 9,
	                "follow_up": false,
	                "last_updated_time": 1431114945100,
	                "offense_source": "172.21.119.175",
	                "offense_type": 0,
	                "policy_category_count": 1,
	                "protected": false,
	                "remote_destination_count": 3,
	                "security_category_count": 4,
	                "source_count": 1,
	                "source_network": "Net-10-172-192.Net_172_16_0_0",
	                "start_time": 1431114845150,
	                "username_count": 1
	            },
	            {
	                "seenAt": 1431175366550,
	                "categories": [
	                    "Remote Access",
	                    "Compliance Policy Violation",
	                    "Access Denied"
	                ],
	                "credibility": 2,
	                "description": "Unauthorized Communication to Sensitive Host\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 4,
	                "severity": 5,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 3,
	                        "network": "other",
	                        "latitude": 34.0119,
	                        "longitude": -118.4682,
	                        "country": "United States",
	                        "city": "Santa Monica",
	                        "internal": false,
	                        "source_ip": "192.16.60.101",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 4,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.202",
	                        "user": null
	                    },
	                    {
	                        "id": 3,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.203",
	                        "user": null
	                    },
	                    {
	                        "id": 2,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.201",
	                        "user": null
	                    }
	                ],
	                "id": 4,
	                "assigned_to": null,
	                "category_count": 3,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 1,
	                "event_count": 29,
	                "flow_count": 21,
	                "follow_up": false,
	                "last_updated_time": 1431115077880,
	                "offense_source": "192.16.60.101",
	                "offense_type": 0,
	                "policy_category_count": 1,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431114960120,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175366550,
	                "categories": [
	                    "Remote Access",
	                    "Access Denied",
	                    "Compliance Policy Violation"
	                ],
	                "credibility": 3,
	                "description": "Unauthorized Communication to Sensitive Host\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 4,
	                "severity": 5,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 4,
	                        "network": "other",
	                        "latitude": 34.0119,
	                        "longitude": -118.4682,
	                        "country": "United States",
	                        "city": "Santa Monica",
	                        "internal": false,
	                        "source_ip": "192.16.60.103",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 4,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.202",
	                        "user": null
	                    },
	                    {
	                        "id": 3,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.203",
	                        "user": null
	                    },
	                    {
	                        "id": 2,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.201",
	                        "user": null
	                    }
	                ],
	                "id": 5,
	                "assigned_to": null,
	                "category_count": 3,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 1,
	                "event_count": 14,
	                "flow_count": 9,
	                "follow_up": false,
	                "last_updated_time": 1431115075820,
	                "offense_source": "192.16.60.103",
	                "offense_type": 0,
	                "policy_category_count": 1,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431115027260,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175366550,
	                "categories": [
	                    "Access Denied",
	                    "Remote Access",
	                    "Compliance Policy Violation"
	                ],
	                "credibility": 3,
	                "description": "Unauthorized Communication to Sensitive Host\n",
	                "inactive": false,
	                "magnitude": 4,
	                "relevance": 5,
	                "severity": 5,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 5,
	                        "network": "other",
	                        "latitude": 34.0119,
	                        "longitude": -118.4682,
	                        "country": "United States",
	                        "city": "Santa Monica",
	                        "internal": false,
	                        "source_ip": "192.16.60.102",
	                        "user": null
	                    }
	                ],
	                "destinationList": [
	                    {
	                        "id": 4,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.202",
	                        "user": null
	                    },
	                    {
	                        "id": 3,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.203",
	                        "user": null
	                    },
	                    {
	                        "id": 2,
	                        "network": "Net-10-172-192.Net_10_0_0_0",
	                        "latitude": 45.945332,
	                        "longitude": -66.691904,
	                        "country": "Canada",
	                        "city": "Fredericton",
	                        "internal": false,
	                        "local_destination_ip": "10.70.77.201",
	                        "user": null
	                    }
	                ],
	                "id": 6,
	                "assigned_to": null,
	                "category_count": 3,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 1,
	                "event_count": 15,
	                "flow_count": 9,
	                "follow_up": false,
	                "last_updated_time": 1431115071420,
	                "offense_source": "192.16.60.102",
	                "offense_type": 0,
	                "policy_category_count": 1,
	                "protected": false,
	                "remote_destination_count": 0,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431115033730,
	                "username_count": 0
	            },
	            {
	                "seenAt": 1431175366550,
	                "categories": [
	                    "Data Transfer",
	                    "ACL Deny"
	                ],
	                "credibility": 3,
	                "description": "Flow Source/Interface Stopped Sending Flows\n",
	                "inactive": false,
	                "magnitude": 2,
	                "relevance": 3,
	                "severity": 0,
	                "status": "OPEN",
	                "sourceList": [
	                    {
	                        "id": 5,
	                        "network": "other",
	                        "latitude": 34.0119,
	                        "longitude": -118.4682,
	                        "country": "United States",
	                        "city": "Santa Monica",
	                        "internal": false,
	                        "source_ip": "192.16.60.102",
	                        "user": null
	                    }
	                ],
	                "destinationList": [],
	                "id": 7,
	                "assigned_to": null,
	                "category_count": 2,
	                "close_time": null,
	                "closing_reason_id": null,
	                "closing_user": null,
	                "device_count": 1,
	                "event_count": 2,
	                "flow_count": 0,
	                "follow_up": false,
	                "last_updated_time": 1431116862250,
	                "offense_source": "System: Flow Source Stopped Sending Flows",
	                "offense_type": 14,
	                "policy_category_count": 0,
	                "protected": false,
	                "remote_destination_count": 1,
	                "security_category_count": 2,
	                "source_count": 1,
	                "source_network": "other",
	                "start_time": 1431116862250,
	                "username_count": 0
	            }
	        ]
	    }
	]