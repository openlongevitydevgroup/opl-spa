FROM node as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm install --global http-server
RUN npm run build
