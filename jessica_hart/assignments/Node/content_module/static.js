var fs = require('fs')
var path = require('path')

module.exports = function (request, response) {
  response.writeHead(200, {'Content-type': 'text/html'})
  console.log('Request', request.url)

  if (request.url.startsWith('/stylesheets')) {
    console.log('Attempting to load CSS')
    fs.readFile('.' + path.dirname(request.url) + '/' + path.basename(request.url), 'utf8', function (errors, contents) {
      response.writeHead(200, {'Content-type': 'text/css' })
      response.write(contents)
      console.log(contents)
    })
  }

  fs.exists('.' + request.url, function (exists) {
    if (exists) {
      if (request.url === '/') {
        fs.readFile('./views/index.html', 'utf8', function (errors, contents) {
          response.write(contents)
          response.end()
        })
      } else {
        fs.readFile('.' + path.dirname(request.url) + '/' + path.basename(request.url), function (errors, contents) {
          response.write(contents)
          response.end()
        })
      }
    } else {
      response.end('File not Found!!!')
    }
  })
}

//   try {
//     fs.accessSync(request.url);
//
//     if(request.url === '/') {
// 			fs.readFile('./views/index.html', 'utf8', function(errors, contents) {
// 				response.write(contents);
// 				response.end();
// 			})
// 		} else if (request.url.startsWith('/stylesheets')) {
//       console.log('Attempting to load CSS')
//       fs.readFile(request.url, 'utf8', function (errors, contents){
//         response.writeHead(200, {'Content-type' : 'text/css' });
//         response.write(contents);
//         console.log(contents);
//         response.end();
//       });
//     } else {
// 			fs.readFile('.'+path.dirname(request.url)+'/'+path.basename(request.url), function(errors, contents) {
// 				response.write(contents);
// 				response.end();
// 			})
//     }
//   } catch (e) {
//     response.end('File not found!!!')
//   }
// }

//   if(request.url === '/'){
//     fs.readFile('views/index.html', 'utf8', function (errors, contents){
//       response.write(contents);
//       response.end();
//     });
//   } else if(request.url === '/dojo.html'){
//     fs.readFile('views/dojo.html', 'utf8', function (errors, contents){
//       response.write(contents);
//       response.end();
//     });
//   } else if(request.url === '/stylesheets/style.css'){
//     console.log('Attempting to load CSS')
//     fs.readFile('stylesheets/style.css', 'utf8', function (errors, contents){
//       response.writeHead(200, {'Content-type' : 'text/css' });
//       response.write(contents);
//       console.log(contents);
//       response.end();
//     });
//   } else {
//       response.end('File not found!!!');
//   }
// }
