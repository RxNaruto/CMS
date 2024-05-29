const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://naruto:jVSNMMGwfSVPzHXV@cluster0.78poq1d.mongodb.net/cms");

const students = new mongoose.Schema({
    username: String,
    password: String,
    name: String
})

const Students = mongoose.model("student",students);

module.exports={
    Students
}