// Criterion Four
let mongoose = require('mongoose');

// Criterion Four schema
var criterionFourSchema = mongoose.Schema({
  department: { type: String, default: '' },
    increase_in_infrastructure_details : {
      facilities : {
        existing : { type: String, default: '' },
        newly_created : { type: String, default: '' },
        source_of_fund : { type: String, default: '' },
        total : { type: String, default: '' }
      },
      campus_area : {
        existing : { type: String, default: '' },
        newly_created : { type: String, default: '' },
        source_of_fund : { type: String, default: '' },
        total : { type: String, default: '' }
      },
      class_rooms : {
        existing : { type: String, default: '' },
        newly_created : { type: String, default: '' },
        source_of_fund : { type: String, default: '' },
        total : { type: String, default: '' }
      },
      laboratories : {
        existing : { type: String, default: '' },
        newly_created : { type: String, default: '' },
        source_of_fund : { type: String, default: '' },
        total : { type: String, default: '' }
      },
      seminar_halls : {
        existing : { type: String, default: '' },
        newly_created : { type: String, default: '' },
        source_of_fund : { type: String, default: '' },
        total : { type: String, default: '' }
      },
      important_equipment_purchased : {
        existing : { type: String, default: '' },
        newly_created : { type: String, default: '' },
        source_of_fund : { type: String, default: '' },
        total : { type: String, default: '' }
      },
      value_of_equipment_purchased_in_lakhs : {
        existing : { type: String, default: '' },
        newly_created : { type: String, default: '' },
        source_of_fund : { type: String, default: '' },
        total : { type: String, default: '' }
      },
      others : {
        existing : { type: String, default: '' },
        newly_created : { type: String, default: '' },
        source_of_fund : { type: String, default: '' },
        total : { type: String, default: '' }
      }
    },

    computerization_of_administration_and_library : { type: String, default: '' },

    library_services : {
      text_books : {
        existing : {
          num : { type: Number, default: 0 },
          val : { type: Number, default: 0 }
        },
        newly_added : {
          num : { type: Number, default: 0 },
          val : { type: Number, default: 0 },
        },
        total : {
          num : { type: Number, default: 0 },
          val : { type: Number, default: 0 }
        }
      },
      reference_books : {
        existing : {
          num : { type: Number, default: 0 },
          val : { type: Number, default: 0 }
        },
        newly_added : {
          num : { type: Number, default: 0 },
          val : { type: Number, default: 0 }
        },
        total : {
          num : { type: Number, default: 0 },
          val : { type: Number, default: 0 }
        }
      },
      e_books : {
        existing : {
          num : { type: Number, default: 0 },
          val : { type: Number, default: 0 }
        },
        newly_added : {
          num : { type: Number, default: 0 },
          val : { type: Number, default: 0 }
        },
        total : {
          num : { type: Number, default: 0 },
          val : { type: Number, default: 0 }
        }
      },
      journals : {
        existing : {
          num : { type: Number, default: 0 },
          val : { type: Number, default: 0 }
        },
        newly_added : {
          num : { type: Number, default: 0 },
          val : { type: Number, default: 0 }
        },
        total : {
          num : { type: Number, default: 0 },
          val : { type: Number, default: 0 }
        }
      },
      ejournals : {
        existing : {
          num : { type: Number, default: 0 },
          val : { type: Number, default: 0 }
        },
        newly_added : {
          num : { type: Number, default: 0 },
          val : { type: Number, default: 0 }
        },
        total : {
          num : { type: Number, default: 0 },
          val : { type: Number, default: 0 }
        }
      },
      digital_database : {
        existing : {
          num : { type: Number, default: 0 },
          val : { type: Number, default: 0 }
        },
        newly_added : {
          num : { type: Number, default: 0 },
          val : { type: Number, default: 0 }
        },
        total : {
          num : { type: Number, default: 0 },
          val : { type: Number, default: 0 }
        }
      },
      cd_video : {
        existing : {
          num : { type: Number, default: 0 },
          val : { type: Number, default: 0 }
        },
        newly_added : {
          num : { type: Number, default: 0 },
          val : { type: Number, default: 0 }
        },
        total : {
          num : { type: Number, default: 0 },
          val : { type: Number, default: 0 }
        }
      },
      other : {
        existing : {
          num : { type: Number, default: 0 },
          val : { type: String, default: '' }
        },
        newly_added : {
          num : { type: Number, default: 0 },
          val : { type: String, default: '' }
        },
        total : {
          num : { type: Number, default: 0 },
          val : { type: String, default: '' }
        }
      }
    },
 
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
    },
    
    computer_internet_access_training : { type: String, default: '' },

    maintenance_amount_in_lakhs : {
      ict : { type: Number, default: 0 },
      campus_infrastructure_facilities : { type: Number, default: 0 },
      equipment : { type: Number, default: 0 },
      other_maintenance : { type: Number, default: 0 },
      total : { type: Number, default: 0 }
    }
  }, { retainKeyOrder: true });

module.exports = mongoose.model('HCriterionFour',criterionFourSchema,'criterion_four');
