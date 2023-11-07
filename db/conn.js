const mongoose =  require("mongoose");
mongoose.connect("mongodb+srv://dheerajpinninti5:oyeIY0Imv3J6MtuN@cluster0.tznjhyn.mongodb.net/")
.then(() => {
    console.log("Connection is Successful");
}).catch((e) => {
    console.log("Connection Couldn't be Established");
})