const Film = require("../models/Film.js")

// Create Film
// @route POST api/films

const createFilm = async(req,res)=>{
    if(!req.body.title || !req.body.filmDirector || !req.body.lenght || !req.body.year){
        res.status(404).send("Fill fields")
    }
    const film = await Film.create({
        title: req.body.title,
        filmDirector: req.body.filmDirector,
        lenght: req.body.lenght,
        year: req.body.year,
        description: req.body.description
    })
    res.status(200).json(film)
}
// Get all films
// @route GET api/films

const getFilms = async(req,res)=>{
    const filmFromDB = await Film.find()
    if(!filmFromDB){
        es.status(404).send("Not found")
    }
    res.status(200).json(filmFromDB)
}

module.exports = {
    createFilm,
    getFilms
}