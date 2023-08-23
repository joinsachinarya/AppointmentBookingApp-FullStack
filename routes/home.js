const path = require("path");
const express = require("express");
const fs = require("fs");
const router = express.Router();
const { rootDir } = require("../utils/rootDir");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "index.html"));
});

router.post("/", (req, res, next) => {
  const details = req.body;
  fs.writeFile("hey.txt", JSON.stringify(details), "utf-8", (err) => {
    console.error(err);
  });
  res.sendFile(path.join(rootDir, "views", "success.html"));
});

module.exports = router;
