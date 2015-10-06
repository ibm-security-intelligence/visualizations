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

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import com.ibm.si.qradar.offenseviz.jpa.Destination;
import com.ibm.si.qradar.offenseviz.jpa.Source;

public class DestinationDao extends BaseDao<Destination> {

	public DestinationDao(EntityManager entityManager) {
		super(entityManager);
	}

	@Override
	public void persist(Destination entity) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void remove(Destination entity) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Destination findById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Destination > findAll() {
		// TODO Auto-generated method stub
		return null;
	}
	
	public List<Long> findAllIds() {
		TypedQuery<Long> query = entityManager.createNamedQuery("Destination.findAllIds", Long.class);
		List<Long> results = query.getResultList();
		return results;		
	}
	
	public Destination merge(Destination dest) {
		entityManager.getTransaction().begin();
		Destination merged = entityManager.merge(dest);
		entityManager.getTransaction().commit();
		return merged;
	}

}
