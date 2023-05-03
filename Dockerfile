FROM node:14-alpine

WORKDIR /app

COPY ./package.json .

COPY yarn.lock .

COPY . .

RUN yarn

RUN yarn build

ENV NODE_ENV production

EXPOSE 9000

CMD ["yarn", "start"]
