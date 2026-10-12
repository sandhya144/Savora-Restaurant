// logics of api 
const userModel = require("../models/user.model");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');



async function registerUser(req,res) {
    const {fullName, email, password} = req.body;  // it makes the data readable 

    const isUserAlreadyExists = await userModel.findOne({
        email
    })
    if(isUserAlreadyExists){
        return res.status(400).json({
            message:"User already exists"
        })
    }

    // to protect from data breaches
    const hashedPassword =  await bcrypt.hash(password, 10);

    const user = await userModel.create({
        fullName,
        email,
        password: hashedPassword
    })

    const token = jwt.sign({
        id: user._id    // unique data 
    }, process.env.JWT_SECRET, {
        expiresIn: '1h'
    })

    res.cookie("token",token)

    res.status(201).json({
        message: "User Registered Successfully",
        user:{
            _id: user._id,
            email: user.email,
            fullName: user.fullName
        }
    })

}


