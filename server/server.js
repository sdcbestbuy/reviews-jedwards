const express = require('express');
const app = express();
const path = require('path');
const PORT = 6969;
const dbquery = require ('../db/queries')


app.use(express.static(path.join(__dirname, '../frontEnd/dist')));
app.use(express.json())

app.get('/api/getReviews',(req,res)=>{
  console.log('Got a get req for id',req.query.id)
  dbquery.getTheReviews(req.query.id,(error,results)=>{
    if (error){
      console.log('ERROR IN SERVER getTheReviews',error);
      res.status(400).send(error)
    } else {
      res.status(200).send(results)
    }
  })
})




app.listen(PORT, () => {
  console.log(`server is CONNECTED on PORT:${PORT}`);
});
