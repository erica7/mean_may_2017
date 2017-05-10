var http = require('http')
var fs = require('fs')

var server = http.createServer(function (request, response) {
  console.log('client request URL: ', request.url)

  var path
  switch (request.url) {
    case '/':
      path = 'index.html'
      break
    case '/ninjas':
      path = 'ninjas.html'
      break
    case '/dojos/new':
      path = 'dojos.html'
      break
    default:
      path = 'error.html'
      break
  }

  fs.readFile(`${path}`, 'utf8', function (err, contents) {
    if (err) { console.log(err) }
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.write(contents)
    response.end()
  })
})

server.listen(6789)
console.log('Running in localhost at port 6789')
