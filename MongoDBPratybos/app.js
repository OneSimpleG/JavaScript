const connectingDB = require("./config/db.js")
const express = require("express")
require("dotenv").config()
connectingDB()
const app = express()
app.use(express.json())

const {createDirector,getDirectors} = require("./controller/directorController.js")
const {createFilm,getFilms} = require("./controller/filmController.js")

app.post("/api/directors",createDirector)
app.get("/api/directors",getDirectors)

app.post("/api/films",createFilm)
app.get("/api/films",getFilms)

app.listen(process.env.PORT,()=>{
    console.log(`Server is runni ng on port ${process.env.PORT}`);
})