FROM node:14

WORKDIR /exam-helper-api-app
COPY package.json .
RUN npm install
COPY . .
CMD npm start