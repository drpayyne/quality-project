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

/* Special cases */
/* Case 1: 2.1. Pass % per course */
let pass_percent = [
    [{text: 'Title of the Programme', style: 'tableHeader', rowSpan: 2}, {text: 'Total No. of Students Appeared', style: 'tableHeader',  rowSpan: 2}, {text: 'Division', style: 'tableHeader', colSpan: 5}, {}, {}, {}, {}],
    [{}, {}, {text: 'Distinction %', style: 'tableHeader'}, {text: 'I %', style: 'tableHeader'}, {text: 'II %', style: 'tableHeader'}, {text: 'III %', style: 'tableHeader'}, {text: 'Pass %', style: 'tableHeader'}]
]
for(i = 0; i < data['pass_percent_dist'].length; i++) {
    pass_percent.push([
        data['pass_percent_dist'][i]['programme_title'], data['pass_percent_dist'][i]['students_appeared'], data['pass_percent_dist'][i]['division']['distinction_percent'], data['pass_percent_dist'][i]['division']['percent_one'], data['pass_percent_dist'][i]['division']['percent_two'], data['pass_percent_dist'][i]['division']['percent_three'], data['pass_percent_dist'][i]['division']['percent_pass']
    ])
}

/* Setting up the PDF */
let documentDefinition = {
    footer:
        function(currentPage) {
            return {
                style: 'tableExample',
                margin: [60, 0, 0, 60],
                table: {
                    headerRows: 1,
                    body: [
                        [{text: '', style: 'tableHeader'}],
                        ['Revised Guidelines of IQAC and submission of AQAR' + '\t\t\t\t\t\t\t\t\t\t\t\t\t' + 'Page ' + currentPage.toString()]
                    ]
                },
                layout: 'headerLineOnly'
            };
        },
    content: [
        /* FRONT PAGE */
        {text: `\n\n\n\n\n\n`},
        {text: `Guidelines for the Creation of the\n\n`, style: 'subheader', italics: true},
        {text: `Internal Quality Assurance Cell (IQAC)\n\n`, style: 'mainheader'},
        {text: `and Submission of Annual Quality Assurance\n\n`, style: 'mainheader'},
        {text: `Report (AQAR) in Accredited Institutions`, style: 'mainheader'},
        {text: `(Revised in October 2013)`, style: 'tagline'},
        {text: `\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`},
        {image: 'images/logo.jpg', width: 75, height: 75},
        {text: '\n'},
        {image: 'images/text1.jpg', width: 300},
        {image: 'images/text2.jpg', width: 250},
        {text: '\n'},
        {text: `NATIONAL ASSESSMENT AND ACCREDITATION COUNCIL`, style: 'header'},
        {text: `An Autonomous Institution of the University Grants Commission`, italics: true},
        {text: `P. O. Box. No. 1075, Opp: NLSIU, Nagarbhavi, Bangalore - 560 072 India`, pageBreak: 'after'},
        /*PAGE 2 - NAAC*/
        {text: "NAAC", style: 'header'},
        {text: "VISION", style: 'subheader', alignment: 'left'},
        {text: "To make quality the defining element of higher education in India through a combination of self and external quality evaluation, promotion and sustenance initiatives.", alignment: 'left', italics: true},
        {text: "\n\nMISSION\n\n", style: 'subheader', alignment: 'left'},
        {
            ul: [
                `To arrange for periodic assessment and accreditation of institutions of higher education or units thereof, or specific academic programmes or projects;\n\n`,
                `To stimulate the academic environment for promotion of quality of teaching-learning and research in higher education institutions;\n\n`,
                `To encourage self-evaluation, accountability, autonomy and innovations in higher education;\n\n`,
                `To undertake quality-related research studies, consultancy and training programmes, and\n\n`,
                `To collaborate with other stakeholders of higher education for quality evaluation, promotion and sustenance.\n\n`
            ],
            italics: true,
            alignment: 'left',
            margin: [40, 0, 0, 0]
        },
        {text: "\n\nValue Framework", style: 'subheader', alignment: 'left'},
        {text: "To promote the following core values among the HEIs of the country: \n\n", alignment: 'left'},
        {
            ul: [
                'Contributing to National Development\n\n',
                'Fostering Global Competencies among Students\n\n',
                'Inculcating a Value System among Students\n\n',
                'Promoting the Use of Technology\n\n',
                'Quest for Excellence\n\n'
            ],
            italics: true,
            alignment: 'left',
            margin: [20, 0, 0, 0],
            pageBreak: 'after'
        },
        /* PAGE 3 - INDEX*/
        {text: "Contents", style: 'subheader'},
        {
            columns: [
                {
                    width: 350,
                    text: `\n
                    \n1. Introduction
                    \n2. Objective
                    \n3. Strategies
                    \n4. Functions
                    \n5. Benefits
                    \n6. Composition of the IQAC
                    \n7. The role of coordinator
                    \n8. Operational Features of the IQAC
                    \n9. Monitoring Mechanism
                    \n10. Mandatory submission of AQAR by NAAC
                    \n11. The Annual Quality Assurance Report (AQAR) of the IQAC`,
                    alignment: 'left'
                },
                {
                    width: '*',
                    text: `Page Nos.\n
                    \n.....4
                    \n.....4
                    \n.....4
                    \n.....5
                    \n.....5
                    \n.....6
                    \n.....7
                    \n.....7
                    \n.....7
                    \n.....8
                    \n.....9`,
                }
            ],
            margin: [40, 0, 0, 0]
        },
        {text: "Part - A", style: 'subheader'},
        {
            columns: [
                {
                    width: 350,
                    text: `11. Details of the Institution
                    \n12. IQAC Composition and Activities`,
                    alignment: 'left'
                },
                {
                    width: '*',
                    text: `.....9
                    \n.....12`,
                }
            ],
            margin: [40, 0, 0, 0]
        },
        {text: "Part - B", style: 'subheader'},
        {
            columns: [
                {
                    width: 350,
                    text: `13. Criterion – I: Curricular Aspects
                    \n14. Criterion – II: Teaching, Learning and Evaluation
                    \n15. Criterion – III: Research, Consultancy and Extension
                    \n16. Criterion – IV: Infrastructure and Learning Resources
                    \n17. Criterion – V: Student Support and Progression
                    \n18. Criterion – VI: Governance, Leadership and Management
                    \n19. Criterion – VII: Innovations and Best Practices
                    \n20. Abbreviations`,
                    alignment: 'left'
                },
                {
                    width: '*',
                    text: `.....14
                    \n.....15
                    \n.....17
                    \n.....20
                    \n.....22
                    \n.....24
                    \n.....27
                    \n.....29`,
                }
            ],
            margin: [40, 0, 0, 0],
        },
        {text: "\n\n\n\n\n"},
        {
            table : {
                headerRows : 1,
                widths: ['*'],
                body : [
                    [''],
                    ['']
                ]
            },
            layout : 'headerLineOnly',
            margin: [0, 0, 0, 0],
            alignment: 'center'
        },
        {text:
            "Document revised by: Dr. Ganesh Hegde, Deputy Adviser and B. S. Ponmudiraj, Deputy Adviser, NAAC", fontSize: 10, italics: true, pageBreak: 'after'
        },
        /* PAGE 4 */
        {text: `Guidelines for the Creation of the`, style: 'header', italics: true},
        {
            text: [
                `Internal Quality Assurance Cell (IQAC)`,
                `and Submission of Annual Quality Assurance`,
                `Report (AQAR) in Accredited Institutions\n`
            ],
            style: 'header'
        },
        {text: 'Introduction', style: 'subheader', alignment: 'left'},
        {text: `In pursuance of its Action Plan for performance evaluation, assessment and accreditation and
            quality up-gradation of institutions of higher education, the National Assessment and
            Accreditation Council (NAAC), Bangalore proposes that every accredited institution should
            establish an Internal Quality Assurance Cell (IQAC) as a post-accreditation quality sustenance
            measure. Since quality enhancement is a continuous process, the IQAC will become a part of the
            institution’s system and work towards realisation of the goals of quality enhancement and
            sustenance. The prime task of the IQAC is to develop a system for conscious, consistent and
            catalytic improvement in the overall performance of institutions. For this, during the post-
            accreditation period, it will channelize all efforts and measures of the institution towards
            promoting its holistic academic excellence.`, alignment: 'justify'},
        {text: `\nThe guidelines provided in the following pages will guide and facilitate the institution in the
            creation and operation of the Internal Quality Assurance Cell (IQAC). The work of the IQAC is
            the first step towards internalization and institutionalization of quality enhancement initiatives.
            Its success depends upon the sense of belongingness and participation it can inculcate in all the
            constituents of the institution. It will not be yet another hierarchical structure or a record-keeping
            exercise in the institution. It will be a facilitative and participative voluntary system/unit/organ
            of the institution. It has the potential to become a vehicle for ushering in quality enhancement by
            working out planned interventionist strategies to remove deficiencies and enhance quality like
            the “Quality Circles” in industries.`, alignment: 'justify'},
        {text: `\n Objective`, style: 'header', alignment: 'left'},
        {text: `The primary aim of IQAC is\n\n`, bold: true, alignment: 'left'},
        {
            ul: [
                `To develop a system for conscious, consistent and catalytic action to improve the
                academic and administrative performance of the institution.`,
                `To promote measures for institutional functioning towards quality enhancement through
                internalization of quality culture and institutionalization of best practices.`,
            ],
            alignment: 'left'
        },
        {text: `\nStrategies`, style: 'header', alignment: 'left'},
        {text: `IQAC shall evolve mechanisms and procedures for`, bold: true, alignment: 'left'},
        {
            text: [
                `\na) Ensuring timely, efficient and progressive performance of academic, administrative and financial tasks;`,
                `\n\nb) The relevance and quality of academic and research programmes;`,
                `\n\nc) Equitable access to and affordability of academic programmes for various sections of society;`,
                `\n\nd) Optimization and integration of modern methods of teaching and learning;`,
                `\n\ne) The credibility of evaluation procedures;`,
                `\n\nf) Ensuring the adequacy, maintenance and proper allocation of support structure and services;`,
                `\n\ng) Sharing of research findings and networking with other institutions in India and abroad.`
            ],
            margin: [20, 0, 0, 0],
            alignment: 'left',
            pageBreak: 'after'
        },
        /* PAGE 5 */
        {text: `Functions`, style: 'header', alignment: 'left'},
        {text: `Some of the functions expected of the IQAC are:`, bold: true, alignment: 'left'},
        {
            text: [
                    `\na) Development and application of quality benchmarks/parameters for various academic and administrative activities of the institution;`,
                    `\n\nb) Facilitating the creation of a learner-centric environment conducive to quality education and faculty maturation to adopt the required knowledge and technology for participatory teaching and learning process;`,
                    `\n\nc) Arrangement for feedback response from students, parents and other stakeholders on quality-related institutional processes;`,
                    `\n\nd) Dissemination of information on various quality parameters of higher education;`,
                    `\n\ne) Organization of inter and intra institutional workshops, seminars on quality related themes and promotion of quality circles;`,
                    `\n\nf) Documentation of the various programmes/activities leading to quality improvement;`,
                    `\n\ng) Acting as a nodal agency of the Institution for coordinating quality-related activities, including adoption and dissemination of best practices;`,
                    `\n\nh) Development and maintenance of institutional database through MIS for the purpose of maintaining /enhancing the institutional quality;`,
                    `\n\ni) Development of Quality Culture in the institution;`,
                    `\n\nj) Preparation of the Annual Quality Assurance Report (AQAR) as per guidelines and parameters of NAAC, to be submitted to NAAC.`
                ],
            margin: [20, 0, 0, 0],
            alignment: 'left'
        },
        {text: `\nBenefits`, style: 'header', alignment: 'left'},
        {text: `IQAC will facilitate / contribute`, bold: true, alignment: 'left'},
        {
            text:[
                `\na) Ensure heightened level of clarity and focus in institutional functioning towards quality enhancement;`,
                `\n\nb) Ensure internalization of the quality culture;`,
                `\n\nc) Ensure enhancement and coordination among various activities of the institution and institutionalize all good practices;`,
                `\n\nd) Provide a sound basis for decision-making to improve institutional functioning;`,
                `\n\ne) Act as a dynamic system for quality changes in HEIs;`,
                `\n\nf) Build an organised methodology of documentation and internal communication.`
            ],
            margin: [20, 0, 0, 0],
            alignment: 'left',
            pageBreak: 'after'
        },
        /* PAGE 6 */
        {text: `Composition of the IQAC`, style: 'header', alignment: 'left'},
        {text: `IQAC may be constituted in every institution under the Chairmanship of the Head of the institution with heads of important academic and administrative units and a few teachers and a few distinguished educationists and representatives of local management and stakeholders.`, alignment: 'left'},
        {text:`\nThe composition of the IQAC may be as follows:`, bold: true, alignment: 'left'},
        {text: [
                `\n1. Chairperson: Head of the Institution`,
                `\n\n2. A few senior administrative officers`,
                `\n\n3. Three to eight teachers`,
                `\n\n4. One member from the Management`,
                `\n\n5. One/two nominees from local society, Students and Alumni`,
                `\n\n6. One/two nominees from Employers /Industrialists/stakeholders`,
                `\n\n7. One of the senior teachers as the coordinator/Director of the IQAC`
            ],
            margin: [20, 0, 0, 0],
            alignment: 'left'
        },
        {
            text: [
                '\n\nThe composition of the IQAC will depend on the size and complexity of the institution. It helps the institutions in planning and monitoring. IQAC also gives stakeholders or beneficiaries a cross-sectional participation in the institution’s quality enhancement activities. The guidelines given here are only indicative and will help the institutions for quality sustenance activities.',
                '\n\nThe membership of such nominated members shall be for a period of two years. The IQAC should meet at least once in every quarter. The quorum for the meeting shall be two-third of the total number of members. The agenda, minutes and Action Taken Reports are to be documented with official signatures and maintained electronically in a retrievable format.',
                '\n\nIt is necessary for the members of the IQAC to shoulder the responsibilities of generating and promoting awareness in the institution and to devote time for working out the procedural details. While selecting these members several precautions need to be taken. A few of them are listed below:\n\n'
            ],
            alignment: 'left'
        },
        {
            ul: [
                `It is advisable to choose persons from various backgrounds who have earned respect for
                integrity and excellence in their teaching and research. Moreover, they should be aware
                of the ground realities of the institutional environment. They should be known for their
                commitment to improving the quality of teaching and learning.\n\n`,
                `It would be appropriate to choose as senior administrators, persons in charge of
                institutional services such as library, computer center, estate, student welfare,
                administration, academic tasks, examination and planning and development.\n\n`,
                `The management representative should be a person who is aware of the institution’s
                objectives, limitations and strengths and is committed to its improvement. The local
                society representatives should be of high social standing and should have made
                significant contributions to society and in particular to education.\n\n`
            ],
            alignment: 'left',
            margin: [40, 0, 0, 0],
            pageBreak: 'after'
        },
        /* PAGE 7 */
        {text: `The role of coordinator`, style: 'header', alignment: 'left'},
        {text:
            `\nThe role of the coordinator of the IQAC is crucial in ensuring the effective functioning of all the members. The coordinator of the IQAC may be a senior person with expertise in quality aspects. She/he may be a full-time functionary or, to start with, she/he may be a senior academic/administrator entrusted with the IQAC as an additional responsibility. Secretarial assistance may be facilitated by the administration. It is preferable that the coordinator may have sound knowledge about the computer, its various functions and usage for effective communication.`, alignment: 'left'
        },
        {text: `\n\nOperational Features of the IQAC`, style: 'header', alignment: 'left'},
        {text:
            `\nQuality assurance is a by-product of ongoing efforts to define the objectives of an institution, to have a work plan to achieve them and to specify the checks and balances to evaluate the degree to which each of the tasks is fulfilled. Hence devotion and commitment to improvement rather than mere institutional control is the basis for devising procedures and instruments for assuring quality. The right balance between the health and growth of an institution needs to be struck. The IQAC has to ensure that whatever is done in the institution for “education” is done efficiently and effectively with high standards. In order to do this, the IQAC will have to first establish procedures and modalities to collect data and information on various aspects of institutional functioning.`, alignment: 'left'
        },
        {text:
            `\nThe coordinator of the IQAC and the secretary will have a major role in implementing these functions. The IQAC may derive major support from the already existing units and mechanisms that contribute to the functions listed above. The operational features and functions discussed so far are broad-based to facilitate institutions towards academic excellence and institutions may adapt them to their specific needs.`, alignment: 'left'
        },
        {text: `\n\nMonitoring Mechanism`, style: 'header', alignment: 'left'},
        {
            text: [
                `\nThe institutions need to submit yearly the Annual Quality Assurance Report (AQAR) to NAAC. A functional Internal Quality Assurance Cell (IQAC) and timely submission of Annual Quality Assurance Reports (AQARs) are the Minimum Institutional Requirements (MIR) to volunteer for second, third or subsequent cycle’s accreditation. During the institutional visit the NAAC peer teams will interact with the IQACs to know the progress, functioning as well quality sustenance initiatives undertaken by them.`,
                `\n\nThe Annual Quality Assurance Reports (AQAR) may be the part of the Annual Report. The AQAR shall be approved by the statutory bodies of the HEIs (such as Syndicate, Governing Council/Board) for the follow up action for necessary quality enhancement measures. Revised Guidelines of IQAC and submission of AQAR.`,
                `\n\nThe Higher Education Institutions (HEI) shall submit the AQAR regularly to NAAC. The IQACs may create its exclusive window on its institutional website and regularly upload/ report on its activities, as well as for hosting the AQAR.`,
                `\n\nThe NAAC Accredited institutions need to submit only the soft copy as word file (.doc/.docx) through e-mail (capuaqar@gmail.com). The file name needs to be submitted with Track ID of the institution and College Name. For example MHCOGN16601-Samudra Arts and Science College, Taliamegu-Maharashtra.doc or EC_32_A&A_143 dated 3-5-2004-Samudra Arts and Science College, Taliamegu-Maharashtra.doc. The Higher Education Institutions need not submit the printed/hard copy to NAAC. The acknowledgements would be sent to the institutions through e-mail.`
            ],
            alignment: 'left',
            pageBreak: 'after'
        },
        /* PAGE 8 */
        {text: `Mandatory Submission of AQAR by IQAC`, style: 'header', alignment: 'left'},
        {text: [
            `\nSo far submission of AQARs was not a Mandatory requirement for Institutions applying to NAAC 2 nd and subsequent cycles of Assessment and Accreditation (A&A). It has now been decided by the Executive committee of NAAC that `,
            {text: 'regular submission of AQARs should be made mandatory for 2 nd and subsequent cycles of accreditation.', bold: true}
            ],
            alignment: 'left'
        },
        {text: [
            `\nIn view of the decision of `,
            {text: `Executive Committee of NAAC `, bold: true},
            `the following will be the pre-requisites for submission of LOI for all Higher Education Institutions (HEIs) opting for 2nd and subsequent cycles of A&A with `,
            {text: `effect from 16th September 2016:\n\n`, bold: true}
            ],
            alignment: 'left'
        },
        {
            ul: [
                `Having a functional IQAC.\n\n`,
                `The minutes of IQAC meeting and compliance to the decisions should be uploaded on the institutional website.\n\n`,
                `Mandatory submission of AQARs on a regular basis for institutions undergoing the second and subsequent cycles of Assessment and Accreditation by NAAC.\n\n`,
                `Upload the AQAR’s on institutional website for access to all stakeholders.\n\n`
            ],
            alignment: 'left',
            pageBreak: 'after'
        },
        /* PART A */
        {text: 'The Annual Quality Assurance Report (AQAR) of the IQAC', style: 'header'},
        {
            text: [
                '\nAll NAAC accredited institutions will submit an annual self-reviewed progress report to NAAC, through its IQAC. The report is to detail the tangible results achieved in key areas, specifically identified by the  institutional IQAC at the beginning of the academic year. The AQAR will detail the results of the perspective plan worked out by the IQAC.',
                {text: '(Note: The AQAR period would be the Academic Year. For example, July 1, 2012 to June 30, 2013)', italics: true}
            ],
            alignment: 'left'
        },
        {text: 'Part - A', style: 'header', bold: false},
        {text: '1. Details of the Institution', style: 'subheader', alignment: 'left'},
        {text: '1.1. Name of the Institution:', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['institution_details']['institution_name'], alignment: 'justify'}]
                ]
            },
            margin: [200, -15, 0, 0]
        },
        {text: '\n1.2. Address Line 1:', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['institution_details']['address_line_1'], alignment: 'justify'}]
                ]
            },
            margin: [200, -15, 0, 0]
        },
        {text: '\nAddress Line 2:', alignment: 'left', margin: [21, 0, 0, 0]},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['institution_details']['address_line_2'], alignment: 'justify'}]
                ]
            },
            margin: [200, -15, 0, 0]
        },
        {text: '\nCity/Town:', alignment: 'left', margin: [21, 0, 0, 0]},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['institution_details']['city_or_town'], alignment: 'justify'}]
                ]
            },
            margin: [200, -15, 0, 0]
        },
        {text: '\nState:', alignment: 'left', margin: [21, 0, 0, 0]},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['institution_details']['state'], alignment: 'justify'}]
                ]
            },
            margin: [200, -15, 0, 0]
        },
        {text: '\nPin Code:', alignment: 'left', margin: [21, 0, 0, 0]},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['institution_details']['pincode'], alignment: 'justify'}]
                ]
            },
            margin: [200, -15, 0, 0]
        },
        {text: '\nInstitution E-mail Address:', alignment: 'left', margin: [21, 0, 0, 0]},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['institution_details']['institute_email'], alignment: 'justify'}]
                ]
            },
            margin: [200, -15, 0, 0]
        },
        {text: '\nContact Nos:', alignment: 'left', margin: [21, 0, 0, 0]},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['institution_details']['contact_numbers'], alignment: 'justify'}]
                ]
            },
            margin: [200, -15, 0, 0]
        },
        {text: '\nName of the Head of the Institution:', alignment: 'left', margin: [21, 0, 0, 0]},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['institution_details']['institution_head'], alignment: 'justify'}]
                ]
            },
            margin: [200, -15, 0, 0]
        },
        {text: '\nMobile:', alignment: 'left', margin: [21, 0, 0, 0]},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['institution_details']['mobile_number'], alignment: 'justify'}]
                ]
            },
            margin: [200, -15, 0, 0]
        },
        {text: '\nTel. No. with STD Code:', alignment: 'left', margin: [21, 0, 0, 0]},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['institution_details']['telephone_no_with_std_code'], alignment: 'justify'}]
                ]
            },
            margin: [200, -15, 0, 0]
        },
        {text: '\nName of the IQAC Co-ordinator:', alignment: 'left', margin: [21, 0, 0, 0]},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['institution_details']['iqac_coordinator'], alignment: 'justify'}]
                ]
            },
            margin: [200, -15, 0, 0]
        },
        {text: '\nMobile:', alignment: 'left', margin: [21, 0, 0, 0]},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['institution_details']['iqac_coordinator_mobile'], alignment: 'justify'}]
                ]
            },
            margin: [200, -15, 0, 0]
        },
        {text: '\nIQAC E-mail Address:', alignment: 'left', margin: [21, 0, 0, 0]},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['institution_details']['iqac_email'], alignment: 'justify'}]
                ]
            },
            margin: [200, -15, 0, 0]
        },
        {text: ['\n1.3. ', {text: 'NAAC Track ID ', bold: true}, {text: '(For ex. MHCOGN 18879)', italics: true}, ':'], alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['naac_track_id'], alignment: 'justify'}]
                ]
            },
            margin: [280, -15, 0, 0]
        },
        {text: ['\n1.4. ', {text: 'NAAC Executive Committee No. & Date: ', bold: true}, {text: '\n(For Example EC/32/A&A/143 dated 3-5-2004. \nThis EC no. is available in the right corner- bottom \nof your institution’s Accreditation Certificate)', italics: true}, ':'], alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['naac_executive_commitee_no_date'], alignment: 'justify'}]
                ]
            },
            margin: [280, -30, 0, 0]
        },
        {text: '\n1.5. Website address:', alignment: 'left', margin: [0, 10, 0, 0]},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['website_address'], alignment: 'justify'}]
                ]
            },
            margin: [200, -15, 0, 0]
        },
        {text: '\nWeb-link of the AQAR:', alignment: 'left', margin: [20, 0, 0, 0]},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['aqar_web_link'], alignment: 'justify'}]
                ]
            },
            margin: [200, -15, 0, 0]
        },
        {text: '\nFor ex. http://www.ladykeanecollege.edu.in/AQAR2012-13.doc', alignment: 'left', margin: [40, 0, 0, 0], pageBreak: 'after'},
        /*PART A - Page 2*/
        {text: '\n1.6. Accreditation Details:', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                headerRows: 1,
                body: [
                    [{text: 'Sl. No.', style: 'tableHeader'}, {text: 'Cycle', style: 'tableHeader'}, {text: 'Grade', style: 'tableHeader'}, {text: 'CGPA', style: 'tableHeader'}, {text: 'Year of Accreditation', style: 'tableHeader'}, {text: 'Validity Period', style: 'tableHeader'}],
                    [{text: '1'}, {text: '1st Cycle'}, data['accreditation_details']['first_cycle']['grade'], data['accreditation_details']['first_cycle']['cgpa'], data['accreditation_details']['first_cycle']['year_of_accreditation'], data['accreditation_details']['first_cycle']['validity']],
                    [{text: '2'}, {text: '2nd Cycle'}, data['accreditation_details']['second_cycle']['grade'], data['accreditation_details']['second_cycle']['cgpa'], data['accreditation_details']['second_cycle']['year_of_accreditation'], data['accreditation_details']['second_cycle']['validity']],
                    [{text: '3'}, {text: '3rd Cycle'}, data['accreditation_details']['third_cycle']['grade'], data['accreditation_details']['third_cycle']['cgpa'], data['accreditation_details']['third_cycle']['year_of_accreditation'], data['accreditation_details']['third_cycle']['validity']],
                    [{text: '4'}, {text: '4th Cycle'}, data['accreditation_details']['fourth_cycle']['grade'], data['accreditation_details']['fourth_cycle']['cgpa'], data['accreditation_details']['fourth_cycle']['year_of_accreditation'], data['accreditation_details']['fourth_cycle']['validity']],
                ]
            }
        },
        {text: '\n1.7. Date of Establishment of IQAC (DD/MM/YY):', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['iqac_establishment_date'], alignment: 'justify'}]
                ]
            },
            margin: [300, -15, 0, 0]
        },
        {text: '\n1.8. AQAR for the year (for example 2010-11):', alignment: 'left', bold: true},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['aqar_of_the_year'], alignment: 'justify'}]
                ]
            },
            margin: [300, -15, 0, 0]
        },
        {text: '\n1.9. Details of the previous year’s AQAR submitted to NAAC after the latest Assessment and Accreditation by NAAC ((for example AQAR 2010-11 submitted to NAAC on 12-10-2011):', alignment: 'left'},
        {text: '\ni. AQAR (DD/MM/YY):', alignment: 'left', margin: [40, 0, 0, 0]},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['previous_aqar_submissions']['prev_aqar_submission1']['aqar_date'], alignment: 'justify'}]
                ]
            },
            margin: [300, -15, 0, 0]
        },
        {text: '\nii. AQAR (DD/MM/YY):', alignment: 'left', margin: [40, 0, 0, 0]},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['previous_aqar_submissions']['prev_aqar_submission2']['aqar_date'], alignment: 'justify'}]
                ]
            },
            margin: [300, -15, 0, 0]
        },
        {text: '\niii. AQAR (DD/MM/YY):', alignment: 'left', margin: [40, 0, 0, 0]},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['previous_aqar_submissions']['prev_aqar_submission3']['aqar_date'], alignment: 'justify'}]
                ]
            },
            margin: [300, -15, 0, 0]
        },
        {text: '\niv. AQAR (DD/MM/YY):', alignment: 'left', margin: [40, 0, 0, 0]},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['previous_aqar_submissions']['prev_aqar_submission4']['aqar_date'], alignment: 'justify'}]
                ]
            },
            margin: [300, -15, 0, 0]
        },
        {text: '\n1.10. Institutional Status:', alignment: 'left'},
        {text: '\nUniversity:', alignment: 'left', margin: [40, 0, 0, 0]},
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        {text: "State", style: 'tableHeader'},
                        {text: "Central", style: 'tableHeader'},
                        {text: "Deemed", style: 'tableHeader'},
                        {text: "Private", style: 'tableHeader'}
                    ],
                    [{text: data['institutional_status']['university']['state'], alignment: 'justify'}, {text: data['institutional_status']['university']['central'], alignment: 'justify'}, {text: data['institutional_status']['university']['deemed'], alignment: 'justify'}, {text: data['institutional_status']['university']['private_uni'], alignment: 'justify'}]
                ]
            },
            margin: [300, -15, 0, 0]
        },
        {text: '\nAffiliated College:', alignment: 'left', margin: [40, 0, 0, 0]},
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        {text: "Yes", style: 'tableHeader'},
                        {text: "No", style: 'tableHeader'}
                    ],
                    [{text: data['institutional_status']['affliated_college']['yes'], alignment: 'justify'}, {text: data['institutional_status']['affliated_college']['no'], alignment: 'justify'}]
                ]
            },
            margin: [300, -15, 0, 0]
        },
        {text: '\nConstituent College:', alignment: 'left', margin: [40, 0, 0, 0]},
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        {text: "Yes", style: 'tableHeader'},
                        {text: "No", style: 'tableHeader'}
                    ],
                    [{text: data['institutional_status']['constituent_college']['yes'], alignment: 'justify'}, {text: data['institutional_status']['constituent_college']['no'], alignment: 'justify'}]
                ]
            },
            margin: [300, -15, 0, 0]
        },
        {text: '\nAutonomous College of UGC:', alignment: 'left', margin: [40, 0, 0, 0]},
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        {text: "Yes", style: 'tableHeader'},
                        {text: "No", style: 'tableHeader'}
                    ],
                    [{text: data['institutional_status']['autonomous_college_of_ugc']['yes'], alignment: 'justify'}, {text: data['institutional_status']['autonomous_college_of_ugc']['no'], alignment: 'justify'}]
                ]
            },
            margin: [300, -15, 0, 0]
        },
        {text: '\nRegulatory Agency Approved Institution:\n(eg. AICTE, BCI, MCI, PCI, NCI)', alignment: 'left', margin: [40, 0, 0, 0]},
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        {text: "Yes", style: 'tableHeader'},
                        {text: "No", style: 'tableHeader'}
                    ],
                    [{text: data['institutional_status']['regulatory_agency_approved_institute']['yes'], alignment: 'justify'}, {text: data['institutional_status']['regulatory_agency_approved_institute']['no'], alignment: 'justify'}]
                ]
            },
            margin: [300, -30, 0, 0]
        },
        {text: '\n\nType of Institution:', alignment: 'left', margin: [40, 0, 0, 0]},
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        {text: "Co-Education", style: 'tableHeader'},
                        {text: "Men", style: 'tableHeader'},
                        {text: "Women", style: 'tableHeader'}
                    ],
                    [{text: data['institutional_status']['type_of_institution1']['co_ed'], alignment: 'justify'}, {text: data['institutional_status']['type_of_institution1']['men'], alignment: 'justify'}, {text: data['institutional_status']['type_of_institution1']['women'], alignment: 'justify'}]
                ]
            },
            margin: [300, -20, 0, 0]
        },
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        {text: "Urban", style: 'tableHeader'},
                        {text: "Rural", style: 'tableHeader'},
                        {text: "Tribal", style: 'tableHeader'}
                    ],
                    [{text: data['institutional_status']['type_of_institution2']['urban'], alignment: 'justify'}, {text: data['institutional_status']['type_of_institution2']['rural'], alignment: 'justify'}, {text: data['institutional_status']['type_of_institution2']['tribal'], alignment: 'justify'}]
                ]
            },
            margin: [300, 10, 0, 0],
            pageBreak: 'after'
        },
        /* PART A PAGE 3*/
        {text: '\nFinancial Status:', alignment: 'left', margin: [40, 0, 0, 0]},
        {
            style: 'tableExample',
            table: {
                body: [
                    ["Grant-in-Aid", "UGC 2(f)", "UGC 12B", "Grant-in-Aid + Self-Financing", "Totally Self-Financing"],
                    [
                        {text: data['institutional_status']['financial_status']['grant_in_aid'], alignment: 'justify'},
                        {text: data['institutional_status']['financial_status']['ugc_2f'], alignment: 'justify'},
                        {text: data['institutional_status']['financial_status']['ugc_12b'], alignment: 'justify'},
                        {text: data['institutional_status']['financial_status']['grant_in_aid_plus_self_finance'], alignment: 'justify'},
                        {text: data['institutional_status']['financial_status']['totally_self_finance'], alignment: 'justify'}
                    ]
                ]
            },
            margin: [140, -15, 0, 0]
        },
        {text: '\n1.11. Type of Faculty/Programme:', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: "Arts", alignment: 'left'}, {text: data['faculty_and_programme_type']['arts'], alignment: 'justify'}],
                    [{text: "Science", alignment: 'left'}, {text: data['faculty_and_programme_type']['science'], alignment: 'justify'}],
                    [{text: "Commerce", alignment: 'left'}, {text: data['faculty_and_programme_type']['commerce'], alignment: 'justify'}],
                    [{text: "Law", alignment: 'left'}, {text: data['faculty_and_programme_type']['law'], alignment: 'justify'}],
                    [{text: "PEI (Phys Edu)", alignment: 'left'}, {text: data['faculty_and_programme_type']['pei'], alignment: 'justify'}],
                    [{text: "TEI (Edu)", alignment: 'left'}, {text: data['faculty_and_programme_type']['tei'], alignment: 'justify'}],
                    [{text: "Engineering", alignment: 'left'}, {text: data['faculty_and_programme_type']['engineering'], alignment: 'justify'}],
                    [{text: "Health Science", alignment: 'left'}, {text: data['faculty_and_programme_type']['health_science'], alignment: 'justify'}],
                    [{text: "Management", alignment: 'left'}, {text: data['faculty_and_programme_type']['management'], alignment: 'justify'}],
                    [{text: "Others", alignment: 'left'}, {text: data['faculty_and_programme_type']['others'], alignment: 'justify'}]
                ]
            },
            margin: [200, 10, 0, 0]
        },
        {text: '\n1.12. Name of the Affiliating University (for the Colleges):\n', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['affliating_uni_name'], alignment: 'justify'}]
                ]
            },
            margin: [300, -15, 0, 0]
        },
        {text: '\n1.13. Special status conferred by Central/ State Government-- UGC/CSIR/DST/DBT/ICMR etc:\n\n', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: "Autonomy by State/Central Govt./University", alignment: "left"}, {text: data['special_status']['state_cental_govt_uni_autonomy'], alignment: 'justify'}],
                    [{text: "University with Potential for Excellence", alignment: "left"}, {text: data['special_status']['uni_with_potential_for_exellence'], alignment: 'justify'}],
                    [{text: "DST Star Scheme", alignment: "left"}, {text: data['special_status']['dst_star_scheme'], alignment: 'justify'}],
                    [{text: "UGC-Special Assistance Programme", alignment: "left"}, {text: data['special_status']['ugc_special_assistance_program'], alignment: 'justify'}],
                    [{text: "UGC-Innovative PG Programmes", alignment: "left"}, {text: data['special_status']['ugc_innovative_pg_program'], alignment: 'justify'}],
                    [{text: "UGC-COP Programmes", alignment: "left"}, {text: data['special_status']['ugc_cop'], alignment: 'justify'}],
                    [{text: "UGC-CPE", alignment: "left"}, {text: data['special_status']['ugc_cpe'], alignment: 'justify'}],
                    [{text: "UGC-CE", alignment: "left"}, {text: data['special_status']['ugc_ce'], alignment: 'justify'}],
                    [{text: "DST-FIST", alignment: "left"}, {text: data['special_status']['dst_fist'], alignment: 'justify'}],
                    [{text: "Any Other (Specify)", alignment: "left"}, {text: data['special_status']['any_other'], alignment: 'justify'}],
                ]
            },
            margin: [100, 0, 0, 0],
            pageBreak: 'after'
        },
        /* PART A - PART 2 */
        {text: '2. IQAC Composition and Activities', style: 'subheader', alignment: 'left'},
        {text: '\n2.1. No. of Teachers:', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['no_of_teachers'], alignment: 'justify'}]
                ]
            },
            margin: [350, -15, 0, 0]
        },
        {text: '\n2.2. No. of Administrative/Technical staff', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['no_of_tech_admin_staff'], alignment: 'justify'}]
                ]
            },
            margin: [350, -15, 0, 0]
        },
        {text: '\n2.3. No. of Students:', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['no_of_students'], alignment: 'justify'}]
                ]
            },
            margin: [350, -15, 0, 0]
        },
        {text: '\n2.4. No. of Management Representatives:', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['no_of_management_reps'], alignment: 'justify'}]
                ]
            },
            margin: [350, -15, 0, 0]
        },
        {text: '\n2.5. No. of Alumni:', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['no_of_alumni'], alignment: 'justify'}]
                ]
            },
            margin: [350, -15, 0, 0]
        },
        {text: '\n2.6. No. of Any Other Stakeholder and Community Representatives:', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['no_of_other_stakeholders_community_reps'], alignment: 'justify'}]
                ]
            },
            margin: [350, -15, 0, 0]
        },
        {text: '\n2.7. No. of Employers/Industrialists:', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['no_of_employers_industrialists'], alignment: 'justify'}]
                ]
            },
            margin: [350, -15, 0, 0]
        },
        {text: '\n2.8. No. of Other External Experts:', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['no_of_other_external_experts'], alignment: 'justify'}]
                ]
            },
            margin: [350, -15, 0, 0]
        },
        {text: '\n2.9. Total No. of Members:', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['total_no_of_members'], alignment: 'justify'}]
                ]
            },
            margin: [350, -15, 0, 0]
        },
        {text: '\n2.10. No. of IQAC meetings held:', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['no_of_iqac_meetings_held'], alignment: 'justify'}]
                ]
            },
            margin: [350, -15, 0, 0]
        },
        {text: '\n2.11. No. of meetings with various stakeholders:\n\n', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        {text: "Total", style: 'tableHeader'},
                        {text: "Faculty", style: 'tableHeader'},
                        {text: "Non-Teaching Staff Students", style: 'tableHeader'},
                        {text: "Alumni", style: 'tableHeader'},
                        {text: "Others", style: 'tableHeader'}
                    ],
                    [
                        {text: data['no_of_meetings_with_various_stakeholders']['No'], alignment: 'justify'},
                        {text: data['no_of_meetings_with_various_stakeholders']['faculty'], alignment: 'justify'},
                        {text: data['no_of_meetings_with_various_stakeholders']['non_teaching_staff_students'], alignment: 'justify'},
                        {text: data['no_of_meetings_with_various_stakeholders']['alumni'], alignment: 'justify'},
                        {text: data['no_of_meetings_with_various_stakeholders']['others'], alignment: 'justify'}
                    ]
                ]
            },
            margin: [40, 0, 0, 0]
        },
        {text: '\n2.12. Has IQAC received any funding from UGC During the Year?:', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        {text: "Yes", style: 'tableHeader'},
                        {text: "No", style: 'tableHeader'}
                    ],
                    [
                        {text: data['ugc_funding_for_iqac']['yes'], alignment: 'justify'},
                        {text: data['ugc_funding_for_iqac']['no'], alignment: 'justify'}
                    ]
                ]
            },
            margin: [350, -15, 0, 0]
        },
        {text: '\nIf Yes, Mention the Amount:', alignment: 'left', margin: [40, 0, 0, 0]},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['ugc_funding_for_iqac']['yes_amount'], alignment: 'justify'}]
                ]
            },
            margin: [350, -15, 0, 0]
        },
        {text: '\n2.13. Seminars and Conferences (Only Quality Related):', alignment: 'left'},
        {text: '\n(i) No. of Seminars/Conferences/Workshops/Symposia organized by the IQAC\n\n', alignment: 'left', margin: [20, 5, 0, 15]},
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        {text: "Total", style: 'tableHeader'},
                        {text: "International", style: 'tableHeader'},
                        {text: "National", style: 'tableHeader'},
                        {text: "State", style: 'tableHeader'},
                        {text: "Institution Level", style: 'tableHeader'}
                    ],
                    [
                        {text: data['seminars_conferences']['events_organized_by_iqac']['total_no'], alignment: 'justify'},
                        {text: data['seminars_conferences']['events_organized_by_iqac']['international'], alignment: 'justify'},
                        {text: data['seminars_conferences']['events_organized_by_iqac']['national'], alignment: 'justify'},
                        {text: data['seminars_conferences']['events_organized_by_iqac']['state'], alignment: 'justify'},
                        {text: data['seminars_conferences']['events_organized_by_iqac']['institution_level'], alignment: 'justify'}
                    ]
                ]
            },
            margin: [40, 0, 0, 0]
        },
        {text: '\n(ii) Themes:', alignment: 'left', margin: [20, 5, 0, 15]},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['seminars_conferences']['themes'], alignment: 'justify'}]
                ]
            },
            margin: [100, -30, 0, 0]
        },
        {text: '\n2.14. Significant Activities and Contributions made by IQAC:\n\n', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['significant_contributions_activities_by_iqac'], alignment: 'justify'}]
                ]
            },
            margin: [40, 0, 0, 0],
            pageBreak: 'after'
        },
        /* PART A - Part 3 */
        {text: '\n2.15. Plan of Action by IQAC/Outcome:', alignment: 'left'},
        {text:
            [
                {text: 'The plan of action chalked out by the IQAC in the beginning of the year towards quality enhancement and the outcome achieved by the end of the year *', alignment: 'left'},
                {text: "\n* Attach the Academic Calendar of the year as Annexure\n\n", italics: true, alignment: 'left'}
            ],
            margin: [28, 0, 0, 0]
        },
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        {text: "Plan of Action", style: 'tableHeader'},
                        {text:  "Achievements", style: 'tableHeader'}
                     ],
                    [
                        {text: data['iqac_plan_of_action']['plan_of_action'], alignment: 'justify'},
                        {text: data['iqac_plan_of_action']['achievements'], alignment: 'justify'}
                    ]
                ]
            },
            margin: [40, 0, 0, 0]
        },
        {text: '\n2.16. Whether the AQAR was Placed in Statutory Body:\n\n', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        {text: "Yes", style: 'tableHeader'},
                        {text: "No", style: 'tableHeader'},
                        {text: "Management", style: 'tableHeader'},
                        {text: "Syndicate", style: 'tableHeader'},
                        {text: "Any Other Body", style: 'tableHeader'}
                    ],
                    [
                        data['placement_of_aqar_in_statutory_body']['yes'],
                        data['placement_of_aqar_in_statutory_body']['no'],
                        data['placement_of_aqar_in_statutory_body']['type_of_statutory_body']['management'],
                        data['placement_of_aqar_in_statutory_body']['type_of_statutory_body']['syndicate'],
                        data['placement_of_aqar_in_statutory_body']['type_of_statutory_body']['any_other_body']
                    ]
                ]
            },
            margin: [40, 0, 0, 0]
        },
        {text: '\nProvide the details of the action taken:\n\n', alignment: 'left', margin: [40, 0, 0, 0]},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['placement_of_aqar_in_statutory_body']['details_of_action_taken'], alignment: 'justify'}]
                ]
            },
            margin: [40, 0, 0, 0],
            pageBreak: 'after'
        },
        /* PART B - CRITERION I */
        {text: 'Part - A', style: 'header', bold: false},
        {text: 'Criterion - I', style: 'header', alignment: 'left'},
        {text: '1. Curricular Aspects', style: 'subheader', alignment: 'left'},
        {text: '1.1. Details about Academic Programmes:\n', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        {text: "Level of the Programme", style: 'tableHeader'},
                        {text: "Number of existing Programmes", style: 'tableHeader'},
                        {text: "Number of programmes added during the year", style: 'tableHeader'},
                        {text: "Number of self-financing programmes", style: 'tableHeader'},
                        {text: "Number of value added/Career Oriented programmes", style: 'tableHeader'}
                    ],
                    [
                        {text: "PhD", alignment: 'left'},
                        {text: data['academic_program_details']['phd']['existing_program_count'], alignment: 'justify'},
                        {text: data['academic_program_details']['phd']['added_program_count'], alignment: 'justify'},
                        {text: data['academic_program_details']['phd']['self_finance_program_count'], alignment: 'justify'},
                        {text: data['academic_program_details']['phd']['career_oriented_program_count'], alignment: 'justify'}
                    ],
                    [
                        {text: "PG", alignment: 'left'},
                        {text: data['academic_program_details']['pg']['existing_program_count'], alignment: 'justify'},
                        {text: data['academic_program_details']['pg']['added_program_count'], alignment: 'justify'},
                        {text: data['academic_program_details']['pg']['self_finance_program_count'], alignment: 'justify'},
                        {text: data['academic_program_details']['pg']['career_oriented_program_count'], alignment: 'justify'}
                    ],
                    [
                        {text: "UG", alignment: 'left'},
                        {text: data['academic_program_details']['ug']['existing_program_count'], alignment: 'justify'},
                        {text: data['academic_program_details']['ug']['added_program_count'], alignment: 'justify'},
                        {text: data['academic_program_details']['ug']['self_finance_program_count'], alignment: 'justify'},
                        {text: data['academic_program_details']['ug']['career_oriented_program_count'], alignment: 'justify'}
                    ],
                    [
                        {text: "PG Diploma", alignment: 'left'},
                        {text: data['academic_program_details']['pg_diploma']['existing_program_count'], alignment: 'justify'},
                        {text: data['academic_program_details']['pg_diploma']['added_program_count'], alignment: 'justify'},
                        {text: data['academic_program_details']['pg_diploma']['self_finance_program_count'], alignment: 'justify'},
                        {text: data['academic_program_details']['pg_diploma']['career_oriented_program_count'], alignment: 'justify'}
                    ],
                    [
                        {text: "Advanced Diploma", alignment: 'left'},
                        {text: data['academic_program_details']['adv_diploma']['existing_program_count'], alignment: 'justify'},
                        {text: data['academic_program_details']['adv_diploma']['added_program_count'], alignment: 'justify'},
                        {text: data['academic_program_details']['adv_diploma']['self_finance_program_count'], alignment: 'justify'},
                        {text: data['academic_program_details']['adv_diploma']['career_oriented_program_count'], alignment: 'justify'}
                    ],
                    [
                        {text: "Diploma", alignment: 'left'},
                        {text: data['academic_program_details']['diploma']['existing_program_count'], alignment: 'justify'},
                        {text: data['academic_program_details']['diploma']['added_program_count'], alignment: 'justify'},
                        {text: data['academic_program_details']['diploma']['self_finance_program_count'], alignment: 'justify'},
                        {text: data['academic_program_details']['diploma']['career_oriented_program_count'], alignment: 'justify'}
                    ],
                    [
                        {text: "Certificate", alignment: 'left'},
                        {text: data['academic_program_details']['certificate']['existing_program_count'], alignment: 'justify'},
                        {text: data['academic_program_details']['certificate']['added_program_count'], alignment: 'justify'},
                        {text: data['academic_program_details']['certificate']['self_finance_program_count'], alignment: 'justify'},
                        {text: data['academic_program_details']['certificate']['career_oriented_program_count'], alignment: 'justify'}
                    ],
                    [
                        {text: "Others", alignment: 'left'},
                        {text: data['academic_program_details']['others']['existing_program_count'], alignment: 'justify'},
                        {text: data['academic_program_details']['others']['added_program_count'], alignment: 'justify'},
                        {text: data['academic_program_details']['others']['self_finance_program_count'], alignment: 'justify'},
                        {text: data['academic_program_details']['others']['career_oriented_program_count'], alignment: 'justify'}
                    ],
                    [
                        {text: "Total", alignment: 'right', bold: true},
                        {text: data['academic_program_details']['total']['existing_program_count'], alignment: 'justify'},
                        {text: data['academic_program_details']['total']['added_program_count'], alignment: 'justify'},
                        {text: data['academic_program_details']['total']['self_finance_program_count'], alignment: 'justify'},
                        {text: data['academic_program_details']['total']['career_oriented_program_count'], alignment: 'justify'}
                    ],
                    [
                        {text: "Interdisciplinary", alignment: 'left'},
                        {text: data['academic_program_details']['interdisciplinary']['existing_program_count'], alignment: 'justify'},
                        {text: data['academic_program_details']['interdisciplinary']['added_program_count'], alignment: 'justify'},
                        {text: data['academic_program_details']['interdisciplinary']['self_finance_program_count'], alignment: 'justify'},
                        {text: data['academic_program_details']['interdisciplinary']['career_oriented_program_count'], alignment: 'justify'}
                    ],
                    [
                        {text: "Innovative", alignment: 'left'},
                        {text: data['academic_program_details']['innovative']['existing_program_count'], alignment: 'justify'},
                        {text: data['academic_program_details']['innovative']['added_program_count'], alignment: 'justify'},
                        {text: data['academic_program_details']['innovative']['self_finance_program_count'], alignment: 'justify'},
                        {text: data['academic_program_details']['innovative']['career_oriented_program_count'], alignment: 'justify'}
                    ],
                ]
            },
            margin: [20, 0, 0, 0]
        },
        {text: '\n1.2. (i) Flexibility of the Curriculum: ', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        {text: "CBCS", style: 'tableHeader'},
                        {text: "Core", style: 'tableHeader'},
                        {text: "Elective Option", style: 'tableHeader'},
                        {text: "Open Options", style: 'tableHeader'}
                    ],
                    [
                        {text: data['curriculum_flexibility']['cbcs'], alignment: 'justify'},
                        {text: data['curriculum_flexibility']['core'], alignment: 'justify'},
                        {text: data['curriculum_flexibility']['elective_option'], alignment: 'justify'},
                        {text: data['curriculum_flexibility']['open_option'], alignment: 'justify'}
                    ]
                ]
            },
            margin: [20, 0, 0, 0]
        },
        {text: '\n(ii) Pattern of programmes:', alignment: 'left', margin: [20, 0, 0, 0]},
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        {text: "Pattern", style: 'tableHeader'},
                        {text: "Number of Programmes", style: 'tableHeader'}
                    ],
                    [
                        "Semester",
                        {text: data['pattern_of_programmes']['semester']['no_of_programmes'], alignment: 'justify'},
                    ],
                    [
                        "Trimester",
                        {text: data['pattern_of_programmes']['trimester']['no_of_programmes'], alignment: 'justify'},
                    ],
                    [
                        "Annual",
                        {text: data['pattern_of_programmes']['annual']['no_of_programmes'], alignment: 'justify'},
                    ]
                ]
            },
            margin: [20, 0, 0, 0]
        },
        {text: '\n1.3. Feedback from stakeholders*: (On all aspects)', alignment: 'left'},
        {text: '*Please provide an analysis of the feedback in the Annexure\n', alignment: 'left', italics: true, margin: [20, 0, 0, 0]},
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        {text: "Alumni", style: 'tableHeader'},
                        {text: "Parents", style: 'tableHeader'},
                        {text: "Employers", style: 'tableHeader'},
                        {text: "Students", style: 'tableHeader'}
                    ],
                    [
                        {text: data['stakeholder_feedback']['alumni'], alignment: 'justify'},
                        {text: data['stakeholder_feedback']['parents'], alignment: 'justify'},
                        {text: data['stakeholder_feedback']['employers'], alignment: 'justify'},
                        {text: data['stakeholder_feedback']['student'], alignment: 'justify'}
                    ]
                ]
            },
            margin: [20, 0, 0, 0]
        },
        {text: '\nMode of Feedback:\n', alignment: 'left', margin: [20, 0, 0, 0]},
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        {text: "Online", style: 'tableHeader'},
                        {text: "Manual", style: 'tableHeader'},
                        {text: "Co-operating schools (for PEI)", style: 'tableHeader'}
                    ],
                    [
                        {text: data['mode_of_feedback']['online'], alignment: 'justify'},
                        {text: data['mode_of_feedback']['manual'], alignment: 'justify'},
                        {text: data['mode_of_feedback']['coop_school'], alignment: 'justify'}
                    ]
                ]
            },
            margin: [20, 0, 0, 0]
        },
        {text: '\n1.4. Whether there is any revision/update of regulation or syllabi, if yes, mention their salient aspects.:\n', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['syllabus_revision_feedback'], alignment: 'justify'}]
                ]
            },
            margin: [20, 0, 0, 0],

            pageBreak: 'after'
        },
        {text: '\n1.5. Any new Department/Centre introduced during the year. If yes, give details:\n', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['new_dept_introduced'], alignment: 'justify'}]
                ]
            },
            margin: [20, 0, 0, 0],
        },
        {text: "\n\n"},
        /* CRITERION II */
        {text: 'Criterion - II', style: 'header', alignment: 'left'},
        {text: '2. Teaching, Learning and Evaluation', style: 'subheader', alignment: 'left'},
        {text: '2.1. Total No. of Permanent Faculty:', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                headerRows: 1,
                body: [
                    [{text: 'Total', style: 'tableHeader'}, {text: 'Asst. Professors', style: 'tableHeader'}, {text: 'Associate Professors', style: 'tableHeader'}, {text: 'Professors', style: 'tableHeader'}, {text: 'Others', style: 'tableHeader'}],
                    [data['permanent_faculty']['asst_prof'], data['permanent_faculty']['asso_prof'], data['permanent_faculty']['prof'], data['permanent_faculty']['others'], data['permanent_faculty']['total']]
                ]
            },
            margin: [20, 5, 0, 15]
        },
        {text: '2.2. No. of Permanent Faculty with Ph.D:', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                widths: [50],
                body: [
                    [data['permanent_faculty_phd']]
                ]
            },
            margin: [20, 5, 0, 15]
        },
        {text: '2.3. No. of Faculty Positions Recruited (R) and Vacant (V) during the Year:', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                headerRows: 1,
                body: [
                    [{text: 'Asst. Professors', style: 'tableHeader', colSpan: 2}, {}, {text: 'Associate Professors', style: 'tableHeader', colSpan: 2}, {}, {text: 'Professors', style: 'tableHeader', colSpan: 2}, {}, {text: 'Others', style: 'tableHeader', colSpan: 2}, {}, {text: 'Total', style: 'tableHeader', colSpan: 2}, {}],
                    [{text: 'R'}, {text:'V'}, {text: 'R'}, {text:'V'}, {text: 'R'}, {text:'V'}, {text: 'R'}, {text:'V'}, {text: 'R'}, {text:'V'}],
                    [data['faculty_pos_recruited_vacant']['asst_prof']['recruited'], data['faculty_pos_recruited_vacant']['asst_prof']['vacant'], data['faculty_pos_recruited_vacant']['asso_prof']['recruited'], data['faculty_pos_recruited_vacant']['asso_prof']['vacant'], data['faculty_pos_recruited_vacant']['prof']['recruited'], data['faculty_pos_recruited_vacant']['prof']['vacant'], data['faculty_pos_recruited_vacant']['others']['recruited'], data['faculty_pos_recruited_vacant']['others']['vacant'], data['faculty_pos_recruited_vacant']['total']['recruited'], data['faculty_pos_recruited_vacant']['total']['vacant']]
                ]
            },
            margin: [20, 5, 0, 15]
        },
        {text: '2.4. No. of Guest and Visiting Faculty and Temporary Faculty:', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: 'Guest', style: 'tableHeader'}, {text: 'Visiting', style: 'tableHeader'}, {text: 'Temporary', style: 'tableHeader'}],
                    [data['guest_visit_temp_faculty']['guest'], data['guest_visit_temp_faculty']['visiting'], data['guest_visit_temp_faculty']['temporary']]
                ]
            },
            margin: [20, 5, 0, 15]
        },
        {text: '2.5. Faculty Participation in Conferences and Symposia:', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                headerRows: 1,
                body: [
                    [{text: 'No. Of Faculty', style: 'tableHeader'}, {text: 'International Level', style: 'tableHeader'}, {text: 'National Level', style: 'tableHeader'}, {text: 'State Level', style: 'tableHeader'}],
                    [{text: 'Attended'}, data['faculty_participation']['international']['seminar_workshop'], data['faculty_participation']['international']['paper_presented'], data['faculty_participation']['international']['resource_persons']],
                    [{text: 'Presented Papers'}, data['faculty_participation']['national']['seminar_workshop'], data['faculty_participation']['national']['paper_presented'], data['faculty_participation']['national']['resource_persons']],
                    [{text: 'Resource Persons'}, data['faculty_participation']['state']['seminar_workshop'], data['faculty_participation']['state']['paper_presented'], data['faculty_participation']['state']['resource_persons']]
                ]
            },
            margin: [20, 5, 0, 15]
        },
        {text: '2.6. Innovative Processes Adopted by the Institution in Teaching and Learning:', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['innovative_process_adopted'], alignment: 'justify'}]
                ]
            },
            margin: [20, 5, 0, 15]
        },
        {text: '2.7. Total No. of Actual Teaching Days during this Academic Year:', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                widths: [50],
                body: [
                    [data['actual_teaching_days']]
                ]
            },
            margin: [20, 5, 0, 15]
        },
        {text: '2.8. Examination/Evaluation Reforms Initiated by the Institution (For Example: Open Book Examination, Bar Coding, Double Valuation, Photocopy, Online Multiple Choice Questions):', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                widths: [50],
                body: [
                    [data['exam_reforms_initiated']]
                ]
            },
            margin: [20, 5, 0, 15]
        },
        {text: '2.9. No. of Faculty Members Involved in Curriculum Restructuring/Revision/Syllabus Development as Member of Board of Study/Faculty/Curriculum Development workshop:', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                widths: [50, 50, 50],
                body: [
                    [
                        data['curriculum_incharge_faculty_members']['curriculum_revision'], data['curriculum_incharge_faculty_members']['member_board'], data['curriculum_incharge_faculty_members']['faculty_dev_workshop']
                    ]
                ]
            },
            margin: [20, 5, 0, 15],
            pageBreak: 'after'
        },
        /* CRITERION II PAGE 2 */
        {text: '2.10. Average Percentage of Attendance of Students:', alignment: 'left'},
        {
            style: 'tableExample',
            table: {
                widths: [50],
                body: [
                    [data['avg_student_attendance']]
                ]
            },
            margin: [20, 5, 0, 15]
        },
        {
            text: '2.11. Course/Programme Wise Distribution of Pass Percentage:',
            alignment: 'left'
        },
        {
            style: 'tableExample',
            table: {
                widths: ['auto', 'auto', 100, 50, 50, 50, 50],
                headerRows: 2,
                body: pass_percent
            },
            margin: [20, 5, 0, 15]
        },
        {
            text: '2.12. How does IQAC Contribute/Monitor/Evaluate the Teaching & Learning Processes:', alignment: 'left'
        },
        {
            style: 'tableExample',
            table: {
                body: [
                    [{text: data['iqac_contribution'], alignment: 'justify'}]
                ]
            },
            margin: [20, 5, 0, 15]
        },
        {
            text: '2.13. Initiatives Undertaken Towards Faculty Development:',
            alignment: 'left'
        },
        {
            style: 'tableExample',
            table: {
                headerRows: 1,
                body: [
                    [{text: 'Faculty/Staff Development Programmes', style: 'tableHeader'}, {text: 'Number of Faculty Benefitted', style: 'tableHeader'}],
                    [{text: 'Refresher Courses', alignment: 'left'}, data['faculty_dev_initiative']['refresher_courses']],
                    [{text: 'UGC – Faculty Improvement Programme', alignment: 'left'}, data['faculty_dev_initiative']['ugc_fac_improvement_prog']],
                    [{text: 'HRD Programmes', alignment: 'left'}, data['faculty_dev_initiative']['hrd_programme']],
                    [{text: 'Orientation Programmes', alignment: 'left'}, data['faculty_dev_initiative']['orientation_programme']],
                    [{text: 'Faculty Exchange Programme', alignment: 'left'}, data['faculty_dev_initiative']['fac_exchange_programme']],
                    [{text: 'Staff Training Conducted by the University', alignment: 'left'}, data['faculty_dev_initiative']['staff_training_univ']],
                    [{text: 'Staff Training Conducted by Other Institutions', alignment: 'left'}, data['faculty_dev_initiative']['staff_training_other']],
                    [{text: 'Summer/Winter schools, Workshops etc.', alignment: 'left'}, data['faculty_dev_initiative']['summer_winter_workshops']],
                    [{text: 'Others', alignment: 'left'}, data['faculty_dev_initiative']['others']]
                ]
            },
            margin: [20, 5, 0, 15]
        },
        {
            text: '2.14 Details of Administrative and Technical Staff:',
            alignment: 'left'
        },
        {
            style: 'tableExample',
            table: {
                headerRows: 1,
                body: [
                    [{text: 'Category', style: 'tableHeader'}, {text: 'Number of Permanent Employees', style: 'tableHeader'}, {text: 'Number of Vacant Positions', style: 'tableHeader'}, {text: 'Number of Permanent Positions Filled during the Year', style: 'tableHeader'}, {text: 'Number of Positions Filled Temporarily', style: 'tableHeader'}],
                    [{text: 'Administrative Staff', alignment: 'left'}, data['admin_tech_staff']['permanent_employees']['admin'], data['admin_tech_staff']['vacant_positions']['admin'], data['admin_tech_staff']['permanent_positions_filled']['admin'], data['admin_tech_staff']['temporary_positions_filled']['admin']],
                    [{text: 'Technical Staff', alignment: 'left'}, data['admin_tech_staff']['permanent_employees']['technical'], data['admin_tech_staff']['vacant_positions']['technical'], data['admin_tech_staff']['permanent_positions_filled']['technical'], data['admin_tech_staff']['temporary_positions_filled']['technical']]
                ]
            },
            pageBreak: 'after',
            margin: [20, 5, 0, 15]
        },
        /* CRITERION III */
        {
        	text: 'Criterion - III',
        	style: 'header',
        	alignment: 'left'
        },
        {
        	text: '3. Research, Consultancy and Extension',
        	style: 'subheader',
        	alignment: 'left'
        },
        {
        	text: '3.1. Initiatives of the IQAC in Sensitizing/Promoting Research Climate in the institution:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				{text: data['iqac_initiatives_promoting_research'], alignment: 'justify'}
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '3.2. Details regarding Major Projects:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		headerRows: 1,
        		body: [
                    [
                        {text: '	', style: 'tableHeader'},
                        {text: 'Completed', style: 'tableHeader'},
                        {text: 'Ongoing', style: 'tableHeader'},
                        {text: 'Sanctioned', style: 'tableHeader'},
                        {text: 'Submitted', style: 'tableHeader'},
                    ],
                    [
                        {text: 'Number'},
                        data['major_project_details']['completed']['number'],
                        data['major_project_details']['ongoing']['number'],
                        data['major_project_details']['sanctioned']['number'],
                        data['major_project_details']['submitted']['number'],
                    ],
                    [
                        {text: 'Outlay in Rs. Lakhs'},
                        data['major_project_details']['completed']['outlay_in_lakhs'],
                        data['major_project_details']['ongoing']['outlay_in_lakhs'],
                        data['major_project_details']['sanctioned']['outlay_in_lakhs'],
                        data['major_project_details']['submitted']['outlay_in_lakhs'],
                    ],
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '3.3. Details regarding Minor Projects:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		headerRows: 1,
        		body: [
                    [
                        {text: '	', style: 'tableHeader'},
                        {text: 'Completed', style: 'tableHeader'},
                        {text: 'Ongoing', style: 'tableHeader'},
                        {text: 'Sanctioned', style: 'tableHeader'},
                        {text: 'Submitted', style: 'tableHeader'},
                    ],
                    [
                        {text: 'Number'},
                        data['minor_project_details']['completed']['number'],
                        data['minor_project_details']['ongoing']['number'],
                        data['minor_project_details']['sanctioned']['number'],
                        data['minor_project_details']['submitted']['number'],
                    ],
                    [
                        {text: 'Outlay in Rs. Lakhs'},
                        data['minor_project_details']['completed']['outlay_in_lakhs'],
                        data['minor_project_details']['ongoing']['outlay_in_lakhs'],
                        data['minor_project_details']['sanctioned']['outlay_in_lakhs'],
                        data['minor_project_details']['submitted']['outlay_in_lakhs'],
                    ],
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '3.4. Details on Research Publications:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		headerRows: 1,
        		body: [
                    [
                        {text: '', style: 'tableHeader'},
                        {text: 'International', style: 'tableHeader'},
                        {text: 'National', style: 'tableHeader'},
                        {text: 'Others', style: 'tableHeader'},
                    ],
                    [
                        {text: 'Peer Review Journals'},
                        data['research_publication_details']['international']['peer_review_journals'],
                        data['research_publication_details']['national']['peer_review_journals'],
                        data['research_publication_details']['others']['peer_review_journals'],
                    ],
                    [
                        {text: 'Non-Peer Review Journals'},
                        data['research_publication_details']['international']['non_peer_review_journals'],
                        data['research_publication_details']['national']['non_peer_review_journals'],
                        data['research_publication_details']['others']['non_peer_review_journals'],
                    ],
                    [
                        {text: 'e-Journals'},
                        data['research_publication_details']['international']['e_journals'],
                        data['research_publication_details']['national']['e_journals'],
                        data['research_publication_details']['others']['e_journals'],
                    ],
                    [
                        {text: 'Conference Proceedings'},
                        data['research_publication_details']['international']['conference_proceedings'],
                        data['research_publication_details']['national']['conference_proceedings'],
                        data['research_publication_details']['others']['conference_proceedings'],
                    ]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '3.5. Details on Impact Factor of Publications:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				{text: 'Range', style: 'tableHeader'},
        				{text: 'Average', style: 'tableHeader'},
        				{text: 'h-index', style: 'tableHeader'},
        				{text: 'Nos. in SCOPUS', style: 'tableHeader'},
        			],
        			[
        				data['impact_factor_publication_details']['range'],
        				data['impact_factor_publication_details']['average'],
        				data['impact_factor_publication_details']['index'],
        				data['impact_factor_publication_details']['nos_of_scopus']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '3.6. Research funds sanctioned and received from various funding agencies, industry and other organisations:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		headerRows: 1,
        		body: [
                    [
                        {text: 'Nature of the Project', style: 'tableHeader'},
                        {text: 'Duration Year', style: 'tableHeader'},
                        {text: 'Name of Funding Agency', style: 'tableHeader'},
                        {text: 'Total Grant Sanctioned', style: 'tableHeader'},
                        {text: 'Received', style: 'tableHeader'},
                    ],
                    [
                        {text: 'Major Projects'},
                        data['research_funds_sanctioned']['major_project']['duration_year'],
                        data['research_funds_sanctioned']['major_project']['funding_agency_name'],
                        data['research_funds_sanctioned']['major_project']['total_grant_sanctioned'],
                        data['research_funds_sanctioned']['major_project']['received'],
                    ],
                    [
                        {text: 'Minor Projects'},
                        data['research_funds_sanctioned']['minor_project']['duration_year'],
                        data['research_funds_sanctioned']['minor_project']['funding_agency_name'],
                        data['research_funds_sanctioned']['minor_project']['total_grant_sanctioned'],
                        data['research_funds_sanctioned']['minor_project']['received'],
                    ],
                    [
                        {text: 'Interdisciplinary Projects'},
                        data['research_funds_sanctioned']['interdisciplinary_project']['duration_year'],
                        data['research_funds_sanctioned']['interdisciplinary_project']['funding_agency_name'],
                        data['research_funds_sanctioned']['interdisciplinary_project']['total_grant_sanctioned'],
                        data['research_funds_sanctioned']['interdisciplinary_project']['received'],
                    ],
                    [
                        {text: 'Industry Sponsored'},
                        data['research_funds_sanctioned']['industry_sponsored']['duration_year'],
                        data['research_funds_sanctioned']['industry_sponsored']['funding_agency_name'],
                        data['research_funds_sanctioned']['industry_sponsored']['total_grant_sanctioned'],
                        data['research_funds_sanctioned']['industry_sponsored']['received'],
                    ],
                    [
                        {text: 'Projects Sponsored by University/College'},
                        data['research_funds_sanctioned']['uni_sponsored_project']['duration_year'],
                        data['research_funds_sanctioned']['uni_sponsored_project']['funding_agency_name'],
                        data['research_funds_sanctioned']['uni_sponsored_project']['total_grant_sanctioned'],
                        data['research_funds_sanctioned']['uni_sponsored_project']['received'],
                    ],
                    [
                        {text: 'Students Research Projects (other than compulsory by University)'},
                        data['research_funds_sanctioned']['other_student_research_project']['duration_year'],
                        data['research_funds_sanctioned']['other_student_research_project']['funding_agency_name'],
                        data['research_funds_sanctioned']['other_student_research_project']['total_grant_sanctioned'],
                        data['research_funds_sanctioned']['other_student_research_project']['received'],
                    ],
                    [
                        {text: 'Any Other (Specify)'},
                        data['research_funds_sanctioned']['any_other_specify']['duration_year'],
                        data['research_funds_sanctioned']['any_other_specify']['funding_agency_name'],
                        data['research_funds_sanctioned']['any_other_specify']['received'],
                        data['research_funds_sanctioned']['any_other_specify']['total_grant_sanctioned'],
                    ],
                    [
                        {text: 'Total'},
                        data['research_funds_sanctioned']['total']['duration_year'],
                        data['research_funds_sanctioned']['total']['funding_agency_name'],
                        data['research_funds_sanctioned']['total']['total_grant_sanctioned'],
                        data['research_funds_sanctioned']['total']['received'],
                    ]
        		]
        	},
            margin: [20, 5, 0, 15],
            pageBreak: 'after'
        },
        /* CRITERION III PAGE 2 */
        {
        	text: '3.7. No. of Books Published:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				{text: 'With ISBN No.', style: 'tableHeader'},
        				{text: 'Without ISBN No.', style: 'tableHeader'},
        				{text: 'Chapters in Edited Books', style: 'tableHeader'},
        			],
        			[
        				data['no_of_books_published']['with_isbn_no'],
        				data['no_of_books_published']['without_isbn_no'],
        				data['no_of_books_published']['chapters_in_edited_books'],
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '3.8. No. of University Departments receiving Funds from:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				{text: 'UGC-SAP', style: 'tableHeader'},
        				{text: 'DPE', style: 'tableHeader'},
        				{text: 'CAS', style: 'tableHeader'},
        				{text: 'DST-FIST', style: 'tableHeader'},
        				{text: 'DBT Scheme/Funds', style: 'tableHeader'},
        			],
        			[
        				data['no_of_uni_depts_receiving_funds']['ugc_sap'],
        				data['no_of_uni_depts_receiving_funds']['cas'],
        				data['no_of_uni_depts_receiving_funds']['dst_fist'],
        				data['no_of_uni_depts_receiving_funds']['dpe'],
        				data['no_of_uni_depts_receiving_funds']['dbt_scheme_funds']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '3.9. For Colleges:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				{text: 'Autonomy', style: 'tableHeader'},
        				{text: 'INSPIRE', style: 'tableHeader'},
        				{text: 'CPE', style: 'tableHeader'},
        				{text: 'CE', style: 'tableHeader'},
        				{text: 'DBT Star Scheme', style: 'tableHeader'},
        				{text: 'Any Other (Specify)', style: 'tableHeader'},
        			],
        			[
        				data['for_colleges']['autonomy'],
        				data['for_colleges']['inspire'],
        				data['for_colleges']['cpe'],
        				data['for_colleges']['ce'],
        				data['for_colleges']['dbt_star_scheme'],
        				data['for_colleges']['any_other_specify']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '3.10. Revenue Generated through Consultancy:',
        	alignment: 'left'
        },
        {
            style: 'tableExample',
            table: {
                body: [
                    [data['revenue_generated_through_consultancy']]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '3.11. No. of Conferences Organized by the Institution:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		headerRows: 1,
        		body: [
                    [
                        {text: 'Level', style: 'tableHeader'},
                        {text: 'International', style: 'tableHeader'},
                        {text: 'National', style: 'tableHeader'},
                        {text: 'State', style: 'tableHeader'},
                        {text: 'University', style: 'tableHeader'},
                        {text: 'College', style: 'tableHeader'},
                    ],
                    [
                        {text: 'Number'},
                        data['conferences_organized_by_institution']['number']['international'],
                        data['conferences_organized_by_institution']['number']['national'],
                        data['conferences_organized_by_institution']['number']['state'],
                        data['conferences_organized_by_institution']['number']['university'],
                        data['conferences_organized_by_institution']['number']['college'],
                    ],
                    [
                        {text: 'Sponsoring Agencies'},
                        data['conferences_organized_by_institution']['sponsoring_agencies']['international'],
                        data['conferences_organized_by_institution']['sponsoring_agencies']['national'],
                        data['conferences_organized_by_institution']['sponsoring_agencies']['state'],
                        data['conferences_organized_by_institution']['sponsoring_agencies']['university'],
                        data['conferences_organized_by_institution']['sponsoring_agencies']['college'],
                    ],
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '3.12. No. of Faculty served as Experts, Chairpersons or Resource Persons:',
        	alignment: 'left'
        },
        {
            style: 'tableExample',
            table: {
                widths: [50],
                body: [
                    [data['no_of_faculty_served_chairperson_resource_expert']]
        		]
            },
            margin: [20, 5, 0, 15],
        },
        {
        	text: '3.13. No. of Collaborations:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				{text: 'International', style: 'tableHeader'},
        				{text: 'National', style: 'tableHeader'},
        				{text: 'Any other', style: 'tableHeader'},
        			],
        			[
        				data['no_of_collaborations']['international'],
        				data['no_of_collaborations']['national'],
        				data['no_of_collaborations']['any_other'],
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '3.14. No. of Linkages created during this Year:',
        	alignment: 'left'
        },
        {
            style: 'tableExample',
            table: {
                widths: [50],
                body: [
                    [data['no_of_linkages_created_during_the_year']]
        		]
            },
            margin: [20, 5, 0, 15],
        },
        {
        	text: '3.15. Total Budget for Research for Current Year in Lakhs:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				{text: 'From Funding Agency', style: 'tableHeader'},
        				{text: 'From Management of University/College', style: 'tableHeader'},
        				{text: 'Total', style: 'tableHeader'},
        			],
        			[
        				data['current_year_research_budget_in_lakhs']['from_funding_agency'],
        				data['current_year_research_budget_in_lakhs']['from_uni_college'],
        				data['current_year_research_budget_in_lakhs']['total'],
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '3.16. No. of Patents received this Year:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		headerRows: 1,
        		body: [
                    [
                        {text: 'Type of Patent', style: 'tableHeader'},
                        {},
                        {text: 'Number', style: 'tableHeader'},

                    ],
        			[
        				{text: 'National', rowSpan: 2},
                        {text: 'Applied'},
                        data['no_of_patents']['national']['applied'],
        			],
        			[
                        {},
                        {text:'Granted'},
                        data['no_of_patents']['national']['granted'],
        			],
        			[
                        {text: 'International', rowSpan: 2},
                        {text: 'Applied'},
                        data['no_of_patents']['international']['applied'],
        			],
                    [
                        {},
                        {text:'Granted'},
                        data['no_of_patents']['international']['granted'],
                    ],
                    [
                        {text: 'Commercialised', rowSpan: 2},
                        {text: 'Applied'},
                        data['no_of_patents']['commercialized']['applied'],
                    ],
                    [
                        {},
                        {text:'Granted'},
                        data['no_of_patents']['commercialized']['granted'],
                    ]
                ]
            },
            margin: [20, 5, 0, 15],
            pageBreak: 'after'
        },
        /* CRITERION III PAGE 3*/
        {
        	text: '3.17. No. of Research Awards/Recognitions received by Faculty and Research Fellows of the Institute in the Year',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				{text: 'Total', style: 'tableHeader'},
        				{text: 'International', style: 'tableHeader'},
        				{text: 'National', style: 'tableHeader'},
        				{text: 'State', style: 'tableHeader'},
        				{text: 'University', style: 'tableHeader'},
        				{text: 'Dist', style: 'tableHeader'},
        				{text: 'College', style: 'tableHeader'},
        			],
        			[
        				data['no_of_awards_recognition_faculty_research_fellows']['total'],
        				data['no_of_awards_recognition_faculty_research_fellows']['international'],
        				data['no_of_awards_recognition_faculty_research_fellows']['national'],
        				data['no_of_awards_recognition_faculty_research_fellows']['state'],
        				data['no_of_awards_recognition_faculty_research_fellows']['university'],
        				data['no_of_awards_recognition_faculty_research_fellows']['district'],
        				data['no_of_awards_recognition_faculty_research_fellows']['college']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '3.18. No. of Faculty from the Institution who are Ph.D. Guides:',
        	alignment: 'left'
        },
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        data['faculty_count']['phd_guides'],
                    ]
                ]
            },
            margin: [20, 5, 0, 15],
        },
        {
            text: 'No. of Students registered under Them:',
            alignment: 'left'
        },
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        data['faculty_count']['students_registered_under_them'],
                    ]
                ]
            },
            margin: [20, 5, 0, 15],
        },
        {
        	text: '3.19. No. of Ph.D Awarded by Faculty from the Institution:',
        	alignment: 'left'
        },
        {
            style: 'tableExample',
            table: {
                widths: [50],
                body: [
                    [data['no_of_phd_awarded_institution_faculty']]
        		]
            },
            margin: [20, 5, 0, 15],
        },
        {
        	text: '3.20. No. of Research Scholars receiving the Fellowships (Newly Enrolled + Existing Ones):',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				{text: 'JRF', style: 'tableHeader'},
        				{text: 'SRF', style: 'tableHeader'},
        				{text: 'Project Fellows', style: 'tableHeader'},
        				{text: 'Any Other', style: 'tableHeader'},
        			],
        			[
        				data['no_of_research_scholars_receiving_fellowships']['jrf'],
        				data['no_of_research_scholars_receiving_fellowships']['srf'],
        				data['no_of_research_scholars_receiving_fellowships']['project_fellows'],
        				data['no_of_research_scholars_receiving_fellowships']['any_other']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '3.21. No. of Students Participated in NSS Events:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				{text: 'University Level', style: 'tableHeader'},
        				{text: 'National Level', style: 'tableHeader'},
        				{text: 'State Level', style: 'tableHeader'},
        				{text: 'International Level', style: 'tableHeader'},
        			],
        			[
        				data['nss_student_participants']['university_level'],
        				data['nss_student_participants']['national_level'],
        				data['nss_student_participants']['state_level'],
        				data['nss_student_participants']['international_level']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '3.22. No. of Students Participated in NCC Events:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				{text: 'University Level', style: 'tableHeader'},
        				{text: 'National Level', style: 'tableHeader'},
        				{text: 'State Level', style: 'tableHeader'},
        				{text: 'International Level', style: 'tableHeader'},
        			],
        			[
        				data['ncc_student_participation']['university_level'],
        				data['ncc_student_participation']['national_level'],
        				data['ncc_student_participation']['state_level'],
        				data['ncc_student_participation']['international_level']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '3.23. No. of Awards won in NSS:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				{text: 'University Level', style: 'tableHeader'},
        				{text: 'National Level', style: 'tableHeader'},
        				{text: 'State Level', style: 'tableHeader'},
        				{text: 'International Level', style: 'tableHeader'},
        			],
        			[
        				data['no_of_awards_in_nss']['university_level'],
        				data['no_of_awards_in_nss']['national_level'],
        				data['no_of_awards_in_nss']['state_level'],
        				data['no_of_awards_in_nss']['international_level']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '3.24. No. of Awards won in NCC:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				{text: 'University Level', style: 'tableHeader'},
        				{text: 'National Level', style: 'tableHeader'},
        				{text: 'State Level', style: 'tableHeader'},
        				{text: 'International Level', style: 'tableHeader'},
        			],
        			[
        				data['no_of_awards_in_ncc']['university_level'],
        				data['no_of_awards_in_ncc']['national_level'],
        				data['no_of_awards_in_ncc']['state_level'],
        				data['no_of_awards_in_ncc']['international_level']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '3.25. No. of Extension Activities Organized:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				{text: 'University Forum', style: 'tableHeader'},
        				{text: 'College Forum', style: 'tableHeader'},
        				{text: 'NCC', style: 'tableHeader'},
        				{text: 'NSS', style: 'tableHeader'},
        				{text: 'Any Other', style: 'tableHeader'},
        			],
        			[
        				data['no_of_extension_activities_organized']['university_forum'],
        				data['no_of_extension_activities_organized']['college_forum'],
        				data['no_of_extension_activities_organized']['ncc'],
        				data['no_of_extension_activities_organized']['nss'],
        				data['no_of_extension_activities_organized']['any_other']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '3.26. Major Activities during the Year in the Sphere of Extension Activities and Institutional Social Responsibility:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				{text: data['major_activities'], alignment: 'justify'}
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
            pageBreak: 'after'
        },
        /* CRITERION IV */
        {
        	text: 'Criterion - IV',
        	style: 'header',
        	alignment: 'left'
        },
        {
        	text: '4.1. Details of Increase in Infrastructure Facilities:',
        	style: 'subheader',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		headerRows: 1,
        		body: [
                    [
                        {text: 'Facilities', style: 'tableHeader'},
                        {text: 'Existing', style: 'tableHeader'},
                        {text: 'Newly Created', style: 'tableHeader'},
                        {text: 'Source of Fund', style: 'tableHeader'},
                        {text: 'Total', style: 'tableHeader'},
                    ],
                    [
                        {text: 'Campus Area'},
                        data['increase_in_infrastructure_details']['campus_area']['existing'],
                        data['increase_in_infrastructure_details']['campus_area']['newly_created'],
                        data['increase_in_infrastructure_details']['campus_area']['source_of_fund'],
                        data['increase_in_infrastructure_details']['campus_area']['total'],
                    ],
                    [
                        {text: 'Class Rooms'},
                        data['increase_in_infrastructure_details']['class_rooms']['existing'],
                        data['increase_in_infrastructure_details']['class_rooms']['newly_created'],
                        data['increase_in_infrastructure_details']['class_rooms']['source_of_fund'],
                        data['increase_in_infrastructure_details']['class_rooms']['total'],
                    ],
                    [
                        {text: 'Laboratories'},
                        data['increase_in_infrastructure_details']['laboratories']['existing'],
                        data['increase_in_infrastructure_details']['laboratories']['newly_created'],
                        data['increase_in_infrastructure_details']['laboratories']['source_of_fund'],
                        data['increase_in_infrastructure_details']['laboratories']['total'],
                    ],
                    [
                        {text: 'Seminar Halls'},
                        data['increase_in_infrastructure_details']['seminar_halls']['existing'],
                        data['increase_in_infrastructure_details']['seminar_halls']['newly_created'],
                        data['increase_in_infrastructure_details']['seminar_halls']['source_of_fund'],
                        data['increase_in_infrastructure_details']['seminar_halls']['total'],
                    ],
                    [
                        {text: 'No. of Important Equipments Purchased \n(>= 1-0 Lakh) during the Current Year'},
                        data['increase_in_infrastructure_details']['important_equipment_purchased']['existing'],
                        data['increase_in_infrastructure_details']['important_equipment_purchased']['newly_created'],
                        data['increase_in_infrastructure_details']['important_equipment_purchased']['source_of_fund'],
                        data['increase_in_infrastructure_details']['important_equipment_purchased']['total'],
                    ],
                    [
                        {text: 'Value of the Equipment Purchased during the \nYear (Rs. in Lakhs)'},
                        data['increase_in_infrastructure_details']['value_of_equipment_purchased_in_lakhs']['existing'],
                        data['increase_in_infrastructure_details']['value_of_equipment_purchased_in_lakhs']['newly_created'],
                        data['increase_in_infrastructure_details']['value_of_equipment_purchased_in_lakhs']['source_of_fund'],
                        data['increase_in_infrastructure_details']['value_of_equipment_purchased_in_lakhs']['total'],
                    ],
                    [
                        {text: 'Others'},
                        data['increase_in_infrastructure_details']['others']['existing'],
                        data['increase_in_infrastructure_details']['others']['newly_created'],
                        data['increase_in_infrastructure_details']['others']['source_of_fund'],
                        data['increase_in_infrastructure_details']['others']['total'],
                    ]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '4.2. Computerization of Administration and Library:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				{text: data['computerization_of_administration_and_library'], alignment: 'justify'}
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '4.3. Library Services:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		headerRows: 1,
        		body: [
                    [
                        {text: '', style: 'tableHeader'},
                        {text: 'Existing', style: 'tableHeader', colSpan: 2},
                        {},
                        {text: 'Newly Added', style: 'tableHeader', colSpan: 2},
                        {},
                        {text: 'Total', style: 'tableHeader', colSpan: 2},
                        {},
                    ],
                    [
                        {},
                        {text: 'No.'},
                        {text:'Value'},
                        {text: 'No.'},
                        {text:'Value'},
                        {text: 'No.'},
                        {text:'Value'},
                    ],
                    [
                        {text: 'Text Books'},
                        data['library_services']['text_books']['existing']['num'],
                        data['library_services']['text_books']['existing']['val'],
                        data['library_services']['text_books']['newly_added']['num'],
                        data['library_services']['text_books']['newly_added']['val'],
                        data['library_services']['text_books']['total']['num'],
                        data['library_services']['text_books']['total']['val']
                    ],
                    [
                        {text: 'Reference Books'},
                        data['library_services']['reference_books']['existing']['num'],
                        data['library_services']['reference_books']['existing']['val'],
                        data['library_services']['reference_books']['newly_added']['num'],
                        data['library_services']['reference_books']['newly_added']['val'],
                        data['library_services']['reference_books']['total']['num'],
                        data['library_services']['reference_books']['total']['val']
                    ],
                    [
                        {text: 'e-Books'},
                        data['library_services']['e_books']['existing']['num'],
                        data['library_services']['e_books']['existing']['val'],
                        data['library_services']['e_books']['newly_added']['num'],
                        data['library_services']['e_books']['newly_added']['val'],
                        data['library_services']['e_books']['total']['num'],
                        data['library_services']['e_books']['total']['val']
                    ],
                    [
                        {text: 'Journals'},
                        data['library_services']['journals']['existing']['num'],
                        data['library_services']['journals']['existing']['val'],
                        data['library_services']['journals']['newly_added']['num'],
                        data['library_services']['journals']['newly_added']['val'],
                        data['library_services']['journals']['total']['num'],
                        data['library_services']['journals']['total']['val']
                    ],
                    [
                        {text: 'e-Journals'},
                        data['library_services']['ejournals']['existing']['num'],
                        data['library_services']['ejournals']['existing']['val'],
                        data['library_services']['ejournals']['newly_added']['num'],
                        data['library_services']['ejournals']['newly_added']['val'],
                        data['library_services']['ejournals']['total']['num'],
                        data['library_services']['ejournals']['total']['val']
                    ],
                    [
                        {text: 'Digital Database'},
                        data['library_services']['digital_database']['existing']['num'],
                        data['library_services']['digital_database']['existing']['val'],
                        data['library_services']['digital_database']['newly_added']['num'],
                        data['library_services']['digital_database']['newly_added']['val'],
                        data['library_services']['digital_database']['total']['num'],
                        data['library_services']['digital_database']['total']['val']
                    ],
                    [
                        {text: 'CD & Video'},
                        data['library_services']['cd_video']['existing']['num'],
                        data['library_services']['cd_video']['existing']['val'],
                        data['library_services']['cd_video']['newly_added']['num'],
                        data['library_services']['cd_video']['newly_added']['val'],
                        data['library_services']['cd_video']['total']['num'],
                        data['library_services']['cd_video']['total']['val']
                    ],
                    [
                        {text: 'Others (Specify)'},
                        data['library_services']['other']['existing']['num'],
                        data['library_services']['other']['existing']['val'],
                        data['library_services']['other']['newly_added']['num'],
                        data['library_services']['other']['newly_added']['val'],
                        data['library_services']['other']['total']['num'],
                        data['library_services']['other']['total']['val']
                    ]
                ]
            },
            margin: [20, 5, 0, 15],
        },
        {
        	text: '4.4. Technology Up Graduation (Overall):',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		headerRows: 1,
        		body: [
        			[
        				{text: '', style: 'tableHeader'},
        				{text: 'Existing', style: 'tableHeader'},
        				{text: 'Added', style: 'tableHeader'},
        				{text: 'Total', style: 'tableHeader'},
        			],
        			[
        				{text: 'Total Computers', style: 'tableHeader'},
        				data['tech_upgrade']['total_computers']['existing'],
        				data['tech_upgrade']['total_computers']['added'],
        				data['tech_upgrade']['total_computers']['total'],
        			],
        			[
        				{text: 'Computer Labs', style: 'tableHeader'},
        				data['tech_upgrade']['computer_labs']['existing'],
        				data['tech_upgrade']['computer_labs']['added'],
        				data['tech_upgrade']['computer_labs']['total'],
        			],
        			[
        				{text: 'Internet', style: 'tableHeader'},
        				data['tech_upgrade']['internet']['existing'],
        				data['tech_upgrade']['internet']['added'],
        				data['tech_upgrade']['internet']['total'],
        			],
        			[
        				{text: 'Browsing Centres', style: 'tableHeader'},
        				data['tech_upgrade']['browsing_centres']['existing'],
        				data['tech_upgrade']['browsing_centres']['added'],
        				data['tech_upgrade']['browsing_centres']['total'],
        			],
                    [
                        {text: 'Computer Centres', style: 'tableHeader'},
        				data['tech_upgrade']['computer_centres']['existing'],
        				data['tech_upgrade']['computer_centres']['added'],
        				data['tech_upgrade']['computer_centres']['total'],
        			],
        			[
        				{text: 'Office', style: 'tableHeader'},
        				data['tech_upgrade']['office']['existing'],
        				data['tech_upgrade']['office']['added'],
        				data['tech_upgrade']['office']['total'],
        			],
        			[
        				{text: 'Departments', style: 'tableHeader'},
        				data['tech_upgrade']['departments']['existing'],
        				data['tech_upgrade']['departments']['added'],
        				data['tech_upgrade']['departments']['total'],
        			],
        			[
        				{text: 'Others', style: 'tableHeader'},
        				data['tech_upgrade']['others']['existing'],
        				data['tech_upgrade']['others']['added'],
        				data['tech_upgrade']['others']['total'],
        			],
        		]
        	},
            margin: [20, 5, 0, 15],
            pageBreak: 'after'
        },
        /* CRITERION IV PAGE 2 */
        {
        	text: '4.5. Computer, Internet Access, Training to Teachers and Students and any other Programme for Technology Upgradation (Networking, e-Governance etc.):',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				{text: data['computer_internet_access_training'], alignment: 'justify'}
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '4.6. Amount Spent on Maintenance in Lakhs:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				{text: 'ICT', style: 'tableHeader'},
        				{text: 'Campus Infrastucture and Facilities', style: 'tableHeader'},
        				{text: 'Equipments', style: 'tableHeader'},
        				{text: 'Others', style: 'tableHeader'},
        				{text: 'Total', style: 'tableHeader'},
        			],
        			[
        				data['maintenance_amount_in_lakhs']['ict'],
        				data['maintenance_amount_in_lakhs']['campus_infrastructure_facilities'],
        				data['maintenance_amount_in_lakhs']['equipment'],
        				data['maintenance_amount_in_lakhs']['other_maintenance'],
        				data['maintenance_amount_in_lakhs']['total'],
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        /* CRITERION V */
        {
        	text: 'Criterion - V',
        	style: 'header',
        	alignment: 'left'
        },
        {
        	text: '5. Student Support and Progression',
        	style: 'subheader',
        	alignment: 'left'
        },
        {
        	text: '5.1. Contribution of IQAC in Enhancing Awareness about Student Support Services:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				data['iqac_contribution_student_support_services']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '5.2. Effort made by the Institution for Tracking the Progression:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				data['efforts_tracking_progression']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '5.3.',
        	alignment: 'left'
        },
        {
        	text: '(a) Total Number of students',
        	alignment: 'left',
            margin: [20, 0, 0, 0]
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
                    [
                        {text: 'UG', style: 'tableHeader'},
                        {text: 'PG', style: 'tableHeader'},
                        {text: 'Ph. D.', style: 'tableHeader'},
                        {text: 'Others', style: 'tableHeader'}
                    ],
                    [
                        data['total_no_of_students']['ug_students'],
                        data['total_no_of_students']['pg_students'],
                        data['total_no_of_students']['phd_students'],
                        data['total_no_of_students']['other_students']
                    ]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '(b) No. of Students Outside the State:',
        	alignment: 'left',
            margin: [20, 0, 0, 0]
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
                        data['no_of_students_outside_the_state']
        			]
        		]
        	},
            margin: [250, -15, 0, 15],
        },
        {
        	text: '(c) No. of International Students:',
        	alignment: 'left',
            margin: [20, 0, 0, 0]
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
                    [
                        data['no_of_international_students']
                    ],
        		]
        	},
            margin: [250, -15, 0, 15],
        },
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        {},
                        {text: "Men", style: "tableHeader"},
                        {text: "Women", style: "tableHeader"}
                    ],
                    [
                        {text: "No."},
                        data['men']['students_number'],
                        data['women']['students_number'],
                    ],
                    [
                        {text: "%"},
                        data['men']['percentage'],
                        data['women']['percentage'],
                    ]
                ]
            },
            margin: [40, 5, 0, 15],
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
                    [
                        {text: "Last Year", style: 'tableHeader', colSpan: 6},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {text: "This Year", style: 'tableHeader', colSpan: 6},
                        {},
                        {},
                        {},
                        {},
                        {},
                    ],
                    [
                        "General",
                        "SC",
                        "ST",
                        "OBC",
                        "Physically Challenged",
                        "Total",
                        "General",
                        "SC",
                        "ST",
                        "OBC",
                        "Physically Challenged",
                        "Total"
                    ],
                    [
                        data['last_year']['general'],
                        data['last_year']['sc'],
                        data['last_year']['st'],
                        data['last_year']['obc'],
                        data['last_year']['physically_challenged'],
                        data['last_year']['students_total'],
                        data['this_year']['general'],
                        data['this_year']['sc'],
                        data['this_year']['st'],
                        data['this_year']['obc'],
                        data['this_year']['physically_challenged'],
                        data['this_year']['students_total']
                    ]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: 'Demand Ratio:',
        	alignment: 'left',
            margin: [40, 0, 0, 0]
        },
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        data['demand_ratio']
                    ],
                ]
            },
            margin: [120, -15, 0, 15],
        },
        {
        	text: 'Dropout %:',
        	alignment: 'left',
            margin: [40, 0, 0, 0]
        },
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        data['dropout_percentage']
                    ],
                ]
            },
            margin: [120, -15, 0, 15],
            pageBreak: 'after'
        },
        /* CRITERION V PAGE 2 */
        {
        	text: '5.4. Details of Student Support Mechanism for Coaching for Competitive Examinations (If any):',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				data['student_support_mechanism']
        			]
        		]
        	},
            margin: [20, 5, 0, 15]
        },
        {
        	text: 'No. of Students Beneficiaries:',
        	alignment: 'left',
            margin: [20, 0, 0, 0]
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				data['no_of_student_beneficiaries']
        			]
        		]
        	},
            margin: [200, -15, 0, 0],
        },
        {
        	text: '5.5. No. of students qualified in these examinations:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				{text: 'NET', style: 'tableHeader'},
        				{text: 'IAS/IPS etc', style: 'tableHeader'},
        				{text: 'SET/SLET', style: 'tableHeader'},
        				{text: 'State PSC', style: 'tableHeader'},
        				{text: 'GATE', style: 'tableHeader'},
        				{text: 'UPSC', style: 'tableHeader'},
        				{text: 'CAT', style: 'tableHeader'},
        				{text: 'Others', style: 'tableHeader'},
        			],
        			[
        				data['no_of_students_qualified_for_examinations']['net'],
        				data['no_of_students_qualified_for_examinations']['ias_ips'],
        				data['no_of_students_qualified_for_examinations']['set_slet'],
        				data['no_of_students_qualified_for_examinations']['state_psc'],
        				data['no_of_students_qualified_for_examinations']['gate'],
        				data['no_of_students_qualified_for_examinations']['upsc'],
        				data['no_of_students_qualified_for_examinations']['cat'],
        				data['no_of_students_qualified_for_examinations']['others']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '5.6. Details of Student Counselling and Career Guidance:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				data['student_counselling_career_guidance']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: 'No. of Students Benefitted:',
        	alignment: 'left',
            margin: [20, 0, 0, 0]
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				data['no_of_students_benefitted']
        			]
        		]
        	},
            margin: [200, -15, 0, 0]
        },
        {
        	text: '5.7. Details of Campus Placement:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		headerRows: 1,
        		body: [
        			[
        				{text: 'On Campus', style: 'tableHeader', colSpan: 3},
        				{},
        				{},
        				{text: 'Off Campus', style: 'tableHeader'},
        			],
        			[
        				{text: 'No. of Organizations Visited'},
        				{text:'No. of Students Participated'},
        				{text: 'No. of Students Placed'},
        				{text:'No. of Students Placed'},
        			],
        			[
        				data['campus_placement_details']['on_campus']['organizations_visited'],
        				data['campus_placement_details']['on_campus']['students_participated'],
        				data['campus_placement_details']['on_campus']['placed_students'],
        				data['campus_placement_details']['off_campus']['placed_students'],
        			]
                ]
            },
            margin: [20, 5, 0, 15],
        },
        {
        	text: '5.8. Details of Gender Sensitization Programmes:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				data['gender_sensitization_programmes']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '5.9. Students Activities:',
        	alignment: 'left'
        },
        {
        	text: '5.9.1 No. of Students Participated in Sports, Games and Other Events:\n\n',
        	alignment: 'left',
            margin: [20, 0, 0, 0]
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				{text: 'State/University Level', style: 'tableHeader'},
        				{text: 'National Level', style: 'tableHeader'},
        				{text: 'International Level', style: 'tableHeader'},
        			],
        			[
        				data['students_activities']['participation_sports_games_other_events']['state_uni_level'],
        				data['students_activities']['participation_sports_games_other_events']['national_level'],
        				data['students_activities']['participation_sports_games_other_events']['international_level'],
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: 'No. of Students Participated in Cultural Events:',
        	alignment: 'left',
            margin: [20, 0, 0, 0]
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				{text: 'State/University Level', style: 'tableHeader'},
        				{text: 'National Level', style: 'tableHeader'},
        				{text: 'International Level', style: 'tableHeader'},
        			],
        			[
        				data['students_activities']['participation_cultural_events']['state_uni_level'],
        				data['students_activities']['participation_cultural_events']['national_level'],
        				data['students_activities']['participation_cultural_events']['international_level'],
        			]
        		]
        	},
            margin: [20, 5, 0, 15]
        },
        {
        	text: '5.9.2 No. of Medals/Awards Won by Students in Sports, Games and Other Events:\n\n',
        	alignment: 'left',
            margin: [20, 0, 0, 0]
        },
        {
        	text: 'Sports:',
        	alignment: 'left',
            margin: [20, 0, 0, 0]
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				{text: 'State/University Level', style: 'tableHeader'},
        				{text: 'National Level', style: 'tableHeader'},
        				{text: 'International Level', style: 'tableHeader'},
        			],
        			[
        				data['students_activities']['no_of_medals_awards']['sports_games']['state_uni_level'],
        				data['students_activities']['no_of_medals_awards']['sports_games']['national_level'],
        				data['students_activities']['no_of_medals_awards']['sports_games']['international_level']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: 'Cultural:',
        	alignment: 'left',
            margin: [20, 0, 0, 0]
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				{text: 'State/University Level', style: 'tableHeader'},
        				{text: 'National Level', style: 'tableHeader'},
        				{text: 'International Level', style: 'tableHeader'},
        			],
        			[
        				data['students_activities']['no_of_medals_awards']['culturals']['state_uni_level'],
        				data['students_activities']['no_of_medals_awards']['culturals']['national_level'],
        				data['students_activities']['no_of_medals_awards']['culturals']['international_level'],
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
            pageBreak: 'after'
        },
        /* CRITERION V PAGE 3 */
        {
        	text: '5.10. Scholarship and Financial Support:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		headerRows: 1,
        		body: [
        			[
        				{text: '	', style: 'tableHeader'},
        				{text: 'Financial Support from Institution', style: 'tableHeader'},
        				{text: 'Financial Support from Government', style: 'tableHeader'},
        				{text: 'Financial Support from Other Sources', style: 'tableHeader'},
        				{text: 'Number of Students who received International/National Recognitions', style: 'tableHeader'},
        			],
        			[
        				{text: 'Number of Students', style: 'tableHeader'},
        				data['scholarship_financial_support']['institute_finance_support']['student_no'],
        				data['scholarship_financial_support']['govt_financial_support']['student_no'],
        				data['scholarship_financial_support']['other_financial_support']['student_no'],
        				data['scholarship_financial_support']['international_national_recognition']['student_no'],
        			],
        			[
        				{text: 'Amount', style: 'tableHeader'},
        				data['scholarship_financial_support']['institute_finance_support']['amount_in_lakhs'],
        				data['scholarship_financial_support']['govt_financial_support']['amount_in_lakhs'],
        				data['scholarship_financial_support']['other_financial_support']['amount_in_lakhs'],
        				data['scholarship_financial_support']['international_national_recognition']['amount_in_lakhs'],
        			],
        		]
        	},
            margin: [20, 5, 0, 15]
        },
        {
        	text: '5.11 Students Organised/Initiatives:',
        	alignment: 'left'
        },
        {
        	text: 'Fairs:',
        	alignment: 'left',
            margin: [20, 0, 0, 0]
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				{text: 'State/University Level', style: 'tableHeader'},
        				{text: 'National Level', style: 'tableHeader'},
        				{text: 'International Level', style: 'tableHeader'},
        			],
        			[
        				data['student_organized_initiatives']['fairs']['state_uni_level'],
        				data['student_organized_initiatives']['fairs']['national_level'],
        				data['student_organized_initiatives']['fairs']['international_level'],
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: 'Exhibition:',
        	alignment: 'left',
            margin: [20, 0, 0, 0]
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				{text: 'State/University Level', style: 'tableHeader'},
        				{text: 'National Level', style: 'tableHeader'},
        				{text: 'International Level', style: 'tableHeader'},
        			],
        			[
        				data['student_organized_initiatives']['exhibition']['state_uni_level'],
        				data['student_organized_initiatives']['exhibition']['national_level'],
        				data['student_organized_initiatives']['exhibition']['international_level'],
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '5.12. No. of Social Initiatives Undertaken by the Students:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				data['social_initiatives_undertaken-by_students']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
            text: '5.13. Major Grievances of Students (if any) Redressed:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		body: [
        			[
        				data['major_grievances_of_students']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        /* CRITERION VI */
        {
        	text: 'Criterion - VI',
        	style: 'header',
        	alignment: 'left'
        },
        {
        	text: '6. Governance, Leadership and Management',
        	style: 'subheader',
        	alignment: 'left'
        },
        {
        	text: '6.1. State the Vision and Mission of the Institution:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		widths: [50],
        		body: [
        			[
        				data['vision_mission_institute']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '6.2. Does the Instituion have a Management Information System:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		widths: [50],
        		body: [
        			[
        				data['info_management_system']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '6.3. Quality Improvement Strategies Adopted by the Institution for Each of the Following:',
        	alignment: 'left'
        },
        {
        	text: '6.3.1. Curriculum Development:',
        	alignment: 'left',
            margin: [20, 5, 0, 0],
        },
        {
        	style: 'tableExample',
        	table: {
        		widths: [50],
        		body: [
        			[
        				data['improvement_strategies']['curriculum_development']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '6.3.2. Teaching and Learning:',
        	alignment: 'left',
            margin: [20, 5, 0, 0],
        },
        {
        	style: 'tableExample',
        	table: {
        		widths: [50],
        		body: [
        			[
        				data['improvement_strategies']['teaching_and_learning']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '6.3.3. Examination and Evaluation:',
        	alignment: 'left',
            margin: [20, 5, 0, 0],
        },
        {
        	style: 'tableExample',
        	table: {
        		widths: [50],
        		body: [
        			[
        				data['improvement_strategies']['exam_and_evaluation']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '6.3.4. Research and Development:',
        	alignment: 'left',
            margin: [20, 5, 0, 0],
        },
        {
        	style: 'tableExample',
        	table: {
        		widths: [50],
        		body: [
        			[
        				data['improvement_strategies']['research_and_development']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '6.3.5. Library, ICT and Physical Infrastructure/Instrumentation:',
        	alignment: 'left',
            margin: [20, 5, 0, 0],
        },
        {
        	style: 'tableExample',
        	table: {
        		widths: [50],
        		body: [
        			[
        				data['improvement_strategies']['physical_infrastructure']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '6.3.6. Human Resource Management:',
        	alignment: 'left',
            margin: [20, 5, 0, 0],
        },
        {
        	style: 'tableExample',
        	table: {
        		widths: [50],
        		body: [
        			[
        				data['improvement_strategies']['human_resource_management']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '6.3.7. Faculty and Staff Recruitment:',
        	alignment: 'left',
            margin: [20, 5, 0, 0],
        },
        {
        	style: 'tableExample',
        	table: {
        		widths: [50],
        		body: [
        			[
        				data['improvement_strategies']['faculty_staff_recruitment']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '6.3.8. Industry Interaction/Collaboration:',
        	alignment: 'left',
            margin: [20, 5, 0, 0],
        },
        {
        	style: 'tableExample',
        	table: {
        		widths: [50],
        		body: [
        			[
        				data['improvement_strategies']['industry_interaction_collab']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '6.3.9. Admission of Students:',
        	alignment: 'left',
            margin: [20, 5, 0, 0],
        },
        {
        	style: 'tableExample',
        	table: {
        		widths: [50],
        		body: [
        			[
        				data['improvement_strategies']['student_admission']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '6.4. Welfare Schemes for:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		headerRows: 1,
        		body: [
        			[
        				{text: 'Teaching', style: 'tableHeader'},
        				{text: 'Non-Teaching', style: 'tableHeader'},
        				{text: 'Students', style: 'tableHeader'},
        			],
        			[
        				data['welfare_scheme']['teaching'],
        				data['welfare_scheme']['non_teaching'],
        				data['welfare_scheme']['students'],
        			]
                ]
            },
            margin: [20, 5, 0, 15],
        },
        {
        	text: '6.5. Total Corpus Fund Generated:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		widths: [50],
        		body: [
        			[
        				data['corpus_fund']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '6.6. Whether Annual Financial Audit has been done:',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		headerRows: 1,
        		body: [
        			[
        				{text: 'Yes', style: 'tableHeader'},
        				{text: 'No', style: 'tableHeader'},
        			],
        			[
        				data['financial_audit']['yes'],
        				data['financial_audit']['no'],
        			]
                ]
            },
            margin: [20, 5, 0, 15],
        },
        {
        	text: '6.7. Whether Academic and Administrative Audit (AAA) has been done?',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		headerRows: 1,
        		body: [
        			[	{text: 'Audit Type', style: 'tableHeader', colSpan: 1},
        				{text: 'External', style: 'tableHeader', colSpan: 2},
        				{},
        				{text: 'Internal', style: 'tableHeader', colSpan: 2},
        				{},
        			],
        			[
                        {},
        				{text: 'Yes/No'},
        				{text:'Agency'},
        				{text: 'Yes/No'},
        				{text:'Authority'},
        			],
        			[
        				{text: 'Academic', style: 'tableHeader'},
        				data['academic_admin_audit']['academic']['external_yes_no'],
                        data['academic_admin_audit']['academic']['external_agency'],
                        data['academic_admin_audit']['academic']['internal_yes_no'],
        				data['academic_admin_audit']['academic']['internal_agency']
        			],
        			[
        				{text: 'Administrative', style: 'tableHeader'},
        				data['academic_admin_audit']['administrative']['external_yes_no'],
                        data['academic_admin_audit']['administrative']['external_agency'],
                        data['academic_admin_audit']['administrative']['internal_yes_no'],
        				data['academic_admin_audit']['administrative']['internal_agency']
        			],
                ]
            },
            margin: [20, 5, 0, 15],
        },
        {
        	text: '6.8. Does the University/Autonomous College declares Results within 30 Days?',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		headerRows: 1,
        		body: [
        			[
        				{text: '	', style: 'tableHeader'},
        				{text: 'Yes', style: 'tableHeader'},
        				{text: 'No', style: 'tableHeader'},
        			],
        			[
        				{text: 'For UG Programmes', style: 'tableHeader'},
        				data['result_declaration']['ug_programmes']['yes'],
        				data['result_declaration']['ug_programmes']['no']
        			],
        			[
        				{text: 'For PG Programmes', style: 'tableHeader'},
        				data['result_declaration']['pg_programmes']['yes'],
        				data['result_declaration']['pg_programmes']['no']
        			],
        		]
        	},
            margin: [20, 5, 0, 15],
            pageBreak: 'after'
        },
        {
        	text: '6.9. What efforts made by the University/Autonomous College for Examination Reforms?',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		widths: [50],
        		body: [
        			[
        				data['examination_reforms']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '6.10. What efforts made by the University to promote Autonomy in the Affiliated/Constituent Colleges?',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		widths: [50],
        		body: [
        			[
        				data['autonomy_promotion']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '6.11. Activities and Support from the Alumni Association',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		widths: [50],
        		body: [
        			[
        				data['alumni_activity_support']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '6.12. Activites and Support from the Parent - Teacher Association',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		widths: [50],
        		body: [
        			[
        				data['parent_teacher_activity_support']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '6.13. Development Programmes for Support Staff',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		widths: [50],
        		body: [
        			[
        				data['support_staff_development']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        {
        	text: '6.14. Initiatives taken by the Institution to make the Campus Eco-friendly',
        	alignment: 'left'
        },
        {
        	style: 'tableExample',
        	table: {
        		widths: [50],
        		body: [
        			[
        				data['eco_friendly_initiatives']
        			]
        		]
        	},
            margin: [20, 5, 0, 15],
        },
        /* CRITERION VII */
        {
            text: 'Criterion - VII',
            style: 'header',
            alignment: 'left'
        },
        {
            text: '7. Innovations and Best Practices',
            style: 'subheader',
            alignment: 'left'
        },
        {
            text: '7.1. Innovations introduced during this academic year which have created a positive impact on the functioning of the institution. Give details:',
            alignment: 'left'
        },
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        data['innovations_introduced_for_positive_impact']
                    ]
                ]
            },
            margin: [20, 5, 0, 15],
        },
        {
            text: '7.2. Provide the Action Taken Report (ATR) based on the plan of action decided upon at the beginning of the year:',
            alignment: 'left'
        },
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        data['action_taken_report']
                    ]
                ]
            },
            margin: [20, 5, 0, 15],
        },
        {
            text:
            [
                {text: '7.3. Give two Best Practices of the institution: '},
                {text: '(please see the format in the NAAC Self-study Manuals)', italics: true},
            ],
            alignment: 'left'
        },
        {
            text: '*Provide the details in annexure (annexure need to be numbered as i, ii,iii)',
            bold: true,
            margin: [20, 0, 0, 0],
            alignment: 'left'
        },
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        data['two_best_practices_of_institution']['practice1']
                    ],
                    [
                        data['two_best_practices_of_institution']['practice2']
                    ]
                ]
            },
            margin: [20, 5, 0, 15],
        },
        {
            text: '7.4. Contribution to environmental awareness/protection:',
            alignment: 'left'
        },
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        data['environment_awareness_protection_contribution']
                    ]
                ]
            },
            margin: [20, 5, 0, 15],
        },
        {
            text: '7.5. Whether environmental audit was conducted?:',
            alignment: 'left'
        },
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        {text: 'Yes', style: 'tableHeader'},
                        {text: 'No', style: 'tableHeader'}
                    ],
                    [
                        data['environment_audit_conducted']['yes'],
                        data['environment_audit_conducted']['no']
                    ]
                ]
            },
            margin: [20, 5, 0, 15],
        },
        {
            text: '7.6. Any other relevant information the institution wishes to add. (for example SWOT Analysis):',
            alignment: 'left'
        },
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        data['other_relevant_info']
                    ]
                ]
            },
            margin: [20, 5, 0, 15],
        },
        /* CRITERION VIII */
        {
            text: 'Criterion - VIII',
            style: 'header',
            alignment: 'left'
        },
        {
            text: '8. Plans of Institution for Next Year',
            style: 'subheader',
            alignment: 'left'
        },
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        data['plans_of_institution_next_year']
                    ]
                ]
            },
            margin: [20, 5, 0, 50],
        },
        {
            text: 'Name _____________________________ \t\t\t\tName ___________________________',
            alignment: 'left',
            italics: true
        },
        {
            text: '\n\n\n\n_____________________________ \t\t\t\t\t\t ___________________________',
            alignment: 'left',
            italics: true,
            margin: [30, 0, 0, 0]
        },
        {
            text: '\n\n Signature of the Coordinator, IQAC \t\t\t\t\t\t Signature of the Chairperson, IQAC',
            alignment: 'left',
            italics: true,
            margin: [30, 0, 0, 0]
        },
        {
            text: '\n_______***_______',
            alignment: 'left',
            margin: [200, 0, 0, 0],
            pageBreak: 'after'
        },
        /* ANNEXURE 1 */
        {
            text: "\n\n\nAnnexure I\n\n\n",
            alignment: 'left',
            margin: [200, 0, 0, 0]
        },
        {
            text: "Abbreviations:",
            alignment: 'left',
            bold: true,
            margin: [40, 0, 0, 0]
        },
        {
            columns: [
                {
                    width: 100,
                    text:
                    `
                    CAS
                    \nCAT
                    \nCBCS
                    \nCE
                    \nCOP
                    \nCPE
                    \nDPE
                    \nGATE
                    \nNET
                    \nPEI
                    \nSAP
                    \nSF
                    \nSLET
                    \nTEI
                    \nUPE
                    \nUPSC
                    `,
                    alignment: 'left',
                    margin: [40, 0, 0, 0]
                },
                {
                    width: 100,
                    text:
                    `
                    -
                    \n-
                    \n-
                    \n-
                    \n-
                    \n-
                    \n-
                    \n-
                    \n-
                    \n-
                    \n-
                    \n-
                    \n-
                    \n-
                    \n-
                    \n-
                    `,
                    alignment: 'center'
                },
                {
                    width: '*',
                    text:
                    `
                    Career Advanced Scheme
                    \nCommon Admission Test
                    \nChoice Based Credit System
                    \nCentre for Excellence
                    \nCareer Oriented Programme
                    \nCollege with Potential for Excellence
                    \nDepartment with Potential for Excellence
                    \nGraduate Aptitude Test
                    \nNational Eligibility Test
                    \nPhysical Education Institution
                    \nSpecial Assistance Programme
                    \nSelf Financing
                    \nState Level Eligibility Test
                    \nTeacher Education Institution
                    \nUniversity with Potential Excellence
                    \nUnion Public Service Commission
                    `,
                    alignment: 'left'
                }
            ],
            margin: [40, 0, 0, 0]
        },
        {
            text: '\n\n\n\n\n**************',
            alignment: 'left',
            margin: [200, 0, 0, 0]
        }
    ],
    styles: {
        mainheader: {
            fontSize: 24,
            bold: true,
            margin: [0, 0, 0, 0]
        },
        tagline: {
            fontSize: 12,
            italics: true,
            margin: [0, 0, 0, 0]
        },
        header: {
            fontSize: 18,
            bold: true,
            margin: [0, 0, 0, 0]
        },
        subheader: {
            fontSize: 16,
            bold: true,
            margin: [0, 10, 0, 5]
        },
        tableExample: {
            margin: [0, 5, 0, 15]
        },
        tableHeader: {
            bold: true,
            fontSize: 13,
            color: 'black'
        }
    },
    defaultStyle: {
        alignment: 'center'
    }

};

/* DO NOT TOUCH */
let make_pdf = () => {
    var pdfDoc = printer.createPdfKitDocument(documentDefinition);
    pdfDoc.pipe(fs.createWriteStream('iqac.pdf'));
    pdfDoc.end();
}

/* CALL THIS FUNCTION AND PDF IS GENERATED */
make_pdf()
