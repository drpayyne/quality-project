// Criterion Eight

let mongoose = require('mongoose');

// Criterion Eight schema
var criterionEightSchema = mongoose.Schema({
  plans_of_institution_next_year : String
});

let CriterionEight = module.exports = mongoose.model('CriterionEight',criterionEightSchema,'criterion_eight');
