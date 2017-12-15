const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const config = require('./database');
const bcrypt = require('bcryptjs');

module.exports = function(passport) {
    console.log('hey!');
    //Local Strategy
    passport.use(new LocalStrategy(function(username, password, done) {
        //Match user
        console.log(username);
        console.log(password);
        query = {username: username};
        User.findOne(query, function(err, user) {
            if(err) throw err;
            if(!user) return done(null, false, {message: 'No User Found'});
            //Match password
            bcrypt.compare(password, user.password, function(err, match) {
                if(err) throw err;
                if(match) return done(null, user);
                else return done(null, false, {message: 'Password Mismatch'});
            });
        });
    }));

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
}