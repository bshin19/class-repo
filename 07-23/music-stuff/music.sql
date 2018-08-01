DROP DATABASE IF EXISTS musicTop;

CREATE DATABASE musicTop;

USE musicTop;

CREATE TABLE topalbs (
pos INT(3) NOT NULL,
artist VARCHAR(45) NULL,
song VARCHAR(121) NOT NULL,
sYear INT NULL,
raw_total FLOAT(6,3),
raw_usa FLOAT(6,3),
raw_uk FLOAT(6,3),
raw_eur FLOAT(6,3),
raw_row FLOAT(6,3),
PRIMARY KEY (pos)
);