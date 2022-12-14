FROM node:16.13.0

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

USER node
COPY --chown=node:node package*.json ./

RUN npm install  --legacy-peer-deps

COPY --chown=node:node . .

EXPOSE 4050

CMD [ "npm", "run", "server" ]
