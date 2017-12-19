//Init app
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
var cookieParser = require('cookie-parser')

//Mongoose init
mongoose.connect('mongodb://gopinath:password@127.0.0.1/form?authSource=admin', {
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
    next();
});

//Home route GET
app.get('/', function(req, res) {
	res.redirect('/login');
});

//Import route files
let forms = require('./routes/forms');
let login = require('./routes/login');
app.use('/form', forms);
app.use('/login', login);

//Start server
app.listen(3000, function() {
	console.log('Server started on port 3000...');
});
