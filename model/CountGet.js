const mongoose = require('mongoose');

const CountGet = mongoose.Schema({
    visitHomePage: Number,
    yangi_avlod_id_c: Number,
    date: String,
    name: String
})

module.exports = mongoose.model('Count', CountGet) 

