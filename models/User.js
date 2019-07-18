const mongoose = require('mongoose');
const { Schema } = mongoose; 

const userSchema = new Schema ({
  googleId: String,
  firstName: String,
  email: String,
  registered: {
    type: Boolean,
    default: false
  }
});

mongoose.model('users', userSchema);