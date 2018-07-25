// Criterion Five
let mongoose = require('mongoose');

// Criterion Five Schema
var criterionFiveSchema = mongoose.Schema({
	department: { type: String, default: '' },
	iqac_contribution_student_support_services : { type: String, default: '' },
	efforts_tracking_progression : { type: String, default: '' },
	total_no_of_students : {
		ug_students : { type: Number, default: 0 },
		pg_students : { type: Number, default: 0 },
		phd_students : { type: Number, default: 0 },
		other_students : { type: Number, default: 0 }
	},
	no_of_students_outside_the_state : { type: Number, default: 0 },
	no_of_international_students : { type: Number, default: 0 },
	men : {
		students_number : { type: Number, default: 0 },
		percentage : { type: Number, default: 0 }
	},
	women : {
		students_number : { type: Number, default: 0 },
		percentage : { type: Number, default: 0 }
	},
	last_year : {
		general : { type: Number, default: 0 },
		sc : { type: Number, default: 0 },
		st : { type: Number, default: 0 },
		obc : { type: Number, default: 0 },
		physically_challenged : { type: Number, default: 0 },
		students_total : { type: Number, default: 0 }
	},
	this_year : {
		general : { type: Number, default: 0 },
		sc : { type: Number, default: 0 },
		st : { type: Number, default: 0 },
		obc : { type: Number, default: 0 },
		physically_challenged : { type: Number, default: 0 },
		students_total : { type: Number, default: 0 }
	},
	demand_ratio : { type: Number, default: 0 },
	dropout_percentage : { type: Number, default: 0 },
	student_support_mechanism : { type: String, default: '' },
	no_of_student_beneficiaries : { type: Number, default: 0 },
	no_of_students_qualified_for_examinations : {
		net : { type: Number, default: 0 },
		set_slet : { type: Number, default: 0 },
		gate : { type: Number, default: 0 },
		cat : { type: Number, default: 0 },
		ias_ips : { type: Number, default: 0 },
		state_psc : { type: Number, default: 0 },
		upsc : { type: Number, default: 0 },
		others : { type: Number, default: 0 }
	},
	student_counselling_career_guidance : { type: String, default: '' },
	no_of_students_benefitted : { type: Number, default: 0 },
	campus_placement_details : {
		on_campus : {
			organizations_visited : { type: Number, default: 0 },
			students_participated : { type: Number, default: 0 },
			placed_students : { type: Number, default: 0 }
		},
		off_campus : {
			placed_students : { type: Number, default: 0 }
		}
	},
	gender_sensitization_programmes : { type: String, default: '' },
	students_activities : {
		participation_sports_games_other_events : {
			state_uni_level : { type: Number, default: 0 },
			international_level : { type: Number, default: 0 },
			national_level : { type: Number, default: 0 }
		},
		participation_cultural_events : {
			state_uni_level : { type: Number, default: 0 },
			international_level : { type: Number, default: 0 },
			national_level : { type: Number, default: 0 }
		},
		no_of_medals_awards : {
			sports_games : {
				state_uni_level : { type: Number, default: 0 },
				international_level : { type: Number, default: 0 },
				national_level : { type: Number, default: 0 }
			},
			culturals : {
				state_uni_level : { type: Number, default: 0 },
				international_level : { type: Number, default: 0 },
				national_level : { type: Number, default: 0 }
			}
		}
	},
	scholarship_financial_support : {
		institute_finance_support : {
			student_no : { type: Number, default: 0 },
			amount_in_lakhs : { type: Number, default: 0 }
		},
		govt_financial_support : {
			student_no : { type: Number, default: 0 },
			amount_in_lakhs : { type: Number, default: 0 }
		},
		other_financial_support : {
			student_no : { type: Number, default: 0 },
			amount_in_lakhs : { type: Number, default: 0 }
		},
		international_national_recognition : {
			student_no : { type: Number, default: 0 },
			amount_in_lakhs : { type: Number, default: 0 }
		}
	},
	student_organized_initiatives : {
		fairs : {
			state_uni_level : { type: Number, default: 0 },
			international_level : { type: Number, default: 0 },
			national_level : { type: Number, default: 0 }
		},
		exhibition : {
			state_uni_level : { type: Number, default: 0 },
			international_level : { type: Number, default: 0 },
			national_level : { type: Number, default: 0 }
		}
	},
	social_initiatives_undertaken_by_students : { type: Number, default: 0 },
	major_grievances_of_students : { type: String, default: '' }
}, { retainKeyOrder: true });

module.exports = mongoose.model('HCriterionFive',criterionFiveSchema,'criterion_five');
