const mongoose = require("mongoose");
const comnpanySchema = new mongoose.Schema({
    full_name : String,
    company_name : String,
    short_name : String,
    unit : String,
    desc_and_spec : String,
    shelf_life : String,
    prod_brief_justif : String,
    prod_complete_justif : String,
    pac_yes_no : String,
    manufactured_by : String,
    imported_by : String,
    suppl_distrib_details : String,
    manufactured_by1 : String,
    manufactured_by2 : String,
    rate_per_unit : String,
    price_ref : String,
    file_quotation_lpr : String,
    file_pac_certif : String,
    file_manufacture_impoeter_supplier : String,
    file_prod_pack_photo : String,
    file_other_doc1 : String,
    file_other_doc2 : String,
    file_other_doc3 : String,
    approval_status : {
        type:Boolean,
        default : false
      }
})

module.exports = mongoose.model("Company", comnpanySchema);