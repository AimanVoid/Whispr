// user schema
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    
    username:{
        type:String,
        required:true,
        unique:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    },

    createdAt:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model("User", userSchema);


// eg
// {
//   username: "aiman",
//   email: "aiman@gmail.com",
//   password: "123456",
//   createdAt: "2026-03-06"
// }