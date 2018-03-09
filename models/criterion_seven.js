// Criterion Seven
let mongoose = require('mongoose');

// Criterion Seven Schema
var criterionSevenSchema = mongoose.Schema({
  department: { type: String, default: null },
    innovations_introduced_for_positive_impact : { type: String, default: null },

    action_taken_report : { type: String, default: null },

    two_best_practices_of_institution : {
      practice1 : { type: String, default: null },
      practice2 : { type: String, default: null }
    },

    environment_awareness_protection_contribution : { type: String, default: null },

    environment_audit_conducted : {
      yes : { type: Number, default: null },
      no : { type: Number, default: null }
    },

    other_relevant_info : { type: String, default: null }
  }, { retainKeyOrder: true });
let CriterionSeven = module.exports = mongoose.model('CriterionSeven',criterionSevenSchema,'criterion_seven');
