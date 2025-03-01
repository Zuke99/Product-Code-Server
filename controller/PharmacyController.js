const PharmacySchema = require("../models/pharmacyForm");

const addPharmacyForm = async (req,res) => {

    try{
        const addPharmacyForm = new PharmacySchema(req.body);
        const createPharmacyForm = await addPharmacyForm.save();
        res.send({status : true, data : createPharmacyForm, message : "Form Created Scuccessfully"});

    } catch (e) {
        res.send({status : false , data : e, message : "Couldn't Submit the Data"});
      }
}

const updatePharmacyForm = async (req, res) => {
    const id = req.body._id; // Assuming the ID of the document to update is passed in the URL parameters
    const updateFields = req.body; // Fields to update are passed in the request body

    try {
        const updatedPharmacyForm = await PharmacySchema.findByIdAndUpdate(id, updateFields, { new: true });
        
        if (!updatedPharmacyForm) {
            return res.send({ status: false, message: 'Form not found' });
        }

        res.send({ status: true, data: updatedPharmacyForm, message: 'Form updated successfully' });
    } catch (error) {
        res.send({ status: false, data: error, message: 'Failed to update the form' });
    }
};


const getAllPharmacyForms = async(req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 15;
        const skip = (page - 1) * limit;

        const totalDocs = await PharmacySchema.countDocuments({});
        const totalPages = Math.ceil(totalDocs / limit);
        
        const getPharmacyList = await PharmacySchema.find({})
            .sort({ sl_no: -1 })
            .skip(skip)
            .limit(limit);

        res.send({
            status: true, 
            data: getPharmacyList,
            currentPage: page,
            totalPages: totalPages,
            totalDocs: totalDocs,
            message: "Pharmacy list retrieved Successfully"
        });
    } catch (e) {
        res.send({status: false, data: e, message: "Couldn't get Pharmacy Form Data"});
    }
}

const getPharmacyFormsByDescription = async (req, res) => {
    try {
        const getPharmacyFormsByDescription = await PharmacySchema.find({
          desc_and_spec: { $regex: description, $options: 'i' }
        });
        res.send({
            status: true, 
            data: getPharmacyFormsByDescription, 
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
    addPharmacyForm,
    getAllPharmacyForms,
    updatePharmacyForm,
    getPharmacyFormsByDescription
}
