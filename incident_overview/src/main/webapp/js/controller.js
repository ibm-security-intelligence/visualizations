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

//*******************************************
//
//   OFFENSE MANAGER
//
//*******************************************
var offenseManager = {

	currentTimeIndex: 0, // The newest time is 'now'. Each refresh, time in increase by 1.

	initialBucketsToFetch: 20, // How Many Buckets to fetch first. If the backend is set to fetch a new 'bucket' each minute, this will give two 20 minutes worth of offenses.

	maximumBuckets: 20, // Only keep this many buckets. Older buckets will be pushed out.

	/**
	 * Returns top 10 events by event count
	 */
    getTopOffensesByByEventCount: function(offenseData) {

    	var offensesbyCount = offenseData.sort(sortByProperty('event_count'), 'desc').slice(0,10);
    	
    	return offensesbyCount;
    },
                	                
	initialize: function(callBack) {

		var offenseAPI = "/offense-viz/api/offenses?buckets=" + Math.min(offenseManager.initialBucketsToFetch, offenseManager.maximumBuckets);
		
        $.ajax({
            url: offenseAPI,
            dataType: 'json',
            cache: false,
            success: function (data)
            {
            	//data = RSAData;

            	//Note: Newest bucket is bucket 0
            	offenseManager.offenseCache = offenseManager._decorateOffenses(data);
            	
            	callBack( offenseManager.offenseCache );
            },
            error: function(xhr, status, error)
            {
            	var err = eval("(" + xhr.responseText + ")");
            	alert(err.message);
            	callBack(null);
            }
        });
	
	},
	
	fetchNewData: function(callBack)
	{
		var offenseAPI = "/offense-viz/api/offenses?buckets=1";
		
        $.ajax({
            url: offenseAPI,
            dataType: 'json',
            cache: false,
            success: function (data)
            {
            	if (data === null)
            	{
            		callBack( null );
            		return;
            	}
            		
            	//We're only going to add the data if it's from a new bucket.
        		if ( data[0].bucketTime >  offenseManager.offenseCache[0].bucketTime )
            	{
            		//console.log("We have new data. Caching and returning");
            		//Append it
                	//We just got ONE new bucket. Add it to the first[0] of the cache .
                	var decoratedData = offenseManager._decorateOffenses(data);
                	offenseManager.offenseCache.unshift(decoratedData[0]);
                	
                	//Cap the number buckets cached. Slice off the very last element
                	offenseManager.offenseCache = offenseManager.offenseCache.slice(0, offenseManager.maximumBuckets);

                	callBack( decoratedData );
            	}
            	else
            	{
            		//console.log("No new data.");

            		//No new data? Return nothing.
            		callBack( null );
            		return;
            	}
            	
            	
            },
            error: function(xhr, status, error)
            {
            	var err = eval("(" + xhr.responseText + ")");
            	alert(err.message);
            }
        });
	
	},
	
	/**
	 * DEPRECATED
	 * Takes the passed in offenseBuckets and adds new properties to each offense.
	 *  Was used to add x and y info to each offense. This is now done externally.
	 * @param offenseBuckets
	 * @returns OffenseBucket object containing the decorated offenses.
	 */
	_decorateOffenses: function(offenseBuckets)
	{
		$.each(offenseBuckets, function(i, offenseBucket)
		{
			var offensesForThisBucket = offenseBucket.offenses;
			offensesForThisBucket = offensesForThisBucket.sort(sortByProperty('magnitude'), 'desc');
			$.each(offensesForThisBucket, function(i, offense)
			{
				//Populate offensePostion cache
				var coordinates = offenseManager.getOffenseCoordinates(offense);
			})
		})
		
		//Offenses have now been decorated with the data we need
		return offenseBuckets;
	},

	/**
	 * Returns the current offenseBuckets (all buckets of all offenses)
	 * @returns {Array}
	 */
	getAllOffenses: function() {
		return offenseManager.offenseCache;
	},
	
	/**
	 * Returns 1 offense bucket (which contains 0+ offenses) based on the time index specified
	 * @param timeIndex
	 * @returns
	 */
	getOffensesByTimeBucket: function(timeIndex) {
		//Return the offenses for time Index specified.
		// Each time a set of offenses is fetched, the result is added to an array index based on time.
		// If you fetch once a minute for 5 minutes, you'll get an array with 5 sets of offenses. One for each minute
		//
		// If timeIndex isn't specified, you get the latest fetched set?
		if (timeIndex === undefined)
		{
			//return the most current time.
			return offenseManager.offenseCache[ 0 ];
		}
		try
		{
			return offenseManager.offenseCache[timeIndex];
		}
		catch (e)
		{
			return null;
		}
	},
	
	/**
	 * Returns the requested offense (by ID) from the specified bucket.
	 * @param offenseID
	 * @param timeBucket
	 * @returns
	 */
	getOffense: function(offenseID, timeBucket)
	{
		var offensesBucket = offenseManager.getOffensesByTimeBucket(timeBucket);
		if (offensesBucket === null) {return null};
		
		var allOffenses = offensesBucket.offenses;
		var matchedOffense = null;
		
		$.each(allOffenses, function(i, offense) {
			if (offense.id == offenseID)
			{
				matchedOffense = offense
				return false; //break loop
			}
		});

		return matchedOffense;
		
	},

	/**
	 * Returns the URL to navigate the user to QRadar to investigate the offense further.
	 * @param offense
	 * @returns {String}
	 */
	getOffenseInvestigationURL: function(offense)
	{
		var offenseDetailURL = qradarServer + "console/qradar/jsp/QRadar.jsp?appName=Sem&pageId=OffenseSummary&summaryId=" + offense.id;
		
		return offenseDetailURL;
	},
	
	/**
	 * Returns an x and y coordinate for the specified offense.
	 *  If a coordinate DOESN'T exist, one is created and cached so it can be looked up again over time.
	 *  Used to paint the offense bubbles.
	 * @param offense
	 * @returns A coordinate object which has an x and y property.
	 */
	_offenseCoordinates: {},
	getOffenseCoordinates: function (offense)
	{
		var debugString = "Getting coords for offense " + offense.id + ". ";
		
		//Check if the offense has co-ordinates already.
		if (offense.position)
		{
			//console.log("Found pre-sent cordinates for offense " + offense.id);
			offenseManager._offenseCoordinates[offense.id] = offense.position;
		}
		else
		{
			//console.log("MISSED pre-sent cordinates for offense " + offense.id);
		}
		
		var coordinates = offenseManager._offenseCoordinates[offense.id];
		if (coordinates == null)
		{
			debugString += " Cache Miss ";
			coordinates = getReasonablePosition(offense);
			offenseManager._offenseCoordinates[offense.id] = coordinates;
		}
		else
		{
			debugString += " Cache Hit ";
		}
		
		debugString += " (" + coordinates.x + ", " + coordinates.y + ")";


//console.log(debugString);
		return coordinates;
	},
	
	/**
	 * Returns an array of all of the offenses which are linked to offense passed in
	 * An offense is considered 'linked' to the offense passed in if it has a SOURCE in common with one of the destinations of the original offense.
	 * I.E. Offense A has three destinations (10.100.100.1,10.100.100.2,10.100.100.3). Offense B has 1 Source (10.100.100.2). It's possible that Offense B Occurred BECAUSE of Offense A. They are linked. 
	 */
	getLinkedOffenses: function(originalOffense, offenseList)
	{
		var destinations = originalOffense.destinationList;
		
		//Sanity Check!
		if (typeof destinations === "undefined") {
			return null;
		}
		
		if (offenseList === null) { return null; }
		
		//Loop though ALL offenses.
		var linkedOffenses = [];

		$.each(offenseList, function(i, offense)
		{
			//An offense can't be linked to itself
			if (originalOffense.id === offense.id)
			{
				return true; //Skip this iteration
			}
			
			var sources = offense.sourceList;
			
			//we need to check if there is an intersection in the original destinations and the sources of THIS offense.
			var _commonIPs = offenseManager.intersect(destinations, sources);
			if (_commonIPs.length > 0)
			{
				var link = {
						offense: null,
						commonIPs: null
				};
				
				link.offense = offense;
				link.commonIPs = _commonIPs;
				
				linkedOffenses.push(link);
			}
			
		});
		
		return linkedOffenses;
	},
	
	getChildOffenses: function(originalOffense, offenseList)
	{
		var sources = originalOffense.sourceList;
		
		//Sanity Check!
		if (typeof sources === "undefined") {
			return null;
		}
		
		if (offenseList == null) { return null; }
		
		//Loop though ALL offenses.
		var linkedOffenses = [];

		$.each(offenseList, function(i, offense)
		{
			//An offense can't be linked to itself
			if (originalOffense.id == offense.id)
			{
				return true; //Skip this iteration
			}
			
			var destinations = offense.destinationList;
			
			//we need to check if there is an intersection in the original destinations and the sources of THIS offense.
			var _commonIPs = offenseManager.intersect(destinations, sources);
			if (_commonIPs.length > 0)
			{
				
				var link = {
						offense: null,
						commonIPs: null
				};
				
				
				link.offense = offense;
				link.commonIPs = _commonIPs;
				
				linkedOffenses.push(link);
			}
		});
		
		return linkedOffenses;
	},
	
	getNotes: function (offense, callback)
	{
		//Check the status, if it's good - get the data, else keep waiting!
		var offenseNotesURL = qradarServer + "api/siem/offenses/" + offense.id + "/notes";

        $.ajax({
            type: "GET",
            url: offenseNotesURL,
            dataType: "json",
            headers: { "SEC": qradarAuthToken },
            success: function (notes)
            {
            	callback(notes);
            },
            error: function(xhr, status, error)
            {
        		console.log(xhr.responseText);
        		callback(null);
            }
        });
	
	},
	
	/**
	 * Offense json object just returns a type ID - let's translate it back to word here.
	 * Returns: Offense Type String
	 */
	getOffenseType: function(offense)
	{
		var offenseTypeString = "Other";
		

		/*
				BY_ATTACKER(0),
				BY_TARGET(1),
				BY_QID(2),
				BY_USERNAME(3),
				BY_SRC_MAC(4),
				BY_DST_MAC(5),
				BY_DEVICE(6),
				BY_HOSTNAME(7),
				BY_SRC_PORT(8),
				BY_DST_PORT(9),
				BY_SRC_IPV6(10),
				BY_DST_IPV6(11),
				BY_SRC_ASN(12),
				BY_DST_ASN(13),
				BY_RULE(14),
				BY_APP_ID(15),
				BY_SRC_IDENTITY(16),
				BY_DST_IDENTITY(17),
				NO_OP_MAPPER( - 1);
		*/
		
		switch (offense.offense_type)
		{
			case 0:
				offenseTypeString = "Source IP";
				break;
			case 1:
				offenseTypeString = "Destination IP";
				break;
			case 2:
				offenseTypeString = "Event";
				break;
			case 3:
				offenseTypeString = "Username";
				break;
			case 4:
				offenseTypeString = "Source MAC";
				break;
			case 5:
				offenseTypeString = "Dest MAC";
				break;
			case 6:
				offenseTypeString = "Log Source";
				break;
			case 7:
				offenseTypeString = "Host";
				break;
			case 8:
				offenseTypeString = "Source Port";
				break;
			case 9:
				offenseTypeString = "Destination Port";
				break;
			case 10:
				offenseTypeString = "Source IPv6";
				break;
			case 11:
				offenseTypeString = "Destination IPv6";
				break;
			case 12:
				offenseTypeString = "Source ASN";
				break;
			case 13:
				offenseTypeString = "Destination ASN";
				break;
			case 14:
				offenseTypeString = "Rule";
				break;
			case 15:
				offenseTypeString = "Application";
				break;
			case 16:
				offenseTypeString = "Source Identity";
				break;
			case 17:
				offenseTypeString = "Destination Identity";
				break;
		}
		
		return offenseTypeString;
	},
	

	/** Cache holds the data returned from the API **/
	offenseCache: [],


	intersect: function(destinations, sources)
	{
		var intersection = [];

		if (destinations === null || sources === null) { return intersection; }
		if (destinations.length === 0 || sources.length === 0 ) { return intersection; }
	
		for(var i = 0; i < destinations.length; i++){
			for(var j=0; j < sources.length; j++){
				if (destinations[i].local_destination_ip == sources[j].source_ip)
					intersection.push(sources[j].source_ip);

			}
		}
		return intersection;
	}
};
//*******************************************
//
// END OFFENSE MANAGER
//
//*******************************************

