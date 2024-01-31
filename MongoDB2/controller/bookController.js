const Book = require("../models/Book.js")

// Create book
// @route POST /api/books

const createBook = async(req,res)=>{
    if(!req.body.bookAuthor || !req.body.title || !req.body.year || !req.body.pages || !req.body.genre){
        res.status(404).send("Fill inputs")
    }

    const book = await Book.create({
        bookAuthor: req.body.bookAuthor,
        title: req.body.title,
        year: req.body.year,
        pages: req.body.pages,
        genre: req.body.genre
    })

    res.status(200).json(book)
}

// Get all books
// @route GET /api/books

const getBooks = async(req,res)=>{
    const booksFromDB = await Book.find()
    // console.log(booksFromDB);
    if(!booksFromDB){
        res.status(404).send("Not found")
    }
    res.status(200).json(booksFromDB)
}

const getFullInfoAboutBook = async(req,res)=>{
    const booksFromDB = await Book.find().populate(
        "bookAuthor",
        "firstName lastName _id"
    )
    if(!booksFromDB){
        res.status(404).send("Not found")
    }

    res.status(200).json(booksFromDB)
}

// get one book by title
// @route GET /api/books/:title



module.exports = {
    createBook,
    getBooks,
    getFullInfoAboutBook
}