const mongoose = require('mongoose');

const postModel = mongoose.Schema({
     postData: String,
     user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user'
     },
     date: {
          type: Date,
          default: Date.now
     }
});

module.exports = mongoose.model('post', postModel);
