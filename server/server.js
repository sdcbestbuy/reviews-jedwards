// 'strict mode'
const express = require('express');
const app = express();
const path = require('path');
const PORT = 8008;
const dbquery = require ('../db/queries');
const Review = require('../db/schema');

app.use(express.static(path.join(__dirname, '../frontEnd/dist')));
app.use(express.json());

app.get('/getReviews', async (req, res) => {

    try {
        const review = await Review.find();
        res.json(review);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
});

app.post('/postReviews', async (req, res) => {
    

    const review = new Review({
        user: 'req.body.user',
        review: 'req.body.review'
    })

    try {
        const newReview = await review.save()
        res.status(201).json(newReview)
    } catch(err) {
        res.status(400).json({message: err.message});
    }
});

// app.delete('/deleteReviews', async (req, res) => {
//     // try {
//     //     const newReview = await review.save()
//     //     res.status(201).json(newReview)
//     // } catch(err) {
//     //     res.status(400).json({message: err.message});
//     // }
// });

// app.put('/updateReviews', async (req, res) => {
//     // try {
//     //     const newReview = await review.save()
//     //     res.status(201).json(newReview)
//     // } catch(err) {
//     //     res.status(400).json({message: err.message});
//     // }
// });

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


