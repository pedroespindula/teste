FROM node:12.16.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

CMD ["yarn", "run", "start"]

COPY package.json /app/package.json

RUN yarn install --no-optional --verbose

