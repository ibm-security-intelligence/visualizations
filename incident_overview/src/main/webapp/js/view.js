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

/************************
*
* COLOR SETTINGS  
*
*************************/
var appManager = {

	UpdateTimerPaused: false, // True if the app isn't counting down to look for new data
	
	OffenseReportVisble: false, // True if the offense report side panel it visible/open/slid out
}

/************************
*
* COLOR SETTINGS  
*
*************************/
var colorRangeForGraphs = ['#4178BE', '#4B8400', '#008571', '#9855D4', '#DB2780', '#E71D32', '#D74108', '#8C7300', '#777677'];
var colorArray2 = [
	                  '#82D1F5', //Blue1
	                  '#808184', //Grey
	                  '#FFE14F', //Yellow
	                  '#8CC63F', //Green
	                  '#F19027', //Orange
	                  '#AB1A86', //Purple
	                  '#00A6A0', //Teal
	                  '#A5A215', //Olive
	                  '#F04E37', //Red
	                  '#00B0DA', //Blue2
	                  '#F389AF']; //Pink


/************************
*
* NEWS TICKER 
*
*************************/
$(function() {
	RssFeedManager.updateFeed(
			function() { $('#newsTickerList').vTicker(); }
	);
});

/************************
*
* Hides the offense report panel.
* @param offenseToShowWhenHideComplete - if this is passed, the panel will re-appear showing this offense.
*									   - This was done so that the panel show disappear, repaint with the new data, and re-appear.
*
*************************/
function hideOffenseReport( offenseToShowWhenHideComplete )
{
	//Stop the currently executing search(s)
	if (arielManager.eventSearchHandle != null)
	{
		arielManager.deleteSearch(arielManager.eventSearchHandle);
		//Clear handle so we don't try and delete this search again
		arielManager.eventSearchHandle = null;
	}
	
	if (arielManager.flowSearchHandle != null)
	{
		arielManager.deleteSearch(arielManager.flowSearchHandle);
		arielManager.flowSearchHandle = null;
	}
	
	var offenseReportDiv = $('#offenseReport');

	offenseReportDiv.animate({"right":"-1030px"}, "fast", "swing", function() {
		 
		 if (offenseToShowWhenHideComplete)
		 	showOffenseReport(offenseToShowWhenHideComplete);
		 })
		 
		 .removeClass('visible');

	appManager.OffenseReportVisble = false;
}


