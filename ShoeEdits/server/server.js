///1. Create server
///   -http module
///   -listen on a port
///   -console log a thing
///2. Create a default response
///   -readfile (because html)
///   -fs module
///3. Handle a request
///   -with an if statement (test)
///   -url module
///4. Handle query string
///   -save to cookie



var http = require("http");
var port = 5500;
var {Router} = require("./route.js")

var server = http.createServer(function (req, res) {
   res.writeHead(200, {
      "content-Type": "text/html"
   });
   res.write(Router(req));
   res.end();
});

server.listen(port, function () {
   console.log("Listening on port:" + 8080);
});