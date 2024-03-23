FROM node:lts-alpine3.19
WORKDIR /todo-list/
COPY public/ /todo-list/public
COPY src/ /todo-list/src
COPY package.json /todo-list/
RUN npm install
CMD ["npm", "start"]