const express         = require('express');
const Router          = express.Router()
const path            = require('path')
const mysqlConnection = require('../connection')


Router.get('/', (req, res) => {
   res.sendFile(__dirname, '../views/index.html');
})

Router.get('/showlist', (req, res) => {
   mysqlConnection.query("SELECT * from member", (err, result, fields) => {
      if (err) {
         res.send(err);
      } else {
         res.send(result);
      }
   });
})

module.exports = Router;