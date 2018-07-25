// Part A
let mongoose = require('mongoose');

//Part A Schema
var PartATwoSchema = mongoose.Schema({
	department: { type: String, default: '' },
	no_of_teachers : {   type: Number, default: 0 },
	no_of_tech_admin_staff : { type: Number, default: 0 },
	no_of_students : { type: Number, default: 0 },
	no_of_management_reps : { type: Number, default: 0 },
	no_of_alumni : { type: Number, default: 0 },
	no_of_other_stakeholders_community_reps : { type: Number, default: 0 },
	no_of_employers_industrialists : { type: Number, default: 0 },
	no_of_other_external_experts : { type: Number, default: 0 },
	total_no_of_members : { type: Number, default: 0 },
	no_of_iqac_meetings_held : { type: Number, default: 0 },

	no_of_meetings_with_various_stakeholders : {
		num_faculty : { type: Number, default: 0 },
		non_teaching_staff_students : { type: Number, default: 0 },
		alumni : { type: Number, default: 0 },
		others : { type: Number, default: 0 }
	},

	ugc_funding_for_iqac : { type: String, default: '' },
	ugc_funding_for_iqac_amount : { type: String, default: '' },

	seminars_conferences : {
		events_organized_by_iqac : {
			total_no : { type: Number, default: 0 },
			international : { type: Number, default: 0 },
			national : { type: Number, default: 0 },
			state : { type: Number, default: 0 },
			institution_level : { type: Number, default: 0 }
		},
		themes : { type: String, default: '' }
	},

	significant_contributions_activities_by_iqac : { type: String, default: '' },

	iqac_plan_of_action : {
		plan : { type: String, default: '' },
		achievements : { type: String, default: '' }
	},
	placement_of_aqar_in_statutory_body : {
		option : { type: String, default: '' },
		type_of_statutory_body : { type: String, default: '' },
		details_of_action_taken : { type: String, default: '' }
	}
}, { retainKeyOrder: true });

let PartATwo = module.exports = mongoose.model('PartATwo', PartATwoSchema, 'part_a2');
