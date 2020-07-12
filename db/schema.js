const mongoose = require('mongoose');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const faker = require('faker');

// make all mongoose methods and functions compliant with ES6 promises
mongoose.Promise = global.Promise;

// create the mongo connection
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

    user: String,
    revCount: Number,
    revAvg: Number,
    revTitle: String,
    review: String,
});

// this funciton is used to create another csv file
const generateData = () => {
    // number of items to be created in the csv file
    var dataEntries  = 10000000;
    // change the name here to create a new collection and seed it
    writer.pipe(fs.createWriteStream('data2.csv'));

    for(let i = 0; i < dataEntries; i++) {

        writer.write({
            user: faker.name.firstName(),
            revCount: 20,
            revAvg: 4.5,
            revTitle: faker.lorem.words(),
            review: faker.lorem.words()

        });
    }
    writer.end();
    console.log('I think I am done?');
};

// ? ========================================================
// The database queries start here ==========================
// TODO =====================================================

const getReviewData = async (columnData) => {

    try {
        const review = await collection.findOne(columnData, function (err, data) {}).lean();
        return review;
    } catch(err) {
        console.error(err, 'There is a problem getting your data');
    }
};

const createReviewData = async (reviewData) => {

    const review = new collection({
        user: reviewData.user,
        revCount: reviewData.revCount,
        revAvg: reviewData.revAvg,
        revTitle: reviewData.revTitle,
        review: reviewData.review
    })

    try {
        const newReview = await review.save()
        return newReview;
    } catch(err) {
        console.error(err, 'There is a problem posting your data');
    }
};

// this is the connection to the collection with the larger set of data
// set this value to 'reviews' to work with the lighter data set
const collection = mongoose.model('reviews2', reviewSchema);

// generateData();
module.exports = {

    collection, 
    getReviewData,
    createReviewData
}


