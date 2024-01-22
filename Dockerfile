FROM node:20-alpine

WORKDIR /var/www
RUN chown -R node:node /var/www

USER node

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
