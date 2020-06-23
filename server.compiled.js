"use strict";

var express = require('express');

var app = express();

var path = require('path');

var PORT = process.env.HTTP_PORT || 6969;

var dbquery = require('./db/queries.js');

var _require = require('http-proxy-middleware'),
    createProxyMiddleware = _require.createProxyMiddleware; // REVIEWS COMPONENT


app.use(express["static"](path.join(__dirname, '../frontEnd/dist')));
app.use(express.json());
app.get('/api/getReviews', function (req, res) {
  console.log('Got a get req for id', req.query.id);
  dbquery.getTheReviews(req.query.id, function (error, results) {
    if (error) {
      console.log('ERROR IN SERVER getTheReviews', error);
      res.status(400).send(error);
    } else {
      res.status(200).send(results);
    }
  });
});
app.listen(PORT, function () {
  console.log("server is CONNECTED on PORT:".concat(PORT));
});
