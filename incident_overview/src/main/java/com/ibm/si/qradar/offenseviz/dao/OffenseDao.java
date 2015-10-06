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

package com.ibm.si.qradar.offenseviz.dao;

import java.sql.Timestamp;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import com.ibm.si.qradar.offenseviz.jpa.Destination;
import com.ibm.si.qradar.offenseviz.jpa.Offense;
import com.ibm.si.qradar.offenseviz.jpa.Source;

public class OffenseDao extends BaseDao<Offense>{

	public OffenseDao(EntityManager entityManager) {
		super(entityManager);
	}
	
	@Override
	public void persist(Offense offense) {
		entityManager.getTransaction().begin();
		entityManager.persist(offense);
		entityManager.getTransaction().commit();
	}

	@Override
	public void remove(Offense offense) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Offense findById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Offense> findAll() {
		TypedQuery<Offense> query = entityManager.createNamedQuery("Offense.findAll", Offense.class);
		List<Offense> results = query.getResultList();
		return results;
	}
	
	public List<Offense> findRecent(Timestamp oldestLastSeenTime) {
		TypedQuery<Offense> query = entityManager.createNamedQuery("Offense.findRecent", Offense.class);
		query.setParameter("min_last_seen_time", oldestLastSeenTime);
		List<Offense> results = query.getResultList();
		return results;
	}
	
	public List<Offense> findByTimestamp(Timestamp oldest, Timestamp newest) {
		TypedQuery<Offense> query = entityManager.createNamedQuery("Offense.findByTimestamp", Offense.class);
		query.setParameter("min_last_seen_time", oldest);
		query.setParameter("max_last_seen_time", newest);
		List<Offense> results = query.getResultList();
		return results;
	}
	
	public void cleanupOldOffenses(Timestamp maxAge) {
		TypedQuery<Offense> query = entityManager.createNamedQuery("Offense.cleanupOldByTimestamp", Offense.class);
		query.setParameter("max_last_seen_time", maxAge);
		List<Offense> offensesToDelete = query.getResultList();
		
		entityManager.getTransaction().begin();
		
		for(Offense offense : offensesToDelete) {
			List<Source> sources = offense.getSourceList(); 
			for(int i = sources.size() - 1; i >= 0 ; i--) {
				offense.getSourceList().remove(i);
			}

			List<Destination> dests = offense.getDestinationList();
			for(int i = dests.size() - 1; i >= 0 ; i--) {
				offense.getDestinationList().remove(i);
			}
			
			entityManager.remove(offense);
		}

		entityManager.getTransaction().commit();
	}
	
}
