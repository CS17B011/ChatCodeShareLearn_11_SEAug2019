const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  googleid: String,
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