CREATE DATABASE achievements;

\c achievements;

CREATE TABLE achievements (
	id SERIAL PRIMARY KEY,
	title VARCHAR NOT NULL,
	description VARCHAR
);

CREATE TABLE achievement_relations (
	achievement_id integer references achievements (id),
	user_id varchar NOT NULL,
	done boolean NOT NULL,
	unique(achievement_id, user_id)
);
