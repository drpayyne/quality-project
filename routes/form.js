const express = require('express');
const router = express.Router();

router.get('/:page', function(req, res ) {
	if(!req.cookies.user) {
		res.redirect('/home');
	}

	switch(req.params.page) {
		case 'details':
			res.render('forms/details', {});
			break;
		case 'iqac':
			res.render('forms/iqac', {});
			break;
		case 'criterion1':
			res.render('forms/criterion1', {});
			break;
		case 'criterion2':
			res.render('forms/criterion2', {});
			break;
		case 'criterion3':
			res.render('forms/criterion3', {});
			break;
		case 'criterion4':
			res.render('forms/criterion4', {});
			break;
		case 'criterion5':
			res.render('forms/criterion5', {});
			break;
		case 'criterion6':
			res.render('forms/criterion6', {});
			break;
		case 'criterion7':
			res.render('forms/criterion7', {});
			break;
		case 'criterion8':
			res.render('forms/criterion8', {});
			break;
	}
});

module.exports = router;