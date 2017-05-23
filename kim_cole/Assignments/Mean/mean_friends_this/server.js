var express    = require('express'),
    port       = 8000,
    app        = express(),
    path       = require('path'),
    appRoot    = require('app-root-path'),
    bodyParser = require('body-parser');

// set an environment variable called APPROOT to keep track of the root folder of your app
process.env['APPROOT'] = __dirname;    

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//require mongoose configuration, use path.join to build the route
require(path.join(process.env['APPROOT'], 'server/config/mongoose.js'));
//require routes configuration, get a function from the module.exports, that gets invoked while passing it the app
require(path.join(process.env['APPROOT'], 'server/config/routes.js'))(app);

app.use(express.static(`${appRoot}/client`));
app.use(express.static(`${appRoot}/bower_components`));

app.listen(port, function(){
    console.log('server running on port:', port);
})