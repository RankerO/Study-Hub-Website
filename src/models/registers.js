const mongoose = require("mongoose");
const validator = require("validator");

const employeeSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    email : {
        type: String,
        required : true,
        unique : true
    },
    password : {
        type: String,
        required : true
    },
    confirmpassword : {
        type: String,
        required : true
    },
    
})

const Register = new mongoose.model("Register",employeeSchema);
module.exports = Register;


// const userSchema  = new mongoose.Schema({
//     fullname:{
//         type:String,
//         required:true,
//     },
//     fullemail:{
//         type:String,
//         required:true,
//         validate(value){
//             if(!validator.isEmail(value))
//             throw new Error("Invalid Email ID")
//         }
//     },
//     phone:{
//         type:Number,
//         required:true,
//         min:10
//     },
//     message:{
//         type:String,
//         required:true,
//         minLength:3
//     }
// })


// const User = new mongoose.model("User",userSchema);
// module.exports = User;