/************************
*
* Shows the offense report panel with known details filled in.
* @param offense - Offense (in json format OR an offense ID) to populate the report with
*
*************************/
function showOffenseReport(offense)
{
	//Number passed in? Look up the offense!
	if (typeof offense != "object")
	{
		offense = offenseManager.getOffense(offense); 
	}
	var offenseReportDiv = $('#offenseReport');
	//Always hide first (incase you clicked on a different offense!)
	
	if (offenseReportDiv.hasClass('visible'))
	{
		if (window.lastOffenseShow != offense)
		{
			//Hide it first, wait for animation, then show it!
			hideOffenseReport(offense); //Passing in THIS offense, we'll hide the report, then call this BACK to show it.
			return;
		}
	}
	window.lastOffenseShow = offense;
	
	//Update Magnitude color
	var magColor = getColor(offense.magnitude);
	$(".magnitudeContainer").css("background-color",magColor);
	 
	$(".magnitude").html(offense.magnitude);
 
	//Update the dark line under the magnitude box
	var originalColor = d3.rgb( magColor );
	$(".magnitudeContainer").css("border-color", originalColor.darker(0.4));
	 
	//Update the offense name
	$("#offenseTitle").html(offense.description);
	
	//Update the panel title
	$("#paneTitle").html("QRadar Offense Report " + offense.id);
	 
	//Update "Assigned To" section
	var assignedTo = "(unassigned)"; 
	 	
	$("#userName").removeClass("userNameAssigned");
	$("#userName").removeClass("userNameUnassigned");
	if (offense.assigned_to != null)
	{
		$("#userImage").attr('src','images/user-profile_32.png');
		
		assignedTo = offense.assigned_to;
		 $("#userName").addClass("userNameAssigned");
	}
	else
	{
		$("#userImage").attr('src','images/user-profile-light_32.png');
		$("#userName").addClass("userNameUnassigned");
	}
	$("#userName").html(assignedTo);
	 
	//Update the categories
	$("#offenseCategories").empty();
	if (offense.categories != null)
	{
		$("#offenseCategories").html( offense.categories.join(", ") ); 
	}
	 
	//Update the Duration
	$("#offenseDuration").css("color","#41484D");
	var offenseDuration = Math.abs(offense.last_updated_time - offense.start_time);
	var durationOject = millisToDaysHoursMinutes(offenseDuration);
	var durationString = "";
	if (durationOject.d)
	{
		durationString += durationOject.d;
		durationString += " Day";
		
		if (durationOject.d > 1)
			durationString += "s";
	}
	else if (durationOject.h)
	{
		durationString += durationOject.h;
		durationString += " Hour";
		if (durationOject.h > 1)
			durationString += "s";
	}
	else if (durationOject.m)
	{
		durationString += durationOject.m;
		durationString += " Minute";
		if (durationOject.m > 1)
			durationString += "s";
	}
	else
	{
		durationString += durationOject.s;
		durationString += " Second";
		if (durationOject.s > 1)
			durationString += "s";
	}

	$("#offenseDuration").html(durationString);
	 
	//Let's put the TYPE and then the source
	//Check if the source is an IP
	var offenseSource = offense.offense_source;
	if ( isValidIP(offense.offense_source) )
	{
		//Wrap it in a link that can go to XFORCE
		var xForceURL = XForceManager.getIPReportURL(offense.offense_source);
		
		offenseSource = "<a href='" + xForceURL + "' id='offense_source' title='View X-Force IP Report' target='_blank'>" + offenseSource + "</a>";
		
		XForceManager.getIPReputation(offense.offense_source, function(ipreputation)
		{	
			if (ipreputation != null)
			{
				var riskScore = ipreputation.score; 
				
				//Color the IP based on the risk
				var color = XForceManager._getColor(riskScore)
				$("#offense_source").css( "color", color);
				
			}
			
		});
	}
	 
	$("#offenseType").html(offenseManager.getOffenseType(offense) + " (" + offenseSource + ")" );
	 
	//Get Offense Notes
	offenseManager.getNotes(offense, function(notes)
	{
		var noteTemplate = "<span class='offenseNoteAuthor'>{{author}}</span>{{note}}<span class='offenseNoteDate' title='{{longDate}}'>{{date}}</span>";
		
		if (notes != null && notes.length > 0)
		{
			$("#OffenseNotes").html("");
			$.each(notes, function(index, note) {
				
				var shortFormattedDate = d3.time.format('%I:%m')(new Date(note.create_time));
				var longFormattedDate = d3.time.format('%c')(new Date(note.create_time));

				var noteText = noteTemplate
					.replace("{{author}}", htmlEncode(note.username))
					.replace("{{note}}", htmlEncode(note.note_text))
					.replace("{{longDate}}", longFormattedDate)
					.replace("{{date}}", shortFormattedDate);
				
				$("#OffenseNotes")
					.append(
    					$('<li>').html( noteText )
        			);  
			});
		}
		else
			$("#OffenseNotes").html("No Notes");

	 });
	 
	//Update the linked offenses
	//***************************************************************************
	var	offensesForCurrentTimeIndex = offenseManager.getOffensesByTimeBucket(  offenseManager.currentTimeIndex );
	var linkedOffenses = null;
	if (offensesForCurrentTimeIndex)
	{
		linkedOffenses = offenseManager.getLinkedOffenses(offense, offensesForCurrentTimeIndex.offenses );
		//Add childoffense to the linkage
		var childOffenses = offenseManager.getChildOffenses(offense, offensesForCurrentTimeIndex.offenses );
		linkedOffenses = linkedOffenses.concat(childOffenses);
	}

	var linkText = "No linked incidents";
	if ((linkedOffenses != null) && linkedOffenses.length > 0)
	{
		linkText = "";
		linkText = linkedOffenses.map(function(elem){

			var commonIPs = "";
			if (elem.commonIPs)
			{
				commonIPs = elem.commonIPs.join (", ")
			}
			var title = "Common IPs: " + commonIPs;
			return "<a href='#' title='" + title + "' onclick='showOffenseReport(" + elem.offense.id + "); return false;'>" + elem.offense.id + ": " + elem.offense.description + "</a>" }).join (", ");
		}
	 $("#linkedOffenses").html(linkText);
	//***************************************************************************
	 
	//Update Event / Flow Count
	//***************************************************************************
	 $("#eventCount").html(offense.event_count);
	 $("#flowCount").html(offense.flow_count);
	//***************************************************************************
	
	 sideVizManager.clear();
	//Show it
	offenseReportDiv.animate({"right":"0px"}, "slow").addClass('visible');

	appManager.OffenseReportVisble = true;

	sideVizManager.setOffense(offense);
	
	arielManager.startSearchForOffense(offense);
}


/************************
*
* Returns a unique color for an offense of the given magnitude
* @param magnitude - int - magnitude (1-10) you want color for
*
*************************/
var colorRangeForMagnitude = ['#00C0F2', '#FFC800', '#CC0000'];
function getColor(magnitude)
{
	var magColor = d3.scale.linear().domain([1,4,10]).range(colorRangeForMagnitude);
	//var magColor = d3.scale.quantize().domain([1,10]).range(["#313695","#4575b4","#4575b4","#74add1","#abd9e9","#e0f3f8","#fee090","#fdae61","#f46d43","#d73027","#a50026"]);
	return magColor(magnitude);
}


/************************
*
* Responsible for painting the application
* @param allOffenses: JSON array of all offenses to paint
*
*************************/
function paintPage( offenseIndexToPaint )
{
	if (console) console.log("Painting Page. Offense Index " + offenseIndexToPaint);
	
	//This object now has a time stamp and a list of offenses - we need to JUST pass the offenses around.
	//Newest bucket is bucket 0
	var	offensesForTimeIndex = offenseManager.getOffensesByTimeBucket(offenseIndexToPaint);
	var formattedOffenseTime = d3.time.format("%-I:%M")(new Date(offensesForTimeIndex.bucketTime));
	
	var title = "Recent Incidents ";
	if (offenseIndexToPaint > 0)
	{
		title += "(" + formattedOffenseTime +")";
	}
	$("#visTitle").html(title);
	
	//Update the time scrubber
	drawTimeScrubber();	

	//Draw the florish pointer
	positionFlourish();
				  
	var allOffenses = offensesForTimeIndex.offenses;
	if (console) console.log("Drawing " + allOffenses.length + " Offenses");
	
	drawOffenseBubbles(allOffenses)
	drawCharts(allOffenses);
	
	
	//Draw ticks
	var lineOffset = 0;
	for (var yLines = 0; yLines < 20; yLines++)
	{
		lineOffset += 60;

		window.offenseBubbles.dressing.append("line")
		.style("stroke", "rgb(230,230,230)")  // colour the line
		//.style("stroke", "rgb(255,255,255)")  // colour the line
			.attr("x1", 35 )     // x position of the first end of the line
			.attr("y1", lineOffset )      // y position of the first end of the line
			.attr("x2", 4000 )     // x position of the second end of the line
			.attr("y2", lineOffset )     // y position of the second end of the line
		.style("stroke-dasharray", ("20,10,7,10"))  // <== This line here!!
		
	}
}

