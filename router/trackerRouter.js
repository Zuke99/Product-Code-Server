const express = require("express");
const router = new express.Router();
const controller = require("../controller/TrackerController");

router.post("/tracker/add-tracker", controller.addTracker);
router.put("/tracker/update-tracker", controller.updateTracker);
router.get("/tracker/get-tracker", controller.getTracker);
module.exports = router;