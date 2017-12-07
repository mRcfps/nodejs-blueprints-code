var connect = require('connect');
var http = require('http');

var app = connect()
  .use(function (req, res, next) {
    console.log("That's my first middleware");
    next();
  })
  .use(function (req, res, next) {
    console.log("That's my second middleware");
    next();
  })
  .use(function (req, res, next) {
    console.log("end");
    res.end("Hello world!");
  });

http.createServer(app).listen(3000);
