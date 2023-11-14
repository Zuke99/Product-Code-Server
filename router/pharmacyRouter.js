const express = require("express");
const router = new express.Router();
const controller = require("../controller/PharmacyController");
const middleware = require("../middlewares/userMiddlewares");

router.post("/pharmacy/add-pharmacy-form", controller.addPharmacyForm);

module.exports = router;