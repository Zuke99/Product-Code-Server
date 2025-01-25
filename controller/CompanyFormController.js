const CompanyFormSchema = require("../models/companyForm");

const createCompanyForm = async(req, res) => {
    console.log("create Company form", req.body);
    try{
        const addCompanyDetails = new CompanyFormSchema(req.body);

        const createCompanyDetails = await addCompanyDetails.save();
        res.send({status : true, data : createCompanyDetails, message : "Data Submitted Successfully"});
    } catch (e) {
        res.send({status : false , data : e, message : "Couldn't Submit the Data"});
      }
}

const getAllCompanyForms = async (req, res) => {
  console.log("Getting All Company Forms");
   
    try {
        const getCompanyForm = await CompanyFormSchema.find({})
        res.send({status: true, data: getCompanyForm, message: "Form Requests retrieval Successful"});
    } 
    catch (e) {
        res.send({status: false, data: e, message: "Couldn't get the Forms"});
    }
}

const approveCompanyForm = async (req, res) => {
    const id = req.body._id;
    console.log("the id to update is", id);
    try {
        // Find the document by ID and update the approval_status to true
        const updatedCompanyForm = await CompanyFormSchema.findByIdAndUpdate(
          id,
          { $set: { approval_status: true } },
          { new: true } // Return the modified document
        );
    
        if (!updatedCompanyForm) {
          return res.status(404).send({
            status: false,
            message: 'Form not found for the given ID',
          });
        }
    
        res.send({
          status: true,
          data: updatedCompanyForm,
          message: 'Approval status updated successfully',
        });
      } catch (e) {
        res.status(500).send({
          status: false,
          data: e,
          message: 'Failed to update approval status',
        });
    }
}

const deleteCompanyForm = async (req, res) => {
    const id = req.params.id;
    console.log("the id to delete is", id);
    const deleteCompanyForm = await CompanyFormSchema.findByIdAndDelete(id);
    res.send({status : true, data : deleteCompanyForm, message : "Form Deleted Successfully"});
}

module.exports = {
    createCompanyForm,
    getAllCompanyForms,
    approveCompanyForm,
    deleteCompanyForm
}