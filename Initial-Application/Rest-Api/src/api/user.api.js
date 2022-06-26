const User = require("../models/user.model");
const mongoose = require("mongoose");


const saveUser = async (ctx) =>{

    try{

        const {fullName,email,mobileNumber,password} = ctx.request.body;

        const user = await User.create({
            fullName : fullName,
            email : email,
            mobileNumber : mobileNumber,
            password : password
        });

        return (ctx.body = 
            {
                isSuccess : true, 
                message :"User Save SuccessFull"
            });

    }catch(eroor){
        return (ctx.body = 
            {
                isSuccess : false, 
                message :"Error Has Been Occured Please Try Again"
            });
    }
}

module.exports  = {saveUser}



