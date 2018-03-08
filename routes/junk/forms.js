const express = require('express');
const router = express.Router();

//Import DB models
let CriterionTwo = require('../models/criterion_two');
let CriterionTwoHform = require('../models/criterion_two_hoq');

let PDF = require('../gen/pdf');

let form = {}, def_pass = {
	programme_title: null,
	students_appeared: null,
	division: {
		distinction_percent: null,
		percent_one: null,
		percent_two: null,
		percent_three: null/* ,
		percent_pass: null */
	}
};

//Form route GET
router.get('/', function(req, res) {

	form = {
		department: null,
		permanent_faculty: {
			asst_prof: null,
			asso_prof: null,
			prof: null,
			others: null
		},
		permanent_faculty_phd: null,
		faculty_pos_recruited_vacant: {
			asst_prof: {
				recruited: null,
				vacant: null
			},
			asso_prof: {
				recruited: null,
				vacant: null
			},
			prof: {
				recruited: null,
				vacant: null
			},
			others: {
				recruited: null,
				vacant: null
			}
		},
		guest_visit_temp_faculty: {
			guest: null,
			visiting: null,
			temporary: null
		},
		faculty_participation: {
			international: {
				seminar_workshop: null,
				paper_presented: null,
				resource_persons: null
			},
			national: {
				seminar_workshop: null,
				paper_presented: null,
				resource_persons: null
			},
			state: {
				seminar_workshop: null,
				paper_presented: null,
				resource_persons: null
			}
		},
		actual_teaching_days: null,
		exam_reforms_initiated: null,
		curriculum_incharge_faculty_members: {
			curriculum_revision: null,
			member_board: null,
			faculty_dev_workshop: null
		},
		avg_student_attendance: null,
		pass_percent_dist: [/* {
			programme_title: '',
			students_appeared: null,
			division: {
				distinction_percent: null,
				percent_one: null,
				percent_two: null,
				percent_three: null,
				percent_pass: null
			}
		}, {
			programme_title: '',
			students_appeared: null,
			division: {
				distinction_percent: null,
				percent_one: null,
				percent_two: null,
				percent_three: null,
				percent_pass: null
			}
		}, {
			programme_title: '',
			students_appeared: null,
			division: {
				distinction_percent: null,
				percent_one: null,
				percent_two: null,
				percent_three: null,
				percent_pass: null
			}
		} */],
		faculty_dev_initiative: {
			refresher_courses: null,
			ugc_fac_improvement_prog: null,
			hrd_programme:null,
			orientation_programme: null,
			fac_exchange_programme: null,
			staff_training_univ: null,
			staff_training_other: null,
			summer_winter_workshops: null,
			others: null
		},
		admin_tech_staff: {
			permanent_employees: {
				admin: null,
				technical: null
			},
			vacant_positions: {
				admin: null,
				technical: null
			},
			permanent_positions_filled: {
				admin: null,
				technical: null
			},
			temporary_positions_filled: {
				admin: null,
				technical: null
			}
		}
	};

	console.log('Cookies got...');
	console.log(req.cookies);
	if(!req.cookies.user) {
		res.redirect('/login');
	}        
	else if(req.cookies.dept==='HOQ') {
		res.redirect('/form/admin');
	} else {
		CriterionTwo.findOne({department: req.cookies.dept}, function(err, document) {
			if(err) {
				console.log(err);
			} else {
				console.log(document);
				if(document==null) {
					document = form;
					document.pass_percent_dist[0] = {
						programme_title: null,
						students_appeared: null,
						division: {
							distinction_percent: null,
							percent_one: null,
							percent_two: null,
							percent_three: null/* ,
							percent_pass: null */
						}
					};
				   console.log('New doc created.');
				}
				console.log(document);
				res.render('form', {
					form: document,
					length: document.pass_percent_dist.length
				});
			}
		});
	}
});
	
