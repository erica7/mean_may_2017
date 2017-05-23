var express = require('express')
var bp = require('body-parser')

var app = express()

app.use(express.static(__dirname + '/client/views'))
app.use(express.static(__dirname + '/client/angular'))
app.use(express.static(__dirname + '/node_modules/angular'))
app.use(bp.json())

app.listen(8000, function() {
  console.log('Running at http://localhost:8000/')
})
