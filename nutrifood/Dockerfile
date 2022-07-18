FROM node:alpine3.10
WORKDIR /usr/app

COPY package*.json .

RUN npm install

COPY . .

RUN chmod +x entrypoint.sh

EXPOSE 3000

CMD sh entrypoint.sh
