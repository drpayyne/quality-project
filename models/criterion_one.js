// Criterion One Schema
let mongoose = require('mongoose');

var criterionOneSchema = mongoose.Schema({
	department: { type: String, default: null },
  academic_program_details :  {
    phd : {
      existing_program_count : { type: Number, default: null },
      added_program_count : { type: Number, default: null },
      self_finance_program_count : { type: Number, default: null },
      career_oriented_program_count : { type: Number, default: null }
    },
    pg : {
      existing_program_count : { type: Number, default: null },
      added_program_count : { type: Number, default: null },
      self_finance_program_count : { type: Number, default: null },
      career_oriented_program_count : { type: Number, default: null }
    },
    ug : {
      existing_program_count : { type: Number, default: null },
      added_program_count : { type: Number, default: null },
      self_finance_program_count : { type: Number, default: null },
      career_oriented_program_count : { type: Number, default: null }
    },
    pg_diploma : {
      existing_program_count : { type: Number, default: null },
      added_program_count : { type: Number, default: null },
      self_finance_program_count : { type: Number, default: null },
      career_oriented_program_count : { type: Number, default: null }
    },
    adv_diploma : {
      existing_program_count : { type: Number, default: null },
      added_program_count : { type: Number, default: null },
      self_finance_program_count : { type: Number, default: null },
      career_oriented_program_count : { type: Number, default: null }
    },
    diploma : {
      existing_program_count : { type: Number, default: null },
      added_program_count : { type: Number, default: null },
      self_finance_program_count : { type: Number, default: null },
      career_oriented_program_count : { type: Number, default: null }
    },
    certificate : {
      existing_program_count : { type: Number, default: null },
      added_program_count : { type: Number, default: null },
      self_finance_program_count : { type: Number, default: null },
      career_oriented_program_count : { type: Number, default: null }
    },
    others : {
      existing_program_count : { type: Number, default: null },
      added_program_count : { type: Number, default: null },
      self_finance_program_count : { type: Number, default: null },
      career_oriented_program_count : { type: Number, default: null }
    },
    total : {
      existing_program_count : { type: Number, default: null },
      added_program_count : { type: Number, default: null },
      self_finance_program_count : { type: Number, default: null },
      career_oriented_program_count : { type: Number, default: null }
    }, 
    interdisciplinary : {
      existing_program_count : { type: Number, default: null },
      added_program_count : { type: Number, default: null },
      self_finance_program_count : { type: Number, default: null },
      career_oriented_program_count : { type: Number, default: null }
    },
    innovative : {
      existing_program_count : { type: Number, default: null },
      added_program_count : { type: Number, default: null },
      self_finance_program_count : { type: Number, default: null },
      career_oriented_program_count : { type: Number, default: null }
    }
  },

  curriculum_flexibility : {
    cbcs : { type: Number, default: null },
    core : { type: Number, default: null },
    elective_option : { type: Number, default: null },
    open_option : { type: Number, default: null },
  },
  
  pattern_of_programmes : {
    semester : {
      no_of_programmes : { type: Number, default: null }
    },
    trimester : {
      no_of_programmes : { type: Number, default: null }
    },
    annual : {
      no_of_programmes : { type: Number, default: null }
    }
  },

  stakeholder_feedback : {
    alumni : { type: Number, default: null },
    parents : { type: Number, default: null },
    employers : { type: Number, default: null },
    student : { type: Number, default: null }
  },

  mode_of_feedback : {
    online : { type: Number, default: null },
    manual : { type: Number, default: null },
    coop_school : { type: Number, default: null }
  },

  syllabus_revision_feedback : { type: String, default: null },

  new_dept_introduced : { type: String, default: null }

}, { retainKeyOrder: true });

let CriterionOne = module.exports = mongoose.model('CriterionOne',criterionOneSchema,'criterion_one');
