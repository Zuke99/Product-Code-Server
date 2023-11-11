const express = require("express");
const router = new express.Router();
const controller = require("../controller/PharmacyController");

router.post("/pharmacy/add-pharmacy-form", controller.addPharmacyForm);

module.exports = router;