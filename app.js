const express = require("express");
const app = express();
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
var cors = require("cors");
app.use(cors());
require("./db/conn");
const path = require('path');
//app.use(express.static(path.join(__dirname, 'build')));



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

app.use((req, res, next) => {
  console.log(`Received request for: ${req.method} ${req.url}`);
  next();
});


// app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname,'build')))
console.log("logged");
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'build') });
});