//*******************************************
//
//   EVENT MANAGER
//
//*******************************************

var arielManager = {
		eventSearchHandle: null,
		eventRequired: false,
		eventDone: false,
		flowSearchHandle: null,
		flowRequired: false,
		flowDone: false,
		
		getDataForHandle: function(handle, callback)
		{
			//handle check for null
			if (handle === null)
			{
				console.log("Error - ariel query handle NULL. No query to process")
				callback(null);
			}
			//Check the status, if it's good - get the data, else keep waiting!
			var arielStatusUrl = qradarServer + "api/ariel/searches/" + handle.search_id;

	        $.ajax({
	            type: "GET",
	            url: arielStatusUrl,
	            dataType: "json",
	            headers: { "SEC": qradarAuthToken },
	            success: function (statusUpdate)
	            {
	            	console.log("Ariel Query Status: " + statusUpdate.status);
	            	//Check status
	            	if (statusUpdate.status != "COMPLETED")
	            	{
	            		//check again!
		                setTimeout(function () {
		                    arielManager.getDataForHandle(handle, callback);
		                }, 1500);
	            	}
	            	else
	            	{
	            		//Ok. The search is complete. What we have now is only a status object.
	            		// Let's get the data and return it.

	            		var arielEvents = null; // Data that will be returned

	            		var arielRecordsUrl = qradarServer + "api/ariel/searches/" + handle.search_id + "/results";
	            		
	        	        $.ajax({
	        	            type: "GET",
	        	            url: arielRecordsUrl,
	        	            dataType: "json",
	        	            headers: { "SEC": qradarAuthToken },
	        	            success: function (arielData)
	        	            {
	        	            	console.log("Ariel Query " +  handle.search_id + " complete. Returned " +  (arielData.events ? arielData.events.length : arielData.flows.length) + " results");
	        	            	callback(arielData);
	        	            },	            		
	        	            error: function (xhr, status, error) {
	        	            	console.log(xhr.statusText);
	        	            	sideVizManager.failedToLoad();
	        	            	return null;
	        	            }
	        	        });
	            	}
	            	
	            },
	            error: function (xhr, status, error) {
	            	console.log(xhr.statusText);
	            	sideVizManager.failedToLoad();
	            	return null;
	            }
	        });
		},
		
		startSearchForOffense: function(offense, callback) {
			if (offense === null) { return null; }
			arielManager.eventSearchHandle = null;
			arielManager.flowSearchHandle = null;
			arielManager.eventDone = false;
			arielManager.flowDone = false;
			arielManager.eventRequired = false;
			arielManager.flowRequired = false;
	        
			var eventSelect = "select sourceip as \"Source IP\", sourceport as \"Source Port\", destinationport as \"Destination Port\", destinationip as \"Destination IP\" from events where INOFFENSE(" + offense.id + ") GROUP BY sourceip, sourceport, destinationport, destinationip ORDER BY sourceip, destinationip, sourceport, destinationport";
			var flowSelect = "select sourceip as \"Source IP\", sourceport as \"Source Port\", destinationport as \"Destination Port\", destinationip as \"Destination IP\" from flows where INOFFENSE(" + offense.id + ") GROUP BY sourceip, sourceport, destinationport, destinationip ORDER BY sourceip, destinationip, sourceport, destinationport";
			
			var timeDifferenceInMinutes = parseInt(QRadarTimeZoneOffsetInMinutes) + (new Date().getTimezoneOffset());
			
			var offenseStartInMS = offense.start_time + (timeDifferenceInMinutes * 60 * 1000);
			var offsenseEndInMS =  offense.last_updated_time + (timeDifferenceInMinutes * 60 * 1000);

			//Grab the time of this offense for the select statement.
			var start = d3.time.format('%Y-%m-%d %H:%M')(new Date(offenseStartInMS));
			var stop = d3.time.format('%Y-%m-%d %H:%M')(new Date(offsenseEndInMS + 60000)); //ADD A MINUTE TO ME.
			var limit = " LIMIT 1000"; 
			var suffix =  " START '" + start + "' STOP '" + stop + "'" + limit;

			eventSelect = eventSelect + suffix;
			flowSelect = flowSelect + suffix;

			console.log("Ariel Query For Offense " + offense.id + ": " + eventSelect);
			
			if(offense.event_count > 0){
				arielManager.eventRequired = true;
				arielManager._ajax(eventSelect, arielManager._eventCallback);
			}
			if(offense.flow_count > 0){
				arielManager.flowRequired = true;
				arielManager._ajax(flowSelect, arielManager._flowCallback);
			}
		},
		
		/**
		 * Stop an ariel search and discard the results
		 * @param handle
		 */
		deleteSearch: function(handle) {
			//handle check for null
			if (handle === null)
			{
				console.log("Error - ariel query handle NULL. No query to process")
				return null;
			}
			//Check the status, if it's good - get the data, else keep waiting!
			var arielStatusUrl = qradarServer + "api/ariel/searches/" + handle.search_id;

	        $.ajax({
	            type: "DELETE",
	            url: arielStatusUrl,
	            dataType: "json",
	            headers: { "SEC": qradarAuthToken },
	            success: function (statusUpdate)
	            {
	            	console.log("Ariel Query " + statusUpdate.search_id + " deleted");
	            },
	            error: function (xhr, status, error) {
	            	console.log("ERROR Ariel Query NOT deleted");
	            	console.log(xhr.statusText);
	            }
	        });
		},
		
		_ajax: function(query, callback){
			var arielUrl = qradarServer + "api/ariel/searches";
			$.ajax({
				type: "POST",
	            url: arielUrl + "?query_expression=" +  encodeURIComponent(query),
	            dataType: 'json',
	            headers: { "SEC": qradarAuthToken },
	            cache: false,
	            success: function (data)
	            {
	            	callback(data);
	            },
	            error: function (xhr, status, error) {
	            	console.log("Ariel Query For " + arielUrl + " ERROR: " + xhr.statusText);
	            	sideVizManager.failedToLoad();
	            }
	        });
		},
		
		_eventCallback: function(data){
			arielManager.eventSearchHandle = data;
			arielManager.getDataForHandle(arielManager.eventSearchHandle, arielManager._loadEventData);
		},
		
		_flowCallback: function(data){
			arielManager.flowSearchHandle = data;
			arielManager.getDataForHandle(arielManager.flowSearchHandle, arielManager._loadFlowData);
		},
		
		_loadEventData: function(data){
			sideVizManager.addEventData(data);
			arielManager.eventDone = true;
			arielManager._checkComplete();
		},
		
		_loadFlowData: function(data){
			sideVizManager.addFlowData(data);
			arielManager.flowDone = true;
			arielManager._checkComplete();
		},
		
		_checkComplete: function(){
			if( (!arielManager.eventRequired || (arielManager.eventRequired && arielManager.eventDone)) &&
				(!arielManager.flowRequired || (arielManager.flowRequired && arielManager.flowDone)) 
			){
				sideVizManager.completeViz();
			}
		}
}
//*******************************************
//
// END EVENT MANAGER
//
//*******************************************

