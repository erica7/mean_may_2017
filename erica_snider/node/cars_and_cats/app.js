// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/cats') {
        fs.readFile('views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/cars/new') {
        fs.readFile('views/carsNew.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    // else if(request.url === '/stylesheets/style.css') {
    //     fs.readFile('stylesheets/style.css', 'utf8', function (errors, contents){
    //         response.writeHead(200, {'Content-Type': 'text/css'});  // send data about response
    //         response.write(contents);  //  send response body
    //         response.end(); // finished!
    //     });
    // }
    else if(request.url === '/images/raptor.jpeg') {
        fs.readFile('images/raptor.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/images/Puma-Jumping.jpg') {
        fs.readFile('images/Puma-Jumping.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('The requested URL is not available.');
    }
    console.log("the response is", response)
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");
console.log(http);
