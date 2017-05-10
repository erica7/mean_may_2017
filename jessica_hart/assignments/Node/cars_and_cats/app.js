var http = require('http')
var fs = require('fs')

var server = http.createServer(function (request, response) {
  console.log('client request URL: ', request.url)

  var paths = request.url.split('/')
  var fileType

  // Stylesheets in cars/new do not load

  switch (paths[1]) {
    case "stylesheets":
      fileType = 'text/css'
      files(`stylesheets/${paths[2]}`, fileType, response);
      break;
    case "images":
      images(`images/${paths[2]}`, response);
      break;
    default:
      fileType = 'text/html'
      switch(paths[1]){
        case "cars":
          if (paths[2] === "new") {
            files("views/form.html", fileType, response);
          } else {
            files("views/cars.html", fileType, response);
          }
          break;
        case "cats":
          files("views/cats.html", fileType, response);
          break;
        default:
          response.writeHead(404);
          response.end("File not found!");
          break;
    }
  }
});

function files(path, type, response){
  fs.readFile(path, 'utf8', function(error, contents){
    if (error) { console.log(error) }
    response.writeHead(200, {'Content-type' : type });
    response.write(contents);
    response.end();
  });
}

function images(path, response){
  fs.readFile(path, function(error, contents){
    if (error) { console.log(error) }
    response.writeHead(200, {'Content-type' : 'image/jpg' });
    response.write(contents);
    response.end();
  });
}

server.listen(6789)
console.log('Running in localhost at port 6789')
