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
    try {
        
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 15; // Make sure this is being respected
        const skip = (page - 1) * limit;

        // Add a filter for unapproved forms
        const totalDocs = await CompanyFormSchema.countDocuments({ approval_status: false });
        const totalPages = Math.ceil(totalDocs / limit);
        
        const getCompanyList = await CompanyFormSchema.find({ approval_status: false })
            .sort({ _id: -1 })
            .skip(skip)
            .limit(limit); // This should return 15 items

        res.send({
            status: true,
            data: getCompanyList,
            currentPage: page,
            totalPages: totalPages,
            totalDocs: totalDocs,
            message: "Company Form list retrieved Successfully"
        });
    } catch (e) {
        res.send({status: false, data: e, message: "Couldn't get Company Form Data"});
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

const getCompanyFormsByDescription = async (req, res) => {
    try {
        const description = req.query.description;
        const getCompanyFormsByDescription = await CompanyFormSchema.find({
          desc_and_spec: { $regex: description, $options: 'i' }
        });
        res.send({
            status: true, 
            data: getCompanyFormsByDescription, 
            message: "Form Retrieved Successfully"
        });
    } catch (e) {
        res.send({
            status: false, 
            data: e, 
            message: "Failed to retrieve forms"
        });
    }
}

module.exports = {
    createCompanyForm,
    getAllCompanyForms,
    approveCompanyForm,
    deleteCompanyForm,
    getCompanyFormsByDescription
}