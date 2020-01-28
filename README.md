# WhereToEat

# How to run test

git clone https://github.com/gablenyamsang/WhereToEat.git

# Build PHP Host

cd WhereToEat

docker pull paichayon/php5-alpine:latest

cat <<EOF> Dockerfile

FROM paichayon/php5-alpine:latest

WORKDIR /app

COPY ./api /app/api

COPY ./web /app

EOF

docker build -t front:latest .

docker run -d -p 8080:80 --name front --rm front:latest


# Build MariaDB

cd db_script

docker pull mysql/mysql-server:latest


cat <<EOF> db_where.sql

CREATE DATABASE IF NOT EXISTS db_where DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

EOF

docker build -t mysql:latest .

docker run -d -p 3306:3306 --name db_where --rm -e MYSQL_ROOT_PASSWORD=my-secret-pw mysql/mysql-server:latest

docker exec -it db_where mysql -uroot -pmy-secret-pw -e "db_where.sql"
