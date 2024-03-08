const mongoose = require("mongoose")

require("dotenv").config({path : '../.env'})
const URI = env.URI;
mongoose.connect(URI)


const AdminSchema = new mongoose.Schema({

})

const UserSchema = new mongoose.Schema({
    
})

const CourseSchema = new mongoose.Schema({
    
})

const Admin = mongoose.model('Admin',AdminSchema);
const User = mongoose.model('User',UserSchema);
const Course = mongoose.model('Course',CourseSchema)

module.exports = {
    Admin,
    User,
    Course
}