//*******************************************
//
// SOURCE / DEST MANAGER
//
//*******************************************
var ActorManager = {
		
		
       // Take in a set of IDs, and return the matching set of Sources.
		getSourcesById: function (sourceId)
		{
			//loop through all IDs and get the sources
			var sources = [];
			$.each(sourceId, function(i, id)
			{
				var foundSource = ActorManager._findSourceById(id);
				if (foundSource)
					sources.push(foundSource);
			});
			return 	sources;
		},
		
		getDestsById: function (destId)
		{
			//loop through all IDs and get the sources
			var dests = [];
			$.each(destId, function(i, id)
			{
				var foundDest = ActorManager._findDestById(id);
				if (foundDest)
					dests.push(foundDest);
			});
			return dests;
		},
		
		
		//Internal function
		_findSourceById: function (id)
		{
			var foundObect = null;
			
			$.each(randomSources, function(i, source) {
				if (source.id == id)
				{
					foundObject = source
					return false; //break loop
				}
			});
	
			return foundObject;
		},
		//Internal function
		_findDestById: function (id)
		{
			var foundObect = null;
			
			$.each(randomDestinations, function(i, dest) {
				if (dest.id == id)
				{
					foundObject = dest
					return false; //break loop
				}
			});
	
			return foundObject;
		}
}
//*******************************************
//
// END SOURCE / DEST MANAGER
//
//*******************************************

