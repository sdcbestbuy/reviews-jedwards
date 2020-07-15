// 'strict mode'
require('newrelic');
const express = require('express');
const app = express();
const path = require('path');
const PORT = 8008;
const dbquery = require ('../db/queries');
const { getReviewData, createReviewData } = require('../db/schema');
// const { getReviewMongo } = require('../db/mongo'); vanilla mongo
// const {getReviews, postReviews} = require('../db/knexQueries'); postgres
// const {randomArray} = require('../randomArray'); random function 1000 names

app.use(express.static(path.join(__dirname, '../frontEnd/dist')));
app.use(express.json());

// ? MONGO ENDPOINTS =================================
app.get('/getReviewsData', async (req, res) => {

    try {
        const review = await getReviewData({user: 'Johnathan'});
        res.json(review);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
});

app.post('/postReviewsData', async (req, res) => {
    
    const reviewObj = {
        user: 'harry bobbleton',
        revCount: 99,
        revAvg: 2.7,
        revTitle: 'harry is the most wack',
        review: 'This guy...'
    }

    try {
        const review = await createReviewData(reviewObj);
        res.json(review);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
});
// ? VANILLA MONGO ======================================

// app.get('/getReviewsMongo', async (req, res) => {

//     try {
//         const review = await getReviewMongo({ user: 'Johnathan'});
//         res.json(review);
//     } catch(err) {
//         res.status(500).json({message: err.message});
//     }
// });

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


// scp -i joshthewebdev.pem Archive.zip ec2-3-12-160-114.us-east-2.compute.amazonaws.com:Archive.zip
