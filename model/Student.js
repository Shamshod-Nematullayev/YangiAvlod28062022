const mongoose = require("mongoose");

const schema = mongoose.Schema({
    yangi_avlod_id: Number,
    fullname: String,
    gender: String,
    sinf: Number,
    direction: String,
    birthday: Date,
    address: String,
    school: String
})

const Student = mongoose.model('Student', schema)

module.exports = Student;