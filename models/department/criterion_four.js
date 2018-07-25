// Criterion Four
let mongoose = require('mongoose');

// Criterion Four schema
var criterionFourSchema = mongoose.Schema({
	department: { type: String, default: '' },
	tech_upgrade : {
		total_computers : {
			existing : { type: Number, default: 0 },
			added : { type: Number, default: 0 },
			total : { type: Number, default: 0 }
		},
		computer_labs : {
			existing : { type: Number, default: 0 },
			added : { type: Number, default: 0 },
			total : { type: Number, default: 0 }
		},
		internet : {
			existing : { type: Number, default: 0 },
			added : { type: Number, default: 0 },
			total : { type: Number, default: 0 }
		},
		browsing_centres : {
			existing : { type: Number, default: 0 },
			added : { type: Number, default: 0 },
			total : { type: Number, default: 0 }
		},
		computer_centres : {
			existing : { type: Number, default: 0 },
			added : { type: Number, default: 0 },
			total : { type: Number, default: 0 }
		},
		office : {
			existing : { type: Number, default: 0 },
			added : { type: Number, default: 0 },
			total : { type: Number, default: 0 }
		},
		departments : {
			existing : { type: Number, default: 0 },
			added : { type: Number, default: 0 },
			total : { type: Number, default: 0 }
		},
		others : {
			existing : { type: Number, default: 0 },
			added : { type: Number, default: 0 },
			total : { type: Number, default: 0 }
		}
	}
}, { retainKeyOrder: true });

let CriterionFour = module.exports = mongoose.model('CriterionFour',criterionFourSchema,'criterion_four');
