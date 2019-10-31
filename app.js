//Init app
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
var cookieParser = require('cookie-parser')

//Mongoose init
mongoose.connect('mongodb://jd:abcd123@ds231941.mlab.com:31941/iqac_db', {
	useMongoClient: true
});
let db = mongoose.connection;

//Check Mongoose connection
db.once('open', function(){
	console.log("Connected to MongoDB");
});
db.on('error', function(err) {
	console.log(err);
});

//Bodyparser middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Set public folder
app.use(express.static(path.join(__dirname, '/public')));

//Express session middleware
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: false,
}));

app.use(cookieParser());

app.use(function(req,res,next){
	res.locals.cookies = req.cookies;
	console.log('MIDDLEWARE')
	console.log(res.locals.cookies)
    next();
});

//Home route GET
app.get('/', function(req, res) {
	res.redirect('/home');
});

//Import routing files
let home = require('./routes/home');
let dashboard = require('./routes/dashboard');
let form = require('./routes/form');
let settings = require('./routes/settings');
let login = require('./routes/login');
let report = require('./routes/reports')

//Route files
app.use('/home', home);
app.use('/dashboard', dashboard);
app.use('/form', form);
app.use('/settings', settings);
app.use('/login', login);
app.use('/report', report)

//Start server
app.listen(3000, function() {
	console.log('Server started on port 3000...');
});
