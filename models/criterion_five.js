// Criterion Five
let mongoose = require('mongoose');

// Criterion Five Schema
var criterionFiveSchema = mongoose.Schema({
  department: { type: String, default: null },
    iqac_contribution_student_support_services : { type: String, default: null },

    efforts_tracking_progression : { type: String, default: null },

    total_no_of_students : {
      ug_students : { type: Number, default: null },
      pg_students : { type: Number, default: null },
      phd_students : { type: Number, default: null },
      other_students : { type: Number, default: null }
    },
    no_of_students_outside_the_state : { type: Number, default: null },
    no_of_international_students : { type: Number, default: null },
    men : {
      students_number : { type: Number, default: null },
      percentage : { type: Number, default: null }
    },
    women : {
      students_number : { type: Number, default: null },
      percentage : { type: Number, default: null }
    },

    last_year : {
      general : { type: Number, default: null },
      sc : { type: Number, default: null },
      st : { type: Number, default: null },
      obc : { type: Number, default: null },
      physically_challenged : { type: Number, default: null },
      students_total : { type: Number, default: null }
    },
    this_year : {
      general : { type: Number, default: null },
      sc : { type: Number, default: null },
      st : { type: Number, default: null },
      obc : { type: Number, default: null },
      physically_challenged : { type: Number, default: null },
      students_total : { type: Number, default: null }
    },

    demand_ratio : { type: Number, default: null },
    dropout_percentage : { type: Number, default: null },

    student_support_mechanism : { type: String, default: null },
    no_of_student_beneficiaries : { type: Number, default: null },

    no_of_students_qualified_for_examinations : {
      net : { type: Number, default: null },
      set_slet : { type: Number, default: null },
      gate : { type: Number, default: null },
      cat : { type: Number, default: null },
      ias_ips : { type: Number, default: null },
      state_psc : { type: Number, default: null },
      upsc : { type: Number, default: null },
      others : { type: Number, default: null }
    },

    student_counselling_career_guidance : { type: String, default: null },
    no_of_students_benefitted : { type: Number, default: null },

    campus_placement_details : {
      on_campus : {
        organizations_visited : { type: Number, default: null },
        students_participated : { type: Number, default: null },
        placed_students : { type: Number, default: null }
      },
      off_campus : {
        placed_students : { type: Number, default: null }
      }
    },

    gender_sensitization_programmes : { type: String, default: null },

    students_activities : {
      participation_sports_games_other_events : {
        state_uni_level : { type: Number, default: null },
        international_level : { type: Number, default: null },
        national_level : { type: Number, default: null }
      },
      participation_cultural_events : {
        state_uni_level : { type: Number, default: null },
        international_level : { type: Number, default: null },
        national_level : { type: Number, default: null }
      },
      no_of_medals_awards : {
        sports_games : {
          state_uni_level : { type: Number, default: null },
          international_level : { type: Number, default: null },
          national_level : { type: Number, default: null }
        },
        culturals : {
          state_uni_level : { type: Number, default: null },
          international_level : { type: Number, default: null },
          national_level : { type: Number, default: null }
        }
      }
    },

    scholarship_financial_support : {
      institute_finance_support : {
        student_no : { type: Number, default: null },
        amount_in_lakhs : { type: Number, default: null }
      },
      govt_financial_support : {
        student_no : { type: Number, default: null },
        amount_in_lakhs : { type: Number, default: null }
      },
      other_financial_support : {
        student_no : { type: Number, default: null },
        amount_in_lakhs : { type: Number, default: null }
      },
      international_national_recognition : {
        student_no : { type: Number, default: null },
        amount_in_lakhs : { type: Number, default: null }
      }
    },

    student_organized_initiatives : {
      fairs : {
        state_uni_level : { type: Number, default: null },
        international_level : { type: Number, default: null },
        national_level : { type: Number, default: null }
      },
      exhibition : {
        state_uni_level : { type: Number, default: null },
        international_level : { type: Number, default: null },
        national_level : { type: Number, default: null }
      }
    },
    social_initiatives_undertaken_by_students : { type: Number, default: null },
    major_grievances_of_students : { type: String, default: null }
}, { retainKeyOrder: true });

let CriterionFive = module.exports = mongoose.model('CriterionFive',criterionFiveSchema,'criterion_five');
