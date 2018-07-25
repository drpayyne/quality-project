// Criterion One Schema
let mongoose = require('mongoose');

var criterionOneSchema = mongoose.Schema({
	department: { type: String, default: '' },
  academic_program_details :  {
    phd : {
      existing_program_count : { type: Number, default: 0 },
      added_program_count : { type: Number, default: 0 },
      self_finance_program_count : { type: Number, default: 0 },
      career_oriented_program_count : { type: Number, default: 0 }
    },
    pg : {
      existing_program_count : { type: Number, default: 0 },
      added_program_count : { type: Number, default: 0 },
      self_finance_program_count : { type: Number, default: 0 },
      career_oriented_program_count : { type: Number, default: 0 }
    },
    ug : {
      existing_program_count : { type: Number, default: 0 },
      added_program_count : { type: Number, default: 0 },
      self_finance_program_count : { type: Number, default: 0 },
      career_oriented_program_count : { type: Number, default: 0 }
    },
    pg_diploma : {
      existing_program_count : { type: Number, default: 0 },
      added_program_count : { type: Number, default: 0 },
      self_finance_program_count : { type: Number, default: 0 },
      career_oriented_program_count : { type: Number, default: 0 }
    },
    adv_diploma : {
      existing_program_count : { type: Number, default: 0 },
      added_program_count : { type: Number, default: 0 },
      self_finance_program_count : { type: Number, default: 0 },
      career_oriented_program_count : { type: Number, default: 0 }
    },
    diploma : {
      existing_program_count : { type: Number, default: 0 },
      added_program_count : { type: Number, default: 0 },
      self_finance_program_count : { type: Number, default: 0 },
      career_oriented_program_count : { type: Number, default: 0 }
    },
    certificate : {
      existing_program_count : { type: Number, default: 0 },
      added_program_count : { type: Number, default: 0 },
      self_finance_program_count : { type: Number, default: 0 },
      career_oriented_program_count : { type: Number, default: 0 }
    },
    others : {
      existing_program_count : { type: Number, default: 0 },
      added_program_count : { type: Number, default: 0 },
      self_finance_program_count : { type: Number, default: 0 },
      career_oriented_program_count : { type: Number, default: 0 }
    },
    total : {
      existing_program_count : { type: Number, default: 0 },
      added_program_count : { type: Number, default: 0 },
      self_finance_program_count : { type: Number, default: 0 },
      career_oriented_program_count : { type: Number, default: 0 }
    }, 
    interdisciplinary : {
      existing_program_count : { type: Number, default: 0 },
      added_program_count : { type: Number, default: 0 },
      self_finance_program_count : { type: Number, default: 0 },
      career_oriented_program_count : { type: Number, default: 0 }
    },
    innovative : {
      existing_program_count : { type: Number, default: 0 },
      added_program_count : { type: Number, default: 0 },
      self_finance_program_count : { type: Number, default: 0 },
      career_oriented_program_count : { type: Number, default: 0 }
    }
  },

  curriculum_flexibility : { type: String, default: '' },
  
  pattern_of_programmes : {
    semester : {
      no_of_programmes : { type: Number, default: 0 }
    },
    trimester : {
      no_of_programmes : { type: Number, default: 0 }
    },
    annual : {
      no_of_programmes : { type: Number, default: 0 }
    }
  },

  stakeholder_feedback : {
    alumni : { type: String, default: 'off' },
    parents : { type: String, default: 'off' },
    employers : { type: String, default: 'off' },
    student : { type: String, default: 'off' }
  },

  mode_of_feedback : { type: String, default: '' },

  syllabus_revision_feedback : { type: String, default: '' },

  new_dept_introduced : { type: String, default: '' }

}, { retainKeyOrder: true });

let CriterionOne = module.exports = mongoose.model('CriterionOne',criterionOneSchema,'criterion_one');
