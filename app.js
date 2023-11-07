const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());
require("./db/conn");

let port = 8080;
app.listen(port, function(){
    console.log("Listening to port", port);
})

const router = new express.Router();
const schema = require("./models/companyForm")
app.use(schema);