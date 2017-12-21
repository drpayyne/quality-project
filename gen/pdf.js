

//get data DEMO purpose
function print(dept) {
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
    
    var data = {}, documentDefinition;
    CriterionTwo.findOne({department: dept}, function(err, document) {
        console.log(dept);
        console.log('HELLO');
        data = document;
        console.log(data);
        
        
        /* Special cases */
        /* Case 1: 2.1. Pass % per course */
        console.log('data');
        var pass_percent = [
            [{text: 'Title of the Programme', style: 'tableHeader', rowSpan: 2}, {text: 'Total No. of Students Appeared', style: 'tableHeader',  rowSpan: 2}, {text: 'Division', style: 'tableHeader', colSpan: 5}, {}, {}, {}, {}],
            [{}, {}, {text: 'Distinction %', style: 'tableHeader'}, {text: 'I %', style: 'tableHeader'}, {text: 'II %', style: 'tableHeader'}, {text: 'III %', style: 'tableHeader'}, {text: 'Pass %', style: 'tableHeader'}]
        ]
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
                            [{text: 'Total', style: 'tableHeader'}, {text: 'Asst. Professors', style: 'tableHeader'}, {text: 'Associate Professors', style: 'tableHeader'}, {text: 'Professors', style: 'tableHeader'}, {text: 'Others', style: 'tableHeader'}],
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



