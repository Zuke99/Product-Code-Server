const express = require("express");
const router = new express.Router();
const controller = require("../controller/PharmacyController");
const middleware = require("../middlewares/userMiddlewares");

router.post("/pharmacy/add-pharmacy-form", controller.addPharmacyForm);
router.get("/pharmacy/get-all-pharmacy", controller.getAllPharmacyForms);
router.put("/pharmacy/update-pharmacy-form", controller.updatePharmacyForm);

module.exports = router;