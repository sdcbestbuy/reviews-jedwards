// !====== Server file for SDC =======
// !==================================

const express = require('express');
const add = express();
const path = require('path');
const PORT = 8008;

app.use(express.static(path.join(__dirname, '../frontEnd/dist')));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})