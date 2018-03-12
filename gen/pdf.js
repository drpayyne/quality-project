/* Do not touch */
var fonts = {
    Roboto: {
        normal: 'fonts/times.ttf',
        bold: 'fonts/timesbd.ttf',
        italics: 'fonts/timesi.ttf',
        bolditalics: 'fonts/timesbi.ttf'
    }
};

/* Do not touch */
var PdfPrinter = require('pdfmake');
var printer = new PdfPrinter(fonts);
var fs = require('fs');

var jsonAdd = require('json-addition');
var merge = require('deepmerge');

let PartAOne = require('../models/part_a1');
let PartATwo = require('../models/part_a2');
let CriterionOne = require('../models/criterion_one');
let CriterionTwo = require('../models/criterion_two');
let CriterionThree = require('../models/criterion_three');
let CriterionFour = require('../models/criterion_four');
let CriterionFive = require('../models/criterion_five');
let CriterionSix = require('../models/criterion_six');
let CriterionSeven = require('../models/criterion_seven');
let CriterionEight = require('../models/criterion_eight');

/* TO REPLACE WITH let data = get_data() */
let data = {
    /* PART A */
    'institution_details' : {
        'institution_name' : 'String',
        'address_line_1' : 'String',
        'address_line_2' : 'String',
        'city_or_town' : 'String',
        'state' : 'String',
        'pincode' : 42,
        'institute_email' : 'String',
        'contact_numbers' : 'String',
        'institution_head' : 'String',
        'telephone_no_with_std_code' : 'String',
        'mobile_number' : 42,
        'iqac_coordinator' : 'String',
        'iqac_coordinator_mobile' : 42,
        'iqac_email' : 'String'
    },
    'naac_track_id' : 'String',
    'naac_executive_commitee_no_date' : 'String',
    'website_address' :'String',
    'aqar_web_link' : 'String',
    'accreditation_details' : {
        'first_cycle' : {
            'grade' : 'String',
            'cgpa' : 42,
            'year_of_accreditation' : 42,
            'validity' : 42
        },
        'second_cycle' : {
            'grade' : 'String',
            'cgpa' : 42,
            'year_of_accreditation' : 42,
            'validity' : 42
        },
        'third_cycle' : {
            'grade' : 'String',
            'cgpa' : 42,
            'year_of_accreditation' : 42,
            'validity' : 42
        },
        'fourth_cycle' : {
            'grade' : 'String',
            'cgpa' : 42,
            'year_of_accreditation' : 42,
            'validity' : 42
        }
    },
    'iqac_establishment_date' : "28/09/13",
    'aqar_of_the_year' : 'String',
    'previous_aqar_submissions' : {
        'prev_aqar_submission1' : {
            'aqar_date' : "01/01/18"
        },
        'prev_aqar_submission2' : {
            'aqar_date' : "11/11/11"
        },
        'prev_aqar_submission3' : {
            'aqar_date' : "22/2/22"
        },
        'prev_aqar_submission4' : {
            'aqar_date' : "3/3/03"
        }
    },
    'institutional_status' : {
        'university' : {
            'state' : 42,
            'central' : 42,
            'deemed' : 42,
            'private_uni' : 42
        },
        'affliated_college' : {
            'yes' : 42,
            'no' : 42
        },
        'constituent_college' : {
            'yes' : 42,
            'no' : 42
        },
        'autonomous_college_of_ugc' : {
            'yes' : 42,
            'no' : 42
        },
        'regulatory_agency_approved_institute' : {
            'yes' : 42,
            'no' : 42
        },
        'type_of_institution1' : {
            'co_ed' : 42,
            'men' : 42,
            'women' : 42
        },
        'type_of_institution2' : {
            'urban' : 42,
            'rural' : 42,
            'tribal' : 42
        },
        'financial_status' : {
            'grant_in_aid' : 42,
            'ugc_2f' : 42,
            'ugc_12b' : 42,
            'grant_in_aid_plus_self_finance' : 42,
            'totally_self_finance' : 42
        }
    },
    'faculty_and_programme_type' : {
        'arts' : 42,
        'science' : 42,
        'commerce' : 42,
        'law' : 42,
        'pei' : 42,
        'tei' : 42,
        'engineering' : 42,
        'health_science' : 42,
        'management' : 42,
        'others' : 'String'
    },
    'affliating_uni_name' : 'String',
    'special_status' : {
        'state_cental_govt_uni_autonomy' : 'String',
        'uni_with_potential_for_exellence' : 'String',
        'ugc_cpe' : 'String',
        'ugc_ce' : 'String',
        'dst_star_scheme' : 'String',
        'dst_fist' : 'String',
        'ugc_special_assistance_program' : 'String',
        'ugc_innovative_pg_program' : 'String',
        'ugc_cop' : 'String',
        'any_other' : 'String'
    },
    'no_of_teachers' : 42,
    'no_of_tech_admin_staff' : 42,
    'no_of_students' : 42,
    'no_of_management_reps' : 42,
    'no_of_alumni' : 42,
    'no_of_other_stakeholders_community_reps' : 42,
    'no_of_employers_industrialists' : 42,
    'no_of_other_external_experts' : 42,
    'total_no_of_members' : 42,
    'no_of_iqac_meetings_held' : 42,
    'no_of_meetings_with_various_stakeholders' : {
        'No' : 42,
        'faculty' : 42,
        'non_teaching_staff_students' : 42,
        'alumni' : 42,
        'others' : 42
    },
    'ugc_funding_for_iqac' : {
        'yes' : 42,
        'no' : 42,
        'yes_amount' : 'String'
    },
    'seminars_conferences' : {
        'events_organized_by_iqac' : {
            'total_no' : 42,
            'international' : 42,
            'national' : 42,
            'state' : 42,
            'institution_level' : 42
        },
        'themes' : 'String'
    },
    'significant_contributions_activities_by_iqac' : 'String',
    'iqac_plan_of_action' : {
        'plan_of_action' : 'String',
        'achievements' : 'String'
    },
    'placement_of_aqar_in_statutory_body' : {
        'yes' : 42,
        'no' : 42,
        'type_of_statutory_body' : {
            'management' : 42,
            'syndicate' : 42,
            'any_other_body' : 42
        },
        'details_of_action_taken' : 'String'
    },
    /* CRITERION I */
    'academic_program_details' :  {
        'phd' : {
          'existing_program_count' : 42,
          'added_program_count' : 42,
          'self_finance_program_count' : 42,
          'career_oriented_program_count' : 42
          },
        'pg' : {
          'existing_program_count' : 42,
          'added_program_count' : 42,
          'self_finance_program_count' : 42,
          'career_oriented_program_count' : 42
          },
        'ug' : {
          'existing_program_count' : 42,
          'added_program_count' : 42,
          'self_finance_program_count' : 42,
          'career_oriented_program_count' : 42
          },
        'pg_diploma' : {
          'existing_program_count' : 42,
          'added_program_count' : 42,
          'self_finance_program_count' : 42,
          'career_oriented_program_count' : 42
          },
        'adv_diploma' : {
          'existing_program_count' : 42,
          'added_program_count' : 42,
          'self_finance_program_count' : 42,
          'career_oriented_program_count' : 42
          },
        'diploma' : {
          'existing_program_count' : 42,
          'added_program_count' : 42,
          'self_finance_program_count' : 42,
          'career_oriented_program_count' : 42
          },
        'certificate' : {
          'existing_program_count' : 42,
          'added_program_count' : 42,
          'self_finance_program_count' : 42,
          'career_oriented_program_count' : 42
          },
        'others' : {
          'existing_program_count' : 42,
          'added_program_count' : 42,
          'self_finance_program_count' : 42,
          'career_oriented_program_count' : 42
          },
        'total' : {
          'existing_program_count' : 42,
          'added_program_count' : 42,
          'self_finance_program_count' : 42,
          'career_oriented_program_count' : 42
          },
        'interdisciplinary' : {
          'existing_program_count' : 42,
          'added_program_count' : 42,
          'self_finance_program_count' : 42,
          'career_oriented_program_count' : 42
          },
        'innovative' : {
          'existing_program_count' : 42,
          'added_program_count' : 42,
          'self_finance_program_count' : 42,
          'career_oriented_program_count' : 42
          }
    },
    'curriculum_flexibility' : {
        'cbcs' : 42,
        'core' : 42,
        'elective_option' : 42,
        'open_option' : 42,
    },
    'pattern_of_programmes' : {
        'semester' : {
          'no_of_programmes' : 42
          },
        'trimester' : {
          'no_of_programmes' : 42
          },
        'annual' : {
          'no_of_programmes' : 1
          }
        },
    'stakeholder_feedback' : {
        'alumni' : 2,
        'parents' : 2,
        'employers' : 2,
        'student' : 2
    },
    'mode_of_feedback' : {
        'online' : 1,
        'manual' : 2,
        'coop_school' : 3
    },
    'syllabus_revision_feedback' : 'String',
    'new_dept_introduced' : 'String',
    /* CRITERION II */
    'permanent_faculty': {
        'asst_prof': 5,
        'asso_prof': 4,
        'prof': 3,
        'others': 2,
        'total': 1
    },
    'permanent_faculty_phd': 12,
    'faculty_pos_recruited_vacant': {
        'asst_prof': {
            'recruited': 1,
            'vacant': 2
        },
        'asso_prof': {
            'recruited': 3,
            'vacant': 4
        },
        'prof': {
            'recruited': 5,
            'vacant': 6
        },
        'others': {
            'recruited': 7,
            'vacant': 8
        },
        'total': {
            'recruited': 9,
            'vacant': 10
        }
    },
    'guest_visit_temp_faculty': {
        'guest': 1,
        'visiting': 2,
        'temporary': 3
    },
    'faculty_participation': {
        'international': {
            'seminar_workshop': 1,
            'paper_presented': 2,
            'resource_persons': 3
        },
        'national': {
            'seminar_workshop': 1,
            'paper_presented': 2,
            'resource_persons': 3
        },
        'state': {
            'seminar_workshop': 1,
            'paper_presented': 2,
            'resource_persons': 3
        }
    },
    'innovative_process_adopted': "string",
    'actual_teaching_days': 2,
    'exam_reforms_initiated': 3,
    'curriculum_incharge_faculty_members': {
        'curriculum_revision': 1,
        'member_board': 2,
        'faculty_dev_workshop': 3
    },
    'avg_student_attendance': 1,
    'pass_percent_dist': [{
        'programme_title': 2,
        'students_appeared': 3,
        'division': {
            'distinction_percent': 4,
            'percent_one': 5,
            'percent_two': 6,
            'percent_three': 7,
            'percent_pass': 8
        }
    }],
    'iqac_contribution': 'String',
    'faculty_dev_initiative': {
        'refresher_courses': 9,
        'ugc_fac_improvement_prog': 10,
        'hrd_programme':11,
        'orientation_programme': 12,
        'fac_exchange_programme': 13,
        'staff_training_univ': 14,
        'staff_training_other': 15,
        'summer_winter_workshops': 16,
        'others': 17
    },
    'admin_tech_staff': {
        'permanent_employees': {
            'admin': 18,
            'technical': 19
        },
        'vacant_positions': {
            'admin': 20,
            'technical': 21
        },
        'permanent_positions_filled': {
            'admin': 22,
            'technical': 23
        },
        'temporary_positions_filled': {
            'admin': 24,
            'technical': 25
        }
    },
    /* CRITERION III */
    'iqac_initiatives_promoting_research' : 'String',
    'major_project_details' : {
        'completed' : {
            'number' : 69,
            'outlay_in_lakhs' : 69
        },
        'ongoing' : {
            'number' : 69,
            'outlay_in_lakhs' : 69
        },
        'sanctioned' : {
            'number' : 69,
            'outlay_in_lakhs' : 69
        },
        'submitted' : {
            'number' : 69,
            'outlay_in_lakhs' : 69
        }
    },
    'minor_project_details' : {
        'completed' : {
            'number' : 69,
            'outlay_in_lakhs' : 69
        },
        'ongoing' : {
            'number' : 69,
            'outlay_in_lakhs' : 69
        },
        'sanctioned' : {
            'number' : 69,
            'outlay_in_lakhs' : 69
        },
        'submitted' : {
            'number' : 69,
            'outlay_in_lakhs' : 69
        }
    },
    'research_publication_details' : {
        'international' : {
            'peer_review_journals' : 69,
            'non_peer_review_journals' : 69,
            'e_journals' : 69,
            'conference_proceedings' : 69
        },
        'national' : {
            'peer_review_journals' : 69,
            'non_peer_review_journals' : 69,
            'e_journals' : 69,
            'conference_proceedings' : 69
        },
        'others' : {
            'peer_review_journals' : 69,
            'non_peer_review_journals' : 69,
            'e_journals' : 69,
            'conference_proceedings' : 69
        }
    },
    'impact_factor_publication_details' : {
        'range' : 'String',
        'average' : 69,
        'index' : 69,
        'nos_of_scopus' : 69
    },
    'research_funds_sanctioned' : {
        'major_project' : {
            'duration_year' : 'String',
            'funding_agency_name' : 'String',
            'total_grant_sanctioned' : 69,
            'received' : 69
        },
        'minor_project' : {
            'duration_year' : 'String',
            'funding_agency_name' : 'String',
            'total_grant_sanctioned' : 69,
            'received' : 69
        },
        'interdisciplinary_project' : {
            'duration_year' : 'String',
            'funding_agency_name' : 'String',
            'total_grant_sanctioned' : 69,
            'received' : 69
        },
        'industry_sponsored' : {
            'duration_year' : 'String',
            'funding_agency_name' : 'String',
            'total_grant_sanctioned' : 69,
            'received' : 69
        },
        'uni_sponsored_project' : {
            'duration_year' : 'String',
            'funding_agency_name' : 'String',
            'total_grant_sanctioned' : 69,
            'received' : 69
        },
        'other_student_research_project' : {
            'duration_year' : 'String',
            'funding_agency_name' : 'String',
            'total_grant_sanctioned' : 69,
            'received' : 69
        },
        'any_other_specify' : {
            'duration_year' : 'String',
            'funding_agency_name' : 'String',
            'total_grant_sanctioned' : 69,
            'received' : 69
        },
        'total' : {
            'duration_year' : 'String',
            'funding_agency_name' : 'String',
            'total_grant_sanctioned' : 69,
            'received' : 69
        }
    },
    'no_of_books_published' : {
        'with_isbn_no' : 69,
        'without_isbn_no' : 69,
        'chapters_in_edited_books' : 69
    },
    'no_of_uni_depts_receiving_funds' : {
        'ugc_sap' : 69,
        'cas' : 69,
        'dst_fist' : 69,
        'dpe' : 69,
        'dbt_scheme_funds' : 69
    },
    'for_colleges' : {
        'autonomy' : 69,
        'cpe' : 69,
        'dbt_star_scheme' : 69,
        'inspire' : 69,
        'ce' : 69,
        'any_other_specify' : 69
    },
    'revenue_generated_through_consultancy' : 'String',
    'conferences_organized_by_institution' : {
        'number' : {
            'international' : 69,
            'national' : 69,
            'state' : 69,
            'university' : 69,
            'college' : 69
        },
        'sponsoring_agencies' : {
            'international' : 'String',
            'national' : 'String',
            'state' : 'String',
            'university' : 'String',
            'college' : 'String'
        }
    },
    'no_of_faculty_served_chairperson_resource_expert' : 69,
    'no_of_collaborations' : {
        'international' : 69,
        'national' : 69,
        'any_other' : 69
    },
    'no_of_linkages_created_during_the_year' : 69,
    'current_year_research_budget_in_lakhs' : {
        'from_funding_agency' : 69,
        'from_uni_college' : 69,
        'total' : 69
    },
    'no_of_patents' : {
        'national' : {
            'applied' : 69,
            'granted' : 69
        },
        'international' : {
            'applied' : 69,
            'granted' : 69
        },
        'commercialized' : {
            'applied' : 69,
            'granted' : 69
        }
    },
    'no_of_awards_recognition_faculty_research_fellows' : {
        'total' : 69,
        'international' : 69,
        'national' : 69,
        'state' : 69,
        'university' : 69,
        'district' : 69,
        'college' : 69
    },
    'faculty_count' : {
        'phd_guides' : 69,
        'students_registered_under_them' : 69
    },
    'no_of_phd_awarded_institution_faculty' : 69,
    'no_of_research_scholars_receiving_fellowships' : {
        'jrf' : 69,
        'srf' : 69,
        'project_fellows' : 69,
        'any_other' : 69
    },
    'nss_student_participants' : {
        'international_level' : 69,
        'national_level' : 69,
        'state_level' : 69,
        'university_level' : 69
    },
    'ncc_student_participation' : {
        'international_level' : 69,
        'national_level' : 69,
        'state_level' : 69,
        'university_level' : 69
    },
    'no_of_awards_in_nss' : {
        'international_level' : 69,
        'national_level' : 69,
        'state_level' : 69,
        'university_level' : 69
    },
    'no_of_awards_in_ncc' : {
        'international_level' : 69,
        'national_level' : 69,
        'state_level' : 69,
        'university_level' : 69
    },
    'no_of_extension_activities_organized' : {
        'university_forum' : 69,
        'college_forum' : 69,
        'ncc' : 69,
        'nss' : 69,
        'any_other' : 69
    },
    'major_activities' : 'String',
    /* CRITERION IV */
    'increase_in_infrastructure_details' : {
        'facilities' : {
            'existing' : 'String',
            'newly_created' : 'String',
            'source_of_fund' : 'String',
            'total' : 'String'
        },
        'campus_area' : {
            'existing' : 'String',
            'newly_created' : 'String',
            'source_of_fund' : 'String',
            'total' : 'String'
        },
        'class_rooms' : {
            'existing' : 'String',
            'newly_created' : 'String',
            'source_of_fund' : 'String',
            'total' : 'String'
        },
        'laboratories' : {
            'existing' : 'String',
            'newly_created' : 'String',
            'source_of_fund' : 'String',
            'total' : 'String'
        },
        'seminar_halls' : {
            'existing' : 'String',
            'newly_created' : 'String',
            'source_of_fund' : 'String',
            'total' : 'String'
        },
        'important_equipment_purchased' : {
            'existing' : 'String',
            'newly_created' : 'String',
            'source_of_fund' : 'String',
            'total' : 'String'
        },
        'value_of_equipment_purchased_in_lakhs' : {
            'existing' : 'String',
            'newly_created' : 'String',
            'source_of_fund' : 'String',
            'total' : 'String'
        },
        'others' : {
            'existing' : 'String',
            'newly_created' : 'String',
            'source_of_fund' : 'String',
            'total' : 'String'
        }
    },
    'computerization_of_administration_and_library' : 'String',
    'library_services' : {
        'text_books' : {
            'existing' : {
                'num' : 420,
                'val' : 420
                },
            'newly_added' : {
                'num' : 420,
                'val' : 420,
                },
            'total' : {
                'num' : 420,
                'val' : 420
            }
        },
        'reference_books' : {
            'existing' : {
                'num' : 420,
                'val' : 420
            },
            'newly_added' : {
                'num' : 420,
                'val' : 420
            },
            'total' : {
                'num' : 420,
                'val' : 420
            }
        },
        'e_books' : {
            'existing' : {
                'num' : 420,
                'val' : 420
            },
            'newly_added' : {
                'num' : 420,
                'val' : 420
            },
            'total' : {
                'num' : 420,
                'val' : 420
            }
        },
        'journals' : {
            'existing' : {
                'num' : 420,
                'val' : 420
            },
            'newly_added' : {
                'num' : 420,
                'val' : 420
            },
            'total' : {
                'num' : 420,
                'val' : 420
            }
        },
        'ejournals' : {
            'existing' : {
                'num' : 420,
                'val' : 420
            },
            'newly_added' : {
                'num' : 420,
                'val' : 420
            },
            'total' : {
                'num' : 420,
                'val' : 420
            }
        },
        'digital_database' : {
            'existing' : {
                'num' : 420,
                'val' : 420
            },
            'newly_added' : {
                'num' : 420,
                'val' : 420
            },
            'total' : {
                'num' : 420,
                'val' : 420
            }
        },
        'cd_video' : {
            'existing' : {
                'num' : 420,
                'val' : 420
            },
            'newly_added' : {
                'num' : 420,
                'val' : 420
            },
            'total' : {
                'num' : 420,
                'val' : 420
            }
        },
        'other' : {
            'existing' : {
                'num' : 420,
                'val' : 'String'
            },
            'newly_added' : {
                'num' : 420,
                'val' : 'String'
            },
            'total' : {
                'num' : 420,
                'val' : 'String'
            }
        }
    },
    'tech_upgrade' : {
        'total_computers' : {
            'existing' : 420,
            'added' : 420,
            'total' : 420
        },
        'computer_labs' : {
            'existing' : 420,
            'added' : 420,
            'total' : 420
        },
        'internet' : {
            'existing' : 420,
            'added' : 420,
            'total' : 420
        },
        'computer_centres' : {
            'existing' : 420,
            'added' : 420,
            'total' : 420
        },
        'browsing_centres' : {
            'existing' : 420,
            'added' : 420,
            'total' : 420
        },
        'office' : {
            'existing' : 420,
            'added' : 420,
            'total' : 420
        },
        'departments' : {
            'existing' : 420,
            'added' : 420,
            'total' : 420
        },
        'others' : {
            'existing' : 420,
            'added' : 420,
            'total' : 420
        }
    },
    'computer_internet_access_training' : 'String',
    'maintenance_amount_in_lakhs' : {
        'ict' : 420,
        'campus_infrastructure_facilities' : 420,
        'equipment' : 420,
        'other_maintenance' : 420,
        'total' : 420
    },
    /* CRITERION V */
    'iqac_contribution_student_support_services' : 'String',
    'efforts_tracking_progression' : 'String',
    'total_no_of_students' : {
        'ug_students' : 9876,
        'pg_students' : 9876,
        'phd_students' : 9876,
        'other_students' : 9876
    },
    'no_of_students_outside_the_state' : 9876,
    'no_of_international_students' : 9876,
    'men' : {
        'students_number' : 9876,
        'percentage' : 9876
    },
    'women' : {
        'students_number' : 9876,
        'percentage' : 9876
    },
    'last_year' : {
        'general' : 9876,
        'sc' : 9876,
        'st' : 9876,
        'obc' : 9876,
        'physically_challenged' : 9876,
        'students_total' : 9876
    },
    'this_year' : {
        'general' : 9876,
        'sc' : 9876,
        'st' : 9876,
        'obc' : 9876,
        'physically_challenged' : 9876,
        'students_total' : 9876
    },
    'demand_ratio' : 9876,
    'dropout_percentage' : 9876,
    'student_support_mechanism' : 'String',
    'no_of_student_beneficiaries' : 9876,
    'no_of_students_qualified_for_examinations' : {
        'net' : 9876,
        'set_slet' : 9876,
        'gate' : 9876,
        'cat' : 9876,
        'ias_ips' : 9876,
        'state_psc' : 9876,
        'upsc' : 9876,
        'others' : 9876
    },
    'student_counselling_career_guidance' : 'String',
    'no_of_students_benefitted' : 9876,
    'campus_placement_details' : {
        'on_campus' : {
            'organizations_visited' : 9876,
            'students_participated' : 9876,
            'placed_students' : 9876
        },
        'off_campus' : {
            'placed_students' : 9876
        }
    },
    'gender_sensitization_programmes' : 'String',
    'students_activities' : {
        'participation_sports_games_other_events' : {
            'state_uni_level' : 9876,
            'international_level' : 9876,
            'national_level' : 9876
        },
        'participation_cultural_events' : {
            'state_uni_level' : 9876,
            'international_level' : 9876,
            'national_level' : 9876
        },
        'no_of_medals_awards' : {
            'sports_games' : {
                'state_uni_level' : 9876,
                'international_level' : 9876,
                'national_level' : 9876
            },
            'culturals' : {
                'state_uni_level' : 9876,
                'international_level' : 9876,
                'national_level' : 9876
            }
        }
    },
    'scholarship_financial_support' : {
        'institute_finance_support' : {
            'student_no' : 9876,
            'amount_in_lakhs' : 9876
        },
        'govt_financial_support' : {
            'student_no' : 9876,
            'amount_in_lakhs' : 9876
        },
        'other_financial_support' : {
            'student_no' : 9876,
            'amount_in_lakhs' : 9876
        },
        'international_national_recognition' : {
            'student_no' : 9876,
            'amount_in_lakhs' : 9876
        }
    },
    'student_organized_initiatives' : {
        'fairs' : {
            'state_uni_level' : 9876,
            'international_level' : 9876,
            'national_level' : 9876
        },
        'exhibition' : {
            'state_uni_level' : 9876,
            'international_level' : 9876,
            'national_level' : 9876
        }
    },
    'social_initiatives_undertaken-by_students' : 9876,
    'major_grievances_of_students' : 'String',
    /* CRITERION VI */
    'vision_mission_institute' : 'String',
    'info_management_system' : 'String',
    'improvement_strategies' : {
        'curriculum_development' : 'String',
        'teaching_and_learning' : 'String',
        'exam_and_evaluation' : 'String',
        'research_and_development' : 'String',
        'physical_infrastructure' : 'String',
        'human_resource_management' : 'String',
        'faculty_staff_recruitment' : 'String',
        'industry_interaction_collab' : 'String',
        'student_admission' : 'String'
    },
    'welfare_scheme' : {
        'teaching' : 'String',
        'non_teaching' : 'String',
        'students' : 'String'
    },
    'corpus_fund' : 'String',
    'financial_audit' : {
        'yes' : 9876,
        'no' : 9876
    },
    'academic_admin_audit' : {
        'academic' : {
            'external_yes_no' : 'String',
            'external_agency' : 'String',
            'internal_yes_no' : 'String',
            'internal_agency' : 'String'
            },
        'administrative' : {
            'external_yes_no' : 'String',
            'external_agency' : 'String',
            'internal_yes_no' : 'String',
            'internal_agency' : 'String'
        }
    },
    'result_declaration' : {
        'ug_programmes' : {
            'yes' : 9876,
            'no' : 9876
        },
        'pg_programmes' : {
            'yes' : 9876,
            'no' : 9876
        }
    },
    'examination_reforms' : 'String',
    'autonomy_promotion' : 'String',
    'alumni_activity_support' : 'String',
    'parent_teacher_activity_support' : 'String',
    'support_staff_development' : 'String',
    'eco_friendly_initiatives' : 'String',
    /* CRITERION VII */
    'innovations_introduced_for_positive_impact' : 'String',
    'action_taken_report' : 'String',
    'two_best_practices_of_institution' : {
        'practice1' : 'String',
        'practice2' : 'String'
    },
    'environment_awareness_protection_contribution' : 'String',
    'environment_audit_conducted' : {
        'yes' : 42,
        'no' : 231
    },
    'other_relevant_info' : 'String',
    /* CRITERION VIII */
    'plans_of_institution_next_year' : 'String'
}

