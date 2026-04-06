const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    date: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["Upcoming", "Completed"],
      default: "Upcoming",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Event", eventSchema);