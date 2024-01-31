const mongoose = require("mongoose")

const filmSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[true,"Please add title"]
    },
    filmDirector:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Director"
    },
    lenght:{
        type: String
    },
    year:{
        type: Number
    },
    description:{
        type: String,
        default: "No description given"
    },
    date:{
        type:Date,
        default: Date.now
    }
})

const Film = mongoose.model("Film",filmSchema)

module.exports = Film