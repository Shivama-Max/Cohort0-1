const express = require("express");
const userMiddleware = require("../middleware/user");
const { User,Course } = require("../db");
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config")
const router = express.Router()

router.post('/signup',async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username,
        password,
    })
    res.json({
        msg : "User Created Successfully..."
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

router.get('/courses',async (req,res)=>{
    const response = await Course.find({})
    res.json({
        courses : response
    })
})

router.post('/courses/:courseId',userMiddleware,async (req,res)=>{
    const courseId = req.params.courseId;
    //For Username Password
    // const username = req.headers.username;

    //For JWT
    const username = req.username;
    await User.updateOne({
        username : username
    },{
        "$push" : {
            purchasedCourses : courseId
        }
    });
    res.json({
        msg : "purchase complete..."
    })
})

router.get('/purchasedCourses',userMiddleware,async (req,res)=>{
    const user = await User.findOne({
        username : req.headers.username
    })
    const courses = await Course.find({
        _id : {
            "$in" : user.purchasedCourses
        }
    })
    res.json({
        courses : courses
    })
})

module.exports = router;