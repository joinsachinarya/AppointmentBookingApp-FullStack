const Details = require("../models/details");
const rootDir = require("../utils/rootDir");
const path = require("path");

exports.getHomePage = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "index.html"));
};

exports.postHomePage = (req, res, next) => {
  const details = req.body;
  fs.writeFile("hey.txt", JSON.stringify(details), "utf-8", (err) => {
    console.error(err);
  });
  res.sendFile(path.join(rootDir, "views", "success.html"));
};
