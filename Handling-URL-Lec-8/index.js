const http = require("http");
const fs = require("fs");
const url = require("url");
const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `$ {Date.now()}: ${req.url}New Req Recieved.\n`;
  const myUrl = url.parse(req.url);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
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
