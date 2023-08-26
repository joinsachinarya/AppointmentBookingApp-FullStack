const express = require("express");
const router = express.Router();
const appointmentsController = require("../controllers/appointments");

router.get(
  "/fetchAllAppointments",
  appointmentsController.fetchAllAppointments
);

module.exports = router;