//*******************************************
//
//   XFORCE INTEGRATION MANAGER
//
//*******************************************

var XForceManager = {
		
		_getColor: function(risklevel) {
			switch (!0) {
				case risklevel < 4:
					return "#693";
					break;
				case risklevel < 7 && risklevel >= 4:
					return "#F90";
					break;
				case risklevel >= 7:
					return "#C00";
					break;
				default:
					return "#000";
					break;
			}
		},

		/**
		 * Useful if you want to pop up a window / pane with the X-Force IP report in it. 
		 */
		getIPReportURL: function(ipAddress)
		{
			return "https://" + xForceWebUrl + "/ip/" + ipAddress;
		},
		

		getIPReputation: function (ip, callback, index) {
			
			var IPRepURL = "https://" + xForceApiUrl + "/ipr/" + encodeURIComponent(ip);
			
			$.ajax({
				  url      : IPRepURL,
				  dataType : 'json',
		          headers: { "authorization": "Bearer " + xForceAuthToken },
				  
		          success  : function (data)
				  {  
		        	  data.color = XForceManager._getColor(data.score);
		        	  
		        	  if(typeof index !== 'undefined'){
		        		  callback(data,index);
		        	  } else {
		        		  callback(data);
		        	  }
				  },
				  error: function(xhr, status, error)
				  {
					  console.log("getIPReputation failed. " + xhr.responseText);
					  if(typeof index !== 'undefined'){
						  callback (null,index);
					  } else {
		        		  callback(null);
		        	  }
				  }
				});
		}
}

