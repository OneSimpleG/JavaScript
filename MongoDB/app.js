const express = require("express")
const app = express()
app.use(express.json())
const Course = require("./models/Course.js")


require("dotenv").config()

const mongoose = require("mongoose")

mongoose
    .connect(`${process.env.MONGO_DB_URL}`)
    .then(()=> console.log("Connected!"))
    .catch((error)=> console.log(error))
//

const createRecord = async () =>{
    const result = await Course.create({
        title: "C# course",
        author: "Mantas",
        modules: ["C#","ASP.NET"],
    })
    console.log(result);
}
// createRecord()

const recordToDB = async () =>{
    const course = new Course({
        title:"JavaScript course",
        author:"Evelina",
        modules:["JavaScript","React"]
    })
    const result = await course.save()
    console.log(result);
}
// recordToDB()

const getCourse = async () =>{
    const myCourses = await Course.find()
    console.log(myCourses);
}
// getCourse()

const findOneCourse = async (id) =>{
    const course = await Course.findById(id)
    console.log(course);
}
// findOneCourse("65b21f3b2941a14aec35a302")

const findOneCourseParameter = async (author) =>{
    const course = await Course.findOne({author: author})
    console.log(course);
}
// findOneCourseParameter("Evelina")

const courseUpdate = async (id) =>{
    const course = await Course.findById(id)
    if (!course){
        return
    }
    if (course.isPublished){
        return
    }
    course.modules.push("Typescript")
    const result = await course.save()
    console.log(result);
}
// courseUpdate("65b21f3b2941a14aec35a302")

const updateOneCourse = async (id) =>{
    const result = await Course.updateOne(
        {
            _id: id,
        },
        {
            $set:{
                modules: ["C#","ASP.NET","TypeScript"],
            },
        }
    )
    console.log(result);
}
// updateOneCourse("65b21f3b2941a14aec35a302")

const deleteCourse = async (id) =>{
    const course = await Course.deleteOne({_id:id})
    console.log(course);
}
// deleteCourse("65b21f3b2941a14aec35a302")

const { createUser,getUsers,getUserById,updateUser } = require("./controllers/userControllers.js")

app.post("/api/users",createUser)
app.get("/api/users",getUsers)
app.get("/api/users/:id",getUserById)
app.put("/api/users/:id",updateUser)

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT} port.`);
})