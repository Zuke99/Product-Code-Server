const express = require("express");
const router = new express.Router();
const controller = require("../controller/CompanyFormController")

//AddCompanyForm
router.post("/company/company-form", controller.createCompanyForm);

module.exports = router;