// 'strict mode'
const express = require('express');
const app = express();
const path = require('path');
const PORT = 8008;
const dbquery = require ('../db/queries');
// const Review = require('../db/schema');
const reviews2 = require('../db/schema');
// const {getReviews, postReviews} = require('../db/knexQueries');
const { getReviewData, createReviewData } = require('../db/schema');

app.use(express.static(path.join(__dirname, '../frontEnd/dist')));
app.use(express.json());

// ? MONGO ENDPOINTS =================================
app.get('/getReviews', async (req, res) => {

    console.log('hello there');
    try {
        // const review = await reviews2.findOne({user: 'Easton'});
        const review = await getReviewData('Easton');
        res.json(review);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
});

app.post('/postReviews', async (req, res) => {
    
    // const review = new reviews2({
    //     user: 'Jack',
    //     revCount: 20,
    //     revAvg: 3,
    //     revTitle: 'total wackness',
    //     review: 'This is wack'
    // })

    // try {
    //     const newReview = await review.save()
    //     res.status(201).json(newReview)
    // } catch(err) {
    //     res.status(400).json({message: err.message});
    // }
});

// ? POSTGRES ENDPOINTS =================================

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


