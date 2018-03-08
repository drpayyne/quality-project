const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
	console.log(req.cookies);

	if(!req.cookies.user) {
		res.redirect('/home');
	}

	res.render('dashboard', {
		department: req.cookies.department
	});
});

module.exports = router;