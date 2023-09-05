FROM node as build
WORKDIR /app
COPY . .

ENV REACT_APP_DB_REQUEST=admin.longevityknowledge.app
ENV REACT_APP_POST_REQUEST=https://admin.longevityknowledge.app/api/open-problems/submit
ENV REACT_APP_RECAPTCHA_SECRET_KEY=6LfuXdkmAAAAANrcSZY1LkaUSxDvyBpiSqvmvTO-
ENV REACT_APP_RECAPTCHA_SITE_KEY=6LfuXdkmAAAAAKEGNxd3xs-wFQjzb4FYVTUB6wO-
ENV REACT_APP_OPEN_PROBLEMS_ENDPOINT=https://admin.longevityknowledge.app/api/open-problems/
ENV REACT_APP_OPEN_PROBLEMS_ROOT_ENDPOINT=https://admin.longevityknowledge.app/api/open-problems/root
ENV REACT_APP_GET_SUBMISSION_ENDPOINT=https://admin.longevityknowledge.app/api/posts
ENV REACT_APP_ANNOTATIONS_ENDPOINT=https://admin.longevityknowledge.app/api/annotations/
ENV REACT_APP_VERIFY_TOKEN_ENDPOINT=https:///admin.longevityknowledge.app/api/open-problems/verify-token
ENV REACT_APP_BASE_URL=https://admin.longevityknowledge.app/api/

RUN npm install
RUN npm install --global serve
RUN npm run build
