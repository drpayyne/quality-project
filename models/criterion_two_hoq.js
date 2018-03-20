let mongoose = require('mongoose');

let deptPassPercentSchema = ({
	programme_title: { type: String, default: null },
	students_appeared: { type: Number, default: null },
	division: {
		distinction_percent: { type: Number, default: null },
		percent_one: { type: Number, default: null },
		percent_two: { type: Number, default: null },
		percent_three: { type: Number, default: null }
	}
});

//Criterion 2 schema
var criterionTwoHoqSchema = mongoose.Schema({
	department: { type: String, default: null },
	permanent_faculty: {
		asst_prof: { type: Number, default: null },
		asso_prof: { type: Number, default: null },
		prof: { type: Number, default: null },
		others: { type: Number, default: null }/* ,
		total: { type: Number, default: null } */
	},
	permanent_faculty_phd: { type: Number, default: null },
	faculty_pos_recruited_vacant: {
		asst_prof: {
			recruited: { type: Number, default: null },
			vacant: { type: Number, default: null }
		},
		asso_prof: {
			recruited: { type: Number, default: null },
			vacant: { type: Number, default: null }
		},
		prof: {
			recruited: { type: Number, default: null },
			vacant: { type: Number, default: null }
		},
		others: {
			recruited: { type: Number, default: null },
			vacant: { type: Number, default: null }
		}/* ,
		total: {
			recruited: { type: Number, default: null },
			vacant: { type: Number, default: null }
		} */
	},
	guest_visit_temp_faculty: {
		guest: { type: Number, default: null },
		visiting: { type: Number, default: null },
		temporary: { type: Number, default: null }
	},
	faculty_participation: {
		international: {
			seminar_workshop: { type: Number, default: null },
			paper_presented: { type: Number, default: null },
			resource_persons: { type: Number, default: null }
		},
		national: {
			seminar_workshop: { type: Number, default: null },
			paper_presented: { type: Number, default: null },
			resource_persons: { type: Number, default: null }
		},
		state: {
			seminar_workshop: { type: Number, default: null },
			paper_presented: { type: Number, default: null },
			resource_persons: { type: Number, default: null }
		}
	},
	//TO BE FILLED BY HOQ
	innovative_process_adopted: { type: String, default: null },
	actual_teaching_days: { type: Number, default: null },
	exam_reforms_initiated: { type: Number, default: null },
	curriculum_incharge_faculty_members: {
		curriculum_revision: { type: Number, default: null },
		member_board: { type: Number, default: null },
		faculty_dev_workshop: { type: Number, default: null }
	},
	avg_student_attendance: { type: Number, default: null },
	pass_percent_dist: [{
		programme_title: { type: String, default: null },
		students_appeared: { type: Number, default: null },
		division: {
			distinction_percent: { type: Number, default: null },
			percent_one: { type: Number, default: null },
			percent_two: { type: Number, default: null },
			percent_three: { type: Number, default: null }
		}
	}],
	iqac_contribution: { type: String, default: null },
	faculty_dev_initiative: {
		refresher_courses: { type: Number, default: null },
		ugc_fac_improvement_prog: { type: Number, default: null },
		hrd_programme:{ type: Number, default: null },
		orientation_programme: { type: Number, default: null },
		fac_exchange_programme: { type: Number, default: null },
		staff_training_univ: { type: Number, default: null },
		staff_training_other: { type: Number, default: null },
		summer_winter_workshops: { type: Number, default: null },
		others: { type: Number, default: null }
	},
	admin_tech_staff: {
		permanent_employees: {
			admin: { type: Number, default: null },
			technical: { type: Number, default: null }
		},
		vacant_positions: {
			admin: { type: Number, default: null },
			technical: { type: Number, default: null }
		},
		permanent_positions_filled: {
			admin: { type: Number, default: null },
			technical: { type: Number, default: null }
		},
		temporary_positions_filled: {
			admin: { type: Number, default: null },
			technical: { type: Number, default: null }
		}
	}  
}, { retainKeyOrder: true });

let CriterionTwoHoq = module.exports = mongoose.model('CriterionTwoHoq', criterionTwoHoqSchema, 'criterion_two_hoq');
