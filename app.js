const express = require("express");
const app = express();
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
var cors = require("cors");
app.use(cors());
require("./db/conn");
const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

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
