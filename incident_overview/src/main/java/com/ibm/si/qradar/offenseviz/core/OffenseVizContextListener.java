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

package com.ibm.si.qradar.offenseviz.core;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import com.ibm.si.qradar.offenseviz.conf.QRadarConfig;

public class OffenseVizContextListener implements ServletContextListener {

	private ScheduledExecutorService scheduledExecutor;

	public void contextInitialized(ServletContextEvent sce) {
		ServletContext context = sce.getServletContext();
		scheduledExecutor = Executors.newSingleThreadScheduledExecutor();
		context.setAttribute("MY_EXECUTOR", scheduledExecutor);
		
		initStartupJobs();
	}

	private void initStartupJobs() {
		int updateInterval = QRadarConfig.getInstance().getUpdateInterval();
		int cleanupInterval = QRadarConfig.getInstance().getCleanupIntervalMinutes();
		scheduledExecutor.scheduleAtFixedRate(new OffenseCollector(), 0, updateInterval, TimeUnit.SECONDS);
		scheduledExecutor.scheduleAtFixedRate(new OffenseCleaner(), cleanupInterval, cleanupInterval, TimeUnit.MINUTES);
	}

	public void contextDestroyed(ServletContextEvent sce) {
		ServletContext context = sce.getServletContext();
		scheduledExecutor.shutdownNow(); // or process/wait until all pending jobs are done
	}

}
