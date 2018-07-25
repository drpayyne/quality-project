const express = require('express');
const router = express.Router();

let HPartAOne = require('../models/hoq/part_a1');
let HPartATwo = require('../models/hoq/part_a2');
let HCriterionOne = require('../models/hoq/criterion_one');
let HCriterionTwo = require('../models/hoq/criterion_two');
let HCriterionThree = require('../models/hoq/criterion_three');
let HCriterionFour = require('../models/hoq/criterion_four');
let HCriterionFive = require('../models/hoq/criterion_five');
let HCriterionSix = require('../models/hoq/criterion_six');
let HCriterionSeven = require('../models/hoq/criterion_seven');
let HCriterionEight = require('../models/hoq/criterion_eight');


let DCriterionTwo = require('../models/department/criterion_two');
let DCriterionThree = require('../models/department/criterion_three');
let DCriterionFour = require('../models/department/criterion_four');
let DCriterionFive = require('../models/department/criterion_five');

router.get('/:page', function(req, res ) {
	console.log('FORMS PAGE');
	console.log('COOKIES RECEIVED')
	console.log(req.cookies);
	console.log('BODY RECEIVED')
	console.log(req.body);

	if(!req.cookies.user) {
		res.redirect('/home');
	}

	switch(req.params.page) {
		case 'details':
			HPartAOne.findOne({}, function(err, document) {
				if(err)
					console.log(err);
				else {
					if(document==null) {
						console.log("Creating new object");
						document = new HPartAOne({});
					}
					console.log('DOCUMENT DISPLAYING')
					console.log(document);
					res.render('forms/details', {
						form: document,
					});
				}
			});
			break;
		case 'iqac':
			HPartATwo.findOne({}, function(err, document) {
				if(err)
					console.log(err);
				else {
					if(document==null) {
						console.log("Creating new object");
						document = new HPartATwo({});
					}
					console.log('DOCUMENT DISPLAYING')
					console.log(document);
					res.render('forms/iqac', {
						form: document
					});
				}
			});
			break;
		case 'criterion1':
			HCriterionOne.findOne({}, function(err, document) {
				if(err)
					console.log(err);
				else {
					if(document==null) {
						console.log("Creating new object");
						document = new HCriterionOne({});
					}
					console.log('DOCUMENT DISPLAYING')
					console.log(document);
					res.render('forms/criterion1', {
						form: document
					});
				}
			});
			break;
		case 'criterion2':
			if(req.cookies.department == 'HOQ') {
				HCriterionTwo.findOne({department: 'HOQ'}, function(err, document) {
					if(err)
						console.log(err);
					else {
						if(document==null) {
							console.log("Creating new object");
							document = new HCriterionTwo({});
							for(let i = 0; i < 10; i++) {
								document.pass_percent_dist[i] = {
									programme_title: '',
									students_appeared: 0,
									division: {
										distinction_percent: 0,
										percent_one: 0,
										percent_two: 0,
										percent_three: 0
									}
								};
							}
						}
						console.log('DOCUMENT DISPLAYING')
						console.log(document);
						res.render('forms/criterion2', {
							form: document
						});
					}
				});
			} else {
				DCriterionTwo.findOne({department: req.cookies.department}, function(err, document) {
					if(err)
						console.log(err);
					else {
						if(document==null) {
							console.log("Creating new object");
							document = new DCriterionTwo({});
						}
						console.log('DOCUMENT DISPLAYING')
						console.log(document);
						res.render('forms/criterion2', {
							form: document
						});
					}
				});
			}
			break;	
		case 'criterion3':
			if(req.cookies.department == 'HOQ') {
				HCriterionThree.findOne({department: 'HOQ'}, function(err, document) {
					if(err)
						console.log(err);
					else {
						if(document==null) {
							console.log("Creating new object");
							document = new HCriterionThree({});
						}
						console.log('DOCUMENT DISPLAYING')
						console.log(document);
						res.render('forms/criterion3', {
							form: document
						});
					}
				});
			} else {
				DCriterionThree.findOne({department: req.cookies.department}, function(err, document) {
					if(err)
						console.log(err);
					else {
						if(document==null) {
							console.log("Creating new object");
							document = new DCriterionThree({});
						}
						console.log('DOCUMENT DISPLAYING')
						console.log(document);
						res.render('forms/criterion3', {
							form: document
						});
					}
				});
			}
			break;
		case 'criterion4':
			if(req.cookies.department == 'HOQ') {
				HCriterionFour.findOne({department: 'HOQ'}, function(err, document) {
					if(err)
						console.log(err);
					else {
						if(document==null) {
							console.log("Creating new object");
							document = new HCriterionFour({});
						}
						console.log('DOCUMENT DISPLAYING')
						console.log(document);
						res.render('forms/criterion4', {
							form: document
						});
					}
				});
			} else {
				DCriterionFour.findOne({department: req.cookies.department}, function(err, document) {
					if(err)
						console.log(err);
					else {
						if(document==null) {
							console.log("Creating new object");
							document = new DCriterionFour({});
						}
						console.log('DOCUMENT DISPLAYING')
						console.log(document);
						res.render('forms/criterion4', {
							form: document
						});
					}
				});
			}
			break;
		case 'criterion5':
			if(req.cookies.department == 'HOQ') {
				HCriterionFive.findOne({department: 'HOQ'}, function(err, document) {
					if(err)
						console.log(err);
					else {
						if(document==null) {
							console.log("Creating new object");
							document = new HCriterionFive({});
						}
						console.log('DOCUMENT DISPLAYING')
						console.log(document);
						res.render('forms/criterion5', {
							form: document
						});
					}
				});
			} else {
				DCriterionFive.findOne({department: req.cookies.department}, function(err, document) {
					if(err)
						console.log(err);
					else {
						if(document==null) {
							console.log("Creating new object");
							document = new DCriterionFive({});
						}
						console.log('DOCUMENT DISPLAYING')
						console.log(document);
						res.render('forms/criterion5', {
							form: document
						});
					}
				});
			}
			break;
		case 'criterion6':
			HCriterionSix.findOne(null, function(err, document) {
				if(err)
					console.log(err);
				else {
					if(document==null) {
						console.log("Creating new object");
						document = new HCriterionSix({});
					}
					console.log('DOCUMENT DISPLAYING')
					console.log(document);
					res.render('forms/criterion6', {
						form: document
					});
				}
			});
			break;
		case 'criterion7':
			HCriterionSeven.findOne(null, function(err, document) {
				if(err)
					console.log(err);
				else {
					if(document==null) {
						console.log("Creating new object");
						document = new HCriterionSeven({});
					}
					console.log('DOCUMENT DISPLAYING')
					console.log(document);
					res.render('forms/criterion7', {
						form: document
					});
				}
			});
			break;
		case 'criterion8':
			HCriterionEight.findOne(null, function(err, document) {
				if(err)
					console.log(err);
				else {
					if(document==null) {
						console.log("Creating new object");
						document = new HCriterionEight({});
					}
					console.log('DOCUMENT DISPLAYING')
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
	console.log('COOKIES RECEIVED')
	console.log(req.cookies);
	console.log('BODY RECEIVED')
	console.log(req.body);
	console.log('PAGE RECEIVED')
	console.log(req.params.page);

	var form = req.body;
	var id = req.params.page;
	var query = { department: req.cookies.department };

	switch(req.params.page) {
		case 'details':
			form.department = 'HOQ';
			HPartAOne.deleteOne({}, function(err, document) {
				if(err) {
					console.log(err)
					res.send(err)
				} else {
					HPartAOne.updateOne(null, form, {upsert: true, setDefaultsOnInsert: true}, function(err, document) {
						if(err){
							console.log(err)
							res.send(err)
						} else {
							res.redirect('/form/details')
						}
					})
				}
			})
			break;
		case 'iqac':
			form.department = 'HOQ';
			HPartATwo.update(null, form, {upsert: true}, function(err) {
				if(err) {
					console.log(err);
				} else {
					res.redirect('/form/iqac');
				}
			});
			break;
		case 'criterion1':
			form.department = 'HOQ'
			HCriterionOne.deleteOne({}, function(err, doc) {
				if(err) {
					console.log(err)
					res.send(err)
				} else {
					HCriterionOne.update(null, form, {upsert: true}, function(err) {
						if(err) {
							console.log(err);
						} else {
							res.redirect('/form/criterion1');
						}
					});
				}
			})
			break;
		case 'criterion2':
			form.department = req.cookies.department
			if (req.cookies.department == 'HOQ') {
				let departments = ['ATM', 'BTC', 'CHE', 'CSE', 'CVE', 'ECE', 'EEE', 'IT', 'MAR', 'MEC'];
				let c1rs = [req.body.c1r1, req.body.c1r2, req.body.c1r3, req.body.c1r4, req.body.c1r5, req.body.c1r6, req.body.c1r7, req.body.c1r8, req.body.c1r9, req.body.c1r10];
				let c2rs = [req.body.c2r1, req.body.c2r2, req.body.c2r3, req.body.c2r4, req.body.c2r5, req.body.c2r6, req.body.c2r7, req.body.c2r8, req.body.c2r9, req.body.c2r10];
				let c3rs = [req.body.c3r1, req.body.c3r2, req.body.c3r3, req.body.c3r4, req.body.c3r5, req.body.c3r6, req.body.c3r7, req.body.c3r8, req.body.c3r9, req.body.c3r10];
				let c4rs = [req.body.c4r1, req.body.c4r2, req.body.c4r3, req.body.c4r4, req.body.c4r5, req.body.c4r6, req.body.c4r7, req.body.c4r8, req.body.c4r9, req.body.c4r10];
				let c5rs = [req.body.c5r1, req.body.c5r2, req.body.c5r3, req.body.c5r4, req.body.c5r5, req.body.c5r6, req.body.c5r7, req.body.c5r8, req.body.c5r9, req.body.c5r10];
			
				form.pass_percent_dist = []
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
				console.log('C2 FORM:')
				console.log(form);

				HCriterionTwo.update(query, form, {upsert: true}, function(err) {
					if(err) {
						console.log(err);
					} else {
						res.redirect('/form/criterion2');
					}
				});
			} else {
				DCriterionTwo.update(query, form, {upsert: true}, function(err) {
					if(err) {
						console.log(err);
					} else {
						res.redirect('/form/criterion2');
					}
				});
			}
			break;
		case 'criterion3':
			form.department = req.cookies.department
			if (req.cookies.department == 'HOQ') {
				HCriterionThree.update(query, form, {upsert: true}, function(err) {
					if(err) {
						console.log(err);
					} else {
						res.redirect('/form/criterion3');
					}
				});
			} else {
				DCriterionThree.update(query, form, {upsert: true}, function(err) {
					if(err) {
						console.log(err);
					} else {
						res.redirect('/form/criterion3');
					}
				});
			}
			break;
		case 'criterion4':
			form.department = req.cookies.department
			if (req.cookies.department == 'HOQ') {
				HCriterionFour.update(query, form, {upsert: true}, function(err) {
					if(err) {
						console.log(err);
					} else {
						res.redirect('/form/criterion4');
					}
				});
			} else {
				DCriterionFour.update(query, form, {upsert: true}, function(err) {
					if(err) {
						console.log(err);
					} else {
						res.redirect('/form/criterion4');
					}
				});
			}	
			break;
		case 'criterion5':
			form.department = req.cookies.department
			if (req.cookies.department == 'HOQ') {
				HCriterionFive.update(query, form, {upsert: true}, function(err) {
					if(err) {
						console.log(err);
					} else {
						res.redirect('/form/criterion5');
					}
				});
			} else {
				DCriterionFive.update(query, form, {upsert: true}, function(err) {
					if(err) {
						console.log(err);
					} else {
						res.redirect('/form/criterion5');
					}
				});
			}
			break;
		case 'criterion6':
			form.department = 'HOQ';
			CriterionSix.update(null, form, {upsert: true}, function(err) {
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

module.exports = router;