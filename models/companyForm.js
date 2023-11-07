const mongoose = require("mongoose");
const comnpanySchema = new mongoose.Schema({
    short_name : String,
    unit : String,
    desc_and_spec : String,
    shelf_life : String,
    prod_brief_justif : String,
    prod_complete_justif : String,
    pac_yes_no : String,
    rate_per_unit : String,
    price_ref : String,
    quotation_lpr : String,
    pac_certif : String,
    manufacture_impoeter_supplier : String,
    prod_pack_photo : String,
    other_doc1 : String,
    other_doc2 : String,
    other_doc3 : String
})

module.exports = mongoose.model("Company", comnpanySchema);