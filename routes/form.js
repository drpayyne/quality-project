const express = require('express');
const router = express.Router();

let PartAOne = require('../models/part_a1');
let PartATwo = require('../models/part_a2');
let CriterionOne = require('../models/criterion_one');
let CriterionTwo = require('../models/criterion_two');
let CriterionThree = require('../models/criterion_three');
let CriterionFour = require('../models/criterion_four');
let CriterionFive = require('../models/criterion_five');
let CriterionSix = require('../models/criterion_six');
let CriterionSeven = require('../models/criterion_seven');
let CriterionEight = require('../models/criterion_eight');

router.get('/:page', function(req, res ) {
	console.log(req.cookies);
	console.log(req.body);

	if(!req.cookies.user) {
		res.redirect('/home');
	}

	switch(req.params.page) {
		case 'details':
			PartAOne.findOne({}, function(err, document) {
				if(err)
					console.log(err);
				else {
					if(document==null) {
						console.log("Creating new object");
						document = new PartAOne({});
					}
					console.log(document);
					res.render('forms/details', {
						form: document,
					});
				}
			});
			break;
		case 'iqac':
			PartATwo.findOne({}, function(err, document) {
				if(err)
					console.log(err);
				else {
					if(document==null) {
						console.log("Creating new object");
						document = new PartATwo({});
					}
					console.log(document);
					res.render('forms/iqac', {
						form: document
					});
				}
			});
			break;
		case 'criterion1':
			CriterionOne.findOne({}, function(err, document) {
				if(err)
					console.log(err);
				else {
					if(document==null) {
						console.log("Creating new object");
						document = new CriterionOne({});
					}
					console.log(document);
					res.render('forms/criterion1', {
						form: document
					});
				}
			});
			break;
		case 'criterion2':
			CriterionTwo.findOne({department: req.cookies.department}, function(err, document) {
				if(err)
					console.log(err);
				else {
					if(document==null) {
						console.log("Creating new object");
						document = new CriterionTwo({});
						document.pass_percent_dist[0] = {
							programme_title: null,
							students_appeared: null,
							division: {
								distinction_percent: null,
								percent_one: null,
								percent_two: null,
								percent_three: null
							}
						};
					}
					console.log(document);
					res.render('forms/criterion2', {
						form: document
					});
				}
			});
			break;
		case 'criterion3':
			CriterionThree.findOne({department: req.cookies.department}, function(err, document) {
				if(err)
					console.log(err);
				else {
					if(document==null) {
						console.log("Creating new object");
						document = new CriterionThree({});
					}
					console.log(document);
					res.render('forms/criterion3', {
						form: document
					});
				}
			});
			break;
		case 'criterion4':
			CriterionFour.findOne({department: req.cookies.department}, function(err, document) {
				if(err)
					console.log(err);
				else {
					if(document==null) {
						console.log("Creating new object");
						document = new CriterionFour({});
					}
					console.log(document);
					res.render('forms/criterion4', {
						form: document
					});
				}
			});
			break;
		case 'criterion5':
			CriterionFive.findOne({department: req.cookies.department}, function(err, document) {
				if(err)
					console.log(err);
				else {
					if(document==null) {
						console.log("Creating new object");
						document = new CriterionFive({});
					}
					console.log(document);
					res.render('forms/criterion5', {
						form: document
					});
				}
			});
			break;
		case 'criterion6':
			CriterionSix.findOne({department: req.cookies.department}, function(err, document) {
				if(err)
					console.log(err);
				else {
					if(document==null) {
						console.log("Creating new object");
						document = new CriterionSix({});
					}
					console.log(document);
					res.render('forms/criterion6', {
						form: document
					});
				}
			});
			break;
		case 'criterion7':
			CriterionSeven.findOne({department: req.cookies.department}, function(err, document) {
				if(err)
					console.log(err);
				else {
					if(document==null) {
						console.log("Creating new object");
						document = new CriterionSeven({});
					}
					console.log(document);
					res.render('forms/criterion7', {
						form: document
					});
				}
			});
			break;
		case 'criterion8':
			CriterionEight.findOne({department: req.cookies.department}, function(err, document) {
				if(err)
					console.log(err);
				else {
					if(document==null) {
						console.log("Creating new object");
						document = new CriterionEight({});
					}
					console.log(document);
					res.render('forms/criterion8', {
						form: document
					});
				}
			});
			break;
	}
}); 

router.post('/:page', function(req, res) {
	console.log(req.cookies);
	console.log(req.body);
	console.log(req.params.page);

	var form = req.body;
	var id = req.params.page;
	var query = { department: req.cookies.department};

	switch(req.params.page) {
		case 'details':
			PartAOne.update(null, form, {upsert: true}, function(err) {
				if(err) {
					console.log(err);
				} else {
					res.redirect('/form/details');
				}
			});
			break;
		case 'iqac':
			PartATwo.update(null, form, {upsert: true}, function(err) {
				if(err) {
					console.log(err);
				} else {
					res.redirect('/form/iqac');
				}
			});
			break;
		case 'criterion1':
			CriterionOne.update(null, form, {upsert: true}, function(err) {
				if(err) {
					console.log(err);
				} else {
					res.redirect('/form/criterion1');
				}
			});
			break;
		case 'criterion2':

			form.pass_percent_dist = [];
			form.pass_percent_dist[0] = {
				programme_title: null,
				students_appeared: null,
				division: {
					distinction_percent: null,
					percent_one: null,
					percent_two: null,
					percent_three: null
				}
			};
			form.pass_percent_dist[0].programme_title = form["pass_percent_dist[0].programme_title"];
			form.pass_percent_dist[0].students_appeared = form["pass_percent_dist[0].students_appeared"];
			form.pass_percent_dist[0].division.distinction_percent = form["pass_percent_dist[0].division.distinction_percent"];
			form.pass_percent_dist[0].division.percent_one = form["pass_percent_dist[0].division.percent_one"];
			form.pass_percent_dist[0].division.percent_two = form["pass_percent_dist[0].division.percent_two"];
			form.pass_percent_dist[0].division.percent_three = form["pass_percent_dist[0].division.percent_three"];

			CriterionTwo.update(query, form, {upsert: true}, function(err) {
				if(err) {
					console.log(err);
				} else {
					res.redirect('/form/criterion2');
				}
			});
			break;
		case 'criterion3':
			CriterionThree.update(query, form, {upsert: true}, function(err) {
				if(err) {
					console.log(err);
				} else {
					res.redirect('/form/criterion3');
				}
			});
			break;
		case 'criterion4':
			CriterionFour.update(query, form, {upsert: true}, function(err) {
				if(err) {
					console.log(err);
				} else {
					res.redirect('/form/criterion4');
				}
			});
			break;
		case 'criterion5':
			CriterionFive.update(query, form, {upsert: true}, function(err) {
				if(err) {
					console.log(err);
				} else {
					res.redirect('/form/criterion5');
				}
			});
			break;
		case 'criterion6':
			CriterionSix.update(query, form, {upsert: true}, function(err) {
				if(err) {
					console.log(err);
				} else {
					res.redirect('/form/criterion6');
				}
			});
			break;
		case 'criterion7':
			CriterionSeven.update(null, form, {upsert: true}, function(err) {
				if(err) {
					console.log(err);
				} else {
					res.redirect('/form/criterion7');
				}
			});
			break;
		case 'criterion8':
			CriterionEight.update(null, form, {upsert: true}, function(err) {
				if(err) {
					console.log(err);
				} else {
					res.redirect('/form/criterion8');
				}
			});
			break;
	}
});

module.exports = router;