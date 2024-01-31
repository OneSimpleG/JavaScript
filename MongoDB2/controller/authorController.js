const Author = require("../models/Author.js")
// create author
// @route POST /api/authors

const createAuthor = async(req,res)=>{
    if(!req.body.firstName || !req.body.lastName || !req.body.about){
        res.status(404).send("Fill inputs")
    }

    const author = new Author({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        about: req.body.about
    })

    const result = await author.save()
    res.status(200).send(result)
}

const getAllAuthorBooks = async(req,res)=>{
    const authorsFromDB = await Author.aggregate([{
        $lookup:{
            from:"books",
            localField: "_id",
            foreignField: "bookAuthor",
            as: "books"
        }
    }])
    if(!authorsFromDB){
        res.status(404).send("not found")
    }
    res.status(200).json(authorsFromDB)
}
module.exports = {createAuthor,getAllAuthorBooks}