// !====== Server file for SDC =======
// !==================================

const express = require('express');
const add = express();
const path = require('path');
const PORT = 8008;

app.use(express.static(path.join(__dirname, '../frontEnd/dist')));
app.use(express.json());

app.get('/getReviews', ((error, result) => {
    if(error) {
        console.error(error);
    } else {

        console.log(result);
    }
}));

app.post('/getReviews', ((error, result) => {
    if(error) {
        console.error(error);
    } else {

        console.log(result);
    }
}));

app.update('/getReviews', ((error, result) => {
    if(error) {
        console.error(error);
    } else {

        console.log(result);
    }
}));

app.delete('/getReviews', ((error, result) => {
    if(error) {
        console.error(error);
    } else {

        console.log(result);
    }
}));


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})