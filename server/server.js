const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const messageRoutes = require("./routes/messageRoutes");
const authRoutes = require("./routes/authRoutes");
const Message = require("./models/Message");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", messageRoutes);
// auth route
app.use("/api", authRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err));

app.get("/", (req,res)=>{
    res.send("API Running");
});

// api/send route
app.post("/api/send", async (req,res)=>{

    try{

        const {receiver,text} = req.body;

const message = new Message({
    receiver: receiver,
    text: text
});

        await message.save();

        res.json({message:"Message sent successfully"});

    }catch(err){

        console.log(err);
        res.status(500).json({error:"Server error"});

    }

});



app.listen(process.env.PORT, ()=>{
    console.log("Server running");
});
