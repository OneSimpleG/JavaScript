const Director = require("../models/Director.js")
// Create director
// @route POST /api/directors
const createDirector = async (req, res) => {
    if (!req.body.firstName || !req.body.lastName || !req.body.age) {
        res.status(404).send("Fill fields")
    }

    const director = await Director.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
    })

    res.status(200).json(director)
}
// Get all directors
// @route GET /api/directors

const getDirectors = async (req, res) => {
    const directorFromDB = await Director.find()
    if (!directorFromDB) {
        res.status(404).send("Not found")
    }
    res.status(200).json(directorFromDB)
}

// Get one director by id
// @route GET /api/directors/:id

const getDirectorId = async (req, res) => {
    const directorFromDB = await Director.findById(req.params.id)
    if (!directorFromDB) {
        res.status(404).send("Not found")
    }
    res.status(200).json(directorFromDB)
}

// Update one director
// @route PUT /api/directors/:id

const updateOneDirector = async (req, res) => {
    const directorFromDB = await Director.findById(req.params.id)
    if (!directorFromDB) {
        res.status(404).send("Not found")
    }
    directorFromDB.age=req.body.age
    directorFromDB.save()
    res.status(200).json(directorFromDB)
}

// Delete one director by id
// @route DELETE /api/directors/:id

const deleteDirector = async (req,res)=>{
    const directorFromDB = await Director.deleteOne({_id:req.params.id})
    res.status(200).send("Director deleted")
}

module.exports = {
    createDirector,
    getDirectors,
    getDirectorId,
    updateOneDirector,
    deleteDirector
}
