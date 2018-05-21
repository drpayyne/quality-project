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
    cbcs : { type: String, default: 'off' },
    core : { type: String, default: 'off' },
    elective_option : { type: String, default: 'off' },
    open_option : { type: String, default: 'off' },
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
    alumni : { type: String, default: 'off' },
    parents : { type: String, default: 'off' },
    employers : { type: String, default: 'off' },
    student : { type: String, default: 'off' }
  },

  mode_of_feedback : {
    online : { type: String, default: 'off' },
    manual : { type: String, default: 'off' },
    coop_school : { type: String, default: 'off' }
  },

  syllabus_revision_feedback : { type: String, default: null },

  new_dept_introduced : { type: String, default: null }

}, { retainKeyOrder: true });

let CriterionOne = module.exports = mongoose.model('CriterionOne',criterionOneSchema,'criterion_one');