function positionFlourish()
{
	var index = parseInt( timeScrubber.value() );
	//Draw the florish pointer
	var ticks = d3.select('#timeSlider').selectAll(".tick");
	var currentTick = ticks[0][index];
	var currentTickPosition = 0;
	try
	{
		currentTickPosition = currentTick.getBoundingClientRect().left;
	}
	catch (e)
	{
		
	}
	d3.select("#flourish")
    	.transition().duration(500)
		.style("left", (currentTickPosition) - 27 + "px");
}

function drawTimeSeries(offenseBuckets)
{
	var offenseTimeSeriesData = 
	[
	  {
	    "key": "Offense Count Over Time",
		"values": [] 
	  }
	];

	$.each(offenseBuckets, function(index, bucket)
	{
		var plotPoint = [bucket.bucketTime, bucket.offenses.length];
		offenseTimeSeriesData[0].values.push( plotPoint );
		
	});
	
	if (window.timechart)
	{
  		var svg = d3.select("#timeSeries svg")
			.datum(offenseTimeSeriesData)
			.call(timechart)
  			.select("g").attr("transform", function(d) { return "translate(37,30)"; });	
	}
	else
	{
	 nv.addGraph(function() {
		    window.timechart = nv.models.lineChart()
				
				.x(function(d) { return d[0] })
                .y(function(d) { return d[1] })
                
                //Strip down the chart
				.showXAxis(false)
				.showYAxis(false)
				.showLegend(false)
				
				.tooltipContent(function(key, y, e, graph) 
				{
					return '<h3>Incident Count</h3>' +
			           '<p>' + e + ' Incidents at ' + y + "</p>"; 
				})
				;
		    
		   timechart.xAxis
			.tickFormat(function(d) {
	            return d3.time.format('%H:%M')(new Date(d))
	          });
		    
	  		var svg = d3.select("#timeSeries").append("svg")
				.datum(offenseTimeSeriesData)
				.call(timechart)
			;
	  		//Position exactly above the time slider
	  		d3.select("#timeSeries").select("svg").select("g").attr("transform", function(d) { return "translate(37,30)"; });

	 });
	}

}

var timeScrubber = null;
function drawTimeScrubber()
{
	var allOffenses = offenseManager.getAllOffenses();
	
	//First interval will be 'now' which is the time stamp from the first set of offenses we get from the server.
	var min = allOffenses[allOffenses.length-1].bucketTime;
	var max = allOffenses[0].bucketTime;

//	var min = new Date(min).toString();
//	var max = new Date(max).toString();
	//clear old scrubber
	$("#timeSlider").empty();
	
	var scrubberIndex = allOffenses.length-(1+offenseManager.currentTimeIndex)
		
	var axis = d3.svg.axis().ticks(allOffenses.length)
		.tickFormat(function(d){
			var allOffenses = offenseManager.getAllOffenses();
			// The index is inverted from bucket time, need to adjust for that
			var idx = allOffenses.length-(1+d);
			if(allOffenses[idx] && allOffenses[idx].bucketTime) {
				return d3.time.format("%I:%M")(new Date(allOffenses[idx].bucketTime));
			}
			return d});

	timeScrubber =
			d3.slider()
			.axis(axis)
			.max(allOffenses.length -1)
			.min(0)
			.step(1)
			//Update the label on the slider
			.value(scrubberIndex)
			.on("slide", function(evt, value) {
				$(".d3-slider-handle").attr("title", value);
				console.log("TICK: " + value, timeScrubber.value(), evt);
				
				offenseManager.currentTimeIndex = allOffenses.length-(1+value);
				
				paintPage( offenseManager.currentTimeIndex );
			})

	d3.select('#timeSlider').call(timeScrubber);
}

/*************************
* Responsible for painting the right hand side 'overview' charts
* @param allOffenses: JSON array of all offenses to paint
 **************************/
function drawCharts(allOffenses)
{
	//if (console) console.log("Drawing Charts");
	
	drawOffensesByMagnitureChart(allOffenses);
	drawAverageOffenseAgeChart(allOffenses);
	drawOffensesByCategoryChart(allOffenses);
	drawTopOffenseByCountChart(allOffenses);
	
}

