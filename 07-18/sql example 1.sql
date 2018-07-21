-- This is a comment in SQL--
CREATE DATABASE Favorite_Db;

USE animals_db;

CREATE TABLE people (
name VARCHAR(30) NOT NULL,
has_pet BOOLEAN NOT NULL,
pet_name VARCHAR(30),
pet_age INTEGER(10)
);