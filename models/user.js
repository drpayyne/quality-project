const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: String,
    password: String
});

const User = module.exports = mongoose.model('User', userSchema, 'users');