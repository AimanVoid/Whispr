// msg schema 
const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({

    receiver:{
        type:String,
        required:true
    },

    text:{
        type:String,
        required:true
    },

    reply:{
        type:String,
        default:""
    },

    createdAt:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model("Message", messageSchema);


// eg
// {
//   receiver: "aiman",
//   text: "Do you like coding?",
//   reply: "",
//   createdAt: "2026-03-06"
// }
//no sender name