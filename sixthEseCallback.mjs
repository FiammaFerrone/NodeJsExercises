/** @format */

import * as fs from "node:fs";

fs.writeFile(
  "firstFile-txt",
  "this is the content of the first file!",
  { encoding: "UTF-8" },
  (error) => {
    if (error) console.error(error, "this is the error's message");
    // return;
    console.log("CONTENT IN THE LOG OF FIRSTFILEDATA");
  }
);
