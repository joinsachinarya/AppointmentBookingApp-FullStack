const Details = require("../models/details");
// const { rootDir } = require("../utils/rootDir");
// const path = require("path");

exports.addAppointment = (req, res, next) => {
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
      // console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
    });
};

exports.deleteAppointment = (req, res, next) => {};
exports.updateAppointment = (req, res, next) => {};
exports.getAppointment = (req, res, next) => {};
