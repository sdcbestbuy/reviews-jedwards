// !====== Server file for SDC =======
// !==================================

const express = require('express');
const add = express();
const path = require('path');
const PORT = 8008;

app.use(express.static(path.join(__dirname, '../frontEnd/dist')));
app.use(express.json());

app.get('/getReviews', ((req, res) => {
    review.find({}, function(error, result) {
        if (error) {
          console.error(error);
        } else {
          res.json(result);
        }
      });
}));

app.post('/postReviews', ((req, res) => {
    review.insertMany({}, function(error, result) {
        if (error) {
          console.error(error);
        } else {
          res.json(result);
        }
      });
}));

app.delete('/deleteReviews', ((req, res) => {
    review.deleteMany({}, function(error, result) {
        if (error) {
          console.error(error);
        } else {
          res.json(result);
        }
      });
}));

app.update('/updateReviews', ((req, res) => {
    review.updateMany({}, function(error, result) {
        if (error) {
          console.error(error);
        } else {
          res.json(result);
        }
      });
}));


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})