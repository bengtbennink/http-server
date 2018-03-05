console.log("Yesss :)")

var http = require('http')
var fs = require ('fs')
var path = require('path')

var mime = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.md': 'text/markdown'}



http.createServer(onRequest).listen(8000)



function onRequest(request, response) {
    var route = request.url
    
    if (route === '/') {
        route = 'index.html'
        console.log(request.url)
        
    }
    
     if (route === '/about') {
        route = 'about.html'
        console.log(request.url)
        
    }
     else {
         console.log('er bestaat GEEN index.html')
     }
    
    console.log(request.url)
    
 fs.readFile(path.join("static", route), onread);
  function onread(err, buf) {

    if (err) {
      response.statusCode = 404;
      response.end("not found. \n");
    } else {
      var extension = path.extname(route);
      var type = mime[extension] || 'text/plain';
      response.statusCOde = 200;
      response.end(buf);
    }
  }
}