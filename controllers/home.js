const Details = require("../models/details");

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
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
    });
};
exports.fetchLastAppointment = (req, res, next) => {
  Details.findOne({
    order: [["id", "DESC"]],
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
    });
};
