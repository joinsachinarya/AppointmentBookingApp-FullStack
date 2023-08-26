const Details = require("../models/details");

exports.fetchAllAppointments = (req, res, next) => {
  Details.findAll()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
    });
};
