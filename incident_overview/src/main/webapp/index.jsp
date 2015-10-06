<!--
Copyright (c) 2015, IBM

Licensed under the Apache License, Version 2.0 (the "License"); you may not use 
this file except in compliance with the License. You may obtain a copy of the 
License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed 
under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR 
CONDITIONS OF ANY KIND, either express or implied. See the License for the 
specific language governing permissions and limitations under the License.
-->

<%@ page import="com.ibm.si.qradar.offenseviz.conf.QRadarConfig" %>
<%@ page import="java.util.TimeZone" %>
<%@ page import="java.util.Date" %>
<!doctype html>
<html lang="en">
<head>
	<meta http-equiv="content-type" content="text/html" charset="utf-8"name="charset">
 	<title>IBM QRadar Security Intelligence</title>
	<meta name="description" content="Security intelligence">
	<meta name="viewport" content="width=device-width">
	<link rel="stylesheet" href="css/vis.css">
	<link rel="stylesheet" href="css/nv.d3.css">
	
	<script charset="utf-8" src="js/d3.js"></script>
	<script charset="utf-8" src="js/d3plus.js"></script>
	<script charset="utf-8" src="js/nv.d3.js"></script>

	<script src="js/jquery-1.11.1.js"></script>
	<script src="js/jquery.vticker.min.js"></script>
	<script type="text/javascript" src="map/js/jquery.tipsy.js"></script>
	<link rel="stylesheet" type="text/css" href="map/css/tipsy.css" />
	<link rel="stylesheet" type="text/css" href="map/css/throbber.css" />
	<link rel="stylesheet" type="text/css" href="map/css/floatingCircles.css" />

	<link rel="stylesheet" href="css/d3.slider.css" />  
	<script src="js/d3.slider.js"></script>
	<%
	QRadarConfig qConfig = QRadarConfig.getInstance();
	String server =	qConfig.getUrl();
	String token = qConfig.getAuthorizationToken();

	String xForceToken = qConfig.getXforceAuthToken();

	String xForceApiUrl = qConfig.getXforceApiUrl();
	String xForceWebUrl = qConfig.getXforceWebUrl();

	int updateIntervalInSeconds = qConfig.getUpdateInterval();

 	final TimeZone timeZone = TimeZone.getTimeZone(qConfig.getQradarTimeZone());
	int offset = timeZone.getOffset( System.currentTimeMillis() );
	%>
	<script>
		var qradarServer = "https://<%=server%>/";
		var qradarAuthToken = "<%=token%>";
	
		var xForceAuthToken = "<%=xForceToken%>";
	
		var xForceApiUrl = "<%=xForceApiUrl%>";
		var xForceWebUrl = "<%=xForceWebUrl%>";
		
		var updateIntervalInSeconds = "<%=updateIntervalInSeconds%>";

		var QRadarTimeZone = "<%=timeZone.getDisplayName()%>";
		var QRadarTimeZoneOffsetInMinutes = "<%=(offset / 1000) / 60%>";
	</script>
	
	<script src="js/controller.js"></script>
	<script src="js/view.js"></script>
	
	<link rel="stylesheet" type="text/css" href="map/css/d3.parcoords.css">
    <link rel="stylesheet" type="text/css" href="map/css/main.css">
    
	<script src="js/queue.v1.min.js"></script>

	<script>
	function handleKeypress(e)
	{
		var LEFT_ARROW = 37;
		var RIGHT_ARROW = 39;
		var PAUSE = 19;
		
		if (e.which == LEFT_ARROW) //left arrow
		{
			if (offenseManager.currentTimeIndex < offenseManager.maximumBuckets)
			{
				offenseManager.currentTimeIndex ++;
				paintPage( offenseManager.currentTimeIndex );
			}
			if (console) console.log("Left arrow pushed. New Bucket: " + offenseManager.currentTimeIndex);
							

		}
		else if (e.which == RIGHT_ARROW)
		{
			if (offenseManager.currentTimeIndex > 0)
			{
				offenseManager.currentTimeIndex --;
				paintPage( offenseManager.currentTimeIndex );
			}
			if (console) console.log("Right arrow pushed. New Bucket: " + offenseManager.currentTimeIndex);

		}
		else if (e.which == PAUSE)
		{
			appManager.UpdateTimerPaused = !appManager.UpdateTimerPaused;

			
			if (appManager.UpdateTimerPaused)
			{
				if (console) console.log("UpdateTimer is now paused");
			}
			else
			{
				if (console) console.log("UpdateTimerPaused in running");
				//Fetch data now in case we missed any!
				addData();
			}
		}
		else
			if (console) console.log("Key press: " + e.which);
	}

	$( document ).ready(function() {
	
		offenseManager.initialize( function(offenseResults) { drawTimeScrubber(offenseResults), drawTimeSeries(offenseResults), paintPage( 0 ) }  );
		
		$("#investigateButton").click(function() {
			var url = offenseManager.getOffenseInvestigationURL(window.lastOffenseShow);
			
			window.open(url, "Offense" + window.lastOffenseShow.id);
		});
		
		$('html').keydown(function(e) {
			handleKeypress(e);
	    });

		nv.utils.windowResize(function(){ 
			window.timechart.update(); 
			d3.select("#timeSeries svg").select("g").attr("transform", function(d) { return "translate(37,30)"; });
			positionFlourish(); 
		});
		
		setInterval(animatePingers,2500);
		
		//Auto fetch some new data from the server
		setInterval(function() { 
				if (!appManager.UpdateTimerPaused)
				{
					if (console) console.log("appManager.UpdateTimerPaused is False. Fetching new data...");
					addData();
				}
				else
				{
					if (console) console.log("appManager.UpdateTimerPaused is True. Skipping new data fetch.");
				}}
			, updateIntervalInSeconds * 1000);
	});
	</script>

