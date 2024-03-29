// console.log("hello from back");

// const information = require("./modules/info.js")
// console.log(information);
const products = require("./data.js")

const express = require("express")
const app = express()

app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.get("/cia/yra/mano/routas", (request, response) => {
    response.send(products)
})

app.get("/cia/yra/mano/routas/:id", (req, res) => {
    const product = products.find((prod) => prod.id === parseInt(req.params.id))
    if (!product) {
        res.status(404).send("product not Found")
    }
    res.send(product)
})

app.post("/cia/yra/mano/routas", (req, res) => {
    const newProduct = {
        id: 5,
        title: "Watch",
    }
    products.push(newProduct)
    res.send(products)
})

app.put("/cia/yra/mano/routas/:id", (req, res) => {
    const product = products.find((prod) => prod.id === parseInt(req.params.id))
    if (!product) {
        res.status(404).send("product not Found")
    }
    product.title = req.body.title
    res.send(product)
})

app.delete("/cia/yra/mano/routas/:id", (req, res) => {
    const product = products.find((prod) => prod.id === parseInt(req.params.id))
    if (!product) {
        res.status(404).send("product not Found")
    }
    const productIndex = products.indexOf(product)
    products.splice(productIndex, 1)
    res.send(product)
})

const PORT = 5000
app.listen(PORT || 8000, () => {
    console.log("server is running on port " + PORT)
})
