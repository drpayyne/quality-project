//Init app
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Import DB models
let CriterionTwo = require('./models/criterion_two');

//Mongoose init
mongoose.connect('mongodb://gopinath:password@127.0.0.1/form?authSource=admin', {
	useMongoClient: true
});
let db = mongoose.connection;

//Check Mongoose connection
db.once('open', function(){
	console.log("Connected to MongoDB");
});

db.on('error', function(err) {
	console.log(err);
});

//Bodyparser middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Set public folder
app.use(express.static(path.join(__dirname, 'public')));

//Form route GET
app.get('/form', function(req, res) {

	let dept = 'CSE';

	CriterionTwo.findOne({department: dept}, function(err, document) {
		if(err) {
			console.log(err);
		} else {
			console.log(document);
			res.render('form', {
				form: document
			});
		}
	})
});

//Form route POST
app.post('/form/submit/:dept', function(req, res) {
	console.log("Getting data...");

	let form = {
		department: '',
		permanent_faculty: {
			asst_prof: 0,
			asso_prof: 0,
			prof: 0,
			others: 0,
			total: 0
		},
		permanent_faculty_phd: 0,
		faculty_pos_recruited_vacant: {
			asst_prof: {
				recruited: 0,
				vacant: 0
			},
			asso_prof: {
				recruited: 0,
				vacant: 0
			},
			prof: {
				recruited: 0,
				vacant: 0
			},
			others: {
				recruited: 0,
				vacant: 0
			},
			total: {
				recruited: 0,
				vacant: 0
			}
		},
		guest_visit_temp_faculty: {
			guest: 0,
			visiting: 0,
			temporary: 0
		},
		faculty_participation: {
			international: {
				seminar_workshop: 0,
				paper_presented: 0,
				resource_persons: 0
			},
			national: {
				seminar_workshop: 0,
				paper_presented: 0,
				resource_persons: 0
			},
			state: {
				seminar_workshop: 0,
				paper_presented: 0,
				resource_persons: 0
			}
		},
		innovative_process_adopted: 0,
		actual_teaching_days: 0,
		exam_reforms_initiated: 0,
		curriculum_incharge_faculty_members: {
			curriculum_revision: 0,
			member_board: 0,
			faculty_dev_workshop: 0
		},
		avg_student_attendance: 0,
		pass_percent_dist: [{
			programme_title: '',
			students_appeared: 0,
			division: {
				distinction_percent: 0,
				percent_one: 0,
				percent_two: 0,
				percent_three: 0,
				percent_pass: 0
			}
		}],
		iqac_contribution: '',
		faculty_dev_initiative: {
			refresher_courses: 0,
			ugc_fac_improvement_prog: 0,
			hrd_programme:0,
			orientation_programme: 0,
			fac_exchange_programme: 0,
			staff_training_univ: 0,
			staff_training_other: 0,
			summer_winter_workshops: 0,
			others: 0
		},
		admin_tech_staff: {
			permanent_employees: {
				admin: 0,
				technical: 0
			},
			vacant_positions: {
				admin: 0,
				technical: 0
			},
			permanent_positions_filled: {
				admin: 0,
				technical: 0
			},
			temporary_positions_filled: {
				admin: 0,
				technical: 0
			}
		}
	};

	form.department = 'CSE';
	
	form.permanent_faculty.asst_prof = req.body.r1c2;
	form.permanent_faculty.asso_prof = req.body.r1c3;
	form.permanent_faculty.prof = req.body.r1c4;
	form.permanent_faculty.others = req.body.r1c5;
	form.permanent_faculty.total = req.body.r1c6;

	form.permanent_faculty_phd = req.body.r2c1;

	form.faculty_pos_recruited_vacant.asst_prof.recruited = req.body.r3c1;
	form.faculty_pos_recruited_vacant.asst_prof.vacant = req.body.r3c2;
	form.faculty_pos_recruited_vacant.asso_prof.recruited = req.body.r3c3;
	form.faculty_pos_recruited_vacant.asso_prof.vacant = req.body.r3c4;
	form.faculty_pos_recruited_vacant.prof.recruited = req.body.r3c5;
	form.faculty_pos_recruited_vacant.prof.vacant = req.body.r3c6;
	form.faculty_pos_recruited_vacant.others.recruited = req.body.r3c7;
	form.faculty_pos_recruited_vacant.others.vacant = req.body.r3c8;
	form.faculty_pos_recruited_vacant.total.recruited = req.body.r3c9;
	form.faculty_pos_recruited_vacant.total.vacant = req.body.r3c10;

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

	form.innovative_process_adopted = req.body.r6c1;

	form.actual_teaching_days = req.body.r7c1;

	form.exam_reforms_initiated = req.body.r8c1;

	form.curriculum_incharge_faculty_members.curriculum_revision = req.body.r9c2;
	form.curriculum_incharge_faculty_members.member_board = req.body.r9c3;
	form.curriculum_incharge_faculty_members.faculty_dev_workshop = req.body.r9c4;

	form.avg_student_attendance = req.body.r10c1;

	let div = {
		distinction_percent: req.body.r11c3s1,
		percent_one: req.body.r11c4s1,
		percent_two: req.body.r11c5s1,
		percent_three: req.body.r11c6s1,
		percent_pass: req.body.r11c7s1
	}

	form.pass_percent_dist[0].programme_title = req.body.r11c1s1;
	form.pass_percent_dist[0].students_appeared = req.body.r11c2s1;
	form.pass_percent_dist[0].division = div;

	form.iqac_contribution = req.body.r12c1;

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

	console.log(form);

	query = {department: req.params.dept};

	 CriterionTwo.update(query, form, function(err) {
		if(err) {
			console.log(err);
		} else {
			res.redirect('/form');
		}
	});
});

//Start server
app.listen(3000, function() {
	console.log('Server started on port 3000...');
});
