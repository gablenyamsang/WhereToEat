FROM php:apache
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli
WORKDIR /var/www/html
COPY ./api /var/www/html/api
COPY ./web /var/www/html/web
COPY ./config.json /var/www/html/api/config.json
#COPY ./where_config.js /app/js/where_config.js
