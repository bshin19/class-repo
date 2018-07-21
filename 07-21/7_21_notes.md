# 7/21 NOTES

## The Docker: Server-grade stuff
Mutable infrastructure: Way it runs on local machine is identical to how it runs on the web. \

+ Linux servers are problematic when rebooted
+ With docker, containers are created.
+ Docker creates a new container and only deletes the old container after all data is ready

+ With docker, containers can be set up and torn down as needed to save on money and resources.

To run: 
docker run -ti -p 3306:3306 -e MYSQL_ALLOW_EMPTY_PASSWORD=yes mysql:5

## Node Mingling with Front End
+ Use Express!!

## mySQL interacting with array in js
Insert:

Select:
+ SELECT * FROM (array) WHERE parameter=?", ["value"]

## MySQL interacting with array in sql
Insert:
+ INSERT INTO array SET ?", { param: "val", etc }

## MONGO
Mongo is designed to be sharded, and more scalable than others \

## OBJECT DATABASES
+ Workbase uses an object database

## 