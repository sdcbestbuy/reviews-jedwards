const express = require("express");
const app = express();
const path = require("path");
const PORT = 6969;


app.use(express.static(path.join(__dirname, "../frontEnd/dist")));
app.use(express.json())

app.get('/api/getReviews',(req,res)=>{
  //need to make query to send request to db for certain product
  res.send('ok');
})




app.listen(PORT, () => {
  console.log(`server is CONNECTED on PORT:${PORT}`);
});
