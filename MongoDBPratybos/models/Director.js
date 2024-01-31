const mongoose = require("mongoose")

const directorSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required:[true,"Please add Name"]
    },
    lastName:{
        type: String,
        required:[true,"Please add last name"]
    },
    age:{
        type: Number,
    },
    date:{
        type:Date,
        default: Date.now
    }
})

const Director = mongoose.model("Director",directorSchema)

module.exports = Director