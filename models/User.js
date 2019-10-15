const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  emailid: {
    type: String,
    required: true
  },
  contacts: [{
    username: String,
    emailid: String
  }]
});

module.exports = User = mongoose.model('User',UserSchema);