const mongoose = require('mongoose');

const completionSchema = mongoose.Schema({
	atm: { type: String, default: 'no' },
	btc: { type: String, default: 'no' },
	che: { type: String, default: 'no' },
	cse: { type: String, default: 'no' },
	cve: { type: String, default: 'no' },
	ece: { type: String, default: 'no' },
	eee: { type: String, default: 'no' },
	it: { type: String, default: 'no' },
	mar: { type: String, default: 'no' },
	mec: { type: String, default: 'no' },
});

module.exports = mongoose.model('Completion', completionSchema, 'completion');