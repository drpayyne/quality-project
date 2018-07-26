var async = require('async');
var jsonAdd  = require('json-addition');

let CriterionTwo = require('../models/criterion_two');
let CriterionTwoHoq = require('../models/criterion_two_hoq');
let CriterionThree = require('../models/criterion_three');
let CriterionFour = require('../models/criterion_four');
let CriterionFive = require('../models/criterion_five');

var departments = ['ATM', 'BTC', 'CHE', 'CSE', 'CVE', 'ECE', 'EEE', 'IT', 'MAR', 'MEC'];

function sum() {
	console.log('SUMMING UP')
	var CTwos = [], CThrees = [], CFours = [], CFives = [];

	async.eachSeries(departments, function(department) {
		console.log(department);
		CriterionTwo.findOne({department: department}, function(err, doc) {
			if(err) console.log(err);
			else CTwos.push(doc);
		});
		CriterionThree.findOne({department: department}, function(err, doc) {
			if(err) console.log(err);
			else CThrees.push(doc);
		});
		CriterionFour.findOne({department: department}, function(err, doc) {
			if(err) console.log(err);
			else CFours.push(doc);
		});
		CriterionFive.findOne({department: department}, function(err, doc) {
			if(err) console.log(err);
			else CFives.push(doc);
		});
	}, function(err) {
		console.log('err ' + err)
		console.log('criterion2 ' + CTwos.length);
		console.log('criterion3 ' + CThrees.length);
		console.log('criterion4 ' + CFours.length);
		console.log('criterion5 ' + CFives.length);

		/* var array = CTwos;
		var document = jsonAdd.addJSONs(CTwos);
		document._doc.department = 'HOQ';
		var pass_dist_arr = [];
		for(var i=0; i<10; i++) {
			console.log(array[i]);
			console.log('*************');
			let pass_dist = {}, div = {};
			if (array[i] != null) {
				div = {
					distinction_percent: array[i].pass_percent_dist.division.distinction_percent,
					percent_one: array[i].pass_percent_dist.division.percent_one,
					percent_two: array[i].pass_percent_dist.division.percent_two,
					percent_three: array[i].pass_percent_dist.division.percent_three
				}	
				pass_dist.students_appeared = array[i].pass_percent_dist.students_appeared;
			} else {
				div = {
					distinction_percent: null,
					percent_one: null,
					percent_two: null,
					percent_three: null
				}
				pass_dist.students_appeared = null;
			}
			pass_dist.programme_title = departments[i];
			pass_dist.division = div;
			pass_dist_arr[i] = pass_dist;
		}
		document._doc.pass_percent_dist = pass_dist_arr;
		delete document._doc["_id"];
		delete document._doc["__v"];
		console.log(document._doc);
		CriterionTwoHoq.update({department: 'HOQ'}, document._doc, { upsert: true }, function(err) {
			if(err) console.log(err);
		});

		document = jsonAdd.addJSONs(CThrees);
		document._doc.department = 'HOQ';
		delete document._doc["_id"];
		delete document._doc["__v"];
		CriterionThree.update({department: 'HOQ'}, document._doc, { upsert: true }, function(err) {
			if(err) console.log(err);
		});

		document = jsonAdd.addJSONs(CFours);
		document._doc.department = 'HOQ';
		delete document._doc["_id"];
		delete document._doc["__v"];
		CriterionFour.update({department: 'HOQ'}, document._doc, { upsert: true }, function(err) {
			if(err) console.log(err);
		});

		document = jsonAdd.addJSONs(CFives);
		document._doc.department = 'HOQ';
		delete document._doc["_id"];
		delete document._doc["__v"];
		CriterionFive.update({department: 'HOQ'}, document._doc, { upsert: true }, function(err) {
			if(err) console.log(err);
		});

		document = jsonAdd.addJSONs(CSixes);
		document._doc.department = 'HOQ';
		delete document._doc["_id"];
		delete document._doc["__v"];
		CriterionSix.update({department: 'HOQ'}, document._doc, { upsert: true }, function(err) {
			if(err) console.log(err);
		}); */

	});
}

module.exports = {
	sum
};