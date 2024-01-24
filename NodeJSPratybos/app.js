const companys = require("./data.js")
const express = require("express")
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

app.get("/cia/yra/mano/routas",(request,response)=>{
    response.send(companys)
})

app.get("/cia/yra/mano/routas/:id",(req,res)=>{
    const company = companys.find((comp)=> comp.id===parseInt(req.params.id))
    if(!company){
        res.status(404).send("product not Found")
    }
    res.send(company)
})

app.post("/cia/yra/mano/routas",(req,res)=>{
    const newCompany = {
        id: 11,
        title: "Volkswagen"
    }
    companys.push(newCompany)
    res.send(companys)
})

app.put("/cia/yra/mano/routas/:id",(req,res)=>{
    const company = companys.find((comp)=> comp.id===parseInt(req.params.id))
    if(!company){
        res.status(404).send("product not Found")
    }
    company.title = req.body.title
    res.send(company)
})

app.delete("/cia/yra/mano/routas/:id",(req,res)=>{
    const company = companys.find((comp)=> comp.id===parseInt(req.params.id))
    if(!company){
        res.status(404).send("product not Found")
    }
    const componyIndex = companys.indexOf(company)
    companys.splice(componyIndex,1)
    res.send(companys)
})

const PORT = 5000
app.listen(PORT || 8000, ()=>{
    console.log("server is running on port " + PORT);
})