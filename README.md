# ORoliste

ORoliste is a web app to create roleplay game and meet gamer.
It's a end study project. This project is a fork of a non public redepository.
Team of 3 devs

## Setup

Download project on a apache server. Create an .env.local file with your MariaDB or Mysql credentials. Then when your apache and database server is ok : 
* make `php bin/console d:d:c` (doctrine:database:create) to create database
* make `php bin/console d:mi:mi`(doctrine:migrations:migrate) to create tables and fields


