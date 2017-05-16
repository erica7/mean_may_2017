var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    if(request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  
            response.write(contents); 
            response.end(); 
        });
    }
    //Images of cars
    else if(request.url === '/images/black_car.jpg'){
    fs.readFile('./images/black_car.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
        });
    }
    else if(request.url === '/images/red_car.jpg'){
    fs.readFile('./images/red_car.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
        });
    }
    else if(request.url === '/images/blue_car.jpg'){
    fs.readFile('./images/blue_car.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
        });
    }
    //End of images. 

    else if (request.url === '/cats') {
        fs.readFile('views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); 
            response.write(contents); 
            response.end(); 
        });
    }
    //Images of cats
    else if(request.url === '/images/fluffy.jpg'){
    fs.readFile('./images/fluffy.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
        });
    }
    else if(request.url === '/images/cat_trio.jpg'){
    fs.readFile('./images/cat_trio.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
        });
    }
    else if(request.url === '/images/cat_wrap.jpg'){
    fs.readFile('./images/cat_wrap.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
        });
    }
      //End of cat images

    else if (request.url === '/cars/new') {
        fs.readFile('views/newCar.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); 
            response.write(contents); 
            response.end(); 
        });
    }

    else {
        response.writeHead(404);
        response.end('The url requested was not found ):');
    }
});

server.listen(7077);
console.log("Running in localhost at port 7077");