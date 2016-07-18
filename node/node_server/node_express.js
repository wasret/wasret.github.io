var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World im here!');
});

app.get('/goodbye', function (req, res) {
  res.send('Goodbye World!');
});

app.get('/yellow', function (req, res) {
  res.send('yellow sounds like hello!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});