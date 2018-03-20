var async = require('async');
var jsonAdd  = require('json-addition');

let PartAOne = require('../models/part_a1');
let PartATwo = require('../models/part_a2');
let CriterionOne = require('../models/criterion_one');
let CriterionTwo = require('../models/criterion_two');
let CriterionTwoHoq = require('../models/criterion_two_hoq');
let CriterionThree = require('../models/criterion_three');
let CriterionFour = require('../models/criterion_four');
let CriterionFive = require('../models/criterion_five');
let CriterionSix = require('../models/criterion_six');
let CriterionSeven = require('../models/criterion_seven');
let CriterionEight = require('../models/criterion_eight');

var departments = ['ATM', 'BTC', 'CHE', 'CSE', 'CVE', 'ECE', 'EEE', 'IT', 'MAR', 'MEC'];

function sum() {
	var CTwos = [], CThrees = [], CFours = [], CFives = [], CSixes = [];
	var i = 0; 
	async.eachSeries(departments, function(doc, done) {
		console.log(doc);
		i = 0;
		CriterionTwo.findOne({department: doc}, function(err, doc) {
			if(err) console.log(err);
			else if(doc != null) CTwos.push(doc);
			++i;
			if(i == 5) done();
		});
		CriterionThree.findOne({department: doc}, function(err, doc) {
			if(err) console.log(err);
			else if(doc != null) CThrees.push(doc);
			++i;
			if(i == 5) done();
		});
		CriterionFour.findOne({department: doc}, function(err, doc) {
			if(err) console.log(err);
			else if(doc != null) CFours.push(doc);
			++i;
			if(i == 5) done();
		});
		CriterionFive.findOne({department: doc}, function(err, doc) {
			if(err) console.log(err);
			else if(doc != null) CFives.push(doc);
			++i;
			if(i == 5) done();
		});
		CriterionSix.findOne({department: doc}, function(err, doc) {
			if(err) console.log(err);
			else if(doc != null) CSixes.push(doc);
			++i;
			if(i == 5) done();
		});
	}, function(err) {
		console.log('criterion2 ' + CTwos.length);
		console.log('criterion3 ' + CThrees.length);
		console.log('criterion4 ' + CFours.length);
		console.log('criterion5 ' + CFives.length);
		console.log('criterion6 ' + CSixes.length);

		var array = CTwos;
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
		});

	});
}

module.exports = {
	sum
};