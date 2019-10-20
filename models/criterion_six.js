// Criterion Six

let mongoose = require('mongoose');

//Criterion 6 schema
var criterionSixschema = mongoose.Schema({
  department: { type: String, default: null },
  vision_mission_institute : { type: String, default: null },
  info_management_system : { type: String, default: null },
  improvement_strategies : {
    curriculum_development : { type: String, default: null },
    teaching_and_learning : { type: String, default: null },
    exam_and_evaluation : { type: String, default: null },
    research_and_development : { type: String, default: null },
    physical_infrastructure : { type: String, default: null },
    human_resource_management : { type: String, default: null },
    faculty_staff_recruitment : { type: String, default: null },
    industry_interaction_collab : { type: String, default: null },
    student_admission : { type: String, default: null }
  },
  welfare_scheme : {
    teaching : { type: String, default: null },
    non_teaching : { type: String, default: null },
    students : { type: String, default: null }
  },
  corpus_fund : { type: String, default: null },
  financial_audit : {
    yes : { type: Number, default: null },
    no : { type: Number, default: null }
  },
  academic_admin_audit : {
    academic : {
      external_yes_no : { type: String, default: null },
      external_agency : { type: String, default: null },
      internal_yes_no : { type: String, default: null },
      internal_agency : { type: String, default: null }
    },
    administrative : {
      external_yes_no : { type: String, default: null },
      external_agency : { type: String, default: null },
      internal_yes_no : { type: String, default: null },
      internal_agency : { type: String, default: null }
    }
  },
  result_declaration : {
    ug_programmes : {
      yes : { type: Number, default: null },
      no : { type: Number, default: null }
    },
    pg_programmes : {
      yes : { type: Number, default: null },
      no : { type: Number, default: null }
    }
  },
  examination_reforms : { type: String, default: null },
  autonomy_promotion : { type: String, default: null },
  alumni_activity_support : { type: String, default: null },
  parent_teacher_activity_support : { type: String, default: null },
  support_staff_development : { type: String, default: null },
  eco_friendly_initiatives : { type: String, default: null }

}, { retainKeyOrder: true });

let CriterionSix = module.exports = mongoose.model('CriterionSix', criterionSixschema, 'criterion_six');