//Form route POST
router.post('/submit/:dept', function(req, res) {
	console.log("Getting data...");
	console.log('Cookies got...');
	console.log(req.cookies);
	console.log(form);
	console.log('Array length = ' + req.body.row_val);

	form.department = req.cookies.dept;
	
	form.permanent_faculty.asst_prof = req.body.r1c2;
	form.permanent_faculty.asso_prof = req.body.r1c3;
	form.permanent_faculty.prof = req.body.r1c4;
	form.permanent_faculty.others = req.body.r1c5;
	/* form.permanent_faculty.total = req.body.r1c6; */

	form.permanent_faculty_phd = req.body.r2c1;

	form.faculty_pos_recruited_vacant.asst_prof.recruited = req.body.r3c1;
	form.faculty_pos_recruited_vacant.asst_prof.vacant = req.body.r3c2;
	form.faculty_pos_recruited_vacant.asso_prof.recruited = req.body.r3c3;
	form.faculty_pos_recruited_vacant.asso_prof.vacant = req.body.r3c4;
	form.faculty_pos_recruited_vacant.prof.recruited = req.body.r3c5;
	form.faculty_pos_recruited_vacant.prof.vacant = req.body.r3c6;
	form.faculty_pos_recruited_vacant.others.recruited = req.body.r3c7;
	form.faculty_pos_recruited_vacant.others.vacant = req.body.r3c8;
	/* form.faculty_pos_recruited_vacant.total.recruited = req.body.r3c9;
	form.faculty_pos_recruited_vacant.total.vacant = req.body.r3c10; */

	form.guest_visit_temp_faculty.guest = req.body.r4c1;
	form.guest_visit_temp_faculty.visiting = req.body.r4c2;
	form.guest_visit_temp_faculty.temporary = req.body.r4c3;

	form.faculty_participation.international.seminar_workshop = req.body.r5c1;
	form.faculty_participation.international.paper_presented = req.body.r5c2;
	form.faculty_participation.international.resource_persons = req.body.r5c3;
	form.faculty_participation.national.seminar_workshop = req.body.r5c4;
	form.faculty_participation.national.paper_presented = req.body.r5c5;
	form.faculty_participation.national.resource_persons = req.body.r5c6;
	form.faculty_participation.state.seminar_workshop = req.body.r5c7;
	form.faculty_participation.state.paper_presented = req.body.r5c8;
	form.faculty_participation.state.resource_persons = req.body.r5c9;

	form.actual_teaching_days = req.body.r7c1;

	form.exam_reforms_initiated = req.body.r8c1;

	form.curriculum_incharge_faculty_members.curriculum_revision = req.body.r9c2;
	form.curriculum_incharge_faculty_members.member_board = req.body.r9c3;
	form.curriculum_incharge_faculty_members.faculty_dev_workshop = req.body.r9c4;

	form.avg_student_attendance = req.body.r10c1;

	/* let div = {
		distinction_percent: req.body.r11c3s1,
		percent_one: req.body.r11c4s1,
		percent_two: req.body.r11c5s1,
		percent_three: req.body.r11c6s1,
		percent_pass: req.body.r11c7s1
	}

	form.pass_percent_dist[0].programme_title = req.body.r11c1s1;
	form.pass_percent_dist[0].students_appeared = req.body.r11c2s1;
	form.pass_percent_dist[0].division = div; */

	let divs = [];
	let r11c1s = [req.body.r11c1s1, req.body.r11c1s2, req.body.r11c1s3, req.body.r11c1s4, req.body.r11c1s5];
	let r11c2s = [req.body.r11c2s1, req.body.r11c2s2, req.body.r11c2s3, req.body.r11c2s4, req.body.r11c2s5];
	let r11c3s = [req.body.r11c3s1, req.body.r11c3s2, req.body.r11c3s3, req.body.r11c3s4, req.body.r11c3s5];
	let r11c4s = [req.body.r11c4s1, req.body.r11c4s2, req.body.r11c4s3, req.body.r11c4s4, req.body.r11c4s5];
	let r11c5s = [req.body.r11c5s1, req.body.r11c5s2, req.body.r11c5s3, req.body.r11c5s4, req.body.r11c5s5];
	let r11c6s = [req.body.r11c6s1, req.body.r11c6s2, req.body.r11c6s3, req.body.r11c6s4, req.body.r11c6s5];
	/* let r11c7s = [req.body.r11c7s1, req.body.r11c7s2, req.body.r11c7s3, req.body.r11c7s4, req.body.r11c7s5]; */

	for(var i=0; i<1; i++) {
		let doc = {};
		divs[i] = {
			distinction_percent: r11c3s[i],
			percent_one: r11c4s[i],
			percent_two: r11c5s[i],
			percent_three: r11c6s[i]/* ,
			percent_pass: r11c7s[i] */
		}
		doc.programme_title = r11c1s[i];
		doc.students_appeared = r11c2s[i];
		doc.division = divs[i];

		form.pass_percent_dist[i] = doc;
	}

	form.faculty_dev_initiative.refresher_courses = req.body.r13c1;
	form.faculty_dev_initiative.ugc_fac_improvement_prog = req.body.r13c2;
	form.faculty_dev_initiative.hrd_programme = req.body.r13c3;
	form.faculty_dev_initiative.orientation_programme = req.body.r13c4;
	form.faculty_dev_initiative.fac_exchange_programme = req.body.r13c5;
	form.faculty_dev_initiative.staff_training_univ = req.body.r13c6;
	form.faculty_dev_initiative.staff_training_other = req.body.r13c7;
	form.faculty_dev_initiative.summer_winter_workshops = req.body.r13c8;
	form.faculty_dev_initiative.others = req.body.r13c9;

	form.admin_tech_staff.permanent_employees.admin = req.body.r14c1;
	form.admin_tech_staff.permanent_employees.technical = req.body.r14c2;
	form.admin_tech_staff.vacant_positions.admin = req.body.r14c3;
	form.admin_tech_staff.vacant_positions.technical = req.body.r14c4;
	form.admin_tech_staff.permanent_positions_filled.admin = req.body.r14c5;
	form.admin_tech_staff.permanent_positions_filled.technical = req.body.r14c6;
	form.admin_tech_staff.temporary_positions_filled.admin = req.body.r14c7;
	form.admin_tech_staff.temporary_positions_filled.technical = req.body.r14c8;

	console.log('Writing to DB...');
	console.log(form);

	query = {department: req.params.dept};

	CriterionTwo.update(query, form, {upsert: true}, function(err) {
		if(err) {
			console.log(err);
		} else {
			res.redirect('/form');
		}
	});
});

