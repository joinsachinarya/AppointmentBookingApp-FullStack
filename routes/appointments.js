const express = require("express");
const router = express.Router();
const appointmentsController = require("../controllers/appointments");

router.get(
  "/fetchAllAppointments",
  appointmentsController.fetchAllAppointments
);

router.delete(
  "/deleteAppointment/:id",
  appointmentsController.deleteAppointment
);

router.get("/fetchAppointment/:id", appointmentsController.fetchAppointment);
router.put("/editAppointment/:id", appointmentsController.editAppointment);

module.exports = router;
