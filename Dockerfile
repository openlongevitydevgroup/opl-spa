FROM node as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .