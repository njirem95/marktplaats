FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install -g typescript

COPY . .

RUN tsc

EXPOSE 1337

CMD ["node", "dist/server.js"]