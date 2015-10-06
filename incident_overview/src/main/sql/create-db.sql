CREATE DATABASE offenseviz;

CREATE TABLE offense(
	id BIGSERIAL PRIMARY KEY NOT NULL,
	seen_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now(),
	offense_id BIGINT,
	credibility INT, 
	remote_destination_count INT, 
	assigned_to TEXT, 
	source_count INT,
	start_time TIMESTAMP WITHOUT TIME ZONE,
	inactive BOOLEAN,
	protected BOOLEAN,
	policy_category_count INT,
	description TEXT,
	category_count INT,
	relevance INT,
	device_count INT,
	security_category_count INT,
	flow_count INT,
	event_count INT,
	offense_source TEXT,
	status VARCHAR(16),
	magnitude INT,
	severity INT,
	username_count INT,
	closing_user TEXT,
	follow_up BOOLEAN,
	closing_reason_id INT,
	close_time TIMESTAMP WITHOUT TIME ZONE,
	source_network TEXT,
	last_updated_time TIMESTAMP WITHOUT TIME ZONE,
	offense_type INT
);

CREATE TABLE source (
	id BIGINT PRIMARY KEY NOT NULL,
	ip VARCHAR(16),
	network TEXT,
	username TEXT, 
	latitude double precision,
	longitude double precision,
	country VARCHAR(100),
	city VARCHAR(100),
	internal BOOLEAN NOT NULL default false
);

CREATE TABLE destination (
	id BIGINT PRIMARY KEY NOT NULL,
	ip VARCHAR(16),
	network TEXT,
	username TEXT,
	latitude double precision,
	longitude double precision,
	country VARCHAR(100),
	city VARCHAR(100),
	internal BOOLEAN NOT NULL default false
);

CREATE TABLE offense_source_link (
	id BIGSERIAL PRIMARY KEY NOT NULL,
	offense_id BIGINT REFERENCES offense(id),
	source_id BIGINT REFERENCES source(id)
);

CREATE TABLE offense_dest_link (
	id BIGSERIAL PRIMARY KEY NOT NULL,
	offense_id BIGINT REFERENCES offense(id),
	dest_id BIGINT REFERENCES destination(id)
);

CREATE TABLE offense_category (
	offense_id BIGINT REFERENCES offense(id) NOT NULL,
	name TEXT NOT NULL
);
