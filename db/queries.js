const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Hamster94!",
  database: "bestBuyReviews"
});

connection.connect();

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