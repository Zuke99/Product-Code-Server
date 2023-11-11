const DoctorSchema = require("../models/doctorForm");

const addDoctor = async (req, res) => {
    try{
        const addDoctor = new DoctorSchema(req.body);
        const createDoctor = await addDoctor.save();
        res.send({status : true, data : createDoctor, message : "Doctor Added Successfully"});
    } catch (e) {
        res.send({status : false , data : e, message : "Couldn't Submit the Data"});
      }
}

const getAllDoctors = async(req, res) => {
    try{
        const getAllDoctor = await DoctorSchema.find({});
        res.send({status : true, data : getAllDoctor, message : "Doctor List Retrieved Successfully"})

    } catch (e) {
        res.send({status : false , data : e, message : "Couldn't get Doctor Data"});
      }
}

module.exports = {
    addDoctor,
    getAllDoctors
}