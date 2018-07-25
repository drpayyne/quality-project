// Part A
let mongoose = require('mongoose');

//Part A Schema
var PartAOneSchema = mongoose.Schema({
	department: { type: String, default: '' },
  institution_details : {
  institution_name : { type: String, default: '' },
  address_line_1 : { type: String, default: '' },
  address_line_2 : { type: String, default: '' },
  city_or_town : { type: String, default: '' },
  state : { type: String, default: '' },
  pincode : { type: Number, default: 0 },
  institute_email : { type: String, default: '' },
  contact_numbers : { type: String, default: '' },
  institution_head : { type: String, default: '' },
  telephone_no_with_std_code : { type: String, default: '' },
  mobile_number : { type: Number, default: 0 },
  iqac_coordinator : { type: String, default: '' },
  iqac_coordinator_mobile : { type: Number, default: 0 },
  iqac_email : { type: String, default: '' }
},
  naac_track_id : { type: String, default: '' },
  naac_executive_commitee_no_date : { type: String, default: '' },
  website_address :{ type: String, default: '' },
  aqar_web_link : { type: String, default: '' },
  accreditation_details : {
    first_cycle : {
      grade : { type: String, default: '' },
      cgpa : { type: Number, default: 0 },
      year_of_accreditation : { type: Number, default: 0 },
      validity : { type: Number, default: 0 }
    },
    second_cycle : {
      grade : { type: String, default: '' },
      cgpa : { type: Number, default: 0 },
      year_of_accreditation : { type: Number, default: 0 },
      validity : { type: Number, default: 0 }
    },
    third_cycle : {
      grade : { type: String, default: '' },
      cgpa : { type: Number, default: 0 },
      year_of_accreditation : { type: Number, default: 0 },
      validity : { type: Number, default: 0 }
    },
    fourth_cycle : {
      grade : { type: String, default: '' },
      cgpa : { type: Number, default: 0 },
      year_of_accreditation : { type: Number, default: 0 },
      validity : { type: Number, default: 0 }
    }
  },

  iqac_establishment_date : { type: String, default: '' },
  aqar_of_the_year : { type: String, default: '' },

  previous_aqar_submissions : { type: String, default: '' },

  institutional_status : {   //Option Based Answering
    university : { type: String, default: '' },
    affliated_college : { type: String, default: '' },
    constituent_college :{ type: String, default: '' },
    autonomous_college_of_ugc :{ type: String, default: '' },
    regulatory_agency_approved_institute :{ type: String, default: '' },
    type_of_institution1 :{ type: String, default: '' },
    type_of_institution2 : { type: String, default: '' },
    financial_status :{ type: String, default: '' }
  },

  faculty_and_programme_type : {   //Option Based Answering
    arts : { type: String, default: 'off' },
    science : { type: String, default: 'off' },
    commerce : { type: String, default: 'off' },
    law : { type: String, default: 'off' },
    pei : { type: String, default: 'off' },
    tei : { type: String, default: 'off' },
    engineering : { type: String, default: 'off' },
    health_science : { type: String, default: 'off' },
    management : { type: String, default: 'off' }
  },

  faculty_and_programme_type_other: { type: String, default: '' },

  affliating_uni_name : { type: String, default: '' },

  special_status : {
    state_cental_govt_uni_autonomy : { type: String, default: '' },
    uni_with_potential_for_exellence : { type: String, default: '' },
    ugc_cpe : { type: String, default: '' },
    ugc_ce : { type: String, default: '' },
    dst_star_scheme : { type: String, default: '' },
    dst_fist : { type: String, default: '' },
    ugc_special_assistance_program : { type: String, default: '' },
    ugc_innovative_pg_program : { type: String, default: '' },
    ugc_cop : { type: String, default: '' },
    any_other : { type: String, default: '' }
  }
  }, { retainKeyOrder: true });

module.exports = mongoose.model('HPartAOne', PartAOneSchema, 'part_a1');
