/* Instructions:
Make a new database called “programming_db” and switch into it for this activity
Create a table called “programming_languages” which includes a primary key named “id” which will automatically increment which each new row created, a string column called “languages,” and a numeric column called “rating.”
Insert some data into the table and then modify the data using the id column.
BONUS: Study up on how to add columns to a table and then create a boolean column called “mastered” which has a default value of true.
BONUS: Start looking into the concept of joins in SQL (edited)
*/

DROP DATABASE IF EXISTS programming_db;

-- Database is created
CREATE DATABASE programming_db;

-- Selects the programming_db for further tables
USE programming_db;

CREATE TABLE programming_languages(
id INTEGER NOT NULL auto_increment,
languages VARCHAR(30) NOT NULL,
rating INTEGER(11) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO programming_languages(languages, rating) VALUES ("English", 11);
INSERT INTO programming_languages(languages, rating) VALUES ("Chinese", 148);
SELECT * FROM programming_languages;