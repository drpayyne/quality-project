// Criterion Three
let mongoose = require('mongoose');

// Criterion Three schema
var criterionThreeSchema = mongoose.schema({
  research_consultancy_extension = {
    iqac_initiatives_promoting_research : String,    // 3.1

    major_project_details : {               // 3.2
      completed : {
        number : Number,
        outlay_in_lakhs : Number
      },
      ongoing : {
        number : Number,
        outlay_in_lakhs : Number
      },
      sanctioned : {
        number : Number,
        outlay_in_lakhs : Number
      },
      submitted : {
        number : Number,
        outlay_in_lakhs : Number
      }
    },

    minor_project_details : {                // 3.3
      completed1 : {
        number1 : Number,
        outlay_in_lakhs1 : Number
      },
      ongoing1 : {
        number1 : Number,
        outlay_in_lakhs1 : Number
      },
      sanctioned1 : {
        number1 : Number,
        outlay_in_lakhs1 : Number
      },
      submitted1 : {
        number1 : Number,
        outlay_in_lakhs1 : Number
      }
    },

    research_publication_details : {           // 3.4
      international : {
        peer_review_journals : Number,
        non_peer_review_journals : Number,
        e_journals : Number,
        conference_proceedings : Number
      },
      national : {
        peer_review_journals : Number,
        non_peer_review_journals : Number,
        e_journals : Number,
        conference_proceedings : Number
      },
      others : {
        peer_review_journals : Number,
        non_peer_review_journals : Number,
        e_journals : Number,
        conference_proceedings : Number
      }
    },

    impact_factor_publication_details : {         // 3.5
      range : String,
      average : Number,
      index : Number,
      nos_of_scopus : Number
    },

    research_funds_sanctioned : {                // 3.6
      major_project : {
        duration_year : String,
        funding_agency_name : String,
        total_grant_sanctioned : Number,
        received : Number
      },
      minor_project : {
        duration_year : String,
        funding_agency_name : String,
        total_grant_sanctioned : Number,
        received : Number
      },
      interdisciplinary_project : {
        duration_year : String,
        funding_agency_name : String,
        total_grant_sanctioned : Number,
        received : Number
      },
      industry_sponsored : {
        duration_year : String,
        funding_agency_name : String,
        total_grant_sanctioned : Number,
        received : Number
      },
      uni_sponsored_project : {
        duration_year : String,
        funding_agency_name : String,
        total_grant_sanctioned : Number,
        received : Number
      },
      other_student_research_project : {
        duration_year : String,
        funding_agency_name : String,
        total_grant_sanctioned : Number,
        received : Number
      },
      any_other_specify : {
        duration_year : String,
        funding_agency_name : String,
        total_grant_sanctioned : Number,
        received : Number
      },
      total : {
        duration_year : String,
        funding_agency_name : String,
        total_grant_sanctioned : Number,
        received : Number
      }
    },

    no_of_books_published : {                 // 3.7
      with_isbn_no : Number,
      without_isbn_no : Number,
      chapters_in_edited_books : Number
    },

    no_of_uni_depts_receiving_funds : {            // 3.8
      ugc_sap : Number,
      cas : Number,
      dst_fist : Number,
      dpe : Number,
      dbt_scheme_funds : Number
    },

    for_colleges : {                             // 3.9
      autonomy : Number,
      cpe : Number,
      dbt_star_scheme : Number,
      inspire : Number,
      ce : Number,
      any_other_specify2 : Number
    },

    revenue_generated_through_consultancy : String,    // 3.10

    conferences_organized_by_institution : {          // 3.11
      number : {
        international1 : Number,
        national1 : Number,
        state1 : Number,
        university1 : Number,
        college1 : Number
      },
      sponsoring_agencies : {
        international2: String,
        national2 : String,
        state2: String,
        university2 : String,
        college2 : String
      }
    },

    no_of_faculty_served_chairperson_resource_expert : Number,   // 3.12

    no_of_collaborations : {        // 3.13
      international3 : Number,
      national3 : Number,
      any_other : Number
    },

    no_of_linkages_created_during_the_year : Number,  // 3.14

    current_year_research_budget_in_lakhs : {      // 3.15
      from_funding_agency : Number,
      from_uni_college : Number,
      total : Number
    },

    no_of_patents : {           // 3.16
      national4 : {
        applied : Number,
        granted : Number
      },
      international4 : {
        applied : Number,
        granted : Number
      },
      commercialized : {
        applied : Number,
        granted : Number
      }
    },

    no_of_awards_recognition_faculty_research_fellows : {   // 3.17
      total : Number,
      international5 : Number,
      national5 : Number,
      state5 : Number,
      university5 : Number,
      district5 : Number,
      college5 : Number
    },

    faculty_count : {                               // 3.18
      phd_guides : Number,
      students_registered_under_them : Number
    },

    no_of_phd_awarded_institution_faculty : Number,    // 3.19

    no_of_research_scholars_receiving_fellowships : {        // 3.20
      jrf : Number,
      srf : Number,
      project_fellows : Number,
      any_other : Number
    },

    nss_student_participants : {           // 3.21
      international_level : Number,
      national_level : Number,
      state_level : Number,
      university_level : Number
    },

    ncc_student_participation : {            // 3.22
      international_level1 : Number,
      national_level1 : Number,
      state_level1 : Number,
      university_level1 : Number
    },

    no_of_awards_in_nss : {        // 3.23
      international_level2 : Number,
      national_level2 : Number,
      state_level2 : Number,
      university_level2 : Number
    },

    no_of_awards_in_ncc : {                  // 3.24
      international_level3 : Number,
      national_level3 : Number,
      state_level3 : Number,
      university_level3 : Number
    },

    no_of_extension_activities_organized : {           // 3.25
      university_forum : Number,
      college_forum : Number,
      ncc : Number,
      nss : Number,
      any_other1 : Number
    }
  }
  retainKeyOrder : true
});

let CriterionThree = module.exports = mongoose.model('CriterionThree',criterionThreeSchema,'criterion_three');