</head>
<body>
<div id="titlebar">
	<h1 class="producttitle"><a id="productLink" href="javascript:void(0)" onclick="javascript:addData(); return false;"><span style="font-weight:bold">IBM</span> QRadar Security Intelligence - Incident Overview</a></h1><div id="icon">  </div>
</div>
<div id="mainContentPane" style="">

	<div id="offenseVis1" style="float:left;height:calc(100% - 100px);width:calc(100% - 275px);background-color:#f7f7f7">
	
	<H1 id="visTitle"></H1>
	
	<!-- Time slice indicator -->
	<div id="flourishTrack" style="position: fixed; width:calc(100% - 315px); height:30px; bottom: 150px; z-index:5;">
		<div id="flourish" style="position: absolute; display:inline"><img src="images/flourish4.png"/></div>
	</div>
	<div id="timeSeriesWrapper" style="position: absolute; bottom: 20px; background-color: white">
		<div id="timeSeries" style="height: 100px;" ></div>
	</div>
	<div id="timeSlider" style="position: absolute; bottom: 40px;"></div>
	
	</div>
	<div class="feedBarContainer">
		<div class="feedBarContent">
	
			<div class="smallChart" id="chart1">
				<h1>Incidents by Magnitude</h1>
				<div id="chart1vis" style=""></div>
			</div>
		
			<div class="smallChart" id="chart2" style="margin-top:-50px">
				<h1>Average Incident Duration</h1>
				<div id="chart2vis">
					<div id="durationValue" style="font-size: 36px;text-align: center;">0</div>
					<div id="durationLabel" style="font-size:16px;text-align: center;">Minutes</div>
				</div>
			</div>

			<div class="smallChart" id="chart3">
				<h1>Top Categories</h1>
				<div id="chart3vis" style="width:250px"><svg></svg></div>
			</div>

			<div class="smallChart" id="chart4" style="margin-top:-40px">
				<h1>Top Incidents by Event Count</h1>
				<div id="chart4vis" style="height:200px"><svg></svg></div>
			</div>

		</div>
	</div>

	<div id="offenseReport">
		<span class="button investigateButton" id="investigateButton" title="View Incident in QRadar">Investigate &gt;</span>
		<div id="assignedToUser" title="Assigned to Rick McCaskill">
			<img id="userImage"src="images/user-profile-light_32.png" style="display:block;margin:auto;"/>
			<div id="userName">Rick McCaskill</div>
		</div>
		<div class="offenseReportContents">
			<div>
				<div class="magnitudeContainer">
					<span class="magnitudeText">Magnitude</span>
					<span class="magnitude">10</span>
				</div>
				<div class="offenseReportContentsHeader">
					<div class="paneTitle" id="paneTitle">QRadar Incident Report</div>
					<H1 id="offenseTitle">Offense Title</H1>
				</div>
			</div>
			
			<div class="clear"></div>
			<div class="offenseReportContentsRow">			
				<H2>Details</H2>
	
				<table style="width: 100%">
					<tr>
						<th>Categories</th>
						<td id="offenseCategories"></td>
					</tr>
					<tr>
						<th>Duration</th>
						<td id="offenseDuration"></td>
					</tr>
					<tr>
						<th>Incident Type</th>
						<td id="offenseType"></td>
					</tr>
					<tr>
						<th>Notes</th>
						<td>
							<ol id="OffenseNotes">
								<li></li>
							</ol>
						</td>
					</tr>			
					<tr>
						<th>Linked Incidents</th>
						<td id="linkedOffenses"></td>
					</tr>			
					<tr>
						<th>Events / Flows </th>
						<td>
							<span id="eventCount">0</span>  Events
							/
							<span id="flowCount">0</span> Flows
						</td>
					</tr>			
				</table>
	
				
				<H2>Incident Contributors</H2>
				<div id="map" style="height:220px">
					<div id="graph_overlay" class="overlay" style="display: none;">
						<div id="graph_overlay_txt" class="overlay_txt" style="display: none;">No Data Available</div>
						<div id="floatingCirclesG" style="display: none;">
							<div class="f_circleG" id="frotateG_01"></div>
							<div class="f_circleG" id="frotateG_02"></div>
							<div class="f_circleG" id="frotateG_03"></div>
							<div class="f_circleG" id="frotateG_04"></div>
							<div class="f_circleG" id="frotateG_05"></div>
							<div class="f_circleG" id="frotateG_06"></div>
							<div class="f_circleG" id="frotateG_07"></div>
							<div class="f_circleG" id="frotateG_08"></div>
						</div>
				    </div>
				</div>
	
				<H2>IP Relationships</H2>
				<div id="graph" class="parcoords" style="height:150px; padding-top: 0.5em;"></div>
			</div>
		</div>
	</div>

</div>

<div id="tooltip" class="hidden tooltip">
  <span id="value"></span>
</div>
<div id="linktooltip" class="hidden tooltip">
  <span id="value"></span>
</div>

<div id="newsTickerDiv">
	<h1>Security Intelligence News |</h1>

	<div id="newsTickerList">
		<ul class="newsTickerFeed">
		</ul>
	</div>
</div>
	
	<script src="js/topojson.v1.min.js"></script>
	<script src="map/js/d3.parcoords.js"></script>
	<script src="map/js/sylvester.js"></script>
	<script src="map/js/map.js"></script>

</body>

</html>