function drawTopOffenseByCountChart(allOffenses)
{
	var topOffenses = offenseManager.getTopOffensesByByEventCount(allOffenses)

	var result = "";
	
	var dataSet = [];
	$.each(topOffenses, function(index, offense) {
		dataSet.push(
		{
			"id": offense.id, "value": offense.event_count, "name": "", "group": ".", "c": "#00BFF2"
		}
		);
	});
	
	var chart = nv.models.pieChart()
		.x(function(d) { return d.id })
		.y(function(d) { return d.value})
		.showLabels(false)
		.showLegend(false)
		.color( ['#BBBBBB'] )

		.tooltipContent(function(key, y, e, graph) 
			{
			var formatter = d3.format(",.0f");
			
				return '<h3>Offense ' + key + '</h3>' +
		           '<p>' + formatter(e.value) + ' Events </p>'; 
			})

	;

	//Quick fix to correct the repain issue
	//$("#chart4vis svg").empty();

	d3.select("#chart4vis svg")
	    .datum(dataSet)
	  .transition().duration(1200)
	    .call(chart);

     	//Turning off the legend doesn't reclaim the space. We need to move the chart manually
	d3.select("#chart4vis svg").select("g").attr("transform", function(d) { return "translate(20,0)"; });
}

/******************************************
* Draws the average offense age widget
* All of the offense ages are calulated and averaged together.
*
* @param allOffenses: JSON array of all offenses 
******************************************/
function drawAverageOffenseAgeChart(allOffenses)
{
	var totalOffenses = allOffenses.length;
	
	var totalDuration = 0;
	$.each(allOffenses, function(index, offense) {
		var offenseDuration = Math.abs(offense.last_updated_time - offense.start_time);
			
		totalDuration += offenseDuration;
	});
	
	var averageDuration = totalDuration / totalOffenses;

	var durationOject = millisToDaysHoursMinutes(averageDuration);
	if (durationOject.d)
	{
		$("#durationValue").html(durationOject.d);
		$("#durationLable").html("Days");
	}
	else if (durationOject.h)
	{
		$("#durationValue").html(durationOject.h);
		$("#durationLable").html("Hours");
	}
	else if (durationOject.m)
	{
		$("#durationValue").html(durationOject.m);
		$("#durationLable").html("Minutes");
	}
	else if (durationOject.s)
	{
		$("#durationValue").html(durationOject.s);
		$("#durationLable").html("Seconds");
	}
	else
	{
		//Default if no offenses
		$("#durationValue").html("0");
		$("#durationLable").html("Minutes");
	}
}

/******************************************
* Take a number of millisonds and return an object {d,h,m,s}
* This object represents the numbesr of days, hours, minutes, and seconds of time passed in the milliseconds

* @param millis: number milliseconds to calulate for 
******************************************/
function millisToDaysHoursMinutes(millis) {
	var d, h, m, s;
	  s = Math.floor(millis / 1000);
	  m = Math.floor(s / 60);
	  s = s % 60;
	  h = Math.floor(m / 60);
	  m = m % 60;
	  d = Math.floor(h / 24);
	  h = h % 24;

	return { d: d, h: h, m: m, s: s };
}

/******************************************
* Draws the Offenses by Magnitude chart
* Offenses are put into three 'bucket' - 'High', 'Med', 'Low'
*
* @param allOffenses: JSON array of all offenses 
******************************************/
function drawOffensesByMagnitureChart(allOffenses)
{
	//if (console) console.log("- Drawing Magnitude Chart");

	//Offenses by Magnitude
	var magnitudes = 
	[
	{
		"Magnitude": "Low (1-2)",
		"Count": 0,
	},
	{
		"Magnitude": "Medium (3-5)",
		"Count": 0
	},
	{
		"Magnitude": "High (6-10)",
		"Count": 0
	}
	];
	
	// Count each Magnitude and put it into an appropriate bucket
	$.each(allOffenses, function(index, offense) {

		if ( offense.magnitude > 5 ) //High magnitude (6-10)
		{
			magnitudes[2].Count += 1;
		}
		else if ( offense.magnitude > 2 ) //Med magnitude (3-6)
		{
			magnitudes[1].Count += 1;
		}
		else //Low (1-2) magnitude
		{
			magnitudes[0].Count += 1;
		}
	});
	
	//Check to see if the graph exists, if not, create it.
	var chartExists = $('#chart1vis svg');
	if (chartExists.length > 0)
	{
		d3.select('#chart1vis svg')
          .datum(magnitudes)
          .transition().duration(500)
          .call(window.MagnitudeChart);
		
	    d3.select("#chart1vis").select("svg").select("text").text( allOffenses.length )
      	d3.select("#chart1vis svg").select("g").attr("transform", function(d) { return "translate(20,0)"; });

	}
	else
	{
	
		 nv.addGraph(function() {
		   window.MagnitudeChart = nv.models.pieChart()
				.x(function(d) { return d.Magnitude })
				.y(function(d) { return d.Count })
		
				.showLabels(false)
				.labelType("key") //Configure what type of data to show in the label. Can be "key", "value" or "percent"
				
				.showLegend(false)
				.labelThreshold(.05)  //Configure the minimum slice size for labels to show up
		
		
				.donut(true)          //Turn on Donut mode. Makes pie chart look tasty!
				.donutRatio(0.60)     //Configure how big you want the donut hole size to be.
	
				.tooltipContent(function(key, y, e, graph) 
						{
							var formatter = d3.format(y, ",.0f");	
							return '<h3 style="backgroundColor:' + e.color + '">Offense ' + key + '</h3>' +
					           '<p>' +formatter(y) + ' Events </p>'; 
						})
						
				.color( colorRangeForMagnitude )
			;
		   
			MagnitudeChart.pie.dispatch.on('elementClick', function(d)
			{
				var categoryLabel = d.label;

				clearOffenseFilter();

				//User clicked in the same category. Toggle filtering!
				if (window.MagnitudeChart.lastFilter == categoryLabel)
				{
					window.MagnitudeChart.filter = !window.CategoryChart.filter;
					window.MagnitudeChart.lastFilter = categoryLabel;
				}
				else
				{
					window.MagnitudeChart.filter = true;
					window.MagnitudeChart.lastFilter = categoryLabel;
				}

				if (window.MagnitudeChart.filter)
					filterOffensesByMagnitude(categoryLabel);
			});
			
			MagnitudeChart.pie.dispatch.on('elementMouseover', function(d)
			{
				if (!window.MagnitudeChart.filter)
					filterOffensesByMagnitude(d.label); 
			});
			MagnitudeChart.pie.dispatch.on('elementMouseout', function(d)
			{
				if (!window.MagnitudeChart.filter)
				 	clearOffenseFilter();
			});

		   
			d3.select("#chart1vis").append("svg")
		         .datum(magnitudes)
		         .call(window.MagnitudeChart);

	      	//Turning off the legend doesn't reclaim the space. We need to move the chart up manually
			d3.select("#chart1vis svg").select("g").attr("transform", function(d) { return "translate(20,0)"; });

		   //Put the count in the middle
			d3.select("#chart1vis svg").select(".nv-pieLabels").append("text")
				.attr("transform", "translate(0,12.5)")
      			.style("text-anchor", "middle")
      			.style("font-size", "36px")
		        .text( allOffenses.length );
		   
		   return MagnitudeChart;
		 });
	}
	

	 
 }

