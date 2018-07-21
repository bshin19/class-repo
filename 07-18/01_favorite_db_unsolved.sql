-- use animals_db;
-- SELECT * FROM PEOPLE;
-- SELECT name, pet_name FROM PEOPLE;
-- INSERT INTO people (name, has_pet, pet_name, pet_age) VALUES ("Phil", true, "Bucky", 120);

-- Make a change to parameters in db --
-- UPDATE PEOPLE SET pet_name = "Bucky2" where name = "Phil";

INSERT INTO favorite_foods (food, score) VALUES ("PIZZA", 9);
INSERT INTO favorite_foods (food, score) VALUES ("Curry", 10);
INSERT INTO favorite_foods (food, score) VALUES ("Oatmeal", 0);
SELECT * FROM favorite_foods;

-- Drops the favorite_db if it exists currently --
DROP DATABASE IF EXISTS favorite_db;
-- Creates the "favorite_db" database --
CREATE DATABASE favorite_db;

-- Make it so all of the following code will affect favorite_db --
USE favorite_db;

-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE favorite_foods (
  -- Make a string column called "food" which cannot contain null --
  food VARCHAR(30) NOT NULL,
  -- Make an numeric column called "score" --
  score INTEGER(5)
);

CREATE TABLE favorite_songs (
  -- Make a string column called "song" which cannot contain null --
  song VARCHAR(30) NOT NULL,
  -- Make a string column called "artist" --
  artist VARCHAR(30) NOT NULL,
  -- Make an integer column called "score" --
  score INTEGER(10)
);

INSERT INTO favorite_movies (movie, score) VALUES ("Inception", 3);
INSERT INTO favorite_movies (movie, score) VALUES ("LOTR", 5);
INSERT INTO favorite_movies (movie, score) VALUES ("Mulan", 4);
SELECT * FROM favorite_movies;

CREATE TABLE favorite_movies (
  -- Create a numeric column called "id" which automatically increments and cannot be null --
  id INTEGER NOT NULL auto_increment,
  -- Create a string column called "movie" which cannot be null --
  movie VARCHAR(30) NOT NULL,
  -- Create a boolean column called "five_times" that sets the default value to false if nothing is entered --
  five_times BOOLEAN NOT NULL,
  -- Make an integer column called "score" --
  score INTEGER(5),
  -- Set the primary key of the table to id --
  PRIMARY KEY (id)
);
