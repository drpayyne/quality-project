// Criterion Five
let mongoose = require('mongoose');

// Criterion Five Schema
var criterionFiveSchema = mongoose.Schema({
	department: { type: String, default: '' },
	scholarship_financial_support : {
		institute_finance_support : {
			student_no : { type: Number, default: 0 },
			amount_in_lakhs : { type: Number, default: 0 }
		},
		govt_financial_support : {
			student_no : { type: Number, default: 0 },
			amount_in_lakhs : { type: Number, default: 0 }
		},
		other_financial_support : {
			student_no : { type: Number, default: 0 },
			amount_in_lakhs : { type: Number, default: 0 }
		},
		international_national_recognition : {
			student_no : { type: Number, default: 0 },
			amount_in_lakhs : { type: Number, default: 0 }
		}
	}
}, { retainKeyOrder: true });

module.exports = mongoose.model('DCriterionFive',criterionFiveSchema,'criterion_five');
