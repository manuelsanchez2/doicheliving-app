const mongoose = require("mongoose");

const requiredNumber = {
  type: Number,
  required: true,
};

const SpotSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,

    latitude: {
      ...requiredNumber,
      min: -90,
      max: 90,
    },
    longitude: {
      ...requiredNumber,
      min: -180,
      max: 180,
    },
    visitDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Spot", SpotSchema);
