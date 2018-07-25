// Criterion Three
let mongoose = require('mongoose');

// Criterion Three schema
var criterionThreeSchema = mongoose.Schema({
  department: { type: String, default: '' },
    iqac_initiatives_promoting_research : { type: String, default: '' },    // 3.1
    major_project_details : {               // 3.2
      completed : {
        number : { type: Number, default: 0 },
        outlay_in_lakhs : { type: Number, default: 0 }
      },
      ongoing : {
        number : { type: Number, default: 0 },
        outlay_in_lakhs : { type: Number, default: 0 }
      },
      sanctioned : {
        number : { type: Number, default: 0 },
        outlay_in_lakhs : { type: Number, default: 0 }
      },
      submitted : {
        number : { type: Number, default: 0 },
        outlay_in_lakhs : { type: Number, default: 0 }
      }
    },
    minor_project_details : {                // 3.3
      completed : {
        number : { type: Number, default: 0 },
        outlay_in_lakhs : { type: Number, default: 0 }
      },
      ongoing : {
        number : { type: Number, default: 0 },
        outlay_in_lakhs : { type: Number, default: 0 }
      },
      sanctioned : {
        number : { type: Number, default: 0 },
        outlay_in_lakhs : { type: Number, default: 0 }
      },
      submitted : {
        number : { type: Number, default: 0 },
        outlay_in_lakhs : { type: Number, default: 0 }
      }
    },

    research_publication_details : {           // 3.4
      international : {
        peer_review_journals : { type: Number, default: 0 },
        non_peer_review_journals : { type: Number, default: 0 },
        e_journals : { type: Number, default: 0 },
        conference_proceedings : { type: Number, default: 0 }
      },
      national : {
        peer_review_journals : { type: Number, default: 0 },
        non_peer_review_journals : { type: Number, default: 0 },
        e_journals : { type: Number, default: 0 },
        conference_proceedings : { type: Number, default: 0 }
      },
      others : {
        peer_review_journals : { type: Number, default: 0 },
        non_peer_review_journals : { type: Number, default: 0 },
        e_journals : { type: Number, default: 0 },
        conference_proceedings : { type: Number, default: 0 }
      }
    },

    impact_factor_publication_details : {         // 3.5
      range : { type: String, default: '' },
      average : { type: Number, default: 0 },
      index : { type: Number, default: 0 },
      nos_of_scopus : { type: Number, default: 0 }
    },

    research_funds_sanctioned : {                // 3.6
      major_project : {
        duration_year : { type: String, default: '' },
        funding_agency_name : { type: String, default: '' },
        total_grant_sanctioned : { type: Number, default: 0 },
        received : { type: Number, default: 0 }
      },
      minor_project : {
        duration_year : { type: String, default: '' },
        funding_agency_name : { type: String, default: '' },
        total_grant_sanctioned : { type: Number, default: 0 },
        received : { type: Number, default: 0 }
      },
      interdisciplinary_project : {
        duration_year : { type: String, default: '' },
        funding_agency_name : { type: String, default: '' },
        total_grant_sanctioned : { type: Number, default: 0 },
        received : { type: Number, default: 0 }
      },
      industry_sponsored : {
        duration_year : { type: String, default: '' },
        funding_agency_name : { type: String, default: '' },
        total_grant_sanctioned : { type: Number, default: 0 },
        received : { type: Number, default: 0 }
      },
      uni_sponsored_project : {
        duration_year : { type: String, default: '' },
        funding_agency_name : { type: String, default: '' },
        total_grant_sanctioned : { type: Number, default: 0 },
        received : { type: Number, default: 0 }
      },
      other_student_research_project : {
        duration_year : { type: String, default: '' },
        funding_agency_name : { type: String, default: '' },
        total_grant_sanctioned : { type: Number, default: 0 },
        received : { type: Number, default: 0 }
      },
      any_other_specify : {
        duration_year : { type: String, default: '' },
        funding_agency_name : { type: String, default: '' },
        total_grant_sanctioned : { type: Number, default: 0 },
        received : { type: Number, default: 0 }
      },
      total : {
        duration_year : { type: String, default: '' },
        funding_agency_name : { type: String, default: '' },
        total_grant_sanctioned : { type: Number, default: 0 },
        received : { type: Number, default: 0 }
      }
    },

    no_of_books_published : {                 // 3.7
      with_isbn_no : { type: Number, default: 0 },
      without_isbn_no : { type: Number, default: 0 },
      chapters_in_edited_books : { type: Number, default: 0 }
    },

    no_of_uni_depts_receiving_funds : {            // 3.8
      ugc_sap : { type: Number, default: 0 },
      cas : { type: Number, default: 0 },
      dst_fist : { type: Number, default: 0 },
      dpe : { type: Number, default: 0 },
      dbt_scheme_funds : { type: Number, default: 0 }
    },

    for_colleges : {                             // 3.9
      autonomy : { type: Number, default: 0 },
      cpe : { type: Number, default: 0 },
      dbt_star_scheme : { type: Number, default: 0 },
      inspire : { type: Number, default: 0 },
      ce : { type: Number, default: 0 },
      any_other_specify : { type: Number, default: 0 }
    },

    revenue_generated_through_consultancy : { type: String, default: '' },    // 3.10

    conferences_organized_by_institution : {          // 3.11
      number : {
        international : { type: Number, default: 0 },
        national : { type: Number, default: 0 },
        state : { type: Number, default: 0 },
        university : { type: Number, default: 0 },
        college : { type: Number, default: 0 }
      },
      sponsoring_agencies : {
        international : { type: String, default: '' },
        national : { type: String, default: '' },
        state : { type: String, default: '' },
        university : { type: String, default: '' },
        college : { type: String, default: '' }
      }
    },

    no_of_faculty_served_chairperson_resource_expert : { type: Number, default: 0 },   // 3.12

    no_of_collaborations : {        // 3.13
      international : { type: Number, default: 0 },
      national : { type: Number, default: 0 },
      any_other : { type: Number, default: 0 }
    },

    no_of_linkages_created_during_the_year : { type: Number, default: 0 },  // 3.14

    current_year_research_budget_in_lakhs : {      // 3.15
      from_funding_agency : { type: Number, default: 0 },
      from_uni_college : { type: Number, default: 0 },
      total : { type: Number, default: 0 }
    },

    no_of_patents : {           // 3.16
      national : {
        applied : { type: Number, default: 0 },
        granted : { type: Number, default: 0 }
      },
      international : {
        applied : { type: Number, default: 0 },
        granted : { type: Number, default: 0 }
      },
      commercialized : {
        applied : { type: Number, default: 0 },
        granted : { type: Number, default: 0 }
      }
    },

    no_of_awards_recognition_faculty_research_fellows : {   // 3.17
      total : { type: Number, default: 0 },
      international : { type: Number, default: 0 },
      national : { type: Number, default: 0 },
      state : { type: Number, default: 0 },
      university : { type: Number, default: 0 },
      district : { type: Number, default: 0 },
      college : { type: Number, default: 0 }
    },

    faculty_count : {                               // 3.18
      phd_guides : { type: Number, default: 0 },
      students_registered_under_them : { type: Number, default: 0 }
    },

    no_of_phd_awarded_institution_faculty : { type: Number, default: 0 },    // 3.19

    no_of_research_scholars_receiving_fellowships : {        // 3.20
      jrf : { type: Number, default: 0 },
      srf : { type: Number, default: 0 },
      project_fellows : { type: Number, default: 0 },
      any_other : { type: Number, default: 0 }
    },

    nss_student_participants : {           // 3.21
      international_level : { type: Number, default: 0 },
      national_level : { type: Number, default: 0 },
      state_level : { type: Number, default: 0 },
      university_level : { type: Number, default: 0 }
    },

    ncc_student_participation : {            // 3.22
      international_level : { type: Number, default: 0 },
      national_level : { type: Number, default: 0 },
      state_level : { type: Number, default: 0 },
      university_level : { type: Number, default: 0 }
    },

    no_of_awards_in_nss : {        // 3.23
      international_level : { type: Number, default: 0 },
      national_level : { type: Number, default: 0 },
      state_level : { type: Number, default: 0 },
      university_level : { type: Number, default: 0 }
    },

    no_of_awards_in_ncc : {                  // 3.24
      international_level : { type: Number, default: 0 },
      national_level : { type: Number, default: 0 },
      state_level : { type: Number, default: 0 },
      university_level : { type: Number, default: 0 }
    },

    no_of_extension_activities_organized : {           // 3.25
      university_forum : { type: Number, default: 0 },
      college_forum : { type: Number, default: 0 },
      ncc : { type: Number, default: 0 },
      nss : { type: Number, default: 0 },
      any_other : { type: Number, default: 0 }
    },
                                           
    major_activities : { type: String, default: '' }                             // 3.26
  }, { retainKeyOrder: true });

let CriterionThree = module.exports = mongoose.model('CriterionThree',criterionThreeSchema,'criterion_three');
