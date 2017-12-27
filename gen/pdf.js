var jsonAdd  = require('json-addition');

var cse = {}, ece = {}, mec = {}, btc = {}, che = {}, data = {};

var base = {
    department: null,
    permanent_faculty: {
        asst_prof: null,
        asso_prof: null,
        prof: null,
        others: null,
        total: null
    },
    permanent_faculty_phd: null,
    faculty_pos_recruited_vacant: {
        asst_prof: {
            recruited: null,
            vacant: null
        },
        asso_prof: {
            recruited: null,
            vacant: null
        },
        prof: {
            recruited: null,
            vacant: null
        },
        others: {
            recruited: null,
            vacant: null
        },
        total: {
            recruited: null,
            vacant: null
        }
    },
    guest_visit_temp_faculty: {
        guest: null,
        visiting: null,
        temporary: null
    },
    faculty_participation: {
        international: {
            seminar_workshop: null,
            paper_presented: null,
            resource_persons: null
        },
        national: {
            seminar_workshop: null,
            paper_presented: null,
            resource_persons: null
        },
        state: {
            seminar_workshop: null,
            paper_presented: null,
            resource_persons: null
        }
    },
    innovative_process_adopted: '',
    actual_teaching_days: null,
    exam_reforms_initiated: null,
    curriculum_incharge_faculty_members: {
        curriculum_revision: null,
        member_board: null,
        faculty_dev_workshop: null
    },
    avg_student_attendance: null,
    pass_percent_dist: [/* {
        programme_title: '',
        students_appeared: null,
        division: {
            distinction_percent: null,
            percent_one: null,
            percent_two: null,
            percent_three: null,
            percent_pass: null
        }
    }, {
        programme_title: '',
        students_appeared: null,
        division: {
            distinction_percent: null,
            percent_one: null,
            percent_two: null,
            percent_three: null,
            percent_pass: null
        }
    }, {
        programme_title: '',
        students_appeared: null,
        division: {
            distinction_percent: null,
            percent_one: null,
            percent_two: null,
            percent_three: null,
            percent_pass: null
        }
    } */],
    iqac_contribution: null,
    faculty_dev_initiative: {
        refresher_courses: null,
        ugc_fac_improvement_prog: null,
        hrd_programme:null,
        orientation_programme: null,
        fac_exchange_programme: null,
        staff_training_univ: null,
        staff_training_other: null,
        summer_winter_workshops: null,
        others: null
    },
    admin_tech_staff: {
        permanent_employees: {
            admin: null,
            technical: null
        },
        vacant_positions: {
            admin: null,
            technical: null
        },
        permanent_positions_filled: {
            admin: null,
            technical: null
        },
        temporary_positions_filled: {
            admin: null,
            technical: null
        }
    }
};

function total(form) {
    form.permanent_faculty.total = form.permanent_faculty.asso_prof + form.permanent_faculty.asst_prof + form.permanent_faculty.prof + form.permanent_faculty.others;
    form.faculty_pos_recruited_vacant.total.recruited = form.faculty_pos_recruited_vacant.asso_prof.recruited + form.faculty_pos_recruited_vacant.asst_prof.recruited + form.faculty_pos_recruited_vacant.prof.recruited + form.faculty_pos_recruited_vacant.others.recruited;
    form.faculty_pos_recruited_vacant.total.vacant = form.faculty_pos_recruited_vacant.asso_prof.vacant + form.faculty_pos_recruited_vacant.asst_prof.vacant + form.faculty_pos_recruited_vacant.prof.vacant + form.faculty_pos_recruited_vacant.others.vacant;
    
    return form;
}

