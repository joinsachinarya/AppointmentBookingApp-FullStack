const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");

router.post("/addAppointment", homeController.addAppointment);
router.get("/fetchLastAppointment", homeController.fetchLastAppointment);

module.exports = router;
