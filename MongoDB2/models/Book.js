const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    bookAuthor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    },
    title:{
        type: String,
        required:[true,"Please add title"]
    },
    year:{
        type:Number,
        required:[true,"Please add year"]
    },
    pages:{
        type:Number,
        required:[true,"Please add page count"]
    },
    genre:{
        type: String,
        required:[true,"Please add genre"]
    },
    date:{
        type: Date,
        default: Date.now
    }
})

const Book = mongoose.model("Book",bookSchema)

module.exports = Book