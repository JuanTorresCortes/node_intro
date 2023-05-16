// http,fs  built-in node module
const http = require("http");
const fs = require("fs");
const path = require('path');
const { error } = require("console");
// path.join(__dirname, 'public','about.html )

const port = 3000;

const server = http.createServer((request, response) => {
  const url = request.url;
  //console.log(request.url) // /favicon.ico
  if (url === "/main") {
    fs.readFile("./public/main.html", (error, data) => {
      if (error) {
        response.end("something is wrong");
      } else {
        response.writeHeader(200, { "content-type": "text/html" });
        response.write(data);
        response.end();
      }
    });
  } else if (url === "/about") {
    fs.readFile("./public/about.html", (error, data) => {
      if (error) {
        response.end("something is wrong");
      } else {
        response.writeHeader(200, { "content-type": "text/html" });
        response.write(data);
        response.end();
      }
    });
  } else if (url === "/contact") {
    fs.readFile("./public/contact.html", (error, data) => {
      if (error) {
        response.end("something is wrong");
      } else {
        response.writeHeader(200, { "content-type": "text/html" });
        response.write(data);
        response.end();
      }
    });
  }else{
   //response.writeHeader(404)
    response.end("no page found"); 
  }
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