//*******************************************
//
//   THREAT FEED MANAGER
//
//*******************************************

var RssFeedManager = {

		_getFeed: function (callback) {
			
			//var FEED_URL = "http://www.iss.net/rss.php";
			var FEED_URL = "http://feeds.feedburner.com/SecurityIntelligence?format=xml";
			
			$.ajax({
				  url      : document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(FEED_URL),
				  dataType : 'json',
				  success  : function (data)
				  {
				    if (data.responseData.feed && data.responseData.feed.entries) {
				    	callback(data.responseData.feed.entries);
				    }
				  }
				});

		},
		
		updateFeed: function(callback)
		{
			var newItemTemplate = "<li><a href=\"{{news.link}}\" target=\"_blank\">{{news.title}}</a></li>";

			RssFeedManager._getFeed( function( newsItems ) {
				
				// SUCCESS
				$.each(newsItems, function(i, newsItem) {
					var escapedTitle = htmlEncode(newsItem.title);
					var escapedLink = htmlEncode(newsItem.link);

					var newsItem = newItemTemplate.replace("{{news.title}}", escapedTitle);
					var newsItem = newsItem.replace("{{news.link}}", escapedLink);
					
					//Insert it into the dom
					$(".newsTickerFeed").append(newsItem);
				});

				callback();
			});
		}
};

