create database jsonTrial;

use jsonTrial;

create table jsonData (
	id int NOT NULL AUTO_INCREMENT,
    var JSON not null,
    primary key (id)
);

insert into jsonData (jdoc) values ('["sword", "axe"]');

select * from jsonData;

select concat("[\"", group_concat(firstWeapon separator "\", \""), "\"]") as firstWeapons from (select jdoc->>"$[0]" as firstWeapon, jdoc->>"$[1]" as secondWeapon from jsonData) as jsonData;