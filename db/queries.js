const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '68.62.252.72',
  user: 'root',
  password: 'Hamster94!',
  database: 'bestBuyReviews',
  port: 6969
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