const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Hamster94!',
  database: 'bestBuyReviews',
  port: 3306
});

connection.connect();

//to do sanitize queries

const getTheReviews = (id,cb) =>{
  console.log('Quering DB FOR ID',id)
  connection.query(`SELECT * FROM product WHERE id='${id}';`,(error,results)=>{
    if (error){
      console.log('Error with getTheReviews QUERY',error);
      cb(error,null)
    } else {
      cb (null,results)
    }
  })
}




module.exports ={
  getTheReviews
}