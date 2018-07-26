// Criterion Three
let mongoose = require('mongoose');

// Criterion Three schema
var criterionThreeSchema = mongoose.Schema({
  department: { type: String, default: null },
    iqac_initiatives_promoting_research : { type: String, default: null },    // 3.1

    major_project_details : {               // 3.2
      completed : {
        number : { type: Number, default: null },
        outlay_in_lakhs : { type: Number, default: null }
      },
      ongoing : {
        number : { type: Number, default: null },
        outlay_in_lakhs : { type: Number, default: null }
      },
      sanctioned : {
        number : { type: Number, default: null },
        outlay_in_lakhs : { type: Number, default: null }
      },
      submitted : {
        number : { type: Number, default: null },
        outlay_in_lakhs : { type: Number, default: null }
      }
    },

    minor_project_details : {                // 3.3
      completed : {
        number : { type: Number, default: null },
        outlay_in_lakhs : { type: Number, default: null }
      },
      ongoing : {
        number : { type: Number, default: null },
        outlay_in_lakhs : { type: Number, default: null }
      },
      sanctioned : {
        number : { type: Number, default: null },
        outlay_in_lakhs : { type: Number, default: null }
      },
      submitted : {
        number : { type: Number, default: null },
        outlay_in_lakhs : { type: Number, default: null }
      }
    },

    research_publication_details : {           // 3.4
      international : {
        peer_review_journals : { type: Number, default: null },
        non_peer_review_journals : { type: Number, default: null },
        e_journals : { type: Number, default: null },
        conference_proceedings : { type: Number, default: null }
      },
      national : {
        peer_review_journals : { type: Number, default: null },
        non_peer_review_journals : { type: Number, default: null },
        e_journals : { type: Number, default: null },
        conference_proceedings : { type: Number, default: null }
      },
      others : {
        peer_review_journals : { type: Number, default: null },
        non_peer_review_journals : { type: Number, default: null },
        e_journals : { type: Number, default: null },
        conference_proceedings : { type: Number, default: null }
      }
    },

    impact_factor_publication_details : {         // 3.5
      range : { type: String, default: null },
      average : { type: Number, default: null },
      index : { type: Number, default: null },
      nos_of_scopus : { type: Number, default: null }
    },

    research_funds_sanctioned : {                // 3.6
      major_project : {
        duration_year : { type: String, default: null },
        funding_agency_name : { type: String, default: null },
        total_grant_sanctioned : { type: Number, default: null },
        received : { type: Number, default: null }
      },
      minor_project : {
        duration_year : { type: String, default: null },
        funding_agency_name : { type: String, default: null },
        total_grant_sanctioned : { type: Number, default: null },
        received : { type: Number, default: null }
      },
      interdisciplinary_project : {
        duration_year : { type: String, default: null },
        funding_agency_name : { type: String, default: null },
        total_grant_sanctioned : { type: Number, default: null },
        received : { type: Number, default: null }
      },
      industry_sponsored : {
        duration_year : { type: String, default: null },
        funding_agency_name : { type: String, default: null },
        total_grant_sanctioned : { type: Number, default: null },
        received : { type: Number, default: null }
      },
      uni_sponsored_project : {
        duration_year : { type: String, default: null },
        funding_agency_name : { type: String, default: null },
        total_grant_sanctioned : { type: Number, default: null },
        received : { type: Number, default: null }
      },
      other_student_research_project : {
        duration_year : { type: String, default: null },
        funding_agency_name : { type: String, default: null },
        total_grant_sanctioned : { type: Number, default: null },
        received : { type: Number, default: null }
      },
      any_other_specify : {
        duration_year : { type: String, default: null },
        funding_agency_name : { type: String, default: null },
        total_grant_sanctioned : { type: Number, default: null },
        received : { type: Number, default: null }
      },
      total : {
        duration_year : { type: String, default: null },
        funding_agency_name : { type: String, default: null },
        total_grant_sanctioned : { type: Number, default: null },
        received : { type: Number, default: null }
      }
    },

    no_of_books_published : {                 // 3.7
      with_isbn_no : { type: Number, default: null },
      without_isbn_no : { type: Number, default: null },
      chapters_in_edited_books : { type: Number, default: null }
    },

    no_of_uni_depts_receiving_funds : {            // 3.8
      ugc_sap : { type: Number, default: null },
      cas : { type: Number, default: null },
      dst_fist : { type: Number, default: null },
      dpe : { type: Number, default: null },
      dbt_scheme_funds : { type: Number, default: null }
    },

    for_colleges : {                             // 3.9
      autonomy : { type: Number, default: null },
      cpe : { type: Number, default: null },
      dbt_star_scheme : { type: Number, default: null },
      inspire : { type: Number, default: null },
      ce : { type: Number, default: null },
      any_other_specify : { type: Number, default: null }
    },

    revenue_generated_through_consultancy : { type: String, default: null },    // 3.10

    conferences_organized_by_institution : {          // 3.11
      number : {
        international : { type: Number, default: null },
        national : { type: Number, default: null },
        state : { type: Number, default: null },
        university : { type: Number, default: null },
        college : { type: Number, default: null }
      },
      sponsoring_agencies : {
        international : { type: String, default: null },
        national : { type: String, default: null },
        state : { type: String, default: null },
        university : { type: String, default: null },
        college : { type: String, default: null }
      }
    },

    no_of_faculty_served_chairperson_resource_expert : { type: Number, default: null },   // 3.12

    no_of_collaborations : {        // 3.13
      international : { type: Number, default: null },
      national : { type: Number, default: null },
      any_other : { type: Number, default: null }
    },

    no_of_linkages_created_during_the_year : { type: Number, default: null },  // 3.14

    current_year_research_budget_in_lakhs : {      // 3.15
      from_funding_agency : { type: Number, default: null },
      from_uni_college : { type: Number, default: null },
      total : { type: Number, default: null }
    },

    no_of_patents : {           // 3.16
      national : {
        applied : { type: Number, default: null },
        granted : { type: Number, default: null }
      },
      international : {
        applied : { type: Number, default: null },
        granted : { type: Number, default: null }
      },
      commercialized : {
        applied : { type: Number, default: null },
        granted : { type: Number, default: null }
      }
    },

    no_of_awards_recognition_faculty_research_fellows : {   // 3.17
      total : { type: Number, default: null },
      international : { type: Number, default: null },
      national : { type: Number, default: null },
      state : { type: Number, default: null },
      university : { type: Number, default: null },
      district : { type: Number, default: null },
      college : { type: Number, default: null }
    },

    faculty_count : {                               // 3.18
      phd_guides : { type: Number, default: null },
      students_registered_under_them : { type: Number, default: null }
    },

    no_of_phd_awarded_institution_faculty : { type: Number, default: null },    // 3.19

    no_of_research_scholars_receiving_fellowships : {        // 3.20
      jrf : { type: Number, default: null },
      srf : { type: Number, default: null },
      project_fellows : { type: Number, default: null },
      any_other : { type: Number, default: null }
    },

    nss_student_participants : {           // 3.21
      international_level : { type: Number, default: null },
      national_level : { type: Number, default: null },
      state_level : { type: Number, default: null },
      university_level : { type: Number, default: null }
    },

    ncc_student_participation : {            // 3.22
      international_level : { type: Number, default: null },
      national_level : { type: Number, default: null },
      state_level : { type: Number, default: null },
      university_level : { type: Number, default: null }
    },

    no_of_awards_in_nss : {        // 3.23
      international_level : { type: Number, default: null },
      national_level : { type: Number, default: null },
      state_level : { type: Number, default: null },
      university_level : { type: Number, default: null }
    },

    no_of_awards_in_ncc : {                  // 3.24
      international_level : { type: Number, default: null },
      national_level : { type: Number, default: null },
      state_level : { type: Number, default: null },
      university_level : { type: Number, default: null }
    },

    no_of_extension_activities_organized : {           // 3.25
      university_forum : { type: Number, default: null },
      college_forum : { type: Number, default: null },
      ncc : { type: Number, default: null },
      nss : { type: Number, default: null },
      any_other : { type: Number, default: null }
    },
                                           
    major_activities : { type: String, default: null }                             // 3.26
  }, { retainKeyOrder: true });

let CriterionThree = module.exports = mongoose.model('CriterionThree',criterionThreeSchema,'criterion_three');
