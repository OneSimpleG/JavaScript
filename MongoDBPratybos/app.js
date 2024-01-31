const connectingDB = require("./config/db.js")
const express = require("express")
require("dotenv").config()
connectingDB()
const app = express()
app.use(express.json())

const {
    createDirector,
    getDirectors,
    getDirectorId,
    updateOneDirector,
} = require("./controller/directorController.js")
const {
    createFilm,
    getFilms,
    getFilmId,
} = require("./controller/filmController.js")

app.post("/api/directors", createDirector)
app.get("/api/directors", getDirectors)
app.get("/api/directors/:id", getDirectorId)
app.put("/api/directors/:id", updateOneDirector)

app.post("/api/films", createFilm)
app.get("/api/films", getFilms)
app.get("/api/films/:id", getFilmId)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
