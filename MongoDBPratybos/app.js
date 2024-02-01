const connectingDB = require("./config/db.js")
const express = require("express")
require("dotenv").config()
connectingDB()
const app = express()
app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

const {
    createDirector,
    getDirectors,
    getDirectorId,
    updateOneDirector,
    deleteDirector
} = require("./controller/directorController.js")
const {
    createFilm,
    getFilms,
    getFilmId,
    updateOneFilm,
    deleteFilm
} = require("./controller/filmController.js")

const directorCreate = app.post("/api/directors", createDirector)
const directorGet = app.get("/api/directors", getDirectors)
const directorGetById = app.get("/api/directors/:id", getDirectorId)
const directorUpdate = app.put("/api/directors/:id", updateOneDirector)
const directorDelete = app.delete("/api/directors/:id",deleteDirector)
module.exports = {directorCreate,directorGet,directorGetById,directorUpdate,directorDelete}

app.post("/api/films", createFilm)
app.get("/api/films", getFilms)
app.get("/api/films/:id", getFilmId)
app.put("/api/films/:id",updateOneFilm)
app.delete("/api/films/:id",deleteFilm)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
