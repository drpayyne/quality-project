const express = require('express');
const router = express.Router();

const PDF = require('../gen/pdf.js');
const SUM = require('../gen/sum.js');

router.get('/', function(req, res) {
	console.log(req.cookies);

	if(!req.cookies.user) {
		res.redirect('/home');
	}

	res.render('dashboard', {
		department: req.cookies.department
	});
});

router.post('/', function(req, res) {
	console.log(req.body.department);
	console.log(req.body.path);
	res.cookie('department', req.body.department, {expires: 0});
	res.redirect(req.body.path);
});

router.get('/:type', function(req, res) {
	switch(req.params.type) {
		case 'prepare':
			SUM.sum();
			res.redirect('/dashboard');
			break;
		case 'generate':
			PDF.make_pdf();
			break;
		default:
			break;
	}
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