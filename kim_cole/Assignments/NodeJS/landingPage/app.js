var fs = require('fs'),
    http = require('http'),
    port = 6789;

var server = http.createServer(function server(request, response){
  // Figure out which file the HTTP request is looking for
  var file;

  switch (request.url) {
    case "/":
      file = 'index.html'
      break;
    case "/ninjas":
      file = 'ninjas.html'
      break;
    case "/dojos/new":
      file = 'dojos.html'
      break;
    default:
      file = null;
      break;
  }
  // Send file or error to browser
  if (file !== null) {
    // First argument uses string interpolation
    fs.readFile(`static/${file}`, 'utf8', function(err, contents){
      if (err) { console.log(err); }
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  } else { // If file is null, not found
    response.writeHead(404);
    response.end("The URL requested is not available!");
  }
});

server.listen(port, function(){
  console.log("Running on port: ", port);
});