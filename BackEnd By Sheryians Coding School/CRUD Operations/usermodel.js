const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/grudOP');

const userSchema = mongoose.Schema({
     name: String,
     email: String,
     age: Number,
     address: String,
     phone: String
})

module.exports =  mongoose.model("user", userSchema);


