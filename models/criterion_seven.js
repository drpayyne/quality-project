// Criterion Seven
let mongoose = require('mongoose');

// Criterion Seven Schema
var criterionSevenSchema = mongoose.Schema({
  department: { type: String, default: '' },
    innovations_introduced_for_positive_impact : { type: String, default: '' },

    action_taken_report : { type: String, default: '' },

    two_best_practices_of_institution : { type: String, default: '' },

    environment_awareness_protection_contribution : { type: String, default: '' },

    environment_audit_conducted : { type: String, default: '' },

    other_relevant_info : { type: String, default: '' }
  }, { retainKeyOrder: true });
let CriterionSeven = module.exports = mongoose.model('CriterionSeven',criterionSevenSchema,'criterion_seven');
