-- Created the DB "wizard_schools_db" (only works on local connections)
DROP DATABASE if Exists the_office_db;
CREATE DATABASE the_office_db;
USE the_office_db;

-- Created the table "schools" 
CREATE TABLE actors (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  rating FLOAT(3) NOT NULL,
  attitude varchar(30) NOT NULL,
  PRIMARY KEY(id)
);

-- Inserted a set of records into the table
INSERT INTO actors (name, rating, attitude) VALUES ("Dwight", 9, "Obnoxious");
INSERT INTO actors (name, rating, attitude) VALUES ("Jim", 7, "Smudge");
INSERT INTO actors (name, rating, attitude) VALUES ("Michael", 10, "Boss");
INSERT INTO actors (name, rating, attitude) VALUES ("Pam", 9.5, "Clever");