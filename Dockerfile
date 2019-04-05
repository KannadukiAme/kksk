FROM node:11-alpine as build-stage

WORKDIR /app

COPY . .

RUN yarn --registry=https://registry.npm.taobao.org
RUN yarn docs:build

FROM nginx:1.15-alpine as depoly-stage

COPY --from=0 /app/dist /usr/share/nginx/html/kksk