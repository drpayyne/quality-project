// Criterion Five
let mongoose = require('mongoose');

// Criterion Five Schema
var criterionFiveSchema = mongoose.Schema({
    iqac_contribution_student_support_services : String,

    efforts_tracking_progression : String,

    total_no_of_students : {
      ug_students : Number,
      pg_students : Number,
      phd_students : Number,
      other_students : Number
    },
    no_of_students_outside_the_state : Number,
    no_of_international_students : Number,
    men : {
      students_number : Number,
      percentage : Number
    },
    women : {
      students_number : Number,
      percentage : Number
    },

    last_year : {
      general : Number,
      sc : Number,
      st : Number,
      obc : Number,
      physically_challenged : Number,
      students_total : Number
    },
    this_year : {
      general : Number,
      sc : Number,
      st : Number,
      obc : Number,
      physically_challenged : Number,
      students_total : Number
    },

    demand_ratio : Number,
    dropout_percentage : Number,

    student_support_mechanism : String,
    no_of_student_beneficiaries : Number,

    no_of_students_qualified_for_examinations : {
      net : Number,
      set_slet : Number,
      gate : Number,
      cat : Number,
      ias_ips : Number,
      state_psc : Number,
      upsc : Number,
      others : Number
    },

    student_counselling_career_guidance : String,
    no_of_students_benefitted : Number,

    campus_placement_details : {
      on_campus : {
        organizations_visited : Number,
        students_participated : Number,
        placed_students : Number
      },
      off_campus : {
        placed_students : Number
      }
    },

    gender_sensitization_programmes : String,

    students_activities : {
      participation_sports_games_other_events : {
        state_uni_level : Number,
        international_level : Number,
        national_level : Number
      },
      participation_cultural_events : {
        state_uni_level : Number,
        international_level : Number,
        national_level : Number
      },
      no_of_medals_awards : {
        sports_games : {
          state_uni_level : Number,
          international_level : Number,
          national_level : Number
        },
        culturals : {
          state_uni_level : Number,
          international_level : Number,
          national_level : Number
        }
      }
    },

    scholarship_financial_support : {
      institute_finance_support : {
        student_no : Number,
        amount_in_lakhs : Number
      },
      govt_financial_support : {
        student_no : Number,
        amount_in_lakhs : Number
      },
      other_financial_support : {
        student_no : Number,
        amount_in_lakhs : Number
      },
      international_national_recognition : {
        student_no : Number,
        amount_in_lakhs : Number
      }
    },

    student_organized_initiatives : {
      fairs : {
        state_uni_level : Number,
        international_level : Number,
        national_level : Number
      },
      exhibition : {
        state_uni_level : Number,
        international_level : Number,
        national_level : Number
      }
    },

    social_initiatives_undertaken-by_students : Number,

    major_grievances_of_students : String
  retainKeyOrder : true
});

let CriterionFive = module.exports = mongoose.model('CriterionFive',criterionFiveSchema,'criterion_five');
