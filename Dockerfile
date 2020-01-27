FROM php:apache
WORKDIR /var/www/html
COPY ./api /var/www/html/api
COPY ./web /var/www/html
