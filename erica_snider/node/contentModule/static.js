var http = require('http');
var fs = require('fs');
var path = require('path');

module.exports = function(request, response){
  fs.stat('.' + request.url, function(err, stats){
    if(stats){
      console.log("Exists!");
      console.log(stats);
      console.log(err);
      if(request.url === '/'){
        fs.readFile('./index.html', 'utf8', function(err, stats){
          response.write(stats);
          response.end();
        });
      } else {
        fs.readFile('.' + path.dirname(request.url) + '/' + path.basename(request.url, path.extname(request.url)) + path.extname(request.url), function (err, stats){
        // fs.readFile('test.html', 'utf8', function(err, stats){
          response.write(stats);
          response.end();
        });
      }
    } else {
      console.log("Does not exist!");
      console.log(stats);
      console.log(err);
      response.end('The requested URL is not available.');
    }
    // console.log(request.url);
    // console.log(path.dirname(request.url));
    // console.log(path.basename(request.url));
    console.log('.' + path.dirname(request.url) + '/' + path.basename(request.url, path.extname(request.url)) + path.extname(request.url));
  })
};
