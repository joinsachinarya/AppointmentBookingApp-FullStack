const express = require("express");
const router = express.Router();
const appointmentsController = require("../controllers/appointments");

router.get(
  "/fetchAllAppointments",
  appointmentsController.fetchAllAppointments
);

router.get(
  "/fetchLastAppointment",
  appointmentsController.fetchLastAppointment
);

module.exports = router;
