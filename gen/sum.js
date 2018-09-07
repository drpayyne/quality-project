var async = require('async');
var jsonAdd  = require('json-addition');

let DCriterionTwo = require('../models/department/criterion_two');
let DCriterionThree = require('../models/department/criterion_three');
let DCriterionFour = require('../models/department/criterion_four');
let DCriterionFive = require('../models/department/criterion_five');

let HCriterionFive = require('../models/hoq/criterion_five');
let HCriterionFour = require('../models/hoq/criterion_four');
let HCriterionTwo = require('../models/hoq/criterion_two');

var departments = ['ATM', 'BTC', 'CHE', 'CSE', 'CVE', 'ECE', 'EEE', 'IT', 'MAR', 'MEC'];
var CTwos = [], CThrees = [], CFours = [], CFives = [], flag;

function sum() {
	console.log('SUMMING UP')
	async.eachSeries(departments, function(department, callback) {
		flag = 0
		if(department) {
			console.log('STARTING TO INIT DOCS :' + department);
			DCriterionTwo.findOne({department: department}, function(err, doc) {
				if(err) console.log(err);
				else CTwos.push(doc);
				flag++
				if(flag == 4) callback(console.log('DONE'))
			});
			DCriterionThree.findOne({department: department}, function(err, doc) {
				if(err) console.log(err);
				else CThrees.push(doc);
				flag++
				if(flag == 4) callback(console.log('DONE'))
			});
			DCriterionFour.findOne({department: department}, function(err, doc) {
				if(err) console.log(err);
				else CFours.push(doc);
				flag++
				if(flag == 4) callback(console.log('DONE'))
			});
			DCriterionFive.findOne({department: department}, function(err, doc) {
				if(err) console.log(err);
				else CFives.push(doc);
				flag++
				if(flag == 4) callback(console.log('DONE'))
			});
		}
	}, function(err) {
		console.log('ALL DONE with error : ' + err)
		console.log('CTwos length: ' + CTwos.length)
		console.log('CThrees length: ' + CThrees.length)
		console.log('CFours length: ' + CFours.length)
		console.log('CFives length: ' + CFives.length)

		var document;
		
		/* var array = CTwos;
		document = jsonAdd.addJSONs(CTwos);
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
		});*/

		console.log('SUMMING UP CTWOS')
		// var array = []
		// for(var i = 0; i < 10; i++) {
		// 	console.log(CTwos[i].department)
		// 	let division = {
		// 		distinction_percent : CTwos[i].pass_percent_dist.division.distinction_percent,
		// 		percent_one : CTwos[i].pass_percent_dist.division.percent_one,
		// 		percent_two : CTwos[i].pass_percent_dist.division.percent_two,
		// 		percent_three : CTwos[i].pass_percent_dist.division.percent_three 
		// 	}
		// 	let programme_title = departments[i]
		// 	let students_appeared = CTwos[i].pass_percent_dist.students_appeared
		// 	array[i] = {
		// 		division,
		// 		programme_title,
		// 		students_appeared
		// 	}
		// }
		console.log(CTwos);
		document = jsonAdd.addJSONs(CTwos);
		console.log(document)
		document._doc.department = 'HOQ';
		document._doc.pass_percent_dist = array;
		delete document._doc["_id"];
		delete document._doc["__v"];
		console.log('HOQ C2 DOC')
		console.log(document._doc);
		HCriterionTwo.update({department: 'HOQ'}, document._doc, { upsert: true }, function(err) {
			if(err) console.log(err);
		});

		console.log('SUMMING UP CFOURS')
		document = jsonAdd.addJSONs(CFours);
		document._doc.department = 'HOQ';
		delete document._doc["_id"];
		delete document._doc["__v"];
		HCriterionFour.update({department: 'HOQ'}, document._doc, { upsert: true }, function(err) {
			if(err) console.log(err);
		});

		console.log('SUMMING UP CFIVES')
		document = jsonAdd.addJSONs(CFives);
		document._doc.department = 'HOQ';
		delete document._doc["_id"];
		delete document._doc["__v"];
		HCriterionFive.update({department: 'HOQ'}, document._doc, { upsert: true }, function(err) {
			if(err) console.log(err);
		});

	});
}

module.exports = {
	sum
};