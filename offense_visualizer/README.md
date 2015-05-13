![Alt text](screenshot.png?raw=true "Screenshot")

ABOUT
=====

This is a sample of how you can build advanced visualizations using the offense API. In this sample, we will use D3 (http://d3js.org) and a helper library called NVD3 (http://nvd3.org) to draw some fancy bubble charts of our offenses.


REQUIREMENTS
===========

The only requirement to run this sample is an active QRadar instance with offenses to deploy it on.

DETAILED DESCRIPTION
===========

The way this sample works is quite simple. We make a request to the "/api/siem/offenses" endpoint to get all the information we know about offenses encoded as JSON. We then load this information into a graphing framework to draw the offense information based on various attributes. 

HOW TO DEPLOY
===========

To deploy the sample, copy all of the files in this directory (using SCP) to your QRadar server into the location /opt/qradar/webapps/console/offense_visualizer. You can then access the sample at the following URL: https://[QRadar IP]/console/offense_visualizer/visualizer.html - feel free to bookmark this URL for quick reference.


LICENSE
===========

Copyright (c) 2013 IBM

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in 
compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is 
distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
See the License for the specific language governing permissions and limitations under the License.
