const PharmacySchema = require("../models/pharmacyForm");

const addPharmacyForm = async (req,res) => {
    console.log("pharmaform");
    try{
        const addPharmacyForm = new PharmacySchema(req.body);
        const createPharmacyForm = await addPharmacyForm.save();
        res.send({status : true, data : createPharmacyForm, message : "Form Created Scuccessfully"});

    } catch (e) {
        res.send({status : false , data : e, message : "Couldn't Submit the Data"});
      }
}


module.exports = {
addPharmacyForm,

}