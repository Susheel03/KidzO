const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email_addr: { type: String, unique: true },
  username: { type: String, unique: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;