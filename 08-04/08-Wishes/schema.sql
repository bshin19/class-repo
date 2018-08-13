DROP Database if exists wishes_db;
CREATE Database wishes_db;

USE wishes_db;

create table wishes(
id int NOT NULL AUTO_INCREMENT,
wish varchar(255) NOT NULL,
PRIMARY KEY (id)
);

INSERT into wishes (wish) VALUES ("End World Hunger"), ("World Peace"), ("Mo' money");