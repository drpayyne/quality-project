// Criterion Eight

let mongoose = require('mongoose');

// Criterion Eight schema
var criterionEightSchema = mongoose.Schema({
  department: { type: String, default: '' },
  plans_of_institution_next_year : { type: String, default: ''}
});

let CriterionEight = module.exports = mongoose.model('CriterionEight',criterionEightSchema,'criterion_eight');
