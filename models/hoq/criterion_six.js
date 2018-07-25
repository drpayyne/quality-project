// Criterion Six

let mongoose = require('mongoose');

//Criterion 6 schema
var criterionSixschema = mongoose.Schema({
  department: { type: String, default: '' },
  vision_mission_institute : { type: String, default: '' },
  info_management_system : { type: String, default: '' },
  improvement_strategies : {
    curriculum_development : { type: String, default: '' },
    teaching_and_learning : { type: String, default: '' },
    exam_and_evaluation : { type: String, default: '' },
    research_and_development : { type: String, default: '' },
    physical_infrastructure : { type: String, default: '' },
    human_resource_management : { type: String, default: '' },
    faculty_staff_recruitment : { type: String, default: '' },
    industry_interaction_collab : { type: String, default: '' },
    student_admission : { type: String, default: '' }
  },
  welfare_scheme : {
    teaching : { type: String, default: '' },
    non_teaching : { type: String, default: '' },
    students : { type: String, default: '' }
  },
  corpus_fund : { type: String, default: '' },
  financial_audit : { type: String, default: '' },
  academic_admin_audit : {
    academic : {
      external : { type: String, default: '' },
      external_agency : { type: String, default: '' },
      internal : { type: String, default: '' },
      internal_authority : { type: String, default: '' }
    },
    administrative : {
      external : { type: String, default: '' },
      external_agency : { type: String, default: '' },
      internal : { type: String, default: '' },
      internal_authority : { type: String, default: '' }
    }
  },
  result_declaration : {
    ug_programmes : { type: String, default: '' },
    pg_programmes :{ type: String, default: '' }
  },
  examination_reforms : { type: String, default: '' },
  autonomy_promotion : { type: String, default: '' },
  alumni_activity_support : { type: String, default: '' },
  parent_teacher_activity_support : { type: String, default: '' },
  support_staff_development : { type: String, default: '' },
  eco_friendly_initiatives : { type: String, default: '' }

}, { retainKeyOrder: true });

module.exports = mongoose.model('HCriterionSix', criterionSixschema, 'criterion_six');
