const Director = require("../models/Director.js")
// Create director
// @route POST /api/directors
const createDirector = async(req,res)=>{
    if(!req.body.firstName || !req.body.lastName || !req.body.age){
        res.status(404).send("Fill fields")
    }

    const director = await Director.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age
    })

    res.status(200).json(director)
}
// Get all directors
// @route GET /api/directors

const getDirectors = async(req,res)=>{
    const directorFromDB = await Director.find()
    if(!directorFromDB){
        res.status(404).send("Not found")
    }
    res.status(200).json(directorFromDB)
}

module.exports={
    createDirector,
    getDirectors
}