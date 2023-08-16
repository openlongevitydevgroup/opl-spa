FROM node as build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install --global http-server
COPY . .