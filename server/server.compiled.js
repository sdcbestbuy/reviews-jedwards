"use strict";

var express = require('express');

var app = express();

var path = require('path');

var PORT = 8008;

var dbquery = require('../db/queries');

var _require = require('../db/queries'),
    Review = _require.Review;

var bodyParser = require('body-parser');

app.use(express["static"](path.join(__dirname, '../frontEnd/dist')));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get('/getReviews', function (req, res) {
  Review.find(function (error, reviews) {
    if (error) {
      return console.error(error);
    } else {
      console.log('It worked!');
    }
  });
}); // Using async/await
// const arr = await Movie.find({ year: { $gte: 1980, $lte: 1989 } });
// Using callbacks
// Movie.find({ year: { $gte: 1980, $lte: 1989 } }, function(err, arr) {});

app.post('/postReviews', function (req, res) {
  Review.insertMany({
    user: 'jack mama'
  }, function (error, result) {
    if (error) {
      console.error(error);
    } else {
      console.log('item inserted'); // res.end()
    }
  });
});
app["delete"]('/deleteReviews', function (req, res) {
  Review.deleteMany({
    'user': 'jack mama'
  }, function (error, result) {
    if (error) {
      console.error(error);
    } else {
      console.log('item deleted'); // res.end()
    }
  });
}); // Character.deleteMany({ name: /Stark/, age: { $gte: 18 } }, callback)
// Character.deleteMany({ name: /Stark/, age: { $gte: 18 } }).then(next)

app.put('/updateReviews', function (req, res) {
  Review.updateMany({}, function (error, result) {
    if (error) {
      console.error(error);
    } else {
      console.log('item updated'); // res.end()
    }
  });
}); // const res = await Person.updateMany({ name: /Stark$/ }, { isDeleted: true });
// res.n; // Number of documents matched
// res.nModified; // Number of documents modified
// ?=================================
// ?=================================
// ?=================================
// server route to get a review for a certain product

app.get('/api/getReviews', function (req, res) {
  dbquery.getTheReviews(req.query.id, function (error, results) {
    if (error) {
      console.log('ERROR IN SERVER getTheReviews', error);
      res.status(400).send(error);
    } else {
      res.status(200).send(results);
    }
  });
}); // server route to get a list of all real product ids

app.get("/api/getListOfRealProducts", function (req, res) {
  dbquery.getTheListOfRealProducts(function (error, results) {
    if (error) {
      console.log('ERROR IN SERVER getTheListOfRealProducts', error);
      res.status(400).send(error);
    } else {
      res.status(200).send(results);
    }
  });
}); // server route that gets all the thumbnails of a certain product

app.get("/api/getListOfRealProductsThumbnails", function (req, res) {
  dbquery.getImagesforProduct(req.query.id, function (error, results) {
    if (error) {
      console.log('ERROR IN SERVER getImagesforProduct', error);
      res.status(400).send(error);
    } else {
      res.status(200).send(results);
    }
  });
});
app.listen(PORT, function () {
  console.log("server is CONNECTED on PORT:".concat(PORT));
});
