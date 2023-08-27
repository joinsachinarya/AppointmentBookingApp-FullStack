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
      res.json(result);
    })
    .catch((err) => console.error(err));
};

exports.fetchAppointment = (req, res, next) => {
  Details.findByPk(req.params.id)
    .then((item) => {
      console.log("item fetched");
      res.json(item);
    })
    .catch((err) => {
      console.error(err);
    });
};

exports.editAppointment = (req, res, next) => {
  const updatedItemValues = {
    name: req.body.name,
    email: req.body.email,
    datetime: req.body.datetime,
    message: req.body.message,
  };
  Details.findByPk(req.params.id)
    .then((item) => {
      console.log(updatedItemValues);
      item.update(updatedItemValues);
    })
    .catch((err) => {
      console.error(err);
    });
};
