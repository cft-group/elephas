# FROM ubuntu:latest
FROM node:16.20.2-bookworm

WORKDIR /app

# RUN apt update && \
#     apt install -y nodejs npm

# RUN apt install -y yarn
# RUN npm install -g yarn
RUN apt update

COPY . .

RUN rm -f /app/yarn.lock
# # RUN ls -la
RUN yarn install