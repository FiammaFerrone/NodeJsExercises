/** @format */

import { createServer } from "node:http";
import { json } from "stream/consumers";

const server = createServer((req, res) => {
  if (req) {
    console.log("request recived");
  }
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const output = JSON.stringify({ location: "Mars" });

  res.setHeader("Content-Length", output.length);
  res.end(output);
});

server.listen(3000, () => console.log("server run at http://localhost:3000/"));
