FROM node:16.13.0

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

USER node

COPY --chown=node:node package.json .
ENV NODE_ENV=development

COPY --chown=node:node . .
RUN npm install  --legacy-peer-deps --save-dev
RUN npm install ng
EXPOSE 4200

#CMD [ "npm", "start" ]

CMD [ "ng", "serve", "--host=0.0.0.0", "--disable-host-check" ]