/**
 * Hide all lines that indicate linked offenses
 */
function hideLines()
{
	window.linesHidden = true;
	window.offenseBubbles.select("#linkLayer").selectAll("line")
		.transition()
		.duration(150)
			.style('opacity', function(d) { return 0;});
}

/**
 * Un Hide all lines that indicate linked offenses
 */
function showLines()
{
	window.linesHidden = false;
	window.offenseBubbles.select("#linkLayer").selectAll("line")
		.transition()
		.duration(150)
			.style('opacity', 1);

}

function clearOffenseFilter()
 {
	 //turn everything back on.
	 window.offenseBubbles.
	 	selectAll("g")
  			.attr("display", "") 
			//.attr("visibility", "");
	 		.transition()
		 	.duration(250)
			.style('opacity', 1);
	 		
	 showLines();
 }
 
 function filterOffensesByMagnitude(magnitudeRange)
 {
	 //The range will be a label. Not idea, not it works for now.

	 //Show all offenses
	clearOffenseFilter();
	
	hideLines();
	
	// Low (1-2)
	// Medium (3-5)
	// High (6-10)
	
	window.offenseBubbles.select("#offenseLayer").selectAll("g") 

		.filter(function( offense ) { 
	    		if (magnitudeRange == "Low (1-2)")
	    		{
		    		//Turn off what doesn't match
		    		return !(offense.magnitude <=2);
	    			
	    		}
	    		else if (magnitudeRange == "Medium (3-5)")
	    		{
		    		return !(offense.magnitude > 2 && offense.magnitude < 6);
	    		}
	    		else
	    		{
		    		return !(offense.magnitude > 5);
	    		}
	    	})
	    	.transition()
	    	.duration(750)
    		.style('opacity', 0)
    		.each('end',function(d){
    			//Hide the container
    				var offenseGraphic = d3.select("#offense" + d.id );
    				offenseGraphic.attr("display", "none"); 
    		});

	 //window.CategoryChart.oldCategoryLabelFilter = categoryLabel;

 }
 
 function fliterOffensesByCategory(categoryLabel)
 {
	//Show all offenses
	clearOffenseFilter();
	
	hideLines();
	
	window.offenseBubbles.select("#offenseLayer").selectAll("g") 
	    	.filter(function(d) { 
	    		var offenseCategories = d.categories;

	    		//Turn off what doesn't match
	    		return offenseCategories.indexOf(categoryLabel) == -1;	    	})
	    	.transition()
	    	.duration(750)
    		.style('opacity', 0)
    		.each('end',function(d){
    			//Hide the container
    				var offenseGraphic = d3.select("#offense" + d.id );
    				offenseGraphic.attr("display", "none"); 
    		});

	 window.CategoryChart.oldCategoryLabelFilter = categoryLabel;
 }
 
 function getCategoryChartData(allOffenses)
 {
	//This will be the data we pass NV to finally graph. We need to populate it with Data from offense categories 
	var categoriesGraphData = 
	[{
    	"key": "Categories",
	    "values": []
   	}];

	//Format "categoryName", count
    var categoriesCount = new Object();
    
	// Count each category and count it appropriately
	$.each(allOffenses, function(index, offense) {
		//get the categories
		var categories = offense.categories;
		
		$.each(categories, function(cindex, category) {
		
			var count = categoriesCount[category]|0;
			categoriesCount[category] = count+1;
		});
		
	});

	//Populate Graph Data
	for ( categoryVariable in categoriesCount )
	{
		var catName = categoryVariable;
		var catValue = categoriesCount[catName];

		var newValue = {
			"x": catName,
			"y": catValue
		};
		categoriesGraphData[0].values.push(newValue);
	}
	
	//Sort the data (show top 10 categories only)
	categoriesGraphData[0].values.sort(sortByProperty('y'), 'desc')
	categoriesGraphData[0].values = categoriesGraphData[0].values.slice(0,10);
	
	return categoriesGraphData;
 }
 
