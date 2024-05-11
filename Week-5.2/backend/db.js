const mongoose = require("mongoose")
require('dotenv').config();

const URI = process.env.TODOURI;

mongoose.connect(URI)

const todoSchema = mongoose.Schema({
    title : String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model('todos',todoSchema);
module.exports = {
    todo
}