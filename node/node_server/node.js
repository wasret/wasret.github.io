var http = require("http");


http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello DSGN 100. I'm supa excited to work with you!");
  response.end();
}).listen(8888);