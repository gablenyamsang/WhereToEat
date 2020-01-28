# WhereToEat

#-- How to run test

git clone https://github.com/gablenyamsang/WhereToEat.git

#-- Build PHP Host

cd /root/WhereToEat/api

cat <<EOF> config.json

{

 "system_name": "Where to Eat",
 
 "database": {
 
  "host": "mydb",
  
  "db_name": "db_where",
  
  "user": "root",
  
  "password": "my-secret-pw"
  
 }
 
}

EOF

cd /root/WhereToEat/web/js

cat <<EOF> where_config.js

var config = {

 "api_path": "./api/"
 
};

EOF

cd /root/WhereToEat

cat <<EOF> Dockerfile

FROM paichayon/php5-alpine:latest

WORKDIR /app

COPY ./api /app/api

COPY ./web /app

EOF

docker pull paichayon/php5-alpine:latest

docker build -t front:latest .

docker run -d -p 8080:80 --name front --rm front:latest


#-- Build MariaDB

cd /root/WhereToEat/db_script

docker pull mysql/mysql-server:latest


cat <<EOF> db_where.sql

CREATE DATABASE IF NOT EXISTS db_where DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

EOF

docker build -t mysql:latest .

docker run -d -p 3306:3306 --name mydb --rm -e MYSQL_ROOT_PASSWORD=my-secret-pw mysql/mysql-server:latest

docker exec -i mydb mysql --default-character-set=utf8 -uroot -pmy-secret-pw mysql < db_where.sql
