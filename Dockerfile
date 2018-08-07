FROM node:8.11-alpine

RUN apk update && apk upgrade && \
    apk add --no-cache yarn 

WORKDIR /usr/src/app

ADD package.json yarn.lock /usr/src/app/
RUN yarn install