data = {};

function add(documents) {
    let docs = [];
    for(let i = 0; i < documents.length; i++) {
        docs.push(documents[i])
    }
    console.log(docs);
    return docs;
}

function get_data() {
    PartAOne.findOne(null, function(err, document) {
        if(err) {
            console.log(err);
        } else {
            data = merge({}, document);
            PartATwo.findOne(null, function(err, document) {
                if(err) {
                    console.log(err);
                } else {
                    data = merge(data, document);
                    console.log(data._doc);
                    CriterionOne.findOne(null, function(err, document) {
                        if(err) {
                            console.log(err);
                        } else {
                            data = merge(data, document);
                            CriterionTwo.find(function(err, documents) {
                                if(err) {
                                    console.log(err);
                                } else {
                                    data = merge(data, jsonAdd.addJSONs(documents, null));
                                    console.log('-------');
                                    console.log(data);
                                }
                            });
                        }
                    });
                }
            });
        }
    });
}

/* Special cases */
/* Case 1: 2.1. Pass % per course */
/* let pass_percent = [
    [{text: 'Title of the Programme', style: 'tableHeader', rowSpan: 2}, {text: 'Total No. of Students Appeared', style: 'tableHeader',  rowSpan: 2}, {text: 'Division', style: 'tableHeader', colSpan: 5}, {}, {}, {}, {}],
    [{}, {}, {text: 'Distinction %', style: 'tableHeader'}, {text: 'I %', style: 'tableHeader'}, {text: 'II %', style: 'tableHeader'}, {text: 'III %', style: 'tableHeader'}, {text: 'Pass %', style: 'tableHeader'}]
]
for(i = 0; i < data['pass_percent_dist'].length; i++) {
    pass_percent.push([
        data['pass_percent_dist'][i]['programme_title'], data['pass_percent_dist'][i]['students_appeared'], data['pass_percent_dist'][i]['division']['distinction_percent'], data['pass_percent_dist'][i]['division']['percent_one'], data['pass_percent_dist'][i]['division']['percent_two'], data['pass_percent_dist'][i]['division']['percent_three'], data['pass_percent_dist'][i]['division']['percent_pass']
    ])
} */

/* Setting up the PDF */


/* DO NOT TOUCH */
function make_pdf() {
    console.log('HAHAH');
    data = get_data();
    /* var pdfDoc = printer.createPdfKitDocument(documentDefinition);
    pdfDoc.pipe(fs.createWriteStream('iqac.pdf'));
    pdfDoc.end(); */
}

/* CALL THIS FUNCTION AND PDF IS GENERATED */
//make_pdf()

module.exports = {
    make_pdf
};