const mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DB_NAME,
  port: process.env.RDS_PORT,
});

connection.connect((err)=>{
  if (err){
    console.log('DB CONNECTION FAILED',err)
    return;
  }
  console.log('Connected to DB')
});

//to do sanitize queries

const getTheReviews = (id,cb) =>{
  console.log('Quering DB FOR ID',id)
  connection.query("SELECT * FROM product WHERE id=?",[id],(error,results)=>{
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