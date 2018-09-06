-- Table 1
CREATE TABLE person (
`id` INT NOT NULL PRIMARY KEY,
`name` VARCHAR(50)
);

-- Table 2
CREATE TABLE fruits (
`fruit_name` VARCHAR(20) NOT NULL PRIMARY KEY,
`color` VARCHAR(20),
`price` INT
);

-- Joining Table
CREATE TABLE person_fruit (
`person_id` INT NOT NULL,
`fruit_name` VARCHAR(20) NOT NULL,
PRIMARY KEY(`person_id`, `fruit_name`)
);

-- Join Code
-- p.* and f.* are alias' for person and fruits: the table names. These aliases are defined below but work up here. #sqlmagic
SELECT p.*, f.*
FROM person p -- select all from person (alias p declared here)
INNER JOIN person_fruit pf -- inner join on person_fruit, which is given the pf alias.
ON pf.person_id = p.id -- where person_fruit.person_id and person.id have matching values
INNER JOIN fruits f -- inner join on fruits (alias f declared)
ON f.fruit_name = pf.fruit_name -- where fruits.fruit_name and person_fruit.fruit_name have matching values.