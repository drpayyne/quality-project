// Criterion Eight

let mongoose = require('mongoose');

// Criterion Eight schema
var criterionEightSchema = mongoose.Schema({
  department: { type: String, default: null },
  plans_of_institution_next_year : { type: String, default: null}
});

let CriterionEight = module.exports = mongoose.model('CriterionEight',criterionEightSchema,'criterion_eight');
