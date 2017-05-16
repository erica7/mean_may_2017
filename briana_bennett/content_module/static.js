var fs = require('fs');

module.exports = function(request, response){
	console.log('url is ' + request.url)
	//url for html = /home
	//url for css = /css/style.css
	if(request.url.indexOf('.') == -1){
		//we should load html
		if(request.url === '/'){
			fs.readFile('views/index.html', 'utf8', function(errors, contents){
			console.log('contents: ', contents)
				if(!contents){
					response.writeHead(404)
					response.end('File not found!')
				} else {
					response.writeHead(200, { 'Content-type': 'text/html'})
					response.write(contents)
					response.end()
				}
			}); 
		} else {
			fs.readFile('views' + request.url + '.html', 'utf8', function(errors, contents){
			console.log('contents: ', contents)
				if(!contents){
					response.writeHead(404)
					response.end('File not found!')
				} else {
					response.writeHead(200, { 'Content-type': 'text/html'})
					response.write(contents)
					response.end()
				}
			});
		}
	} else if(request.url.indexOf('.css') != -1){
		//load css
		fs.readFile('.' + request.url, 'utf8', function(errors, contents){
			console.log('contents: ', contents)
			if(!contents){
				response.writeHead(404)
				response.end('File not found!')
			} else {
				response.writeHead(200, { 'Content-type': 'text/css'})
				response.write(contents)
				response.end()
			}
		});
	} else if(request.url.indexOf('.js') != -1){
		//load javascript
		fs.readFile('.' + request.url, function(errors, contents){
			console.log('contents: ', contents)
			if(!contents){
				response.writeHead(404)
				response.end('File not found!')
			} else {
				response.writeHead(200, { 'Content-type': 'text/javascript'})
				response.write(contents)
				response.end()
			}
		});
	} else if(request.url.indexOf('.jpg') != -1){
		//load images
		fs.readFile('.' + request.url, function(errors, contents){
			console.log('contents: ', contents)
			if(!contents){
				response.writeHead(404)
				response.end('File not found!')
			} else {
				response.writeHead(200, { 'Content-type': 'img/jpg'})
				response.write(contents)
				response.end()
			}
		});
	}
	//what type of request is this? [html, css, js, img]
	//how to serve .html files, as long as they aren't at the root ("/")
	
	//css

}