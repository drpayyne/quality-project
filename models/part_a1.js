// Part A
let mongoose = require('mongoose');

//Part A Schema
var PartAOneSchema = mongoose.Schema({
  institution_details : {
  institution_name : { type: String, default: null },
  address_line_1 : { type: String, default: null },
  address_line_2 : { type: String, default: null },
  city_or_town : { type: String, default: null },
  state : { type: String, default: null },
  pincode : { type: Number, default: null },
  institute_email : { type: String, default: null },
  contact_numbers : { type: String, default: null },
  institution_head : { type: String, default: null },
  telephone_no_with_std_code : { type: String, default: null },
  mobile_number : { type: Number, default: null },
  iqac_coordinator : { type: String, default: null },
  iqac_coordinator_mobile : { type: Number, default: null },
  iqac_email : { type: String, default: null }
},
  naac_track_id : { type: String, default: null },
  naac_executive_commitee_no_date : { type: String, default: null },
  website_address :{ type: String, default: null },
  aqar_web_link : { type: String, default: null },
  accreditation_details : {
    first_cycle : {
      grade : { type: String, default: null },
      cgpa : { type: Number, default: null },
      year_of_accreditation : { type: Number, default: null },
      validity : { type: Number, default: null }
    },
    second_cycle : {
      grade : { type: String, default: null },
      cgpa : { type: Number, default: null },
      year_of_accreditation : { type: Number, default: null },
      validity : { type: Number, default: null }
    },
    third_cycle : {
      grade : { type: String, default: null },
      cgpa : { type: Number, default: null },
      year_of_accreditation : { type: Number, default: null },
      validity : { type: Number, default: null }
    },
    fourth_cycle : {
      grade : { type: String, default: null },
      cgpa : { type: Number, default: null },
      year_of_accreditation : { type: Number, default: null },
      validity : { type: Number, default: null }
    }
  },

  iqac_establishment_date : Date,
  aqar_of_the_year : { type: String, default: null },

  previous_aqar_submissions : {
    prev_aqar_submission1 : {
      aqar_date : Date
    },
    prev_aqar_submission2 : {
      aqar_date : Date
    },
    prev_aqar_submission3 : {
      aqar_date : Date
    },
    prev_aqar_submission4 : {
      aqar_date : Date
    }
  },

  institutional_status : {   //Option Based Answering
    university : {
      state : { type: Number, default: null },
      central : { type: Number, default: null },
      deemed : { type: Number, default: null },
      private_uni : { type: Number, default: null }
    },
    affliated_college : {
      yes : { type: Number, default: null },
      no : { type: Number, default: null }
    },
    constituent_college : {
      yes : { type: Number, default: null },
      no : { type: Number, default: null }
    },
    autonomous_college_of_ugc : {
      yes : { type: Number, default: null },
      no : { type: Number, default: null }
    },
    regulatory_agency_approved_institute : {
      yes : { type: Number, default: null },
      no : { type: Number, default: null }
    },
    type_of_institution1 : {
      co_ed : { type: Number, default: null },
      men : { type: Number, default: null },
      women : { type: Number, default: null }
    },
    type_of_institution2 : {
      urban : { type: Number, default: null },
      rural : { type: Number, default: null },
      tribal : { type: Number, default: null }
    },
    financial_status : {
      grant_in_aid : { type: Number, default: null },
      ugc_2f : { type: Number, default: null },
      ugc_12b : { type: Number, default: null },
      grant_in_aid_plus_self_finance : { type: Number, default: null },
      totally_self_finance : { type: Number, default: null }
    }
  },

  faculty_and_programme_type : {   //Option Based Answering
    arts : { type: Number, default: null },
    science : { type: Number, default: null },
    commerce : { type: Number, default: null },
    law : { type: Number, default: null },
    pei : { type: Number, default: null },
    tei : { type: Number, default: null },
    engineering : { type: Number, default: null },
    health_science : { type: Number, default: null },
    management : { type: Number, default: null },
    others : { type: String, default: null }
  },

  affliating_uni_name : { type: String, default: null },

  special_status : {
    state_cental_govt_uni_autonomy : { type: String, default: null },
    uni_with_potential_for_exellence : { type: String, default: null },
    ugc_cpe : { type: String, default: null },
    ugc_ce : { type: String, default: null },
    dst_star_scheme : { type: String, default: null },
    dst_fist : { type: String, default: null },
    ugc_special_assistance_program : { type: String, default: null },
    ugc_innovative_pg_program : { type: String, default: null },
    ugc_cop : { type: String, default: null },
    any_other : { type: String, default: null }
  }
  }, { retainKeyOrder: true });

let PartAOne = module.exports = mongoose.model('PartAOne', PartAOneSchema, 'part_a1');
