const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");

router.post("/addAppointment", homeController.addAppointment);
router.get("/", homeController.getAppointment);
router.delete("/", homeController.deleteAppointment);
router.put("/", homeController.updateAppointment);

module.exports = router;
