// 'strict mode'
const express = require('express');
const app = express();
const path = require('path');
const PORT = 8008;
const dbquery = require ('../db/queries');
const db = require('../db/schema');
// const {Review} = require ('../db/queries');
// const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '../frontEnd/dist')));
app.use(express.json());
// app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }));

// app.get('/getReviews', (req, res) => {
//     console.log('hit something');
//     db.Review.find({})
//         .then( res => {
//             console.log('getting reviews');
//         })
//         .catch( err => {
//             console.error(err);
//         })
// });
// Using async/await
// const arr = await Movie.find({ year: { $gte: 1980, $lte: 1989 } });
// Using callbacks
// Movie.find({ year: { $gte: 1980, $lte: 1989 } }, function(err, arr) {});

app.post('/postReviews', (req, res) => {
    console.log('hit');
    db.Review.insert()
        .then( res => {
            let review = new Review({
                user: 'jack mama'
            })
            review.save()
                .then( post => {
                    console.log('posting reviews');
                    res.json(201, post);
                })
                .catch( error => {
                    console.error(error);
                })
        })
        .catch( err => {
            console.error(err);
        })
});

// app.delete('/deleteReviews', ((req, res) => {
//     Review.deleteMany({ 'user': 'jack mama' })
//         .then( res => {
//             console.log('deleting reviews');
//         })
//         .catch( err => {
//             console.error(err);
//         })
// }));
// Character.deleteMany({ name: /Stark/, age: { $gte: 18 } }, callback)
// Character.deleteMany({ name: /Stark/, age: { $gte: 18 } }).then(next)

// app.put('/updateReviews', ((req, res) => {
//     Review.updateMany()
//         .then( res => {
//             console.log('updating reviews');
//         })
//         .catch( err => {
//             console.error(err);
//         })
// }));
// const res = await Person.updateMany({ name: /Stark$/ }, { isDeleted: true });
// res.n; // Number of documents matched
// res.nModified; // Number of documents modified

// ?=================================
// ?=================================
// ?=================================

// server route to get a review for a certain product
app.get('/api/getReviews',(req,res)=>{
    dbquery.getTheReviews(req.query.id,(error,results)=>{
        if (error){
        console.log('ERROR IN SERVER getTheReviews',error);
        res.status(400).send(error)
        } else {
        res.status(200).send(results)
        }
    })
});

// server route to get a list of all real product ids
app.get("/api/getListOfRealProducts",(req,res)=>{
    dbquery.getTheListOfRealProducts((error,results)=>{
        if(error){
        console.log('ERROR IN SERVER getTheListOfRealProducts',error)
        res.status(400).send(error)
        } else {
        res.status(200).send(results)
        }
    })
})

// server route that gets all the thumbnails of a certain product
app.get("/api/getListOfRealProductsThumbnails",(req,res)=>{
    dbquery.getImagesforProduct(req.query.id,(error,results)=>{
        if(error){
        console.log('ERROR IN SERVER getImagesforProduct',error)
        res.status(400).send(error)
        } else {
        res.status(200).send(results)
        }
    })
})

app.listen(PORT, () => {
    console.log(`server is CONNECTED on PORT:${PORT}`);
});
