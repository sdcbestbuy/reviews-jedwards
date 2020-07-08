// !====== Server file for SDC =======
// !==================================

const express = require('express');
const add = express();
const path = require('path');
const PORT = 8008;

app.use(express.static(path.join(__dirname, '../frontEnd/dist')));
app.use(express.json());

app.get('/getReviews', (error, result) => {
    
})
app.post('/getReviews', (error, result) => {

})

app.update('/getReviews', (error, result) => {
    
})
app.delete('/getReviews', (error, result) => {

})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})