const mongoose = require("mongoose")

const authorSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required:[true,"Please add Name"]
    },
    lastName:{
        type: String,
        required:[true,"Please add last name"]
    },
    about:{
        type: String,
    },
    date:{
        type:Date,
        default: Date.now
    }
})

authorSchema.virtual('Books',{
    ref:"Book",
    localField: "_id",
    foreignField: "bookAuthor"
})

const Author = mongoose.model("Author",authorSchema)

module.exports = Author