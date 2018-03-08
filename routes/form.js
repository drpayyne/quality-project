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

router.post('/', function(req, res) {
	console.log(req.cookies);
	console.log(req.body);
	res.redirect('/dashboard');
});

module.exports = router;