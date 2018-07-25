// Criterion Eight

let mongoose = require('mongoose');

// Criterion Eight schema
var criterionEightSchema = mongoose.Schema({
  department: { type: String, default: '' },
  plans_of_institution_next_year : { type: String, default: ''}
});

module.exports = mongoose.model('HCriterionEight',criterionEightSchema,'criterion_eight');
