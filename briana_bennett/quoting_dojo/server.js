var express = require('express')
var app = express()
var bp = require('body-parser')
var path = require('path')

app.use(bp.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, './client/static')))
app.use(express.static(__dirname + '/node_modules'))

app.set('views', path.join(__dirname, './client/views'))
app.set('view engine', 'ejs')

require('./server/config/mongoose.js')

//store routes function in a variable 
var routes_setter = require('./server/config/routes.js')
//invoke routes_setter funciton and pass it the app variable
routes_setter(app)


app.listen(8000, function(){
	console.log('listening on port 8000')
})