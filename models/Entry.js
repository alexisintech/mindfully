const mongoose = require("mongoose");

date = new Date();
const day = date.getDay();
const month = date.getMonth();
const options = { month: 'long' }

const EntrySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  day:{
    type: String,
    default: day,
  },
  month:{
    type: String,
    default: new Intl.DateTimeFormat('en-US', options).format(month),
  },
  year:{
    type: Number,
    default: date.getFullYear(),
  },
  text: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Entry", EntrySchema);
