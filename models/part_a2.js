// Part A(2) 
let mongoose = require('mongoose');

//Part A(2) Schema
var PartA2Schema : mongoose.schema({
  iqac_composition_activities : {
    no_of_teachers : Number,
    no_of_tech_admin_staff : Number,
    no_of_students : Number,
    no_of_management_reps : Number,
    no_of_alumni : Number,
    no_of_other_stakeholders_community_reps : Number,
    no_of_employers_industrialists : Number,
    no_of_other_external_experts : Number,
    total_no_of_members : Number,
    no_of_iqac_meetings_held : Number,

    no_of_meetings_with_various_stakeholders : {
      No : Number,
      faculty : Number,
      non_teaching_staff_students : Number,
      alumni : Number,
      others : Number
    },

    ugc_funding_for_iqac : {     //Option Based Answering
      yes1 : Number,
      no1 : Number,
      yes1_amount : String   //Mentioned only if option yes is chosen
    },

    seminars_conferences : {
      events_organized_by_iqac : {
        total_no : Number,
        international : Number,
        national : Number,
        state : Number,
        institution_level : Number
      },
      themes : String
    },

    significant_contributions_activities_by_iqac : String,

    iqac_plan_of_action : {
      plan_of_action : String,
      achievements : String
    },

    placement_of_aqar_in_statutory_body : {
      yes2 : Number,
      no2 : Number,
      type_of_statutory_body : {
        management : Number,
        syndicate : Number,
        any_other_body : Number
      },
      details_of_action_taken : String
    }

  }
  retainKeyOrder : true
});

let PartA2 = module.exports = mongoose.model('PartA2',PartA2Schema,'part_a2');
