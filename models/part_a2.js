// Part A
let mongoose = require('mongoose');

//Part A Schema
var PartATwoSchema = mongoose.Schema({
	department: { type: String, default: null },
	no_of_teachers : {   type: Number, default: null },
	no_of_tech_admin_staff : { type: Number, default: null },
	no_of_students : { type: Number, default: null },
	no_of_management_reps : { type: Number, default: null },
	no_of_alumni : { type: Number, default: null },
	no_of_other_stakeholders_community_reps : { type: Number, default: null },
	no_of_employers_industrialists : { type: Number, default: null },
	no_of_other_external_experts : { type: Number, default: null },
	total_no_of_members : { type: Number, default: null },
	no_of_iqac_meetings_held : { type: Number, default: null },

	no_of_meetings_with_various_stakeholders : {
	No : { type: Number, default: null },
	faculty : { type: Number, default: null },
	non_teaching_staff_students : { type: Number, default: null },
	alumni : { type: Number, default: null },
	others : { type: Number, default: null }
	},

	ugc_funding_for_iqac : {     //Option Based Answering
	yes : { type: Number, default: null },
	no : { type: Number, default: null },
	yes_amount : { type: String, default: null }   //Mentioned only if option yes is chosen
	},

	seminars_conferences : {
	events_organized_by_iqac : {
		total_no : { type: Number, default: null },
		international : { type: Number, default: null },
		national : { type: Number, default: null },
		state : { type: Number, default: null },
		institution_level : { type: Number, default: null }
	},
	themes : { type: String, default: null }
	},

	significant_contributions_activities_by_iqac : { type: String, default: null },

	iqac_plan_of_action : {
		plan_of_action : { type: String, default: null },
		achievements : { type: String, default: null }
	},
	placement_of_aqar_in_statutory_body : {
		yes : { type: Number, default: null },
		no : { type: Number, default: null },
		type_of_statutory_body : {
			management : { type: Number, default: null },
			syndicate : { type: Number, default: null },
			any_other_body : { type: Number, default: null }
		},
		details_of_action_taken : { type: String, default: null }
	}
}, { retainKeyOrder: true });

let PartATwo = module.exports = mongoose.model('PartATwo', PartATwoSchema, 'part_a2');
