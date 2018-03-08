const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: { type: String, default: null },
    password: { type: String, default: null }
});

const User = module.exports = mongoose.model('User', userSchema, 'users');