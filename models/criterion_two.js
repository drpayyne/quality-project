let mongoose = require('mongoose');

let deptPassPercentSchema = ({
	programme_title: String,
	students_appeared: Number,
	division: {
		distinction_percent: Number,
		percent_one: Number,
		percent_two: Number,
		percent_three: Number/* ,
		percent_pass: Number */
	}
});

//Criterion 2 schema
var criterionTwoSchema = mongoose.Schema({
	department: String,
	permanent_faculty: {
		asst_prof: Number,
		asso_prof: Number,
		prof: Number,
		others: Number/* ,
		total: Number */
	},
	permanent_faculty_phd: Number,
	faculty_pos_recruited_vacant: {
		asst_prof: {
			recruited: Number,
			vacant: Number
		},
		asso_prof: {
			recruited: Number,
			vacant: Number
		},
		prof: {
			recruited: Number,
			vacant: Number
		},
		others: {
			recruited: Number,
			vacant: Number
		}/* ,
		total: {
			recruited: Number,
			vacant: Number
		} */
	},
	guest_visit_temp_faculty: {
		guest: Number,
		visiting: Number,
		temporary: Number
	},
	faculty_participation: {
		international: {
			seminar_workshop: Number,
			paper_presented: Number,
			resource_persons: Number
		},
		national: {
			seminar_workshop: Number,
			paper_presented: Number,
			resource_persons: Number
		},
		state: {
			seminar_workshop: Number,
			paper_presented: Number,
			resource_persons: Number
		}
	},
	innovative_process_adopted: String,
	actual_teaching_days: Number,
	exam_reforms_initiated: Number,
	curriculum_incharge_faculty_members: {
		curriculum_revision: Number,
		member_board: Number,
		faculty_dev_workshop: Number
	},
	avg_student_attendance: Number,
	pass_percent_dist: [deptPassPercentSchema],
	iqac_contribution: String,
	faculty_dev_initiative: {
		refresher_courses: Number,
		ugc_fac_improvement_prog: Number,
		hrd_programme:Number,
		orientation_programme: Number,
		fac_exchange_programme: Number,
		staff_training_univ: Number,
		staff_training_other: Number,
		summer_winter_workshops: Number,
		others: Number
	},
	admin_tech_staff: {
		permanent_employees: {
			admin: Number,
			technical: Number
		},
		vacant_positions: {
			admin: Number,
			technical: Number
		},
		permanent_positions_filled: {
			admin: Number,
			technical: Number
		},
		temporary_positions_filled: {
			admin: Number,
			technical: Number
		}
	}  
}, { retainKeyOrder: true });

let CriterionTwo = module.exports = mongoose.model('CriterionTwo', criterionTwoSchema, 'criterion_two');
