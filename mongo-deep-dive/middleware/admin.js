// const { Admin } = require("../db")
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config")

function adminMiddleware(req,res,next){
    //---------------USING USERNAME PASSWORD--------------
    // const username = req.headers.username;
    // const password = req.headers.password;

    // Admin.findOne({
    //     username: username,
    //     password : password,
    // })
    // .then(function(value){
    //     if(value){
    //         next();
    //     }
    //     else{
    //         res.status(403).json({
    //             msg : "User doesn't exist..."
    //         })
    //     }
    // })
    //------------------------END---------------------------

    //---------------------USING JWTs-----------------------
    //Using different DB for JWT part
    const token = req.headers.authorization ;
    const words = token.split(" ");  //token has "Bearer" as a string before the actual token
    const jwtToken = words[1];
    const decodedVal = jwt.verify(jwtToken,JWT_SECRET);
    if(decodedVal.username){
        next();
    }
    else{
        res.status(403).json({
            msg : "Not Authenticated..."
        })
    }
}

module.exports = adminMiddleware;