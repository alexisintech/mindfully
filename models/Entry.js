const mongoose = require("mongoose");

const EntrySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  text: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Entry", EntrySchema);
