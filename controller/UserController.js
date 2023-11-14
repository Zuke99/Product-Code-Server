
const UserSchema = require("../models/users");
const jwt = require("jsonwebtoken");
const secretKey = "productcode";

const create_token = async( payload)=>{
    try {
     const token = await jwt.sign(payload,secretKey);
     return token;
    } catch (error) {
        res.send({status : false, message : error});
    }
}


const userLogin = async (req, res) => {
    console.log("login function")
    try{
        const username = req.body.username;
        const password = req.body.password;
        const checkUsername = await UserSchema.findOne({username : username});

        if(checkUsername){
            if(password === checkUsername.password){
                const payload = {
                    username : username
                }
                const token = await create_token(payload);
               
                res.send({status: true, data:token, message:"Login Successfull"});
            } else {
                res.send({status : false, message : "Wrong Credentials"});
            }
        } else {
            res.send({status : false, message : "Wrong Credentials" });
        }
    } catch (error) {
        res.send({status:false, message :error.message})
    }
}

const registerUser = async (req, res) => {
    try{
        const addUser  = new UserSchema(req.body);
        const createUser = addUser.save();
        res.send({status: true, data : createUser, message: "User Created Successfully"});
    } catch (error){
        res.send({status: false, data : error, message: "User Creation Failed"});
    }
}

const isLoggedIn = async(req, res) => {
    res.send({status : true, message : "User Logged In"});
}


module.exports = {
    userLogin,
    registerUser,
    isLoggedIn
}