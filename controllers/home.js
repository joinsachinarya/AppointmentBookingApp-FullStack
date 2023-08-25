const { rootDir } = require("../utils/rootDir");
const path = require("path");
const Details = require("../models/details");

exports.getHomePage = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "index.html"));
};

exports.postHomePage = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const datetime = req.body.datetime;
  const message = req.body.message;
  Details.create({
    name: name,
    email: email,
    datetime: datetime,
    message: message,
  })
    .then((result) => {
      //   console.log(result);
    })
    .catch((err) => {
      console.error(err);
    });
  res.sendFile(path.join(rootDir, "views", "success.html"));
};
