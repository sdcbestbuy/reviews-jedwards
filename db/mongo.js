const mongo = require('mongodb');

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/test',{ useUnifiedTopology: true }, (error, database) => {
    if(error) return console.error(error);
    db = database;
    console.log('connected to vanilla mongo');
})

const getReviewMongo = async (columnData) => {

    try {
        const review = await db.reviews2.find(columnData);
        return review;
    } catch(err) {
        console.error(err, 'There is a problem getting your data from Mongo');
    }
};

module.exports = {

    getReviewMongo
}