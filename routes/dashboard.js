const express = require('express');
const router = express.Router();

const PDF = require('../gen/pdf.js');

router.get('/', function(req, res) {
	console.log(req.cookies);

	if(!req.cookies.user) {
		res.redirect('/home');
	}

	res.render('dashboard', {
		department: req.cookies.department
	});
});

router.post('/:type', function(req, res) {
	console.log(req.body);
	console.log(req.params.type);
	if(req.params.type == 'generate') {
		PDF.make_pdf();
	}
	res.redirect('/dashboard');
});

module.exports = router;