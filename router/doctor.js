const express = require("express");
const router = new express.Router();
const controller = require("../controller/DoctorController")
const middleware = require("../middlewares/userMiddlewares");

router.post("/doctor/add-doctor",  controller.addDoctor);
router.get("/doctor/get-all-doctors", controller.getAllDoctors);

module.exports = router;
