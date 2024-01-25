const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"Please add username"]
    },
    email:{
        type:String,
        required:[true,"Please add Email"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"Please add password"],
    },
    role:{
        type:String,
        default:"simple"
    }
},{
    timestamp:true
})

module.exports=mongoose.model("User",userSchema)