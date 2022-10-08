const mongoose = require("mongoose");

const AdSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please, provide title"],
    },
    description: {
      type: String,
      required: [true, "Please, provide description"],
    },
    category: {
      type: String,
      enum: [
        "lease-room",
        "lease-condo",
        "rent-room",
        "rent-condo",
        "sell-car",
        "buy-car",
        "give-away",
        "take-free",
      ],
      default: "lease-room",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please, peovide user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ad", AdSchema);
