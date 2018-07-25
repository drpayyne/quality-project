let mongoose = require('mongoose');

//Criterion 2 schema
var criterionTwoSchema = mongoose.Schema({
	department: { type: String, default: '' },
	permanent_faculty: {
		asst_prof: { type: Number, default: 0 },
		asso_prof: { type: Number, default: 0 },
		prof: { type: Number, default: 0 },
		others: { type: Number, default: 0 }
	},
	permanent_faculty_phd: { type: Number, default: 0 },
	faculty_pos_recruited_vacant: {
		asst_prof: {
			recruited: { type: Number, default: 0 },
			vacant: { type: Number, default: 0 }
		},
		asso_prof: {
			recruited: { type: Number, default: 0 },
			vacant: { type: Number, default: 0 }
		},
		prof: {
			recruited: { type: Number, default: 0 },
			vacant: { type: Number, default: 0 }
		},
		others: {
			recruited: { type: Number, default: 0 },
			vacant: { type: Number, default: 0 }
		}/* ,
		total: {
			recruited: { type: Number, default: 0 },
			vacant: { type: Number, default: 0 }
		} */
	},
	guest_visit_temp_faculty: {
		guest: { type: Number, default: 0 },
		visiting: { type: Number, default: 0 },
		temporary: { type: Number, default: 0 }
	},
	faculty_participation: {
		international: {
			seminar_workshop: { type: Number, default: 0 },
			paper_presented: { type: Number, default: 0 },
			resource_persons: { type: Number, default: 0 }
		},
		national: {
			seminar_workshop: { type: Number, default: 0 },
			paper_presented: { type: Number, default: 0 },
			resource_persons: { type: Number, default: 0 }
		},
		state: {
			seminar_workshop: { type: Number, default: 0 },
			paper_presented: { type: Number, default: 0 },
			resource_persons: { type: Number, default: 0 }
		}
	},
	curriculum_incharge_faculty_members: {
		curriculum_revision: { type: Number, default: 0 },
		member_board: { type: Number, default: 0 },
		faculty_dev_workshop: { type: Number, default: 0 }
	},
	avg_student_attendance: { type: Number, default: 0 },
	pass_percent_dist: {
		department: { type: String, default: '' },
		programme_title: { type: String, default: '' },
		students_appeared: { type: Number, default: 0 },
		division: {
			distinction_percent: { type: Number, default: 0 },
			percent_one: { type: Number, default: 0 },
			percent_two: { type: Number, default: 0 },
			percent_three: { type: Number, default: 0 }
		}
	},
	faculty_dev_initiative: {
		refresher_courses: { type: Number, default: 0 },
		ugc_fac_improvement_prog: { type: Number, default: 0 },
		hrd_programme:{ type: Number, default: 0 },
		orientation_programme: { type: Number, default: 0 },
		fac_exchange_programme: { type: Number, default: 0 },
		staff_training_univ: { type: Number, default: 0 },
		staff_training_other: { type: Number, default: 0 },
		summer_winter_workshops: { type: Number, default: 0 },
		others: { type: Number, default: 0 }
	},
	admin_tech_staff: {
		permanent_employees: {
			admin: { type: Number, default: 0 },
			technical: { type: Number, default: 0 }
		},
		vacant_positions: {
			admin: { type: Number, default: 0 },
			technical: { type: Number, default: 0 }
		},
		permanent_positions_filled: {
			admin: { type: Number, default: 0 },
			technical: { type: Number, default: 0 }
		},
		temporary_positions_filled: {
			admin: { type: Number, default: 0 },
			technical: { type: Number, default: 0 }
		}
	}  
}, { retainKeyOrder: true });

module.exports = mongoose.model('DCriterionTwo', criterionTwoSchema, 'criterion_two');
