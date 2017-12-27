const mongoose = require('mongoose');

const ctHOQSchema = mongoose.Schema({
    innovative_process_adopted: String,
    iqac_contribution: String
});

const CriterionTwoHform = module.exports = mongoose.model('CriterionTwoHform', ctHOQSchema, 'criterion_two_hoq');