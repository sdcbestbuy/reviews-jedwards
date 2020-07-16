FROM node:12.7.0-alpine
WORKDIR /sdc_bestbuy
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8008
CMD ['npm', 'start' ]
