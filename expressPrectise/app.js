const express   = require('express')
const path      = require('path')
const exphbs    = require('express-handlebars')
const app       = express()
const port      = 8000

// intergrating the view engine with express
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

// Linking the static folder with express
app.use(express.static('public'))

// Routing part
app.use('/', require(path.join(__dirname, 'routes/blog.js')))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})