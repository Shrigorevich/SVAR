CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE achievements (
	id uuid DEFAULT uuid_generate_v1 (),
	title TEXT NOT NULL,
	description TEXT,
	PRIMARY KEY (id)
);

CREATE TABLE attached_achievements (
	achievement_id uuid references achievements (id),
	user_id uuid NOT NULL,
	done boolean NOT NULL
);

CREATE INDEX ach_id_index ON attached_achievements (achievement_id);

CREATE UNIQUE INDEX att_ach_index ON attached_achievements (achievement_id, user_id);
