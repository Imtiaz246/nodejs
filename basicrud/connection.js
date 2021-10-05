const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
   host : 'localhost',
   user : 'root', 
   password : 'imtiaz246',
   database : 'test',
});

mysqlConnection.connect((err) => {
   if (err) {
      console.log('Databse connection failed...');
   } else {
      console.log('Database connection established...');
   }
})



module.exports = mysqlConnection;