router.get('/admin', function(req, res) {
	console.log('Cookies got...');
	console.log(req.cookies);
	if(!req.cookies.user) {
		res.redirect('/login');
	} else if(req.cookies.user.username!='HOQ') {
		res.redirect('/login');
	} else {
		res.render('admin');
	}
});

router.post('/admin', function(req, res) {
	res.cookie('dept', req.body.username, {expires: 0});
	console.log(req.body.action);
	if(req.body.action=='view') {
		res.redirect('/form');
	} else if(req.body.action=='hoq') {
		res.redirect('/form/admin/hform')
	} else if(req.body.action=='gen') {
		PDF.print();
		res.redirect('/');
	} 
});

router.get('/admin/hform', function(req, res) {
	CriterionTwoHform.findOne({}, function(err, document) {
		if(err) {
			console.log(err);
		} else {
			if(document == null) {
				document = {
					innovative_process_adopted: '',
					iqac_contribution: ''
				};
			}
			console.log(document);
			res.render('hform', {
				form: document
			});
		}
	});
});

router.post('/admin/hform', function(req, res) {
	var doc = {
		innovative_process_adopted: '',
		iqac_contribution: ''
	};

	doc.innovative_process_adopted = req.body.r6c1;
	doc.iqac_contribution = req.body.r12c1;

	CriterionTwoHform.update({}, doc, {upsert: true}, function(err) {
		if(err) {
			console.log(err);
		} else {
			res.redirect('/form/admin/hform');
		}
	});

});

module.exports = router;