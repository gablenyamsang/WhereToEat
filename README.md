# WhereToEat

#-- How to run test

git clone https://github.com/gablenyamsang/WhereToEat.git

#-- Build PHP Host

#-- Build PHP Host - Edit /root/WhereToEat/api/config.js

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

#-- Build PHP Host - Edit /root/WhereToEat/web/js/where_config.js

cd /root/WhereToEat/web/js

cat <<EOF> where_config.js

var config = {

 "api_path": "./api/"
 
};

EOF

#-- Build PHP Host - Edit /root/WhereToEat/Dockerfile

cd /root/WhereToEat

docker pull php:apache

cat <<EOF> Dockerfile

FROM php:apache

RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli

WORKDIR /var/www/html

COPY ./api /var/www/html/api

COPY ./web /var/www/html

EOF

docker build -t front:latest .

docker run -d -p 8080:80 --name front --rm front:latest

#-- Build Database

cd /root/WhereToEat/db_script

docker pull mysql/mysql-server:latest

docker run -d -p 3306:3306 --name mydb --rm -e MYSQL_ROOT_PASSWORD=my-secret-pw mysql/mysql-server:latest

docker exec -i mydb mysql -uroot -pmy-secret-pw mysql < db_where.sql

docker exec -it mydb mysql -uroot -pmy-secret-pw -e "show databases"
