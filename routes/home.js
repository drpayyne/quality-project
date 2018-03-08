const express = require('express');
const getFormData = require('get-form-data').default;
const router = express.Router();

let User = require('../models/user');

router.get('/', function(req, res) {
    res.clearCookie('user');
    res.clearCookie('department');
    res.clearCookie('dept')
    res.render('home');
    console.log('Cookies cleared...');
    console.log(res.cookies);
});

router.post('/', function(req, res) {

    username = req.body.username;
    password = req.body.userpass;

    query = {username: username};
    User.findOne(query, function(err, user) {
        if(err) {
            return console.log(err);
        }
        if(!user) {
            res.redirect('/home');
            return console.log('User not found');
        }
        if(user.password!=password) {
            res.redirect('/home');
            return console.log('Incorrect password');
        }
        res.cookie('user', user, {expires: 0});
        res.cookie('department', user.username, {expires: 0});
        console.log('Cookies set...');
        res.redirect('/dashboard');
    }); 
});

/* router.get('/register', function(req, res) {
    res.render('register');
});

router.post('/register', function(req, res) {

    let name = req.body.username.toUpperCase();
    let pass = req.body.userpass;

    let user = {
        username: name,
        password: pass    
    };

    console.log(user); */
    
    /* user.save(function(err) {
        if(err) {
            console.log(err);
        } else {
            res.redirect('/login/register');
        }
    }); */

    /*query = {username: name};
    User.update(query, user, {upsert: true}, function(err) {
        if(err) {
            console.log(err);
        } else {
            res.redirect('/login/register');
        }
    })
}); */

module.exports = router;