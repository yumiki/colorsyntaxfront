FROM alpine:3.7
RUN apk add --update nginx python nodejs && rm -rf /var/cache/apk/*
RUN mkdir -p /tmp/nginx/client-body

COPY dist/ /usr/share/nginx/html

COPY docker_build/config/nginx/nginx.conf /etc/nginx/nginx.conf
COPY docker_build/config/nginx/default.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
