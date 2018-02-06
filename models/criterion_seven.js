// Criterion Seven
let mongoose = require('mongoose');

// Criterion Seven Schema
var criterionSevenSchema = mongoose.Schema({
  innovations_best_practices : {
    innovations_introduced_for_positive_impact : String,

    action_taken_report : String,

    two_best_practices_of_institution : {
      practice1 : String,
      practice2 : String
    },

    environment_awareness_protection_contribution : String,

    environment_audit_conducted : {
      yes5 : Number,
      no5 : Number
    },

    other_relevant_info : String
  }
  retainKeyOrder : true
});
let CriterionSeven = module.exports = mongoose.model('CriterionSeven',criterionSevenSchema,'criterion_seven');
