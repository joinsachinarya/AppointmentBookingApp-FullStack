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

exports.deleteAppointment = (req, res, next) => {
  Details.findByPk(req.params.id)
    .then((item) => {
      return item.destroy();
    })
    .then((result) => {
      console.log("Item deleted");
    })
    .catch((err) => console.error(err));
};

exports.updateAppointment = (req, res, next) => {
  console.log("updated");
};
exports.getAppointment = (req, res, next) => {
  console.log("fetched");
};