function isValidIP(inputText)  
{  
	var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;  
	if(inputText.match(ipformat))  
		return true;  
	else
		return false;
}

function htmlEncode(value){
	  //create a in-memory div, set it's inner text(which jQuery automatically encodes)
	  //then grab the encoded contents back out.  The div never exists on the page.
	  return $('<div/>').text(value).html();
	}

function htmlDecode(value){
  return $('<div/>').html(value).text();
}

function sortByProperty(property, asc)
{
    'use strict';
    return function (a, b) {
        var sortStatus = 0;
        
        if (asc === 'asc')
        {
	        if (a[property] < b[property]) {
	            sortStatus = -1;
	        } else if (a[property] > b[property]) {
	            sortStatus = 1;
	        }
        }
        else
        {
	        if (a[property] > b[property]) {
	            sortStatus = -1;
	        } else if (a[property] < b[property]) {
	            sortStatus = 1;
	        }
        }
        return sortStatus;
    };
}

/************************
*
* Helper function for now... returns ana object with a random X and Y.
* Used for randomly positioning the offense bubbles that hopefully
* don't intersect with other bubbles
*
*************************/
function getReasonablePosition(offense) {
	var radius = offense.magnitude * 15;
	//console.log(offense.id+": "+offense.magnitude)
	var position = getRandomPosition(radius);
	var maxTrys = 100;
	var trys = 0;
	while(intersectsAny(offense.id, position, offenseManager._offenseCoordinates)) {
		position = getRandomPosition(radius);
		if(++trys >= maxTrys){break}
	}
	//console.log(offense.id, position);
	return position;
}
function intersectsAny(id, position, others) {
	for(var i in others) {
		//console.log("checking "+id+", "+i);
		if(intersects(position, others[i])) {
			return i;
		}
	}
	return 0;
}
function intersects(b1, b2) {
	var r1 = b1.r*0.8 || 10;
	var r2 = b2.r*0.8 || 10;
	var d = Math.pow(b2.x-b1.x, 2) + Math.pow(b2.y-b1.y, 2);
	return d <= Math.pow(r1+r2, 2);
}

/************************
*
* Helper function for now... returns a java object with a random X and Y.
* Used for randomly positioning the offense bubbles
*
*************************/
function getRandomPosition(radius)
{
	var v = document.getElementById("offenseVis1");

	var minX = radius;
	var minY = radius;

	var maxX = (v ? v.clientWidth : 800) - radius - 60;
	var maxY = (v ? v.clientHeight : 300) - radius - 60;
	
	var position = {
	        x: Math.floor(Math.random() * (maxX - minX) + minX),
	        y: Math.floor(Math.random() * (maxY - minY) + minY),
	        r: radius
	    };

	return position;
}
function inBounds(p) {
	var v = document.getElementById("offenseVis1");
	var maxX = (v ? v.clientWidth : 800) - p.r;
	var maxY = (v ? v.clientHeight : 300) - p.r;
	return p.x<=maxX && p.y<=maxY;
}