// !====== Schema file for SDC =======
// !==================================

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

// same thing as connection.connect
const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
});

// this sets the "table" and it's "columns"
const someRandomSchema = new mongoose.Schema({
    user: String
  });

// not sure what this is equivalent to in mySQL
const Review = mongoose.model('aReview', reviewsSchema);

// use the Review.methods method to add functionality, docs example below
// kittySchema.methods.speak = function () {
//     const greeting = this.name
//       ? "Meow name is " + this.name
//       : "I don't have a name";
//     console.log(greeting);
//   }
  
//   const Kitten = mongoose.model('Kitten', kittySchema);

const badReview = new Review({user: 'jerk'});

badReview.save((error, badReview) => {

    if(error) {
        return console.error(error);
    }
    badReview.user
})
