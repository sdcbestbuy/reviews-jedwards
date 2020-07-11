const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.RDS_HOSTNAME || 'localhost',
    user: process.env.RDS_USERNAME || 'root',
    password: process.env.RDS_PASSWORD || 'Unlucky1!',
    database: process.env.RDS_DB_NAME || 'bestBuyReviews',
    port: process.env.RDS_PORT || 3306,
});

//proof of db connection
connection.connect( error =>{
    if (error){

        console.log('DB CONNECTION FAILED', error)
        return;
    }
    console.log('Connected to DB')
});

// query to get review for certain Id
const getTheReviews = (id,cb) =>{
    connection.query('SELECT * FROM product WHERE id=?', [id], (error,results)=>{
        if (error){
        console.log('Error with getTheReviews QUERY', error);
        cb(error,null)
        } else {
        cb (null,results)
        }
    })
}

// query to get list of real products
const getTheListOfRealProducts = cb =>{
    connection.query('SELECT product_id FROM thumbnailImages',(error,results)=>{
        if (error){
        console.log('Error with getTheListOfRealProducts QUERY',error);
        cb(error,null)
        } else {
        cb (null,results)
        }
    })
}

// query to get list of thumbnail images 
const getImagesforProduct = (id,cb) =>{
    connection.query('SELECT * FROM thumbnailImages WHERE product_id=?',[id],(error,results)=>{
        if (error){
        console.log('Error with getImagesforProduct QUERY',error);
        cb(error,null)
        } else {
        cb (null,results)
        }
    })
}

module.exports ={
    getTheReviews,
    getTheListOfRealProducts,
    getImagesforProduct,
}