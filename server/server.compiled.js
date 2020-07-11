"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

// 'strict mode'
var express = require('express');

var app = express();

var path = require('path');

var PORT = 8008;

var dbquery = require('../db/queries'); // const Review = require('../db/schema');


var reviews2 = require('../db/schema'); // const {getReviews, postReviews} = require('../db/knexQueries');


var _require = require('../db/schema'),
    getReviewData = _require.getReviewData,
    createReviewData = _require.createReviewData;

app.use(express["static"](path.join(__dirname, '../frontEnd/dist')));
app.use(express.json()); // ? MONGO ENDPOINTS =================================

app.get('/getReviews', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var review;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('hello there');
            _context.prev = 1;
            _context.next = 4;
            return getReviewData('Easton');

          case 4:
            review = _context.sent;
            res.json(review);
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            res.status(500).json({
              message: _context.t0.message
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.post('/postReviews', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()); // ? POSTGRES ENDPOINTS =================================
// app.get('/getReviewsPg', async (req, res) => {
//     try {
//         let getAReview = await getReviews();
//         res.json(getAReview);
//     } catch(err) {
//         res.status(500).json({message: err.message});
//     }
// });
// app.post('/postReviewsPg', async (req, res) => {
//     try {
//         let postAReview = await postReviews();
//         res.json(postAReview);
//     } catch(err) {
//         res.status(400).json({message: err.message});
//     }
// });
// ?============================================================
// ?============================================================
// ?============================================================
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