function sum_data() {
    var form = {}, def_pass = {
        programme_title: null,
        students_appeared: null,
        division: {
            distinction_percent: null,
            percent_one: null,
            percent_two: null,
            percent_three: null,
            percent_pass: null
        }
    };
    form = base;
    form.pass_percent_dist[0] = def_pass;
    form.pass_percent_dist[1] = def_pass;
    form.pass_percent_dist[2] = def_pass;

    data = form;

    //START HERE!!!

    //Use the following line as reference. That is, copy the LHS, replace RHS with what yu copied five times and add '+' between each.
    form.permanent_faculty.asst_prof = cse.permanent_faculty.asst_prof + ece.permanent_faculty.asst_prof + btc.permanent_faculty.asst_prof + mec.permanent_faculty.asst_prof + che.permanent_faculty.asst_prof;
    console.log(form.permanent_faculty.asst_prof);

    //Start copy pasting from this line.
	form.permanent_faculty.asso_prof = req.body.r1c3;
	form.permanent_faculty.prof = req.body.r1c4;
	form.permanent_faculty.others = req.body.r1c5;
	form.permanent_faculty.total = req.body.r1c6;

	form.permanent_faculty_phd = req.body.r2c1;

	form.faculty_pos_recruited_vacant.asst_prof.recruited = req.body.r3c1;
	form.faculty_pos_recruited_vacant.asst_prof.vacant = req.body.r3c2;
	form.faculty_pos_recruited_vacant.asso_prof.recruited = req.body.r3c3;
	form.faculty_pos_recruited_vacant.asso_prof.vacant = req.body.r3c4;
	form.faculty_pos_recruited_vacant.prof.recruited = req.body.r3c5;
	form.faculty_pos_recruited_vacant.prof.vacant = req.body.r3c6;
	form.faculty_pos_recruited_vacant.others.recruited = req.body.r3c7;
	form.faculty_pos_recruited_vacant.others.vacant = req.body.r3c8;
	form.faculty_pos_recruited_vacant.total.recruited = req.body.r3c9;
	form.faculty_pos_recruited_vacant.total.vacant = req.body.r3c10;

	form.guest_visit_temp_faculty.guest = req.body.r4c1;
	form.guest_visit_temp_faculty.visiting = req.body.r4c2;
	form.guest_visit_temp_faculty.temporary = req.body.r4c3;

	form.faculty_participation.international.seminar_workshop = req.body.r5c1;
	form.faculty_participation.international.paper_presented = req.body.r5c2;
	form.faculty_participation.international.resource_persons = req.body.r5c3;
	form.faculty_participation.national.seminar_workshop = req.body.r5c4;
	form.faculty_participation.national.paper_presented = req.body.r5c5;
	form.faculty_participation.national.resource_persons = req.body.r5c6;
	form.faculty_participation.state.seminar_workshop = req.body.r5c7;
	form.faculty_participation.state.paper_presented = req.body.r5c8;
	form.faculty_participation.state.resource_persons = req.body.r5c9;

	form.innovative_process_adopted = req.body.r6c1;

	form.actual_teaching_days = req.body.r7c1;

	form.exam_reforms_initiated = req.body.r8c1;

	form.curriculum_incharge_faculty_members.curriculum_revision = req.body.r9c2;
	form.curriculum_incharge_faculty_members.member_board = req.body.r9c3;
	form.curriculum_incharge_faculty_members.faculty_dev_workshop = req.body.r9c4;

	form.avg_student_attendance = req.body.r10c1;


    //LEAVE OUT THIS PART, JUMP AHEAD.
	let divs = [];
	let r11c1s = [req.body.r11c1s1, req.body.r11c1s2, req.body.r11c1s3, req.body.r11c1s4, req.body.r11c1s5];
	let r11c2s = [req.body.r11c2s1, req.body.r11c2s2, req.body.r11c2s3, req.body.r11c2s4, req.body.r11c2s5];
	let r11c3s = [req.body.r11c3s1, req.body.r11c3s2, req.body.r11c3s3, req.body.r11c3s4, req.body.r11c3s5];
	let r11c4s = [req.body.r11c4s1, req.body.r11c4s2, req.body.r11c4s3, req.body.r11c4s4, req.body.r11c4s5];
	let r11c5s = [req.body.r11c5s1, req.body.r11c5s2, req.body.r11c5s3, req.body.r11c5s4, req.body.r11c5s5];
	let r11c6s = [req.body.r11c6s1, req.body.r11c6s2, req.body.r11c6s3, req.body.r11c6s4, req.body.r11c6s5];
	let r11c7s = [req.body.r11c7s1, req.body.r11c7s2, req.body.r11c7s3, req.body.r11c7s4, req.body.r11c7s5];

	for(var i=0; i<3; i++) {
		let doc = {};
		divs[i] = {
			distinction_percent: r11c3s[i],
			percent_one: r11c4s[i],
			percent_two: r11c5s[i],
			percent_three: r11c6s[i],
			percent_pass: r11c7s[i]
		}
		doc.programme_title = r11c1s[i];
		doc.students_appeared = r11c2s[i];
		doc.division = divs[i];

		form.pass_percent_dist[i] = doc;
	}

    //CONTINUE FROM HERE TILL THE END.
	form.iqac_contribution = req.body.r12c1;

	form.faculty_dev_initiative.refresher_courses = req.body.r13c1;
	form.faculty_dev_initiative.ugc_fac_improvement_prog = req.body.r13c2;
	form.faculty_dev_initiative.hrd_programme = req.body.r13c3;
	form.faculty_dev_initiative.orientation_programme = req.body.r13c4;
	form.faculty_dev_initiative.fac_exchange_programme = req.body.r13c5;
	form.faculty_dev_initiative.staff_training_univ = req.body.r13c6;
	form.faculty_dev_initiative.staff_training_other = req.body.r13c7;
	form.faculty_dev_initiative.summer_winter_workshops = req.body.r13c8;
	form.faculty_dev_initiative.others = req.body.r13c9;

	form.admin_tech_staff.permanent_employees.admin = req.body.r14c1;
	form.admin_tech_staff.permanent_employees.technical = req.body.r14c2;
	form.admin_tech_staff.vacant_positions.admin = req.body.r14c3;
	form.admin_tech_staff.vacant_positions.technical = req.body.r14c4;
	form.admin_tech_staff.permanent_positions_filled.admin = req.body.r14c5;
	form.admin_tech_staff.permanent_positions_filled.technical = req.body.r14c6;
	form.admin_tech_staff.temporary_positions_filled.admin = req.body.r14c7;
    form.admin_tech_staff.temporary_positions_filled.technical = req.body.r14c8;
} 

