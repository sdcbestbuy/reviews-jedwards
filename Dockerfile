FROM node:latest
RUN mkdir /sdc_bestbuy
ADD . /sdc_bestbuy
WORKDIR /sdc_bestbuy
RUN npm install
EXPOSE 8008
CMD ['node', 'server/server.compiled.js' ]
