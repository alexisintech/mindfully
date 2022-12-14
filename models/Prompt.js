const mongoose = require("mongoose");

const PromptSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  text: {
    type: String,
  },
});

module.exports = mongoose.model("Prompt", PromptSchema);