/******************************************
* Draws the Offenses by Category chart
* Each category in each offense is counted and the top 5 are graphed.
*
* @param allOffenses: JSON array of all offenses 
******************************************/
function drawOffensesByCategoryChart(allOffenses)
{
	window.CategoryChart = nv.models.discreteBarChart()
		.color( colorArray2 )
	;
		
	CategoryChart.discretebar.dispatch.on('elementMouseover', function(e) 
	{ 
		if (!window.CategoryChart.filter)
		   fliterOffensesByCategory(e.series.values[ e.pointIndex ].x);
	});
	CategoryChart.discretebar.dispatch.on('elementMouseout', function(e) 
	{ 
		if (!window.CategoryChart.filter)
			clearOffenseFilter(); 
	});
	     
	CategoryChart.discretebar.dispatch.on('elementClick', function(e)
	{
		var categoryLabel = e.series.values[ e.pointIndex ].x;
	
		clearOffenseFilter();
	
		//User clicked in the same category. Toggle filtering!
		if (window.CategoryChart.lastFilter == categoryLabel)
		{
			window.CategoryChart.filter = !window.CategoryChart.filter;
			window.CategoryChart.lastFilter = categoryLabel;
		}
		else
		{
			window.CategoryChart.filter = true;
			window.CategoryChart.lastFilter = categoryLabel;
		}
	
		if (window.CategoryChart.filter)
			fliterOffensesByCategory(categoryLabel);
	});
	
	//Turn off category names
	CategoryChart.showXAxis(false);
	   
	CategoryChart.yAxis
	       .tickFormat(d3.format("d")) //Set Y-Axis label formatting.
	;
	
	//if (console) console.log("- Drawing Category Chart");
	var chartData = getCategoryChartData(allOffenses);
	
	//Quick fix to correct the repain issue
	$("#chart3vis svg").empty();
	
	d3.select("#chart3vis svg")
	.datum(chartData)
	.call(CategoryChart)
;
	//Turning off the legend doesn't reclaim the space. We need to move the chart manually
	d3.select("#chart3vis svg").select("g").select("g").attr("transform", function(d) { return "translate(20,15)"; });
	
	//Align the "no data available" text
	d3.select("#chart3vis svg .nv-noData")
		.attr("x", "113");
	
	return CategoryChart;
}
 

function highlightOffense(offense)
{
	if (offense == null)
		return;
	
	//Make the circle a LITTLE bigger and light up
	var offenseGraphic = d3.select("#offense" + offense.id );

	var originalColor = d3.rgb( getColor(offense.magnitude) );
	
	
	offenseGraphic.select(".OffenseBubble")
		.transition()
		.duration(200).ease("cubic")
			.attr("r", function (d) { return ((d.magnitude * 15)||10) + 5; } )
			.style("fill", function(d) { return originalColor.brighter(0.2); })
			.attr("stroke-width", 5)
	;
}

