const Film = require("../models/Film.js")

// Create Film
// @route POST api/films

const createFilm = async (req, res) => {
    if (
        !req.body.title ||
        !req.body.filmDirector ||
        !req.body.lenght ||
        !req.body.year
    ) {
        res.status(404).send("Fill fields")
    }
    const film = await Film.create({
        title: req.body.title,
        filmDirector: req.body.filmDirector,
        lenght: req.body.lenght,
        year: req.body.year,
        description: req.body.description,
    })
    res.status(200).json(film)
}
// Get all films
// @route GET api/films

const getFilms = async (req, res) => {
    const filmFromDB = await Film.find()
    if (!filmFromDB) {
        es.status(404).send("Not found")
    }
    res.status(200).json(filmFromDB)
}

// Get one film by id
// @route GET /api/films/:id

const getFilmId = async (req, res) => {
    const filmFromDB = await Film.findById(req.params.id)
    if (!filmFromDB) {
        res.status(404).send("Not found")
    }
    res.status(200).json(filmFromDB)
}

// Update one film
// @route PUT /api/films/:id

const updateOneFilm = async (req, res) => {
    const filmFromDB = await Film.findById(req.params.id)
    if (!filmFromDB) {
        res.status(404).send("Not found")
    }
    filmFromDB.description=req.body.description
    filmFromDB.save()
    res.status(200).json(filmFromDB)
}

// Delete one film by id
// @route DELETE /api/films/:id

const deleteFilm = async (req,res)=>{
    const filmFromDB = await Film.deleteOne({_id:req.params.id})
    res.status(200).send("Film deleted")
}

module.exports = {
    createFilm,
    getFilms,
    getFilmId,
    updateOneFilm,
    deleteFilm
}
