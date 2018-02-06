// Criterion Four
let mongoose = require('mongoose');

// Criterion Four schema
var criterionFourSchema = mongoose.Schema({
  infrastructure_and_learning_resources : {
    increase_in_infrastructure_details : {
      campus_area : {
        existing : String,
        newly_created : String,
        source_of_fund : String,
        total1 : String
      },
      class_rooms : {
        existing : String,
        newly_created : String,
        source_of_fund : String,
        total1 : String
      },
      laboratories : {
        existing : String,
        newly_created : String,
        source_of_fund : String,
        total1 : String
      },
      seminar_halls : {
        existing : String,
        newly_created : String,
        source_of_fund : String,
        total1 : String
      },
      important_equipment_purchased : {
        existing : String,
        newly_created : String,
        source_of_fund : String,
        total1 : String
      },
      value_of_equipment_purchased_in_lakhs : {
        existing : String,
        newly_created : String,
        source_of_fund : String,
        total1 : String
      },
      others : {
        existing : String,
        newly_created : String,
        source_of_fund : String,
        total1 : String
      }
    },

    computerization_of_administration_and_library : String,

    library_services : {
      text_books : {
        existing1 : {
          num : Number,
          val : Number
        },
        newly_added : {
          num1 : Number,
          val1 : Number,
        },
        total2 : {
          num2 : Number,
          val2 : Number
        }
      },
      reference_books : {
        existing1 : {
          num : Number,
          val : Number
        },
        newly_added : {
          num1 : Number,
          val1 : Number
        },
        total2 : {
          num2 : Number,
          val2 : Number
        }
      },
      e_books : {
        existing1 : {
          num : Number,
          val : Number
        },
        newly_added : {
          num1 : Number,
          val1 : Number
        },
        total2 : {
          num2 : Number,
          val2 : Number
        }
      },
      journals : {
        existing1 : {
          num : Number,
          val : Number
        },
        newly_added : {
          num1 : Number,
          val1 : Number
        },
        total2 : {
          num2 : Number,
          val2 : Number
        }
      },
      ejournals : {
        existing1 : {
          num : Number,
          val : Number
        },
        newly_added : {
          num1 : Number,
          val1 : Number
        },
        total2 : {
          num2 : Number,
          val2 : Number
        }
      },
      digital_database : {
        existing1 : {
          num : Number,
          val : Number
        },
        newly_added : {
          num1 : Number,
          val1 : Number
        },
        total2 : {
          num2 : Number,
          val2 : Number
        }
      },
      cd_video : {
        existing1 : {
          num : Number,
          val : Number
        },
        newly_added : {
          num1 : Number,
          val1 : Number
        },
        total2 : {
          num2 : Number,
          val2 : Number
        }
      },
      other : {
        existing1 : {
          num : Number,
          value : String
        },
        newly_added : {
          num1 : Number,
          value1 : String
        },
        total2 : {
          num2 : Number,
          value2 : String
        }
      }
    },

    computer_internet_access_training : String,

    maintenance_amount_in_lakhs : {
      ict : Number,
      campus_infrastructure_facilities : Number,
      equipment : Number,
      other_maintenance : Number,
      total3 : Number
    },


  }
  retainKeyOrder : true
});

let CriterionFour = module.exports = mongoose.model('CriterionFour',criterionFourSchema,'criterion_four');
