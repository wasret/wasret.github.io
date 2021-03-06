var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var reverse = require("reverse-string");
var chatArchive = [];
var say = require('say');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "OPTIONS,HEAD,GET,PUT");
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

io.on('connection', function(socket){
	console.log("New Client Connection");


	socket.on("chat message", function(msg){
		msg.text = reverse(msg.text)
		chatArchive.push(msg);
		io.emit('chat message',msg);
		msg.text = say.speak(msg.text)
	});
});

app.get('/get_archive', function(req, res){
	res.send(chatArchive);
});

http.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
