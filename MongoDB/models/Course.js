const mongoose = require("mongoose")
const courseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please enter title"]
    },
    author:{
        type:String,
        required:[true,"Please enter author"]
    },
    modules:{
        type:[String],
        required:[true,"Please enter at least 1 module"]
    },
date:{
    type:Date,
    default:Date.now()
},
})

module.exports = mongoose.model("Course",courseSchema)