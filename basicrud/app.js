const mysql           = require('mysql');
const path            = require('path');
const express         = require('express');
const mysqlConnection = require('./connection')
const Router          = require('./routes/db')


const app = express();
app.use('/', Router);
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '/views/index.html')) 
})



app.listen(3000, () => {
   console.log('Server started successfully...');
})
