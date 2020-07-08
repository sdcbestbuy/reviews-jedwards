"use strict";

// !====== Server file for SDC =======
// !==================================
var express = require('express');

var app = express();

var path = require('path');

var PORT = 8008;
app.use(express["static"](path.join(__dirname, '../frontEnd/dist')));
app.use(express.json());
app.get('/getReviews', function (req, res) {
  review.find({
    user: 'jack mama'
  }, function (error, result) {
    if (error) {
      console.log('item got items');
      console.error(error);
    } else {
      res.json(result);
    }
  });
}); // Using async/await
// const arr = await Movie.find({ year: { $gte: 1980, $lte: 1989 } });
// Using callbacks
// Movie.find({ year: { $gte: 1980, $lte: 1989 } }, function(err, arr) {});

app.post('/postReviews', function (req, res) {
  review.insertMany({
    user: 'jack mama'
  }, function (error, result) {
    if (error) {
      console.error(error);
    } else {
      console.log('item inserted');
      res.json(result);
    }
  });
});
app["delete"]('/deleteReviews', function (req, res) {
  review.deleteMany({
    user: 'jack mama'
  }, function (error, result) {
    if (error) {
      console.error(error);
    } else {
      console.log('item deleted');
      res.json(result);
    }
  });
}); // Character.deleteMany({ name: /Stark/, age: { $gte: 18 } }, callback)
// Character.deleteMany({ name: /Stark/, age: { $gte: 18 } }).then(next)

app.put('/updateReviews', function (req, res) {
  review.updateMany({}, function (error, result) {
    if (error) {
      console.error(error);
    } else {
      console.log('item updated');
      res.json(result);
    }
  });
}); // const res = await Person.updateMany({ name: /Stark$/ }, { isDeleted: true });
// res.n; // Number of documents matched
// res.nModified; // Number of documents modified

app.listen(PORT, function () {
  console.log("Listening on port ".concat(PORT));
});
