var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.set('views', __dirname + '/client/views')
app.set('view engine', 'ejs')

require('./server/config/mongoose')
require('./server/config/routes')(app)

app.listen(8000, function () {
  console.log('Running at http://localhost:8000/')
})
