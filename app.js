const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/", (req, res, next) => {
  const details = req.body;
  fs.writeFile("hey.txt", JSON.stringify(details), "utf-8", (err) => {
    console.error(err);
  });
  res.send(details);
});

app.listen(3000, () => {
  console.log("Server listening at 3000");
});