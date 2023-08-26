const express = require("express");
const router = express.Router();
const appointmentsController = require("../controllers/appointments");

router.get("/", appointmentsController.getAllAppointment);

module.exports = router;
