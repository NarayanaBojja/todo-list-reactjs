FROM node:lts-alpine3.19
WORKDIR /todo-list/
COPY . /todo-list/
RUN npm install
CMD ["npm", "start"]