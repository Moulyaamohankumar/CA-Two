const mongoose = require('mongoose'); 
const userSchema = new Schema({
    name:{
        type:String,
        required:[true,"Please enter your name"],
    },
    email:{
        type:String,
        required:[true,"please enter your email"],
    },
    password:{
        type:String,
        required:true,
        minlength : [4,"Your password should have atleast 4 letters"]
    }
})

const userModel = ('user',userSchema);
module.exports = userModel;