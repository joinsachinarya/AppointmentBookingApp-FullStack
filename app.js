const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  let data = req.method;
  fs.writeFile("hey.txt", data, "utf-8", (err) => {
    console.error(err);
  });
  res.send("Hey");
});

app.listen(3000, () => {
  console.log("Server listening at 3000");
});
