const User = require("../models/User.js")
console.log(User);
// Create user
// @route POST /api/users
const createUser = async (req,res)=>{
    if(!req.body.name || !req.body.email || !req.body.password){
        res.status(404).send("Not found")
    }
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    const result = await user.save()
    res.status(200).send(result)
}
// GET user
// @route GET /api/users
const getUsers = async (req, res) =>{
    const userFromDB = await User.find()
    console.log(userFromDB);
    
    if(!userFromDB){
        res.status(404).send("User not found")
        return
    }
    
    res.status(200).json(userFromDB)
}
// GET user by ID
// @route GET /api/users/:id
const getUserById = async (req,res) =>{
    const userById = await User.findById(req.params.id)
    if(!userById){
        res.status(404).send("not found")
    }
    res.send(userById)
}
// PUT user by ID
// @route PUT /api/users/:id
const updateUser = async (req,res)=>{
    const user = await User.findById(req.params.id)
    if(!user){
        res.status(404).send("not found")
    }
    user.name = req.body.name
    const result = await user.save()
    console.log(result);

    res.status(200).json(result)
}

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser
}