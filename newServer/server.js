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
            console.log('item got items'); 
            console.error(error);
        } else {
            res.json(result);
        }
    });
}));
// Using async/await
// const arr = await Movie.find({ year: { $gte: 1980, $lte: 1989 } });
// Using callbacks
// Movie.find({ year: { $gte: 1980, $lte: 1989 } }, function(err, arr) {});

app.post('/postReviews', ((req, res) => {
    review.insertMany({}, function(error, result) {
        if (error) {
        console.error(error);
        } else {
        console.log('item inserted');
        res.json(result);
        }
    });
}));

app.delete('/deleteReviews', ((req, res) => {
    review.deleteMany({}, function(error, result) {
        if (error) {
          console.error(error);
        } else {
          console.log('item deleted');  
          res.json(result);
        }
      });
}));
// Character.deleteMany({ name: /Stark/, age: { $gte: 18 } }, callback)
// Character.deleteMany({ name: /Stark/, age: { $gte: 18 } }).then(next)

app.update('/updateReviews', ((req, res) => {
    review.updateMany({}, function(error, result) {
        if (error) {
            console.error(error);
        } else {
            console.log('item updated');  
            res.json(result);
        }
        });
}));
// const res = await Person.updateMany({ name: /Stark$/ }, { isDeleted: true });
// res.n; // Number of documents matched
// res.nModified; // Number of documents modified

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})