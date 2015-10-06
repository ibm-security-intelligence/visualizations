var markerRadius = 12;
var markerStrokeWidth = 3;
var markerPointRadius = 6;
var markerPointStrokeWidth = 1;
var lineConnectStrokeWidth = 6;

/**
 * Breaks down the side viz into 3 steps: clear, setOffense, run
 */
var sideVizManager = {
		offense:	null,
		eventData:	[],
		flowData:	[],

		/**
		 * Sets the side viz to an empty map
		 */
		clear: function() {
			sideVizManager.eventData = [];
			sideVizManager.flowData = [];
			paraManager.clearGraph();
			mapManager.clearMap();
		},

		/**
		 * Populate the form with data and prepare the map with initial IP points
		 */
		setOffense: function(offense){
			sideVizManager.offense = offense;
			mapManager.offenseIPs = offense.sourceList.concat(offense.destinationList);
			mapManager._showOverlay();
			mapManager._showLoading();
		},
		
		addEventData: function(data){
			sideVizManager.eventData = data.events;
		},
		
		addFlowData: function(data){
			sideVizManager.flowData = data.flows;
		},
		
		/**
		 * Animate the graph
		 */
		completeViz: function(){
			var sideData = sideVizManager._formatData();
			mapManager.setData(sideData);
			paraManager.drawGraph(sideData);
		},
		
		failedToLoad: function() {
			mapManager._showOverlay();
			mapManager._removeLoading();
			mapManager._showNoData();
		},
		
		_formatData: function(){
			if(sideVizManager.eventData.length > 0 && sideVizManager.flowData.length > 0){
				//merge and sort event and flow data
				var sideData = sideVizManager.eventData.concat(sideVizManager.flowData);
				sideData.sort(sideVizManager._compare);
				return sideData;
			} else if(sideVizManager.eventData.length > 0) {
				return sideVizManager.eventData;
			} else {
				return sideVizManager.flowData;
			}
		},
		
		_compare: function(a, b){
			//ORDER BY sourceip, destinationip, sourceport, destinationport
			if(a["Source IP"] == b["Source IP"]){
				if(a["Destination IP"] == b["Destination IP"]){
					if(a["Source Port"] == b["Source Port"]){
						if(a["Destination Port"] == b["Destination Port"]){
							return 0;
						} else if(parseInt(a["Destination Port"]) < parseInt(b["Destination Port"])) {
							return -1;
						} else {
							return 1;
						}
					} else if(parseInt(a["Source Port"]) < parseInt(b["Source Port"])) {
						return -1;
					} else {
						return 1;
					}
				} else if(a["Destination IP"] < b["Destination IP"]) {
					return -1;
				} else {
					return 1;
				}
			} else if(a["Source IP"] < b["Source IP"]) {
				return -1;
			} else {
				return 1;
			}
		}
};

var paraManager = {
		pc: null,
		formattedData: null,
		
		clearGraph: function(){
			if(paraManager.pc)
				document.getElementById("graph").innerHTML = "";
		},
		
		drawGraph: function(formattedData){
			paraManager.formattedData = formattedData;
			paraManager.pc = d3.parcoords()("#graph")
				.data(formattedData)
				.bundlingStrength(0.5)
				.smoothness(.2)
				.bundleDimension("Source Port")
				.alpha(0.7)
				.composite("darker")
				.color("#00BFF2")
				.margin({ top: 24, left: 50, bottom: 12, right: 50 })
				.render()
				.brushMode("1D-axes")
				.interactive()
				.on("brush", function(items) {
					//brighten relevant lines
					var lines = mapManager.gAnimationLine.selectAll("path")[0];
					mapManager.gAnimationMarker.selectAll("circle")
				       .style("opacity", 0.2)
				       .filter(function(d, j) {
				    	   for(var i = 0; i < items.length; i++){
				    		   if(	d["Destination IP"] == items[i]["Destination IP"] &&
				    				d["Source IP"] == items[i]["Source IP"] ) {
				    			   lines[j].style.opacity = null;
				    			   return true;
				    		   }
				    	   }
				    	   lines[j].style.opacity = "0.2";
				    	   return false;
				       })
				       .style("opacity", null);
				});
		},
};

