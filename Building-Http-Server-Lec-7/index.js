/*
const http = require("http");

const myServer = http.createServer((req, res) => {
  console.log(req.headers);//for details of from where req is comes
  console.log(req);//for details of from where req is comes  user request details
  console.log("New Req is Received..");
  res.end("Hello Form Server! ");
});

myServer.listen(8002, () => console.log("Server is Started"));
*/

//For creationg file log
const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `$ {Date.now()}: ${req.url}New Req Recieved.\n`; //for finding time when user req
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        res.end("I am Shivcharan");
      default:
        res.end("404 not found");
    }
  });
});

myServer.listen(8002, () => console.log("Server is Started"));
