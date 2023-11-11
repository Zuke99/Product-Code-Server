const CompanyFormSchema = require("../models/companyForm");

const createCompanyForm = async(req, res) => {
    try{
        const addCompanyDetails = new CompanyFormSchema(req.body);
        const createCompanyDetails = await addCompanyDetails.save();
        res.send({status : true, data : createCompanyDetails, message : "Data Submitted Successfully"});
    } catch (e) {
        res.send({status : false , data : e, message : "Couldn't Submit the Data"});
      }
}

module.exports = {
    createCompanyForm
}