FROM paichayon/php5-alpine:latest
WORKDIR /app
COPY ./api /app/api
COPY ./web /app
