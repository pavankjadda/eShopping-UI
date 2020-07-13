
## Use Nginx alpine image
FROM nginx:stable-alpine as nginx

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/nginx.conf

## Copy Nginx proxy-settings.conf file
COPY nginx/proxy-settings.conf /etc/nginx/conf.d/proxy-settings.conf

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## Copy dist folder to default nginx public folder
COPY ./dist /usr/share/nginx/html

### Create local user and add to the group
#RUN addgroup $GROUP && useradd $USER -g $GROUP
#USER $USER

CMD ["nginx", "-g", "daemon off;"]
