FROM  nginx

COPY --from=build ../build /usr/share/nginx/html 
COPY ./opl-front-dev.conf /etc/nginx/conf.d/opl-front-dev.conf

EXPOSE 80 

CMD ["nginx", "-g", "daemon off;"]