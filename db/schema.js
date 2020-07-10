const mongoose = require('mongoose');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const faker = require('faker');

let counter = 0;
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
    review: String
});

const generateData = () => {
    writer.pipe(fs.createWriteStream('data.csv'));
    for(let i = 0; i < 10000000; i++) {
        writer.write({
            user: faker.internet.userName(),
            review: faker.lorem.words()
        })
    }
    writer.end();
    console.log('I think I am done?');
};

// generateData();

// seedData();
module.exports = mongoose.model('Review', reviewSchema);
