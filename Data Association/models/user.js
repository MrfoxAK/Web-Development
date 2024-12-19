const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Test_Data_Association')

const userModel = mongoose.Schema({
     username: {
          type: String
     },
     email: String,
     age: Number,
     posts: [
          {
               type: mongoose.Schema.Types.ObjectId,
               ref: 'post'
          }
     ]
});

module.exports = mongoose.model('user', userModel);
