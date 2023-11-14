const jwt = require("jsonwebtoken");
const secretKey = "productcode";
const UserSchema = require("../models/users")

const verifyToken = async (req,res, next) => {
    let token = await req.headers["authorization"];
    console.log("verif", token);
    if(!token){
        res.send({status:false,message:"A token is required for authentication"});
    } else {
        try {
            const decode= jwt.verify(token,secretKey);
            req.user=decode;
            return next();
         } catch (error) {
             res.send({status : false , message : "Invalid token"});
         }
    }
}

const verifyUser = async (req,res) => {
    const checkUsername = await UserSchema.findOne({username : username});

    if(checkUsername){
        if(password === checkUsername.password){
            const payload = {
                username : username
            }
            
           
            return next();
        } else {
            res.send({status : false, message : "Wrong Credentials"});
        }
    } else {
        res.send({status : false, message : "Wrong Credentials"});
    }

}

module.exports = {
    verifyToken,
    verifyUser
}