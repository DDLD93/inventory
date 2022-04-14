const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const conditionArr = ["Excellent", "Good", "Fair", "Poor"];
const damageArr = [0, 25, 50, 75, 100];
const materialArr = ["Metal", "Wood", "Concrete", "Other"];

const BuildingSchema = new Schema({
  //Basic Building Data
  basic: {
    siteId: {
      type: String,
      index: true,
    },
    name: {
      type: String,
    },
    code: {
      type: String,
    },
    purpose: {
      type: String,
    },
    position: {
      latitude: {
        type: Number,
      },
      longitude: {
        type: Number,
      },
    },
  },
  // Dimensions
  dimensions: {
    floorArea: {
      type: Number,
    },
    wallArea: {
      type: Number,
    },
    ceilingArea: {
      type: Number,
    },
    numberOfFloors: {
      type: Number,
    },
  },

  // Super Structure Data
  superStructure: {
    type: {
      type: String,
      enum: ["Metal", "Wood", "Concrete", "Block", "Brick"],
    },
    concrete: {
      blockWork: {
        type: String,
      },
      formWork: {
        type: String,
      },
      reinforcement: {
        type: String,
      },
      brickWork: {
        type: String,
      },
    },
    crackTiles: {
      size: {
        type: Number,
      },
      type: {
        type: String,
      },
      quantity: {
        type: Number,
      },
    },
    alucobond: {
      size: {
        type: Number,
      },
      type: {
        type: String,
      },
      quantity: {
        type: Number,
      },
    },

    condition: {
      type: String,
      enum: conditionArr,
    },
    costOfRepair: {
      type: Number,
    },
  },
  // Walls and Windows

  //walls
  wallsAndWindows: {
    type: {
      type: String,
      enum: ["Concrete wall", "150mm block wall", "255mm block wall", "other"],
    },
    // selectedWallType:
    quantity: {
      type: Number,
    },
    lastRecordedYear: {
      type: String,
    },
    hasStains: {
      type: String,
      enum: ["Yes", "No"],
    },
    condition: {
      type: String,
      enum: conditionArr,
    },
    quantity: {
      type: Number,
    },
    costOfRepair: {
      type: Number,
    },
    paint: {
      condition: {
        type: String,
        emun: conditionArr,
      },
      quantity: {
        type: Number,
      },
      costOfRepair: {
        type: Number,
      },
    },
    motar: {
      condition: {
        type: String,
        enum: conditionArr,
      },
      quantity: {
        type: Number,
      },
      costOfRepair: {
        type: Number,
      },
    },
    structure: {
      type: {
        type: String,
        enum: ["Frame structure", "Load bearing"],
      },
      quantity: {
        type: Number,
      },
      damage: {
        type: Number,
        enum: damageArr,
      },
      condition: {
        type: String,
        enum: conditionArr,
      },
      costOfRepair: {
        type: Number,
      },
    },
    trimming: {
      quantity: {
        type: Number,
      },
      finishing: {
        type: String,
      },
      condition: {
        type: String,
        enum: conditionArr,
      },
      costOfRepair: {
        type: Number,
      },
    },
    frame: {
      concreteWork: {
        type: String,
      },
      finishing: {
        type: String,
      },
      formWork: {
        type: String,
      },
      quantity: {
        type: Number,
      },
      reinforcement: {
        type: String,
      },
      damage: {
        type: Number,
        enum: damageArr,
      },
      costOfRepair: {
        type: Number,
      },
    },
    facade: {
      concreteWork: {
        type: String,
      },
      finishing: {
        type: String,
      },
      formWork: {
        type: String,
      },
      quantity: {
        type: Number,
      },
      type: {
        type: String,
      },
      damage: {
        type: Number,
        enum: damageArr,
      },
      costOfRepair: {
        type: Number,
      },
    },
    corridors: {
      quantity: {
        type: Number,
      },
      type: {
        type: String,
      },
      condition: {
        type: String,
        enum: conditionArr,
      },
      costOfRepair: {
        type: Number,
      },
    },
    interiorWall: {
      finishing: {
        type: String,
        enum: [
          "Metal",
          "Wood",
          "Sheetrock",
          "Plaster",
          "Concrete",
          "Brick",
          "Panelling",
          "Other",
        ],
      },
      size: {
        type: Number,
      },
      type: {
        type: String,
      },
      accessories: {
        type: String,
      },
      quantity: {
        type: Number,
      },
      condition: {
        type: String,
        enum: conditionArr,
      },
      costOfRepair: {
        type: Number,
      },
    },
    window: {
      material: {
        type: String,
        enum: [
          "Wire and glass",
          "Glass block",
          "Plate",
          "Tempered",
          "Operating",
          "Fixed",
          "Other",
        ],
      },
      size: {
        type: Number,
      },
      type: {
        type: String,
      },
      quantity: {
        type: Number,
      },
      condition: {
        type: String,
        enum: conditionArr,
      },
      costOfRepair: {
        type: Number,
      },
    },
  },

  // Floor
  floor: {
    jointBeams: {
      concreteWork: {
        type: String,
      },
      finishing: {
        type: String,
      },
      formWork: {
        type: String,
      },
      quantity: {
        type: Number,
      },
      damage: {
        type: Number,
        enum: damageArr,
      },
      costOfRepair: {
        type: Number,
      },
    },
    slaps: {
      concreteWork: {
        type: String,
      },
      finishing: {
        type: String,
      },
      formWork: {
        type: String,
      },
      quantity: {
        type: Number,
      },
      reinforcement: {
        type: String,
      },
      damage: {
        type: Number,
        enum: damageArr,
      },
      costOfRepair: {
        type: Number,
      },
    },
    foundation: {
      type: {
        type: String,
        enum: [
          "Basement foundation",
          "Crawlspace stem walls foundation",
          "Concrete slab foundation",
          "Wood foundation",
          "Pier and beam foundation",
        ],
      },
      depth: {
        type: String,
      },
      fillings: {
        type: String,
      },
      excavation: {
        type: String,
      },
      concreteWork: {
        type: String,
      },
      blockWork: {
        type: String,
      },
      formWork: {
        type: String,
      },
      reinforcement: {
        type: String,
      },
      rendering: {
        type: String,
      },
      dampProofMembrane: {
        type: String,
      },
      damage: {
        type: Number,
        enum: damageArr,
      },
      costOfRepair: {
        type: Number,
      },
    },
    floorStructure: {
      Material: {
        type: String,
        enum: materialArr,
      },
      size: {
        type: Number,
      },
      type: {
        type: String,
      },
      accessories: {
        type: String,
      },
      quantity: {
        type: Number,
      },
      condition: {
        type: String,
        enum: conditionArr,
      },
      costOfRepair: {
        type: Number,
      },
    },
    floorCovering: {
      material: {
        type: String,
        enum: materialArr,
      },
      size: {
        type: Number,
      },
      type: {
        type: String,
      },
      accessories: {
        type: String,
      },
      quantity: {
        type: Number,
      },
      condition: {
        type: String,
        enum: conditionArr,
      },
      costOfRepair: {
        type: Number,
      },
    },
  },

  // Roof and Ceiling
  roofAndCeiling: {
    basic: {
      style: {
        type: String,
        enum: [
          "Flat",
          "Pitched",
          "Arched",
          "Butterfly",
          "Hip",
          "Gambrel",
          "Mansard",
          "Monitor",
          "Shed",
          "Dome",
          "Gamie",
          "Other",
        ],
      },
      damage: {
        type: Number,
        enum: damageArr,
      },
      size: {
        type: Number,
      },
      condition: {
        type: String,
        enum: conditionArr,
      },
      costOfRepair: {
        type: Number,
      },
    },
    support: {
      type: {
        type: String,
        enum: [
          "Joist",
          "Truss",
          "Ridge frame",
          "Arch",
          "Dome",
          "Cable",
          "Other",
        ],
      },
      size: {
        type: Number,
      },
      quantity: {
        type: Number,
      },
      damage: {
        type: Number,
        enum: damageArr,
      },
      condition: {
        type: String,
        enum: conditionArr,
      },
      costOfRepair: {
        type: Number,
      },
    },
    steelStruss: {
      type: {
        type: String,
        enum: ["Joist", "Truss", "Z-purlins", "Cleats", "Bolts", "Cables"],
      },
      size: {
        type: Number,
      },
      quantity: {
        type: Number,
      },
      damage: {
        type: Number,
        enum: damageArr,
      },
      condition: {
        type: String,
        enum: conditionArr,
      },
      costOfRepair: {
        type: Number,
      },
    },
    decking: {
      type: {
        type: String,
        enum: materialArr,
      },
      size: {
        type: Number,
      },
      quantity: {
        type: Number,
      },
      damage: {
        type: Number,
        enum: damageArr,
      },
      condition: {
        type: String,
        enum: conditionArr,
      },
      costOfRepair: {
        type: Number,
      },
    },
    covering: {
      type: {
        type: String,
        enum: ["Asbestos", "Zinc", "Aluminum", "Stone coalted tiles", "Other"],
      },
      size: {
        type: Number,
      },
      quantity: {
        type: Number,
      },
      damage: {
        type: Number,
        enum: damageArr,
      },
      condition: {
        type: String,
        enum: conditionArr,
      },
      costOfRepair: {
        type: Number,
      },
    },
    ceilling: {
      type: {
        type: String,
      },
      size: {
        type: Number,
      },
      damage: {
        type: Number,
        enum: damageArr,
      },
      costOfRepair: {
        type: Number,
      },
    },
  },

  // Building Services
  buildingServices: {
    roofLights: {
      size: {
        type: Number,
      },
      thickness: {
        type: String,
      },
      quantity: {
        type: Number,
      },
      condition: {
        type: String,
        enum: conditionArr,
      },
      damage: {
        type: Number,
        enum: damageArr,
      },
      costOfRepair: {
        type: Number,
      },
    },
    airCondition: {
      pipingLength: {
        type: String,
      },
      quantity: {
        type: Number,
      },
      condition: {
        type: String,
        enum: conditionArr,
      },
      damage: {
        type: Number,
        enum: damageArr,
      },
      costOfRepair: {
        type: Number,
      },
    },

    roofCovering: {
      height: {
        type: Number,
      },
      length: {
        type: String,
      },
      condition: {
        type: String,
        enum: conditionArr,
      },
      damage: {
        type: Number,
        enum: damageArr,
      },
      costOfRepair: {
        type: Number,
      },
    },
    burglaryProof: {
      type: {
        type: String,
      },
      quantity: {
        type: Number,
      },
      // location: {
      //   type: String,
      // },
      condition: {
        type: String,
        enum: conditionArr,
      },
      damage: {
        type: Number,
        enum: damageArr,
      },
      costOfRepair: {
        type: Number,
      },
    },
    gates: {
      quantity: {
        type: Number,
      },
      condition: {
        type: String,
        enum: conditionArr,
      },
      costOfRepair: {
        type: Number,
      },
    },
    drainage: {
      quantity: {
        type: Number,
      },
      condition: {
        type: String,
        enum: conditionArr,
      },
      costOfRepair: {
        type: Number,
      },
    },
    distribution: {
      quantity: {
        type: Number,
      },
      condition: {
        type: String,
        conditionArr,
      },
      costOfRepair: {
        type: Number,
      },
    },
  },
  elevator: {
    PassengerElevators: {
      type: Number,
    },
    freightElevators: {
      type: Number,
    },
    fireServiceElevators: {
      type: Number,
    },
    elevatorBrand: {
      type: String,
    },
    elevatorServiceCompany: {
      type: String,
    },
  },

  image: { type: String },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Building", BuildingSchema);
