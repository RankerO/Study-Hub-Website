const mongoose = require("mongoose");
const validator = require("validator");

const userSchema  = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },
    fullemail:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value))
            throw new Error("Invalid Email ID")
        }
    },
    phone:{
        type:Number,
        required:true,
        // min:10
    },
    message:{
        type:String,
        required:true,
        // minLength:3
    }
});


const User = mongoose.model("User",userSchema);
module.exports = User;