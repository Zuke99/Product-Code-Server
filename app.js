const express = require("express");
const app = express();
app.use(express.json());
var cors = require("cors");
app.use(cors());
require("./db/conn");

let port = 8080;
const CompanyFormRouter = require("./router/companyFormRouter");
const DoctorRouter = require("./router/doctor");
const PharmacyRouter = require("./router/pharmacyRouter");
app.use(CompanyFormRouter);
app.use(DoctorRouter);
app.use(PharmacyRouter);

app.listen(port, function(){
    console.log("Listening to port", port);
})

const router = new express.Router();
const schema = require("./models/companyForm")
app.use(schema);