var mapManager = {
	m_width:	$("#map").width()-10,
	width:		960,
	height:		220,
	
	offenseIPs:		null,
	IPs:			null,
	routes:			new Array(0),
	markers:		new Array(0),

	projection:	d3.geo.equirectangular(),
	mapPath:	d3.geo.path().projection(d3.geo.equirectangular()),
	
	formattedData: 	null,
	formattedIPs:	null,
	IPcount: 		0,
	IPProblem:		false,
	
	clearMap: function() {
		if(mapManager.gMarker){
			mapManager.gMarker.selectAll("*").remove();
			mapManager.gAnimationLine.selectAll("*").remove();
			mapManager.gAnimationMarker.selectAll("*").remove();
		}
		
		clearInterval(mapManager.shooter);
		
		mapManager._removeOverlay();
		mapManager._removeNoData();
		mapManager._removeLoading()
		
		mapManager.formattedData = null;
		mapManager.formattedIPs = null;
		mapManager.IPcount = 0;
		mapManager.IPProblem = false;
	},
	
	zoomed: function() {
		mapManager.gCountries.attr("transform","translate("+ 
				d3.event.translate.join(",")+")scale("+d3.event.scale+")");   
		mapManager.gAnimations.attr("transform","translate("+d3.event.translate.join(",")+")scale("+d3.event.scale+")")
				.selectAll("circle")
	  			.attr("r", markerRadius/d3.event.scale)
	  			.style("stroke-width", markerStrokeWidth/d3.event.scale);
		mapManager.gAnimations.selectAll("path")
	  			.style("stroke-width", lineConnectStrokeWidth/d3.event.scale);
		mapManager.gMarker.attr("transform","translate("+d3.event.translate.join(",")+")scale("+d3.event.scale+")")
				.selectAll("circle")
				.attr("r", markerPointRadius/d3.event.scale)
				.style("stroke-width", markerPointStrokeWidth/d3.event.scale);
	},
	
	translateAlong: function(route) {
		var l = route.node().getTotalLength();
		return function(i) {
	        return function(t) {
	            var p = route.node().getPointAtLength(t * l);
	            //Move the marker to that point
	            route.attr("stroke-dashoffset", l-(t*l));
	            return "translate(" + p.x + "," + p.y + ")";
	        }
	    }
	},
	
	transitionStart: function(data, route, marker) {
		var origin = mapManager._getCoordinates(data["Source IP"]);
		var destination = mapManager._getCoordinates(data["Destination IP"]);
		
		route = mapManager.gAnimationLine.append("path")
							.attr("d", mapManager._lineFunction([origin, destination]))
							.attr("class", "lineConnect")
							.style("stroke-width", lineConnectStrokeWidth/mapManager.scale);
		
		marker = mapManager.gAnimationMarker.append("circle")
							.attr("r", markerRadius/mapManager.scale)
							.attr("class", "travelMarker")
							.style("stroke-width", markerStrokeWidth/mapManager.scale)
							.on("mouseover", function() {
								sdata = paraManager.formattedData.slice(data.start, data.end);
								paraManager.pc.highlight(sdata);
						    })
						    .on("mouseout", paraManager.pc.unhighlight);
		
		marker[0][0].__data__ = data;
		$(marker[0][0]).tipsy({
			gravity: 's',
	        html: true, 
	        title: function() {
	          var d = this.__data__;
	          var sdata = paraManager.formattedData.slice(d.start, d.end);
	          var info = '<table>';
	          if(d['Source IP'])
	        	  info += '<tr><th>Source IP:</th><td>'+d['Source IP'] +'</td></tr>';
	          if(d['Destination IP'])
	        	  info += '<tr><th>Destination IP:</th><td>'+d['Destination IP'] +'</td></tr>';
	          info += '</table>';
	          
	          if(sdata != null && sdata.length > 0){
	        	  info += '<table>';
	        	  info += '<tr><th>Source Port</th><th>Destination Port</th></tr>';
	        	  for(var i = 0; i < sdata.length; i++){
	        		  info += '<tr><td>'+ sdata[i]["Source Port"] +'</td><td>'+ sdata[i]["Destination Port"] +'</td></tr>';
	        	  }
	        	  info += '</table>';
	          }
	          return info; 
	        }
	      });
		
		var l = route.node().getTotalLength();
		route.attr("stroke-dasharray", l + " " + l)
			.attr("stroke-dashoffset", l);
			
		marker.transition()
			.duration(750)
			.ease("linear") //move steadily
	    	.attrTween("transform", mapManager.translateAlong(route))
			.each("end",function() {
				marker.transition()
		            .duration(250)
		            .attr("r",16/mapManager.scale)
		            .style("opacity", "0.5")
		            .each("end",function() {
		            	marker.transition()
			            	.duration(250)
			            	.attr("r",markerRadius/mapManager.scale)
			            	.style("opacity", null);
		            });
			});
	},
	
	_getCoordinates: function(name) {
		for(var i = 0; i < mapManager.formattedIPs.length; i++) {
			if(mapManager.formattedIPs[i].ip == name)
				return mapManager.formattedIPs[i].location;
		}
		
		return null; //should never get here.
	},
	
	_findCoordinates: function(name, index) {
		var found = false;
		for(var i = 0; i < mapManager.offenseIPs.length; i++) {
			if(mapManager.offenseIPs[i]["source_ip"] == name || mapManager.offenseIPs[i]["local_destination_ip"] == name) {
				mapManager.formattedIPs[index].location = [mapManager.offenseIPs[i].longitude, mapManager.offenseIPs[i].latitude, mapManager.offenseIPs[i].country, mapManager.offenseIPs[i].city];
				mapManager.IPcount++;
				mapManager._readyCheck();
				found = true;
				break;
			}
		}
		
		if(!found){
			mapManager._ipLookup(name, index);
		}
	},
	
	_ipLookup: function(name, index) {
		var lookUpUrl = "/offense-viz/api/iplookup?ip=" + encodeURIComponent(name);
		var returnData = null;
		$.ajax({
			type: "GET",
			url: lookUpUrl,
			success: function (data)
            {
				mapManager.formattedIPs[index].location = data;
				mapManager.IPcount++;
				mapManager._readyCheck();
            },
			error: function (xhr, status, error) {
				mapManager.IPProblem = true;
				console.log(xhr.statusText);
			}
		});
	},
	
	_readyCheck: function(){
		if(mapManager.IPProblem || mapManager.IPcount == mapManager.formattedIPs.length){
			mapManager._finishMap();
		}
	},
	
	_finishMap: function(){
		mapManager._removeOverlay();
		mapManager._removeLoading();
		mapManager._drawIPs();
		mapManager._animateMap();
	},
	
	loadMap: function(error, countries) {
		
		mapManager.svg = d3.select("#map").append("svg")
		    .attr("preserveAspectRatio", "xMidYMid")
		    .attr("viewBox", "0 0 " + mapManager.width + " " + mapManager.height)
		    .attr("width", mapManager.m_width)
		    .attr("height", mapManager.m_width * mapManager.height / mapManager.width);
		
		mapManager.g = mapManager.svg.append("g");
	
		mapManager._lineFunction = d3.svg.line()
						 .x(function(d) { return mapManager.projection(d)[0]; })
						 .y(function(d) { return mapManager.projection(d)[1]; })
						 .interpolate("linear");
	
		mapManager.gCountries = mapManager.g.append("g")
	        .attr("class", "countries")
	        .selectAll("path")
	        .data(topojson.feature(countries, countries.objects.countries).features)
	        .enter()
	        .append("path")
	        .attr("d", mapManager.mapPath);
	    
		mapManager.gAnimations = mapManager.g.append("g")
	    	.attr("class", "animations");
	    
		mapManager.gAnimationLine = mapManager.gAnimations.append("g");
	    
		mapManager.gAnimationMarker = mapManager.gAnimations.append("g");
	    	
		mapManager.gMarker = mapManager.g.append("g")
	        .attr("class", "markerpoint");
	        
		mapManager.zoom = d3.behavior.zoom()
	    	.scaleExtent([0.5, 8])
	    	.on("zoom", mapManager.zoomed);
			
		mapManager.svg.call(mapManager.zoom)
	    	.call(mapManager.zoom.event);
	},
	
	/**
	 * Draw the initial points on the map
	 */
	_drawIPs: function(){
		//calculation needed zooming.
		var y2, y1, x1, x2;
		mapManager.gMarker.selectAll("circle")
	        .data(mapManager.formattedIPs)
	        .enter()
	        .append("circle")
	        .attr("cx", function (d) {
	        	var x = mapManager.projection(d.location)[0]
	        	if(x2 == undefined || x2 < x) {
	        		x2 = x;
	        	}
	        	if(x1 == undefined || x1 > x) {
	        		x1 = x;
	        	}
	        	return x; 
	        })
			.attr("cy", function (d) {
				var y = mapManager.projection(d.location)[1]
				if(y2 == undefined || y2 < y) {
	        		y2 = y;
	        	}
	        	if(y1 == undefined || y1 > y) {
	        		y1 = y;
	        	}
				return y; 
			})
			.attr("r", markerPointRadius)
			.style("stroke-width", markerPointStrokeWidth)
			.on('click', function(d){
				window.open(XForceManager.getIPReportURL(d.ip),'_blank');
			});

		$('.markerpoint circle').tipsy({ 
	        gravity: 's',
	        html: true, 
	        title: function() {
	          var d = this.__data__;
	          var info = '<table>';
	          if(d.ip)
	        	  info += '<tr><th>IP:</th><td>'+ d.ip +'</td></tr>';
        	  if(d.location){
        		  if(d.location[2])
        			  info += '<tr><th>Country:</th><td>'+ d.location[2] +'</td></tr>';
        		  if(d.location[3])
        			  info += '<tr><th>City:</th><td>'+ d.location[3] +'</td></tr>';
        	  }
        	  if(d.rep){
        		  info += '<tr><th>Reputation:</th><td>';
        		  if(d.rep != 'loading'){
        			  info += d.rep;
        		  } else {
        			  info += '<div class="throbber" style="margin-left: 10px">Loading...</div>';
        		  }
        		  info += '</td></tr>';
        	  }
	          info += '</table>';
	          info += 'Click to view in X-Force'
	          return info;
	        }
	      });
		
		//get bounding box and zoom.
		var	dx = x2 - x1,
			dy = y2 - y1,
			x = (x1 + x2) / 2,
			y = (y1 + y2) / 2;
		if(dx != 0 && dy != 0){
			mapManager.scale = .9 / Math.max(dx / mapManager.width, dy / mapManager.height);
		} else {
			mapManager.scale = .9;
		}
		mapManager.translate = [mapManager.width / 2 - mapManager.scale * x, mapManager.height / 2 - mapManager.scale * y];	
		
		mapManager.svg.transition()
		.call(mapManager.zoom.translate(mapManager.translate).scale(mapManager.scale).event);
	},
	
	setData: function(sideData) {
		mapManager.IPcount = 0;
		mapManager.IPProblem = false;
		mapManager._formatData(sideData);
	},
	
	_animateMap: function(){
		mapManager.l = mapManager.formattedData.length;
		mapManager.routes = new Array(mapManager.l);
		mapManager.markers = new Array(mapManager.l);
		var d = Math.floor(1500/mapManager.l);
		
		mapManager.i = 0;
		mapManager.shooter = setInterval(mapManager._delayedAnimation, 150);
	},
	
	_delayedAnimation: function(){
		if (mapManager.i > mapManager.l - 1) {
			//stop interval, add zoom
			clearInterval(mapManager.shooter);
		} else {
			try {
				mapManager.transitionStart(mapManager.formattedData[mapManager.i], mapManager.routes[mapManager.i], mapManager.markers[mapManager.i]);
			}
			catch(err) {
				console.log("transition data[" + mapManager.i + "] failed");
			} finally {
				mapManager.i++;					
			}
        }
	},
	
	_formatData: function(data){
		var tmpBuild = [];
		var tmpIPs = [];
		//Loop through list and pull out only unique source and destinations.
		//note it is sorted source ip, dest ip.
		if(data.length > 0) {
			var tmpEnd = tmpBuild.push(mapManager._mapRow(data[0], 0));
			tmpIPs.push(data[0]["Source IP"]);
			tmpIPs.push(data[0]["Destination IP"]);
			for(var i = 1; i < data.length; i++){
				if( tmpBuild[tmpEnd-1]["Source IP"] != data[i]["Source IP"] ){
					tmpBuild[tmpEnd-1].end = i;
					tmpEnd = tmpBuild.push(mapManager._mapRow(data[i], i));
					tmpIPs.push(data[i]["Source IP"]);
				} else if(tmpBuild[tmpEnd-1]["Destination IP"] != data[i]["Destination IP"]) {
					tmpBuild[tmpEnd-1].end = i;
					tmpEnd = tmpBuild.push(mapManager._mapRow(data[i], i));
					tmpIPs.push(data[i]["Destination IP"]);
				}
			}
			
			if(!tmpBuild[tmpEnd-1].end) {
				tmpBuild[tmpEnd-1].end = data.length;
			}
		}
		
		mapManager.formattedIPs = tmpIPs.map(mapManager._getIps);
		mapManager.formattedData = tmpBuild;
		
		//fetch x-force info.
		for(var j = 0; j < mapManager.formattedIPs.length; j++){
			mapManager._findCoordinates(mapManager.formattedIPs[j]['ip'], j)
			XForceManager.getIPReputation(mapManager.formattedIPs[j]['ip'], mapManager._addRepData, j);
		}
	},
	
	_addRepData: function(response, index){
		if(response != null){
			mapManager.formattedIPs[index].rep = response.score;
			
			mapManager.gMarker.selectAll("circle")[0][index].style.fill = response.color;
		} else {
			delete mapManager.formattedIPs[index].rep;
		}
	},
	
	_getIps: function(obj) {
		var rObj = {
			ip: obj,
			location: null,
			rep: 'loading'
		};
		return rObj;
	},
	
	_mapRow: function(obj, i) {
		var rObj = {};
		rObj["Source IP"] = obj["Source IP"];
		rObj["Destination IP"] = obj["Destination IP"];
		rObj["start"] = i;
		return rObj;
	},
	
	_showOverlay: function() {
		if($("#graph_overlay")[0].style.display == 'none')
			$("#graph_overlay").fadeIn("fast");
	},
	
	_removeOverlay: function() {
		if($("#graph_overlay")[0].style.display != 'none')
			$("#graph_overlay").fadeOut("fast");
	},
	
	_showNoData: function() {
		if($("#graph_overlay_txt")[0].style.display == 'none')
			$("#graph_overlay_txt").fadeIn("fast");
	},
	
	_removeNoData: function() {
		if($("#graph_overlay_txt")[0].style.display != 'none')
			$("#graph_overlay_txt").fadeOut("fast");
	},
	
	_showLoading: function(){
		if($("#floatingCirclesG")[0].style.display == 'none')
			$("#floatingCirclesG").fadeIn("fast");
	},
	
	_removeLoading: function() {
		if($("#floatingCirclesG")[0].style.display != 'none')
			$("#floatingCirclesG").fadeOut("fast");
	}
	
};

queue().defer(d3.json, "map/json/countries.topo.json").await(mapManager.loadMap);