//get data DEMO purpose
function print() {
    const path = require('path');
    
    /* Do not touch */
    var fonts = {
        Roboto: {
            normal: './fonts/Roboto-Regular.ttf',
            bold: './fonts/Roboto-Medium.ttf',
            italics: './fonts/Roboto-Italic.ttf',
            bolditalics: './fonts/Roboto-Italic.ttf'
        }
    };
    
    /* Do not touch */
    var PdfPrinter = require('pdfmake');
    var printer = new PdfPrinter(fonts);
    var fs = require('fs');
    
    //Import DB models
    let CriterionTwo = require('../models/criterion_two');
    
    cse = {}, ece = {}, mec = {}, btc = {}, che = {}, data = {};
    var documentDefinition;

    CriterionTwo.findOne({department: 'CSE'}, function(err, document) {
        if(err) {
            console.log(err);
        } else {
            console.log(document);
            cse = document;

            CriterionTwo.findOne({department: 'ECE'}, function(err, document) {
                if(err) {
                    console.log(err);
                } else {
                    console.log(document);
                    ece = document;

                    CriterionTwo.findOne({department: 'MEC'}, function(err, document) {
                        if(err) {
                            console.log(err);
                        } else {
                            console.log(document);
                            mec = document;

                            CriterionTwo.findOne({department: 'BTC'}, function(err, document) {
                                if(err) {
                                    console.log(err);
                                } else {
                                    console.log(document);
                                    btc = document;

                                    CriterionTwo.findOne({department: 'CHE'}, function(err, document) {
                                        if(err) {
                                            console.log(err);
                                        } else {
                                            console.log(document);
                                            che = document;

                                            var data = jsonAdd.addJSONs(cse, ece, mec, btc, che);
                                            data = data._doc;
                                            data = total(data);
                                            console.log(data);

                                            /* Special cases */
                                            /* Case 1: 2.1. Pass % per course */
                                            console.log('data');
                                            var pass_percent = [
                                                [{text: 'Title of the Programme', style: 'tableHeader', rowSpan: 2}, {text: 'Total No. of Students Appeared', style: 'tableHeader',  rowSpan: 2}, {text: 'Division', style: 'tableHeader', colSpan: 5}, {}, {}, {}, {}],
                                                [{}, {}, {text: 'Distinction %', style: 'tableHeader'}, {text: 'I %', style: 'tableHeader'}, {text: 'II %', style: 'tableHeader'}, {text: 'III %', style: 'tableHeader'}, {text: 'Pass %', style: 'tableHeader'}]
                                            ];

                                            for(i = 0; i < data.pass_percent_dist.length; i++) {
                                                pass_percent.push([
                                                    data['pass_percent_dist'][i]['programme_title'], data['pass_percent_dist'][i]['students_appeared'], data['pass_percent_dist'][i]['division']['distinction_percent'], data['pass_percent_dist'][i]['division']['percent_one'], data['pass_percent_dist'][i]['division']['percent_two'], data['pass_percent_dist'][i]['division']['percent_three'], data['pass_percent_dist'][i]['division']['percent_pass']
                                                ])
                                            }

                                            /* Setting up the PDF */
                                            var documentDefinition = {
                                                content: [
                                                    {text: 'Criterion - II', style: 'header', alignment: 'left'},
                                                    {text: '2. Teaching, Learning and Evaluation', style: 'subheader', alignment: 'left'},
                                                    {text: '2.1. Total No. of Permanent Faculty:', alignment: 'left'},
                                                    {
                                                        style: 'tableExample',
                                                        table: {
                                                            headerRows: 1,
                                                            body: [
                                                                [{text: 'Asst. Professors', style: 'tableHeader'}, {text: 'Associate Professors', style: 'tableHeader'}, {text: 'Professors', style: 'tableHeader'}, {text: 'Others', style: 'tableHeader'}, {text: 'Total', style: 'tableHeader'}],
                                                                [data['permanent_faculty']['asst_prof'], data['permanent_faculty']['asso_prof'], data['permanent_faculty']['prof'], data['permanent_faculty']['others'], data['permanent_faculty']['total']]
                                                            ]
                                                        }
                                                    },
                                                    {text: '2.2. No. of Permanent Faculty with Ph.D:', alignment: 'left'},
                                                    {
                                                        style: 'tableExample',
                                                        table: {
                                                            widths: [50],
                                                            body: [
                                                                [data['permanent_faculty_phd']]
                                                            ]
                                                        }
                                                    },
                                                    {text: '2.3. No. of Faculty Positions Recruited (R) and Vacant (V) during the Year:', alignment: 'left'},
                                                    {
                                                        style: 'tableExample',
                                                        table: {
                                                            headerRows: 1,
                                                            body: [
                                                                [{text: 'Asst. Professors', style: 'tableHeader', colSpan: 2}, {}, {text: 'Associate Professors', style: 'tableHeader', colSpan: 2}, {}, {text: 'Professors', style: 'tableHeader', colSpan: 2}, {}, {text: 'Others', style: 'tableHeader', colSpan: 2}, {}, {text: 'Total', style: 'tableHeader', colSpan: 2}, {}],
                                                                [{text: 'R'}, {text:'V'}, {text: 'R'}, {text:'V'}, {text: 'R'}, {text:'V'}, {text: 'R'}, {text:'V'}, {text: 'R'}, {text:'V'}],
                                                                [data['faculty_pos_recruited_vacant']['asst_prof']['recruited'], data['faculty_pos_recruited_vacant']['asst_prof']['vacant'], data['faculty_pos_recruited_vacant']['asso_prof']['recruited'], data['faculty_pos_recruited_vacant']['asso_prof']['vacant'], data['faculty_pos_recruited_vacant']['prof']['recruited'], data['faculty_pos_recruited_vacant']['prof']['vacant'], data['faculty_pos_recruited_vacant']['others']['recruited'], data['faculty_pos_recruited_vacant']['others']['vacant'], data['faculty_pos_recruited_vacant']['total']['recruited'], data['faculty_pos_recruited_vacant']['total']['vacant']]
                                                            ]
                                                        }
                                                    },
                                                    {text: '2.4. No. of Guest and Visiting Faculty and Temporary Faculty:', alignment: 'left'},
                                                    {
                                                        style: 'tableExample',
                                                        table: {
                                                            body: [
                                                                [{text: 'Guest', style: 'tableHeader'}, {text: 'Visiting', style: 'tableHeader'}, {text: 'Temporary', style: 'tableHeader'}],
                                                                [data['guest_visit_temp_faculty']['guest'], data['guest_visit_temp_faculty']['visiting'], data['guest_visit_temp_faculty']['temporary']]
                                                            ]
                                                        }
                                                    },
                                                    {text: '2.5. Faculty Participation in Conferences and Symposia:', alignment: 'left'},
                                                    {
                                                        style: 'tableExample',
                                                        table: {
                                                            headerRows: 1,
                                                            body: [
                                                                [{text: 'No. Of Faculty', style: 'tableHeader'}, {text: 'International Level', style: 'tableHeader'}, {text: 'National Level', style: 'tableHeader'}, {text: 'State Level', style: 'tableHeader'}],
                                                                [{text: 'Attended', style: 'tableHeader'}, data['faculty_participation']['international']['seminar_workshop'], data['faculty_participation']['international']['paper_presented'], data['faculty_participation']['international']['resource_persons']],
                                                                [{text: 'Presented Papers', style: 'tableHeader'}, data['faculty_participation']['national']['seminar_workshop'], data['faculty_participation']['national']['paper_presented'], data['faculty_participation']['national']['resource_persons']],
                                                                [{text: 'Resource Persons', style: 'tableHeader'}, data['faculty_participation']['state']['seminar_workshop'], data['faculty_participation']['state']['paper_presented'], data['faculty_participation']['state']['resource_persons']]
                                                            ]
                                                        }
                                                    },
                                                    {text: '2.6. Innovative Processes Adopted by the Institution in Teaching and Learning:', alignment: 'left'},
                                                    {
                                                        style: 'tableExample',
                                                        table: {
                                                            body: [
                                                                [{text: data['innovative_process_adopted'], alignment: 'justify'}]
                                                            ]
                                                        }
                                                    },
                                                    {text: '2.7. Total No. of Actual Teaching Days during this Academic Year:', alignment: 'left'},
                                                    {
                                                        style: 'tableExample',
                                                        table: {
                                                            widths: [50],
                                                            body: [
                                                                [data['actual_teaching_days']]
                                                            ]
                                                        }
                                                    },
                                                    {text: '2.8. Examination/Evaluation Reforms Initiated by the Institution (For Example: Open Book Examination, Bar Coding, Double Valuation, Photocopy, Online Multiple Choice Questions):', alignment: 'left'},
                                                    {
                                                        style: 'tableExample',
                                                        table: {
                                                            widths: [50],
                                                            body: [
                                                                [data['exam_reforms_initiated']]
                                                            ]
                                                        }
                                                    },
                                                    {text: '2.9. No. of Faculty Members Involved in Curriculum Restructuring/Revision/Syllabus Development as Member of Board of Study/Faculty/Curriculum Development workshop:', alignment: 'left'},
                                                    {
                                                        style: 'tableExample',
                                                        table: {
                                                            widths: [50, 50, 50],
                                                            body: [
                                                                [data['curriculum_incharge_faculty_members']['curriculum_revision'], data['curriculum_incharge_faculty_members']['member_board'], data['curriculum_incharge_faculty_members']['faculty_dev_workshop']]
                                                            ]
                                                        }
                                                    },
                                                    {text: '2.10. Average Percentage of Attendance of Students:', alignment: 'left'},
                                                    {
                                                        style: 'tableExample',
                                                        table: {
                                                            widths: [50],
                                                            body: [
                                                                [data['avg_student_attendance']]
                                                            ]
                                                        }
                                                    },
                                                    {text: '2.11. Course/Programme Wise Distribution of Pass Percentage:', alignment: 'left'},
                                                    {
                                                        style: 'tableExample',
                                                        table: {
                                                            widths: ['auto', 'auto', 100, 50, 50, 50, 50],
                                                            headerRows: 2,
                                                            body: pass_percent
                                                        }
                                                    },
                                                    {text: '2.12. How does IQAC Contribute/Monitor/Evaluate the Teaching & Learning Processes:', alignment: 'left'},
                                                    {
                                                        style: 'tableExample',
                                                        table: {
                                                            body: [
                                                                [{text: data['iqac_contribution'], alignment: 'justify'}]
                                                            ]
                                                        }
                                                    },
                                                    {text: '2.13. Initiatives Undertaken Towards Faculty Development:', alignment: 'left'},
                                                    {
                                                        style: 'tableExample',
                                                        table: {
                                                            headerRows: 1,
                                                            body: [
                                                                [{text: 'Faculty/Staff Development Programmes', style: 'tableHeader'}, {text: 'Number of Faculty Benefitted', style: 'tableHeader'}],
                                                                [{text: 'Refresher Courses', alignment: 'left'}, data['faculty_dev_initiative']['refresher_courses']],
                                                                [{text: 'UGC – Faculty Improvement Programme', alignment: 'left'}, data['faculty_dev_initiative']['ugc_fac_improvement_prog']],
                                                                [{text: 'HRD Programmes', alignment: 'left'}, data['faculty_dev_initiative']['hrd_programme']],
                                                                [{text: 'Orientation Programmes', alignment: 'left'}, data['faculty_dev_initiative']['orientation_programme']],
                                                                [{text: 'Faculty Exchange Programme', alignment: 'left'}, data['faculty_dev_initiative']['fac_exchange_programme']],
                                                                [{text: 'Staff Training Conducted by the University', alignment: 'left'}, data['faculty_dev_initiative']['staff_training_univ']],
                                                                [{text: 'Staff Training Conducted by Other Institutions', alignment: 'left'}, data['faculty_dev_initiative']['staff_training_other']],
                                                                [{text: 'Summer/Winter schools, Workshops etc.', alignment: 'left'}, data['faculty_dev_initiative']['summer_winter_workshops']],
                                                                [{text: 'Others', alignment: 'left'}, data['faculty_dev_initiative']['others']]
                                                            ]
                                                        }
                                                    },
                                                    {text: '2.14 Details of Administrative and Technical Staff:', alignment: 'left'},
                                                    {
                                                        style: 'tableExample',
                                                        table: {
                                                            headerRows: 1,
                                                            body: [
                                                                [{text: 'Category', style: 'tableHeader'}, {text: 'Number of Permanent Employees', style: 'tableHeader'}, {text: 'Number of Vacant Positions', style: 'tableHeader'}, {text: 'Number of Permanent Positions Filled during the Year', style: 'tableHeader'}, {text: 'Number of Positions Filled Temporarily', style: 'tableHeader'}],
                                                                [{text: 'Administrative Staff', alignment: 'left'}, data['admin_tech_staff']['permanent_employees']['admin'], data['admin_tech_staff']['vacant_positions']['admin'], data['admin_tech_staff']['permanent_positions_filled']['admin'], data['admin_tech_staff']['temporary_positions_filled']['admin']],
                                                                [{text: 'Technical Staff', alignment: 'left'}, data['admin_tech_staff']['permanent_employees']['technical'], data['admin_tech_staff']['vacant_positions']['technical'], data['admin_tech_staff']['permanent_positions_filled']['technical'], data['admin_tech_staff']['temporary_positions_filled']['technical']]
                                                            ]
                                                        }
                                                    },
                                                ],
                                                styles: {
                                                    header: {
                                                        fontSize: 18,
                                                        bold: true,
                                                        margin: [0, 0, 0, 10]
                                                    },
                                                    subheader: {
                                                        fontSize: 16,
                                                        bold: true,
                                                        margin: [0, 10, 0, 5]
                                                    },
                                                    tableExample: {
                                                        margin: [0, 5, 0, 15]
                                                    },
                                                    tableHeader: {
                                                        bold: true,
                                                        fontSize: 13,
                                                        color: 'black'
                                                    }
                                                },
                                                defaultStyle: {
                                                    alignment: 'center'
                                                }

                                            };

                                            var pdfDoc = printer.createPdfKitDocument(documentDefinition);
                                            pdfDoc.pipe(fs.createWriteStream('iqac.pdf'));
                                            pdfDoc.end();
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    });
}

/* TO REPLACE WITH let data = get_data() */
//let data = get_data();
/* let data = {
    'permanent_faculty': {
        'asst_prof': 5,
        'asso_prof': 4,
        'prof': 3,
        'others': 2,
        'total': 1
    },
    'permanent_faculty_phd': 12,
    'faculty_pos_recruited_vacant': {
        'asst_prof': {
            'recruited': 1,
            'vacant': 2
        },
        'asso_prof': {
            'recruited': 3,
            'vacant': 4
        },
        'prof': {
            'recruited': 5,
            'vacant': 6
        },
        'others': {
            'recruited': 7,
            'vacant': 8
        },
        'total': {
            'recruited': 9,
            'vacant': 10
        }
    },
    'guest_visit_temp_faculty': {
        'guest': 1,
        'visiting': 2,
        'temporary': 3
    },
    'faculty_participation': {
        'international': {
            'seminar_workshop': 1,
            'paper_presented': 2,
            'resource_persons': 3
        },
        'national': {
            'seminar_workshop': 1,
            'paper_presented': 2,
            'resource_persons': 3
        },
        'state': {
            'seminar_workshop': 1,
            'paper_presented': 2,
            'resource_persons': 3
        }
    },
    'innovative_process_adopted': "string",
    'actual_teaching_days': 2,
    'exam_reforms_initiated': 3,
    'curriculum_incharge_faculty_members': {
        'curriculum_revision': 1,
        'member_board': 2,
        'faculty_dev_workshop': 3
    },
    'avg_student_attendance': 1,
    'pass_percent_dist': [{
        'programme_title': 2,
        'students_appeared': 3,
        'division': {
            'distinction_percent': 4,
            'percent_one': 5,
            'percent_two': 6,
            'percent_three': 7,
            'percent_pass': 8
        }
    }],
    'iqac_contribution': 'String',
    'faculty_dev_initiative': {
        'refresher_courses': 9,
        'ugc_fac_improvement_prog': 10,
        'hrd_programme':11,
        'orientation_programme': 12,
        'fac_exchange_programme': 13,
        'staff_training_univ': 14,
        'staff_training_other': 15,
        'summer_winter_workshops': 16,
        'others': 17
    },
    'admin_tech_staff': {
        'permanent_employees': {
            'admin': 18,
            'technical': 19
        },
        'vacant_positions': {
            'admin': 20,
            'technical': 21
        },
        'permanent_positions_filled': {
            'admin': 22,
            'technical': 23
        },
        'temporary_positions_filled': {
            'admin': 24,
            'technical': 25
        }
    }
} */


/* DO NOT TOUCH */
/* function make_pdf() {
    
} */

module.exports = {
    print
};

/* CALL THIS FUNCTION AND PDF IS GENERATED */
//make_pdf()