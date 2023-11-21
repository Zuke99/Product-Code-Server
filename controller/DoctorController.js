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

const deleteDoctor = async (req, res) => {
    try {
        const doctorId = req.params.id; // Assuming the doctor ID is passed in the request parameters
        console.log('Delete DOc', req.params.id)
        // Assuming DoctorSchema is your Mongoose model
        const deletedDoctor = await DoctorSchema.findByIdAndDelete(doctorId);

        if (!deletedDoctor) {
            return res.send({ status: false, message: "Doctor not found" });
        }

        res.send({ status: true, data: deletedDoctor, message: "Doctor deleted successfully" });
    } catch (e) {
        res.send({ status: false, data: e, message: "Couldn't delete Doctor" });
    }
};

module.exports = {
    addDoctor,
    getAllDoctors,
    deleteDoctor
}