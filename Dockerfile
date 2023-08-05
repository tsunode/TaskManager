FROM node:lts-alpine as base

WORKDIR /taskmanager

COPY package*.json ./

RUN npm i

COPY . .

FROM base AS production

ENV NODE_PATH=./build

RUN npm run build

CMD ["npm", "run", "start"]