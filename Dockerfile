FROM node as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm install --global serve
RUN npm run build
