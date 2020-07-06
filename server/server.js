const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 6969;
const dbquery = require ('../db/queries')
// REVIEWS COMPONENT

app.use(express.static(path.join(__dirname, '../frontEnd/dist')));
app.use(express.json())

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
})

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
