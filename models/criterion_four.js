// Criterion Four
let mongoose = require('mongoose');

// Criterion Four schema
var criterionFourSchema = mongoose.Schema({
    increase_in_infrastructure_details : {
      facilities : {
        existing : String,
        newly_created : String,
        source_of_fund : String,
        total1 : String
      },
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
        existing : {
          num : Number,
          val : Number
        },
        newly_added : {
          num : Number,
          val : Number,
        },
        total : {
          num : Number,
          val : Number
        }
      },
      reference_books : {
        existing : {
          num : Number,
          val : Number
        },
        newly_added : {
          num : Number,
          val : Number
        },
        total : {
          num : Number,
          val : Number
        }
      },
      e_books : {
        existing : {
          num : Number,
          val : Number
        },
        newly_added : {
          num : Number,
          val : Number
        },
        total : {
          num : Number,
          val : Number
        }
      },
      journals : {
        existing : {
          num : Number,
          val : Number
        },
        newly_added : {
          num : Number,
          val : Number
        },
        total : {
          num : Number,
          val : Number
        }
      },
      ejournals : {
        existing : {
          num : Number,
          val : Number
        },
        newly_added : {
          num : Number,
          val : Number
        },
        total : {
          num : Number,
          val : Number
        }
      },
      digital_database : {
        existing : {
          num : Number,
          val : Number
        },
        newly_added : {
          num : Number,
          val : Number
        },
        total : {
          num : Number,
          val : Number
        }
      },
      cd_video : {
        existing : {
          num : Number,
          val : Number
        },
        newly_added : {
          num : Number,
          val : Number
        },
        total : {
          num : Number,
          val : Number
        }
      },
      other : {
        existing : {
          num : Number,
          val : String
        },
        newly_added : {
          num : Number,
          val : String
        },
        total : {
          num : Number,
          val : String
        }
      }
    },
 
    tech_upgrade : {
        total_computers : {
            existing : Number,
            added : Number,
            total : Number
        },
        computer_labs : {
            existing : Number,
            added : Number,
            total : Number
        },
        internet : {
            existing : Number,
            added : Number,
            total : Number
        },
        browsing_centres : {
            existing : Number,
            added : Number,
            total : Number
        },
        computer_centres : {
            existing : Number,
            added : Number,
            total : Number
        },
        office : {
            existing : Number,
            added : Number,
            total : Number
        },
        departments : {
            existing : Number,
            added : Number,
            total : Number
        },
        others : {
            existing : Number,
            added : Number,
            total : Number
        }
    },
    
    computer_internet_access_training : String,

    maintenance_amount_in_lakhs : {
      ict : Number,
      campus_infrastructure_facilities : Number,
      equipment : Number,
      other_maintenance : Number,
      total3 : Number
    }
  retainKeyOrder : true
});

let CriterionFour = module.exports = mongoose.model('CriterionFour',criterionFourSchema,'criterion_four');
