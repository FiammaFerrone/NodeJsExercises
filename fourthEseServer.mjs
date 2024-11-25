/** @format */

import { createServer } from "node:http";

const server = createServer((req, res) => {
  if (req) {
    console.log("request recived");
  }
  res.statusCode = 200;
  res.setHeader("Content-type", "text-html"),
    res.end(
      "<html><body><h4>Hello, I'm the server's response!</h4></body></html>"
    );
});

server.listen(3000, () => console.log("server run at http://localhost:3000/"));
