const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");

router.post("/success", homeController.postAppointment);

module.exports = router;
