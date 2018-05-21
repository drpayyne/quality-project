const express = require('express');
const router = express.Router();

let PartAOne = require('../models/part_a1');
let PartATwo = require('../models/part_a2');
let CriterionOne = require('../models/criterion_one');
let CriterionTwo = require('../models/criterion_two');
let CriterionTwoHoq = require('../models/criterion_two_hoq');
let CriterionThree = require('../models/criterion_three');
let CriterionFour = require('../models/criterion_four');
let CriterionFive = require('../models/criterion_five');
let CriterionSix = require('../models/criterion_six');
let CriterionSeven = require('../models/criterion_seven');
let CriterionEight = require('../models/criterion_eight');

router.get('/:page', function(req, res ) {
	console.log('FORMS PAGE');
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
					}
					console.log(document);
					res.render('forms/criterion2', {
						form: document
					});
				}
			});
			break;
		case 'criterion2hoq':
			CriterionTwoHoq.findOne({department: 'HOQ'}, function(err, document) {
				if(err)
					console.log(err);
				else {
					if(document==null) {
						console.log("Creating new object");
						document = new CriterionTwoHoq({});
						for(let i = 0; i < 10; i++) {
							document.pass_percent_dist[i] = {
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
					}
					console.log(document);
					res.render('forms/criterion2hoq', {
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
			form.department = 'HOQ';
			PartAOne.update(null, form, {upsert: true}, function(err) {
				if(err) {
					console.log(err);
				} else {
					res.redirect('/form/details');
				}
			});
			break;
		case 'iqac':
			form.department = 'HOQ';
			PartATwo.update(null, form, {upsert: true}, function(err) {
				if(err) {
					console.log(err);
				} else {
					res.redirect('/form/iqac');
				}
			});
			break;
		case 'criterion1':
			form.department = 'HOQ';
			//console.log(form);
			recursiveGetProperty(form);
			//HANDLING CHECKBOX INPUTS
			/*if(form.curriculum_flexibility.cbcs == undefined) console.log(1);
			if(form.curriculum_flexibility.core == undefined) form.curriculum_flexibility.core = 'off';
			if(form.curriculum_flexibility.elective_option == undefined) form.curriculum_flexibility.elective_option = 'off';
			if(form.curriculum_flexibility.open_option == undefined) form.curriculum_flexibility.open_option = 'off';
			if(form.stakeholder_feedback.alumni == undefined) form.stakeholder_feedback.alumni = 'off';
			if(form.stakeholder_feedback.parents == undefined) form.stakeholder_feedback.parents = 'off';
			if(form.stakeholder_feedback.employers == undefined) form.stakeholder_feedback.employers = 'off';
			if(form.stakeholder_feedback.students == undefined) form.stakeholder_feedback.students = 'off';
			if(form.mode_of_feedback.online == undefined) form.mode_of_feedback.online = 'off';
			if(form.mode_of_feedback.manual == undefined) form.mode_of_feedback.manual = 'off';
			if(form.mode_of_feedback.coop_school == undefined) form.mode_of_feedback.coop_school = 'off';

			if(curriculum_flexibility in form) {
				if(!(cbcs in form.curriculum_flexibility)) form.curriculum_flexibility.core = 'off';
			}*/

			/*CriterionOne.replaceOne(null, form, {upsert: true}, function(err) {
				if(err) {
					console.log(err);
				} else {
					res.redirect('/form/criterion1');
				}
			});*/
			break;
		case 'criterion2':
			CriterionTwo.update(query, form, {upsert: true}, function(err) {
				if(err) {
					console.log(err);
				} else {
					res.redirect('/form/criterion2');
				}
			});
			break;
		case 'criterion2hoq':
		
			let departments = ['ATM', 'BTC', 'CHE', 'CSE', 'CVE', 'ECE', 'EEE', 'IT', 'MAR', 'MEC'];
			let c1rs = [req.body.c1r1, req.body.c1r2, req.body.c1r3, req.body.c1r4, req.body.c1r5, req.body.c1r6, req.body.c1r7, req.body.c1r8, req.body.c1r9, req.body.c1r10];
			let c2rs = [req.body.c2r1, req.body.c2r2, req.body.c2r3, req.body.c2r4, req.body.c2r5, req.body.c2r6, req.body.c2r7, req.body.c2r8, req.body.c2r9, req.body.c2r10];
			let c3rs = [req.body.c3r1, req.body.c3r2, req.body.c3r3, req.body.c3r4, req.body.c3r5, req.body.c3r6, req.body.c3r7, req.body.c3r8, req.body.c3r9, req.body.c3r10];
			let c4rs = [req.body.c4r1, req.body.c4r2, req.body.c4r3, req.body.c4r4, req.body.c4r5, req.body.c4r6, req.body.c4r7, req.body.c4r8, req.body.c4r9, req.body.c4r10];
			let c5rs = [req.body.c5r1, req.body.c5r2, req.body.c5r3, req.body.c5r4, req.body.c5r5, req.body.c5r6, req.body.c5r7, req.body.c5r8, req.body.c5r9, req.body.c5r10];
		
			for(var i=0; i<10; i++) {
				let doc = {}, div = {};
				div = {
					distinction_percent: c2rs[i],
					percent_one: c3rs[i],
					percent_two: c4rs[i],
					percent_three: c5rs[i]
				}
				doc.programme_title = departments[i];
				doc.students_appeared = c1rs[i];
				doc.division = div;
		
				form.pass_percent_dist[i] = doc;
			}

			console.log(form);
			console.log('*****');

			CriterionTwoHoq.update(query, form, {upsert: true}, function(err) {
				if(err) {
					console.log(err);
				} else {
					res.redirect('/form/criterion2hoq');
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
			form.department = 'HOQ';
			CriterionSix.update(query, form, {upsert: true}, function(err) {
				if(err) {
					console.log(err);
				} else {
					res.redirect('/form/criterion6');
				}
			});
			break;
		case 'criterion7':
			form.department = 'HOQ';
			CriterionSeven.update(null, form, {upsert: true}, function(err) {
				if(err) {
					console.log(err);
				} else {
					res.redirect('/form/criterion7');
				}
			});
			break;
		case 'criterion8':
			form.department = 'HOQ';
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

function recursiveGetProperty(obj) {
	let property;
    for (property in obj) {
		if (obj[property] instanceof Object) {
            recursiveGetProperty(obj[property]);
        } else if (Array.isArray(obj)) {
			console.log(property);
		}
    }
}    

module.exports = router;