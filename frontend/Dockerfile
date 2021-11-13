FROM node:14-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package.json ./
RUN npm install --silent

COPY . ./
RUN npm build


CMD ["npm", "start"]
