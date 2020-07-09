const mongoose = require('mongoose');
// make all mongoose methods and functions compliant with ES6 promises
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true})
    .then( res => {
        console.log('woohoo connected!');
    })
    .catch( err => {
        console.log('error at mongoose connection');
        console.error(err);
    })

// same thing as connection.connect
const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
});

// this sets the "table" and it's "columns"
const reviewSchema = new mongoose.Schema({
    user: String
});

// not sure what this is equivalent to in mySQL
const Review = mongoose.model('Review', reviewSchema);

const reviewDb = new Review({user: 'joe mama'});

// convert to promise
reviewDb.save()
    .then( res => {
        console.log('saved to database');
    })
    .catch( err => {
        console.log('error saving data');
        console.error(err);
    })


module.exports = {
    Review,
    reviewDb, 
    db
}
