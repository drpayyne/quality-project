const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
	if(!req.cookies.user) {
		res.redirect('/home');
	}
	console.log(req.cookies);
	res.render('dashboard', {
		department: req.cookies.department
	});
});

module.exports = router;