//Make the circle go back to original size and color
function unhighlightOffense(offense)
{
	if (offense == null)
		return;

	var offenseGraphic = d3.select("#offense" + offense.id );

	offenseGraphic.select(".OffenseBubble").transition().duration(200)
		.attr("r", function (d) { return (offense.magnitude * 15)||10; } )
		.style("fill", function(d) { return getColor(offense.magnitude); })
		.attr("stroke-width", 3)

	;
}
function drawOffenseBubbles(allOffenses)
{
	if (allOffenses)
	{
		//Sort them - put smaller bubbles in front of larger bubbles.
		allOffenses = allOffenses.sort(sortByProperty('magnitude'), 'desc');
		//debugger;
	}
	
	if (!window.offenseBubbles)
	{
		window.offenseBubbles = d3.select("#offenseVis1").append("svg")
        .attr("width",  "100%")
        .attr("height", "100%")
        
        .on("click", function(d) { hideOffenseReport(); });

		window.offenseBubbles.dressing = window.offenseBubbles.append("g").attr("id", "windowDressing");
		window.offenseBubbles.linkLinesLayer = window.offenseBubbles.append("g").attr("id", "linkLayer");
		window.offenseBubbles.offenseBubbleLayer = window.offenseBubbles.append("g").attr("id", "offenseLayer");

		//updateOffenseBubbles(allOffenses);
		//return;
	}
	
	//if (console) console.log("Drawing bubbles");

	//Remove all 'old' Lines first!
	var lines = window.offenseBubbles.linkLinesLayer.selectAll("line");
	
	//Check if the lines were already hidden
	var opacity = window.linesHidden ? 0 : 0.8;
	
	lines.remove();
	
	//Draw connecting lines
	 $.each(allOffenses, function(index, offense)
				{
					 var linkedOffenses = offenseManager.getLinkedOffenses(offense, allOffenses);
					 
					 if (linkedOffenses == null)
					{
						 //no links
						 return false; //Break out.
					}
					 
					 $.each(linkedOffenses, function(index, linkedOffense) {
						 
						 
							var lineElement = window.offenseBubbles.linkLinesLayer
								.append("line")
							
								.on("mouseover", function(d) {
									
									//Update the "Common IPs tooltip position and value
									var xPosition = d3.mouse(this)[0];
									var yPosition = d3.mouse(this)[1] + 100;
									var commonIps = linkedOffense.commonIPs.join(", ");
									d3.select("#linktooltip")
										.style("left", xPosition + "px")
										.style("top", yPosition + "px")
										.select("#value")
										.text("Common IPs: " + commonIps);
									//Show the tooltip
									d3.select("#linktooltip").classed("hidden", false);

									
									if(this.getAttribute('inTransition')=="true") {return}
									if(window.linesHidden == true) {return}
									//Make the LINE a LITTLE bigger and light up
									d3.select(this).transition().duration(200)
										.style("stroke-width", 10)
									
									var originalColor = d3.rgb( 6, 120, 155 );
									d3.select(this).style("fill", function(d) { return originalColor.brighter(0.4); });
									
									//console.log( "offenseSrc: " + d3.select(this).attr("offenseSrc") + " -> offenseDst " + d3.select(this).attr("offenseDst") );
									
									//Highlight the connected offenses
									highlightOffense( offenseManager.getOffense( d3.select(this).attr("offenseSrc")) );
									highlightOffense( offenseManager.getOffense( d3.select(this).attr("offenseDst")) );

									
									 
								})
								.on("mouseout", function(d) {
									if(this.getAttribute('inTransition')=="true") {return}
									if(window.linesHidden == true) {return}
									//Make the circle a LITTLE bigger and light up
									d3.select(this).transition().duration(200)
										.style("stroke-width", 5)
										.style("stroke-opacity", 1) 
										.style("stroke", "rgb(6,120,155)")  // colour the line

										//Un highlight the connected offenses
										unhighlightOffense( offenseManager.getOffense( d3.select(this).attr("offenseSrc")) );
										unhighlightOffense( offenseManager.getOffense( d3.select(this).attr("offenseDst")) );

									//Show the tooltip
									d3.select("#linktooltip").classed("hidden", true);

								})

								.attr("offenseSrc", function(d) { return offense.id})
								.attr("offenseDst", function(d) { return linkedOffense.offense.id})
								.attr("inTransition", true)
								.style("stroke", "rgb(255,255,255)")  // colour the line
							    .attr("x1", function (d) { return offenseManager.getOffenseCoordinates(offense).x; } )     // x position of the first end of the line
							    .attr("y1", function (d) { return offenseManager.getOffenseCoordinates(offense).y; } )      // y position of the first end of the line
							    .attr("x2", function (d) { return offenseManager.getOffenseCoordinates(offense).x; } )     // x position of the second end of the line
							    .attr("y2", function (d) { return offenseManager.getOffenseCoordinates(offense).y; } )     // y position of the second end of the line
								.style("stroke-opacity", opacity) 
								.transition().duration(2200)
								    .style("stroke", "rgb(6,120,155)")  // colour the line
								    .attr("x2", function (d) { return offenseManager.getOffenseCoordinates(linkedOffense.offense).x; } )     // x position of the second end of the line
								    .attr("y2", function (d) { return offenseManager.getOffenseCoordinates(linkedOffense.offense).y; } )     // y position of the second end of the line
								    
								    
									.style("stroke-width", 5)
									.style("stroke-opacity", opacity) 
									.style("stroke-linecap", "round")  // stroke-linecap type
								.each("end", function(d){
								this.setAttribute("inTransition",false)})
					 });
					 
				});

	
	//Each 'offense' circle should be a GROUP! that way, we can resize, move, etc as a group. The 'g' here is the offense container
		//function(d) { return d.id; } is the unique identifier for each offense. See the 'key function' in D3. http://bost.ocks.org/mike/constancy/
	var offenseElements =  window.offenseBubbles.offenseBubbleLayer.selectAll("g")
								.data(allOffenses, function(d) { return d.id; });
	offenseElements
		.attr("isNewOffese", false)
		;

	var bubblesInfo = window.offenseBubbles.offenseBubbleLayer.selectAll(".OffenseBubble")
								.data(allOffenses, function(d) { return d.id; });
	
	//.each(function(d) { this._oldMag = d.magnitude; }); // store the values

	//Reset text nodes so that we can re-wrap new descriptions
	//TODO - only transition if the size of bubble OR text has changed
	var allOffenses = window.offenseBubbles.offenseBubbleLayer.selectAll("g");
	var labels = allOffenses.select("text");
	labels.remove();
	allOffenses.append("text").text( function(d) { return  (d.magnitude <= 3) ? d.id : d.id + ": " + d.description;} )
		.attr("text-anchor", "middle")
		.attr("fill", "#41484D")
		.attr("visibility", "hidden")
		.attr("class", "OffenseText")
	;
	
	//Re-paint / transition exiting offenses!
	// All offenses have a white outline. New offenses are highlighted with a 'ping' 
	bubblesInfo
			.transition()
				.duration(1000) 
					.attr("stroke", "white")
					.style("stroke-dasharray", null)

					.attr("r", function(d) { return d.magnitude * 15;})
					.style("fill", function(d) { return getColor(d.magnitude); })
					.each("end", wrapTexts)
				;
	
	/* Remove old / expired offense */
	// 1st, shrink the bubble.
	offenseElements.exit()
		.select(".pinger").remove();
	
	offenseElements.exit()
		.select(".OffenseBubble")
    	  .transition()
      		.duration(225)
      		.attr("r", 0)
	offenseElements.exit().transition().delay(10).remove();

	/*Create and place the NEW "blocks" containing the circle and the text */
	var newOffenseElements = offenseElements.enter()
		.append("g")
		.attr("id", function(d) { return "offense"+d.id})
		.attr("isNewOffese", true)
		.attr("oldMag", function(d) {return d.magnitude})
		.attr("transform", function(d)
		{
			var coordinates = offenseManager.getOffenseCoordinates(d);
			
			return "translate( " + coordinates.x + ", " + coordinates.y + ") "
		})
		.on("mouseover", function(d) {
			if(d.inTransition) {return}
			highlightOffense(d);
			var xPosition = parseFloat(d3.select(this).attr("cx"));
			var yPosition = parseFloat(d3.select(this).attr("cy"));
		
			//Update the tooltip position and value
			d3.select("#tooltip")
				.style("left", xPosition + "px")
				.style("top", yPosition + "px")
				.select("#value")
				.style("color", getColor(d.magnitude))
				.text(d.id + ": " + d.description);
		
			//Show the tooltip
			d3.select("#tooltip").classed("hidden", false);
		})
		.on("mousemove", function(d){
			if(d.inTransition) {return}
			d3.select("#tooltip").style("top",(d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
		})
		.on("mouseout", function(d) {
			if(d.inTransition) {return}
			unhighlightOffense(d);
			//Hide the tooltip
			d3.select("#tooltip").classed("hidden", true);
		})
		.on("click", function(d) {
		
			//Pop up the offense report. We'll pass in the offense here.
			showOffenseReport(d);
			d3.event.stopPropagation();
		})

		
	//Append 'pinger'
	var pingers = newOffenseElements.append("circle")
		.attr("class", "pinger")
		.attr("r", function(d) { return (d.magnitude * 13); }) //smaller
		.style("fill", function(d) { return getColor(d.magnitude); })
		.style("opacity", 0.0)
	;
	
	/*Create the circle for each block */
	var newBubbles = newOffenseElements.append("circle")
		.attr("r", 1)
		//.attr("stroke", "#FDE876") //Yellowish
		.attr("stroke", "#FFFFFF") //white
		.attr("stroke-width", 3)

//		.style("opacity", 0.9) 
		.attr("cursor", "pointer")
		.attr("id", function(d){return "OffenseText"+d.id})
		.attr("class", "OffenseBubble")
		.style("fill", function(d) { return getColor(d.magnitude); })
		.transition().duration(700).ease("bounce")
		.attr("transitioning", function(d){d.inTransition=true}) // Letting the mouseover happen clobbers the textWrapping
		.each("end", wrapTexts)
		.attr("r", function(d) { return (d.magnitude * 15) || 10;})

	newBubbles 
		.attr("tooltip-append-to-body", true)
		.attr("tooltip", function(d){
			return d.description;
		})

		// TODO - if the text is too big to fit in the bubble - what do we do?
		newOffenseElements.append("text")
			.text(function(d)
			{
				//If the bubble is SUPER tiny, DONT put text in at all, there is not enough room
				//find the center of the circle
				if (d.magnitude <= 3)
				{
					return d.id;
				}
				else
				{
					return d.id + ": " + d.description;
				}
			})
			.attr("text-anchor", "middle")
			.attr("fill", "#41484D")
			.attr("visibility", "hidden")
			.attr("class", "OffenseText")
			;
				
		var offenseTexts = $(".OffenseText");
}

function wrapTexts(offense) {
	offense.inTransition = false;
	var text = this.nextSibling;
	text.setAttribute("visibility", "");
	d3plus.textwrap()
		.container(d3.select(text))
		.valign("middle")
		.resize(true)
		.padding(16)
		.draw();
}

/**
 * Animates the pingers ONLY is the isNewOffese is true for the specic offense.
 */
function animatePingers()
{
	//console.log("resetting pingers");
	var pingers = window.offenseBubbles.offenseBubbleLayer.selectAll(".pinger")
	//RESET pingers
	pingers 
		.attr("r", function(d) { return (d.magnitude * 15); })
		.style("fill", function(d) { return getColor(d.magnitude); })
		.style("opacity", function(d) {
			var parent = d3.select(this.parentNode);
			var isNew = parent.attr("isNewOffese");
			//debugger;
			if (isNew == "true")
				return 1.0;
			else
				return 0.0; //Hide it - it'll still animate but you wont see it
		})
	;
	
	//Animate them
	pingers 
		.transition().duration(1000)
		.attr("r", function(d) { return (d.magnitude * 23); })
		.style("opacity", 0.0)
	;
}

function addData()
{
	console.log(" Looking for new data");
	//Put more data on the time line!
	offenseManager.fetchNewData(function( newOffenseBucket )
		{
			if (newOffenseBucket != null)
			{
				//get the current index.
				var timeIndex = offenseManager.currentTimeIndex;
				var viewLatest = timeIndex == 0;
				
				//get all of the offenses and figure out what to redraw.
				var allOffenses = offenseManager.getAllOffenses();
				drawTimeScrubber(allOffenses);
				drawTimeSeries(allOffenses);
				
				//If we're at the latest interval, refresh and show new data, otherwise, just stay at the interval we're on.
				if ( viewLatest )		
					paintPage( 0 );
				else
				{
					//The time moved by an interval. That is, all time got one interval 'older' 
					if (offenseManager.currentTimeIndex < 19)
						offenseManager.currentTimeIndex ++;
					
					paintPage( offenseManager.currentTimeIndex );
				}
		
			}
		}
	);
	
}