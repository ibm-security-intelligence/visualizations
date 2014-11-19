var OFFENSE_TYPE = 
{
	0:"Source IP",
	1:"Destination IP",
	2:"Event Name",
	3:"Username",
	4:"Source MAC Address",
	5:"Destination MAC Address",
	6:"Log Source",
	7:"Hostname",
	8:"Source Port",
	9:"Destination Port",
	10:"Source IPv6",
	11:"Destination IPv6",
	12:"Source ASN",
	13:"Destination ASN",
	14:"Rule",
	15:"Application ID",
	18:"Scheduled Search"
};

function getValue( offense, attribute )
{
	if( attribute == "category_count" )
		return offense.security_category_count + offense.policy_category_count;
	else if( attribute == "destination_count" )
		return offense.local_destination_count + offense.remote_destination_count;
	else if( attribute == "start_time" || attribute == "last_updated_time" )
		return offense[ attribute ];
	else
		return offense[ attribute ];
}

function reloadGraph()
{
 	var token = document.cookie.split("; SEC=").pop().split(";").shift();
	var xhr = d3.xhr( "/restapi/api/siem/offenses" , "application/json");
	
	xhr.header('Accept', "application/json");
	xhr.header('SEC', token);
	
	xhr.get( 
		function (error,response)
		{
			var offenses = JSON.parse(response.responseText);
			var xAttribute = document.getElementById("xAxis").value;
			var yAttribute = document.getElementById("yAxis").value;
			var zAttribute = document.getElementById("zAxis").value;
			var cAttribute = document.getElementById("cAxis").value;

			var bubbleData = [];
			var shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'];
			var random = d3.random.normal();
			
			var offensesByType = {};
			
			var startTime = [Number.MAX_VALUE,0];
			var lastUpdated = [Number.MAX_VALUE,0];
			var offenseMap = {};

			// Added for OSM
			var offenseIpMap = [];
			var map = L.map('map');
			map.locate({ setView: true, maxZoom:2 });

			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(map);

			for (i = 0; i < offenses.length; ++i) {
				var offense = offenses[i];
				var typeValue = ( cAttribute == "offense_type" ? offense[ cAttribute ] + "" : offense.categories[0] );
				
				typeOffenses = offensesByType[ typeValue ];
				if( !typeOffenses )
				{
					typeOffenses = [];
					offensesByType[ typeValue ] = typeOffenses;
					
					bubbleData.push({
						key: cAttribute == "offense_type" ? OFFENSE_TYPE[ typeValue ] : typeValue,
						values: typeOffenses
					});
				}
				
				typeOffenses.push({
					x: getValue( offense, xAttribute ), 
					y: getValue( offense, yAttribute ), 
					size:getValue( offense, zAttribute ), 
				});
				
				var s = typeValue;
				s = s.replace(/[^\w]/g,"_");

				offenseMap[ getValue( offense, xAttribute ) + "_" + getValue( offense, yAttribute ) + "_" + s ] = offense;
				// Added for OSM
				offenseIpMap[ getValue( offense, "offense_source" ) ] = offense;
				
				startTime = [ Math.min( startTime[0], offense.start_time ), Math.max( startTime[1], offense.startTime ) ];
				lastUpdated = [ Math.min( lastUpdated[0], offense.last_updated_time ), Math.max( lastUpdated[1], offense.last_updated_time ) ];			
			}
			
			var pieData = [];
			for( typeValue in offensesByType ) {
				var typeOffenses = offensesByType[ typeValue ];
				pieData.push( { label:(cAttribute == "offense_type" ? OFFENSE_TYPE[ typeValue ] : typeValue), value: typeOffenses.length } );
			}
				
			nv.addGraph(function() {
				var chart = nv.models.scatterChart()
					.showDistX(true)
					.showDistY(true)
					.useVoronoi(true)
					.transitionDuration(500)
					.fisheye(1)
					.sizeRange([200,1500]);
					;

					chart.tooltipContent(function(key, x, y, e, graph) {
						var s = e.series.key;
						if(typeof(s) == 'Date' )
							s = s.getTime();
						s = s.replace(/[^\w]/g,"_");
						
						var x = e.point.x;
						if(typeof(x) == 'Date' )
							x = sx.getTime();
						
						var y = e.point.y;
						if(typeof(y) == 'Date' )
							y = y.getTime();

						var offense = offenseMap[ x + "_" + y + "_" + s ];
						
						return '<div class="tooltip"><h2>Offense ' + 
						    offense.id + ' - ' + offense.description.replace("\n", "<br/>&nbsp;&nbsp;") + 
						    "<br/><table><tr><th>Magnitude:</th><td>" + offense.magnitude + "</td></tr>" +
						    "<tr><th>Credibility:</th><td>" + offense.credibility + "</td></tr>" +
						    "<tr><th>Severity:</th><td>" + offense.severity + "</td></tr>" +
						    "<tr><th>Relevance:</th><td>" + offense.relevance + "</td></tr>" +
						    "</table></h2>";
					});

				var attrs = {"xAttribute":xAttribute,"yAttribute":yAttribute};
				for( attName in attrs )
				{
					var attVal = attrs[attName];
					if( attVal == "start_time" || attVal == "last_updated_time" )
					{
						var x;
						if( attVal == "start_time" )
						{
							x = d3.time.scale()
								.domain( [new Date( startTime[0] ), d3.time.hour.offset(new Date( startTime[1] ), 1)] )
								.rangeRound([0, 800]);
						}
						else
						{
							x = d3.time.scale()
								.domain( [new Date( lastUpdated[0] ), d3.time.hour.offset(new Date( lastUpdated[1] ), 1)] )
								.rangeRound([0, 800]);
						}
						
						var axis = attName == "xAttribute" ? chart.xAxis : chart.yAxis;
						axis.scale(x)
							.orient('bottom')
							.ticks(d3.time.days, 1)
							.tickFormat(function(v){var f=d3.time.format('%b %d %H:%M:%S');return f(new Date(v));})
							.tickSize(10)
							.tickPadding(20);
					}
				}

				chart.scatter.dispatch.on("elementClick", function(e) {
					var s = e.series.key;
					if(typeof(s) == 'Date' )
						s = s.getTime();
					s = s.replace(/[^\w]/g,"_");
					var x = e.point.x;
					if(typeof(x) == 'Date' )
						x = sx.getTime();
					var y = e.point.y;
					if(typeof(y) == 'Date' )
						y = y.getTime();
					var offense = offenseMap[ x + "_" + y + "_" + s ];
					window.open( "/console/do/sem/offensesummary?summaryId=" + offense.id + "&appName=SEM&pageId=OffenseSummary" );
				});
				
				d3.select('#graph svg').datum(bubbleData).call(chart);

				return chart;
			});

			nv.addGraph(function() {
				var chart = nv.models.pieChart()
					.x(function(d) { return d.label })
					.y(function(d) { return d.value })
					.showLabels(false)
					.labelThreshold(.05)
					.labelType("percent")
					.donut(true)
					.donutRatio(0.35)
				;

				d3.select("#piechart svg")
					.datum(pieData)
					.transition().duration(350)
					.call(chart);

				return chart;
			});

			// Added for OSM
			for( geoip in offenseIpMap ) {
				var ip = getValue (offenseIpMap[geoip], "offense_source");
				
				if( ip.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/) ) {
					// console.log( offenseIpMap[geoip] );
					d3.json('https://freegeoip.net/json/' + ip, 
						function (error,data) {
							if (typeof data !== 'undefined') {
								console.log(data);
								
								var offense = offenseIpMap[data.ip];
								console.log(offense);
								
								L.marker([data.latitude, data.longitude]).addTo(map)
									.bindPopup('<div class="tooltip"><h2>Offense ' + 
									'<a href="' + '/console/do/sem/offensesummary?summaryId=' + offense.id +
									'&appName=SEM&pageId=OffenseSummary' + '" target="_blank">' + offense.id +
									'</a> - ' + offense.description.replace("\n", "<br/>&nbsp;&nbsp;") + 
									"<br/><table><tr><th>Magnitude:</th><td>" + offense.magnitude + "</td></tr>" +
									"<tr><th>Credibility:</th><td>" + offense.credibility + "</td></tr>" +
									"<tr><th>Severity:</th><td>" + offense.severity + "</td></tr>" +
									"<tr><th>Relevance:</th><td>" + offense.relevance + "</td></tr>" +
									"</table></h2>");
							}
							else {
								// console.log("response is 'undefined'");
							}
						}
					);
				}
			}
		}
	);
}
