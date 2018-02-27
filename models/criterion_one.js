// Criterion One Schema
let mongoose = require('mongoose');

var criterionOneSchema = mongoose.Schema({
  Department : String,
  academic_program_details :  {
    phd : {
      existing_program_count : Number,
      added_program_count : Number,
      self_finance_program_count = Number,
      career_oriented_program_count = Number
    },
    pg : {
      existing_program_count : Number,
      added_program_count : Number,
      self_finance_program_count : Number,
      career_oriented_program_count : Number
    },
    ug : {
      existing_program_count : Number,
      added_program_count : Number,
      self_finance_program_count : Number,
      career_oriented_program_count : Number
    },
    pg_diploma : {
      existing_program_count : Number,
      added_program_count : Number,
      self_finance_program_count : Number,
      career_oriented_program_count : Number
    },
    adv_diploma : {
      existing_program_count : Number,
      added_program_count : Number,
      self_finance_program_count : Number,
      career_oriented_program_count : Number
    },
    diploma : {
      existing_program_count : Number,
      added_program_count : Number,
      self_finance_program_count : Number,
      career_oriented_program_count : Number
    },
    certificate : {
      existing_program_count : Number,
      added_program_count : Number,
      self_finance_program_count : Number,
      career_oriented_program_count : Number
    },
    others : {
      existing_program_count : Number,
      added_program_count : Number,
      self_finance_program_count : Number,
      career_oriented_program_count : Number
    },
    total : {
      existing_program_count : Number,
      added_program_count : Number,
      self_finance_program_count : Number,
      career_oriented_program_count : Number
    }, 
    interdisciplinary : {
      existing_program_count : Number,
      added_program_count : Number,
      self_finance_program_count : Number,
      career_oriented_program_count : Number
    },
    innovative : {
      existing_program_count : Number,
      added_program_count : Number,
      self_finance_program_count : Number,
      career_oriented_program_count : Number
    }
  },

  curriculum_flexibility : {
    cbcs : Number,
    core : Number,
    elective_option : Number,
    open_option : Number,
  },
  
  pattern_of_programmes : {
    semester : {
      no_of_programmes : Number
    },
    trimester : {
      no_of_programmes : Number
    },
    annual : {
      no_of_programmes : Number
    }
  },

  stakeholder_feedback : {
    alumni : Number,
    parents : Number,
    employers : Number,
    student : Number
  },

  mode_of_feedback : {
    online : Number,
    manual : Number,
    coop_school : Number
  },

  syllabus_revision_feedback : String,

  new_dept_introduced : String

  retainKeyOrder : true
});

let CriterionOne = module.exports = mongoose.model('CriterionOne',criterionOneSchema,'criterion_one');
