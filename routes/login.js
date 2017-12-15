const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

let User = require('../models/user');

router.get('/', function(req, res) {
    res.render('login');
});

router.post('/', function(req, res, next) {
    console.log('hey');
    passport.authenticate('local', {
        successRedirect: '/form',
        failureRedirect: '/login',        
    })(req, res, next);
});

router.get('/register', function(req, res) {
    res.render('register');
});

router.post('/register', function(req, res) {
    let name = req.body.username;
    let pass = req.body.userpass;
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(pass, salt, function(err, hash) {
            if(err) {
                console.log(err);
            } else {
                let user = new User({
                    username: name,
                    password: hash    
                });
                console.log(user);
                user.save(function(err) {
                    if(err) {
                        console.log(err);
                    } else {
                        res.redirect('/login/register');
                    }
                });
            }
        });
    });
});

module.exports = router;