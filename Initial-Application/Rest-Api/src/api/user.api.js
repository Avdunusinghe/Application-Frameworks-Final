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

    }catch(error){
        return (ctx.body = 
            {
                isSuccess : false, 
                message :"Error Has Been Occured Please Try Again"
            });
    }
}

const deleteUser = async (ctx) =>{

    try{

        const userId = ctx.params.id;
        
        const query = await User.findById(userId);

        if(query === null){
            return (ctx.body = 
                {
                    isSuccess : false, 
                    message : "Cannot Find User"
                });
        }

        query = await User.findByIdAndDelete(userId)

        return (ctx.body = 
            {
                isSuccess : true, 
                message : "User Delete Successfull"

            });

    }catch(error){
        return (ctx.body = 
            {
                isSuccess : false, 
                message :"Error has been occured please try again"

            });
    }
      
}

module.exports  = {saveUser,deleteUser}



