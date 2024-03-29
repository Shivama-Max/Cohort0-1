const mongoose = require("mongoose")

require("dotenv").config({path : '../.env'})
// const URI = process.env.URI; 
//For JWT, using different DB
const URI = process.env.URI2;
mongoose.connect(URI)


const AdminSchema = new mongoose.Schema({
    username : String,
    password : String,
})

const UserSchema = new mongoose.Schema({
    username : String,
    password : String,
    purchasedCourses : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Course'
    }]    
})

const CourseSchema = new mongoose.Schema({
    title : String,
    description : String,
    imgLink : String,
    price : Number,
})

const Admin = mongoose.model('Admin',AdminSchema);
const User = mongoose.model('User',UserSchema);
const Course = mongoose.model('Course',CourseSchema)

module.exports = {
    Admin,
    User,
    Course
}