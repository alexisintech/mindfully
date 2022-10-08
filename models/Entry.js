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
    required: true,
  },
});

module.exports = mongoose.model("Entry", EntrySchema);
