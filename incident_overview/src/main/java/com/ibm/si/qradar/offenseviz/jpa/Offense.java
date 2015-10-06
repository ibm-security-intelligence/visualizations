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

package com.ibm.si.qradar.offenseviz.jpa;

import java.io.Serializable;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.sql.Timestamp;

import javax.persistence.ManyToMany;
import javax.persistence.FetchType;

import java.util.ArrayList;
import java.util.List;

import com.ibm.si.qradar.offenseviz.jpa.Source;
import com.ibm.si.qradar.offenseviz.jpa.Destination;


/**
 * The persistent class for the offense database table.
 * 
 */
@Entity
@JsonIgnoreProperties(ignoreUnknown=true)
@NamedQueries ({
	@NamedQuery(name="Offense.findAll", query="SELECT o FROM Offense o"),
	@NamedQuery(name="Offense.findRecent", query="SELECT o FROM Offense o WHERE o.seenAt > :min_last_seen_time"),
	@NamedQuery(name="Offense.findByTimestamp", query="SELECT o FROM Offense o WHERE o.seenAt > :min_last_seen_time AND o.seenAt < :max_last_seen_time"),
	@NamedQuery(name="Offense.cleanupOldByTimestamp", query="SELECT o FROM Offense o WHERE o.seenAt < :max_last_seen_time")
	
})
public class Offense implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@SequenceGenerator(name="OFFENSE_ID_GENERATOR", sequenceName="OFFENSE_ID_SEQ")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="OFFENSE_ID_GENERATOR")
	private Long id;
	
	@Column(name="seen_at")
	private Timestamp seenAt;
	
	@Column(name="offense_id")
	@JsonProperty("id")
	private Long offenseId;

	@ElementCollection(fetch=FetchType.EAGER)
	@CollectionTable(name="offense_category", joinColumns=@JoinColumn(name="offense_id"))
	@Column(name="name")
	private List<String> categories = new ArrayList<String>();
	
	@Column(name="assigned_to")
	@JsonProperty("assigned_to")
	private String assignedTo;

	@Column(name="category_count")
	@JsonProperty("category_count")
	private Integer categoryCount;

	@Column(name="close_time")
	@JsonProperty("close_time")
	private Timestamp closeTime;

	@Column(name="closing_reason_id")
	@JsonProperty("closing_reason_id")
	private Integer closingReasonId;

	@Column(name="closing_user")
	@JsonProperty("closing_user")
	private String closingUser;

	private Integer credibility;

	private String description;

	@Column(name="device_count")
	@JsonProperty("device_count")
	private Integer deviceCount;

	@Column(name="event_count")
	@JsonProperty("event_count")
	private Integer eventCount;

	@Column(name="flow_count")
	@JsonProperty("flow_count")
	private Integer flowCount;

	@Column(name="follow_up")
	@JsonProperty("follow_up")
	private Boolean followUp;

	private Boolean inactive;

	@Column(name="last_updated_time")
	@JsonProperty("last_updated_time")
	private Timestamp lastUpdatedTime;

	private Integer magnitude;

	@Column(name="offense_source")
	@JsonProperty("offense_source")
	private String offenseSource;

	@Column(name="offense_type")
	@JsonProperty("offense_type")
	private Integer offenseType;

	@Column(name="policy_category_count")
	@JsonProperty("policy_category_count")
	private Integer policyCategoryCount;

	@Column(name="protected")
	@JsonProperty("protected")
	private Boolean protected_;

	private Integer relevance;

	@Column(name="remote_destination_count")
	@JsonProperty("remote_destination_count")
	private Integer remoteDestinationCount;

	@Column(name="security_category_count")
	@JsonProperty("security_category_count")
	private Integer securityCategoryCount;

	private Integer severity;

	@Column(name="source_count")
	@JsonProperty("source_count")
	private Integer sourceCount;

	@Column(name="source_network")
	@JsonProperty("source_network")
	private String sourceNetwork;

	@Column(name="start_time")
	@JsonProperty("start_time")
	private Timestamp startTime;

	private String status;

	@Column(name="username_count")
	@JsonProperty("username_count")
	private Integer usernameCount;

	@Transient
	@JsonProperty("source_address_ids")
	@JsonInclude(Include.NON_NULL)
	private List<Integer> sourceIds;
	
	@Transient
	@JsonProperty("local_destination_address_ids")
	@JsonInclude(Include.NON_NULL)
	private List<Integer> destIds;
	
	@ManyToMany(fetch=FetchType.EAGER, cascade={CascadeType.MERGE, CascadeType.REMOVE})
	@JoinTable(
		      name="offense_source_link",
		      joinColumns={@JoinColumn(name="offense_id", referencedColumnName="id")},
		      inverseJoinColumns={@JoinColumn(name="source_id", referencedColumnName="id")})
	private List<Source> sourceList;

	@ManyToMany(fetch=FetchType.EAGER, cascade={CascadeType.MERGE, CascadeType.REMOVE})
	@JoinTable(
		      name="offense_dest_link",
		      joinColumns={@JoinColumn(name="offense_id", referencedColumnName="id")},
		      inverseJoinColumns={@JoinColumn(name="dest_id", referencedColumnName="id")})
	private List<Destination> destinationList;

	public Offense() {
	}

	public String getAssignedTo() {
		return this.assignedTo;
	}

	public void setAssignedTo(String assignedTo) {
		this.assignedTo = assignedTo;
	}

	public Integer getCategoryCount() {
		return this.categoryCount;
	}

	public void setCategoryCount(Integer categoryCount) {
		this.categoryCount = categoryCount;
	}

	public Timestamp getCloseTime() {
		return this.closeTime;
	}

	public void setCloseTime(Timestamp closeTime) {
		this.closeTime = closeTime;
	}

	public Integer getClosingReasonId() {
		return this.closingReasonId;
	}

	public void setClosingReasonId(Integer closingReasonId) {
		this.closingReasonId = closingReasonId;
	}

	public String getClosingUser() {
		return this.closingUser;
	}

	public void setClosingUser(String closingUser) {
		this.closingUser = closingUser;
	}

	public Integer getCredibility() {
		return this.credibility;
	}

	public void setCredibility(Integer credibility) {
		this.credibility = credibility;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Integer getDeviceCount() {
		return this.deviceCount;
	}

	public void setDeviceCount(Integer deviceCount) {
		this.deviceCount = deviceCount;
	}

	public Integer getEventCount() {
		return this.eventCount;
	}

	public void setEventCount(Integer eventCount) {
		this.eventCount = eventCount;
	}

	public Integer getFlowCount() {
		return this.flowCount;
	}

	public void setFlowCount(Integer flowCount) {
		this.flowCount = flowCount;
	}

	public Boolean getFollowUp() {
		return this.followUp;
	}

	public void setFollowUp(Boolean followUp) {
		this.followUp = followUp;
	}

	public Boolean getInactive() {
		return this.inactive;
	}

	public void setInactive(Boolean inactive) {
		this.inactive = inactive;
	}

	public Timestamp getLastUpdatedTime() {
		return this.lastUpdatedTime;
	}

	public void setLastUpdatedTime(Timestamp lastUpdatedTime) {
		this.lastUpdatedTime = lastUpdatedTime;
	}

	public Integer getMagnitude() {
		return this.magnitude;
	}

	public void setMagnitude(Integer magnitude) {
		this.magnitude = magnitude;
	}

	public String getOffenseSource() {
		return this.offenseSource;
	}

	public void setOffenseSource(String offenseSource) {
		this.offenseSource = offenseSource;
	}

	public Integer getOffenseType() {
		return this.offenseType;
	}

	public void setOffenseType(Integer offenseType) {
		this.offenseType = offenseType;
	}

	public Integer getPolicyCategoryCount() {
		return this.policyCategoryCount;
	}

	public void setPolicyCategoryCount(Integer policyCategoryCount) {
		this.policyCategoryCount = policyCategoryCount;
	}

	public Boolean getProtected_() {
		return this.protected_;
	}

	public void setProtected_(Boolean protected_) {
		this.protected_ = protected_;
	}

	public Integer getRelevance() {
		return this.relevance;
	}

	public void setRelevance(Integer relevance) {
		this.relevance = relevance;
	}

	public Integer getRemoteDestinationCount() {
		return this.remoteDestinationCount;
	}

	public void setRemoteDestinationCount(Integer remoteDestinationCount) {
		this.remoteDestinationCount = remoteDestinationCount;
	}

	public Integer getSecurityCategoryCount() {
		return this.securityCategoryCount;
	}

	public void setSecurityCategoryCount(Integer securityCategoryCount) {
		this.securityCategoryCount = securityCategoryCount;
	}

	public Integer getSeverity() {
		return this.severity;
	}

	public void setSeverity(Integer severity) {
		this.severity = severity;
	}

	public Integer getSourceCount() {
		return this.sourceCount;
	}

	public void setSourceCount(Integer sourceCount) {
		this.sourceCount = sourceCount;
	}

	public String getSourceNetwork() {
		return this.sourceNetwork;
	}

	public void setSourceNetwork(String sourceNetwork) {
		this.sourceNetwork = sourceNetwork;
	}

	public Timestamp getStartTime() {
		return this.startTime;
	}

	public void setStartTime(Timestamp startTime) {
		this.startTime = startTime;
	}

	public String getStatus() {
		return this.status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Integer getUsernameCount() {
		return this.usernameCount;
	}

	public List<Integer> getSourceIds() {
		return sourceIds;
	}

	public void setSourceIds(List<Integer> sourceIds) {
		this.sourceIds = sourceIds;
	}

	public List<Integer> getDestIds() {
		return destIds;
	}

	public void setDestIds(List<Integer> destIds) {
		this.destIds = destIds;
	}

	public void setUsernameCount(Integer usernameCount) {
		this.usernameCount = usernameCount;
	}

	public Timestamp getSeenAt() {
		return seenAt;
	}

	public void setSeenAt(Timestamp seenAt) {
		this.seenAt = seenAt;
	}

	public Long getOffenseId() {
		return offenseId;
	}

	public void setOffenseId(Long offenseId) {
		this.offenseId = offenseId;
	}
	
	public List<Source> getSourceList() {
		return this.sourceList;
	}

	public void setSourceList(List<Source> sourceList) {
		this.sourceList = sourceList;
	}

	public List<Destination> getDestinationList() {
		return this.destinationList;
	}

	public void setDestinationList(List<Destination> destinationList) {
		this.destinationList = destinationList;
	}
	
	public List<String> getCategories() {
		return categories;
	}

	public void setCategories(List<String> categories) {
		this.categories = categories;
	}
	
	public void removeSource(Source source) {
		this.sourceList.remove(source);
	}
	
	public void removeDest(Destination dest) {
		this.destinationList.remove(dest);
	}

	@Override
	public String toString() {
		return "Offense [\n\tid=" + id + ", \n\tseenAt=" + seenAt
				+ ", \n\toffenseId=" + offenseId + ", \n\tcategories="
				+ categories + ", \n\tassignedTo=" + assignedTo
				+ ", \n\tcategoryCount=" + categoryCount + ", \n\tcloseTime="
				+ closeTime + ", \n\tclosingReasonId=" + closingReasonId
				+ ", \n\tclosingUser=" + closingUser + ", \n\tcredibility="
				+ credibility + ", \n\tdescription=" + description
				+ ", \n\tdeviceCount=" + deviceCount + ", \n\teventCount="
				+ eventCount + ", \n\tflowCount=" + flowCount
				+ ", \n\tfollowUp=" + followUp + ", \n\tinactive=" + inactive
				+ ", \n\tlastUpdatedTime=" + lastUpdatedTime
				+ ", \n\tmagnitude=" + magnitude + ", \n\toffenseSource="
				+ offenseSource + ", \n\toffenseType=" + offenseType
				+ ", \n\tpolicyCategoryCount=" + policyCategoryCount
				+ ", \n\tprotected_=" + protected_ + ", \n\trelevance="
				+ relevance + ", \n\tremoteDestinationCount="
				+ remoteDestinationCount + ", \n\tsecurityCategoryCount="
				+ securityCategoryCount + ", \n\tseverity=" + severity
				+ ", \n\tsourceCount=" + sourceCount + ", \n\tsourceNetwork="
				+ sourceNetwork + ", \n\tstartTime=" + startTime
				+ ", \n\tstatus=" + status + ", \n\tusernameCount="
				+ usernameCount + ", \n\tsourceIds=" + sourceIds
				+ ", \n\tdestIds=" + destIds + ", \n\tsourceList=" + sourceList
				+ ", \n\tdestinationList=" + destinationList + "\n]";
	}

}