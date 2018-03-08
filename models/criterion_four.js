// Criterion Four
let mongoose = require('mongoose');

// Criterion Four schema
var criterionFourSchema = mongoose.Schema({
    increase_in_infrastructure_details : {
      facilities : {
        existing : { type: String, default: null },
        newly_created : { type: String, default: null },
        source_of_fund : { type: String, default: null },
        total : { type: String, default: null }
      },
      campus_area : {
        existing : { type: String, default: null },
        newly_created : { type: String, default: null },
        source_of_fund : { type: String, default: null },
        total : { type: String, default: null }
      },
      class_rooms : {
        existing : { type: String, default: null },
        newly_created : { type: String, default: null },
        source_of_fund : { type: String, default: null },
        total : { type: String, default: null }
      },
      laboratories : {
        existing : { type: String, default: null },
        newly_created : { type: String, default: null },
        source_of_fund : { type: String, default: null },
        total : { type: String, default: null }
      },
      seminar_halls : {
        existing : { type: String, default: null },
        newly_created : { type: String, default: null },
        source_of_fund : { type: String, default: null },
        total : { type: String, default: null }
      },
      important_equipment_purchased : {
        existing : { type: String, default: null },
        newly_created : { type: String, default: null },
        source_of_fund : { type: String, default: null },
        total : { type: String, default: null }
      },
      value_of_equipment_purchased_in_lakhs : {
        existing : { type: String, default: null },
        newly_created : { type: String, default: null },
        source_of_fund : { type: String, default: null },
        total : { type: String, default: null }
      },
      others : {
        existing : { type: String, default: null },
        newly_created : { type: String, default: null },
        source_of_fund : { type: String, default: null },
        total : { type: String, default: null }
      }
    },

    computerization_of_administration_and_library : { type: String, default: null },

    library_services : {
      text_books : {
        existing : {
          num : { type: Number, default: null },
          val : { type: Number, default: null }
        },
        newly_added : {
          num : { type: Number, default: null },
          val : { type: Number, default: null },
        },
        total : {
          num : { type: Number, default: null },
          val : { type: Number, default: null }
        }
      },
      reference_books : {
        existing : {
          num : { type: Number, default: null },
          val : { type: Number, default: null }
        },
        newly_added : {
          num : { type: Number, default: null },
          val : { type: Number, default: null }
        },
        total : {
          num : { type: Number, default: null },
          val : { type: Number, default: null }
        }
      },
      e_books : {
        existing : {
          num : { type: Number, default: null },
          val : { type: Number, default: null }
        },
        newly_added : {
          num : { type: Number, default: null },
          val : { type: Number, default: null }
        },
        total : {
          num : { type: Number, default: null },
          val : { type: Number, default: null }
        }
      },
      journals : {
        existing : {
          num : { type: Number, default: null },
          val : { type: Number, default: null }
        },
        newly_added : {
          num : { type: Number, default: null },
          val : { type: Number, default: null }
        },
        total : {
          num : { type: Number, default: null },
          val : { type: Number, default: null }
        }
      },
      ejournals : {
        existing : {
          num : { type: Number, default: null },
          val : { type: Number, default: null }
        },
        newly_added : {
          num : { type: Number, default: null },
          val : { type: Number, default: null }
        },
        total : {
          num : { type: Number, default: null },
          val : { type: Number, default: null }
        }
      },
      digital_database : {
        existing : {
          num : { type: Number, default: null },
          val : { type: Number, default: null }
        },
        newly_added : {
          num : { type: Number, default: null },
          val : { type: Number, default: null }
        },
        total : {
          num : { type: Number, default: null },
          val : { type: Number, default: null }
        }
      },
      cd_video : {
        existing : {
          num : { type: Number, default: null },
          val : { type: Number, default: null }
        },
        newly_added : {
          num : { type: Number, default: null },
          val : { type: Number, default: null }
        },
        total : {
          num : { type: Number, default: null },
          val : { type: Number, default: null }
        }
      },
      other : {
        existing : {
          num : { type: Number, default: null },
          val : { type: String, default: null }
        },
        newly_added : {
          num : { type: Number, default: null },
          val : { type: String, default: null }
        },
        total : {
          num : { type: Number, default: null },
          val : { type: String, default: null }
        }
      }
    },
 
    tech_upgrade : {
        total_computers : {
            existing : { type: Number, default: null },
            added : { type: Number, default: null },
            total : { type: Number, default: null }
        },
        computer_labs : {
            existing : { type: Number, default: null },
            added : { type: Number, default: null },
            total : { type: Number, default: null }
        },
        internet : {
            existing : { type: Number, default: null },
            added : { type: Number, default: null },
            total : { type: Number, default: null }
        },
        browsing_centres : {
            existing : { type: Number, default: null },
            added : { type: Number, default: null },
            total : { type: Number, default: null }
        },
        computer_centres : {
            existing : { type: Number, default: null },
            added : { type: Number, default: null },
            total : { type: Number, default: null }
        },
        office : {
            existing : { type: Number, default: null },
            added : { type: Number, default: null },
            total : { type: Number, default: null }
        },
        departments : {
            existing : { type: Number, default: null },
            added : { type: Number, default: null },
            total : { type: Number, default: null }
        },
        others : {
            existing : { type: Number, default: null },
            added : { type: Number, default: null },
            total : { type: Number, default: null }
        }
    },
    
    computer_internet_access_training : { type: String, default: null },

    maintenance_amount_in_lakhs : {
      ict : { type: Number, default: null },
      campus_infrastructure_facilities : { type: Number, default: null },
      equipment : { type: Number, default: null },
      other_maintenance : { type: Number, default: null },
      total : { type: Number, default: null }
    }
  }, { retainKeyOrder: true });

let CriterionFour = module.exports = mongoose.model('CriterionFour',criterionFourSchema,'criterion_four');
