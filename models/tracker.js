const mongoose = require("mongoose");
const trackerSchema = new mongoose.Schema({
    sl_no : Number,
    fy1 : Number,
    fy2 : Number
})

module.exports = mongoose.model("Tracker", trackerSchema);