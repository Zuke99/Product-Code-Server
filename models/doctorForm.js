const mongoose = require("mongoose");
const doctorSchema = new mongoose.Schema({
    name : String,
    designation : String
})
module.exports = mongoose.model("Doctor", doctorSchema);