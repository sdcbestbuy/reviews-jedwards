const mongoose = require('mongoose');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const faker = require('faker');

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

    user: String,
    revCount: Number,
    revAvg: Number,
    revTitle: String,
    review: String,
});

const generateData = () => {

    var dataEntries  = 10000000;

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


// ? ====================================
// TODO =================================

const getReviewData = async (columnData) => {

    try {
        const review = await reviews2.findOne({user: columnData});
        return review;
        // res.json(review);
    } catch(err) {
        // res.status(500).json({message: err.message});
        console.log('There is a problem getting your data');
    }
};


const createReviewData = async (reviewData) => {

    const review = new reviews2({
        user: reviewData.user,
        revCount: reviewData.revCount,
        revAvg: reviewData.revAvg,
        revTitle: reviewData.revTitle,
        review: reviewData.review
    })

    try {
        const newReview = await review.save()
        res.status(201).json(newReview)
    } catch(err) {
        res.status(400).json({message: err.message});
    }
};


const collection = mongoose.model('reviews2', reviewSchema);

// generateData();
module.exports = {

    collection, 
    getReviewData,
    createReviewData
}


