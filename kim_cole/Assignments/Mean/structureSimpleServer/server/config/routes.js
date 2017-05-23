console.log("future routes");

var path = require('path');

module.exports = function(app){
  app.get('/', function(req, res) {
    res.sendFile(path.join(process.env['APPROOT'], 'client/index.html'));
  });
};