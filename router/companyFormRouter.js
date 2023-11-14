const express = require("express");
const router = new express.Router();
const controller = require("../controller/CompanyFormController")
const middleware = require("../middlewares/userMiddlewares");
//AddCompanyForm
router.post("/company/company-form", controller.createCompanyForm);
router.get("/company/getall-company-form", controller.getAllCompanyForms);
router.put("/company/update-approval-status", controller.approveCompanyForm)

module.exports = router;