# WhereToEat
#How to run test
git clone https://github.com/gablenyamsang/WhereToEat.git

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
