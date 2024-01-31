const connectingDB = require("./config/db.js")
const express = require("express")
require("dotenv").config()
connectingDB()
const app = express()
app.use(express.json())

const {createAuthor,getAllAuthorBooks} = require("./controller/authorController.js")
app.post("/api/authors",createAuthor)
app.get("/api/authors/all",getAllAuthorBooks)

const {createBook, getBooks, getFullInfoAboutBook} = require("./controller/bookController.js")
app.post("/api/books",createBook)
app.get("/api/books",getBooks)
app.get("/api/books/full",getFullInfoAboutBook)

app.listen(process.env.PORT,()=>{
    console.log(`Server is runni ng on port ${process.env.PORT}`);
})