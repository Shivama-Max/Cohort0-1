const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course, User } = require("../db");
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config")
const router = express.Router()

router.post('/signup', async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username,
        password,
    })
    res.json({
        msg : "Admin Created Successfully..."
    })
})

router.post('/signin',async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    })
    if(user){
        const token = jwt.sign({
            username
        },JWT_SECRET);
        res.json({
            token
        })
    }else{
        res.status(411).json({
            msg : "Incorrect email & password..."
        })
    }
})

router.post('/courses',adminMiddleware,async (req,res)=>{

    const title = req.body.title;
    const description = req.body.description;
    const imgLink = req.body.imgLink;
    const price = req.body.price;

    const newCourse = await Course.create({
        title,
        description,
        imgLink,
        price
    })
    res.json({
        msg : "Course created successfully",
        courseId : newCourse._id,
    })
    
})

router.get('/courses',adminMiddleware,async (req,res)=>{
    const response = await Course.find({})
    res.json({
        courses : response
    })
})

module.exports = router;