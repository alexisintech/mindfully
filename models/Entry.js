const mongoose = require("mongoose");

date = new Date();
const day = date.getDate();
const month = date.getMonth()+1;
const options = { month: 'long' };
const year = date.getFullYear();

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
    type: Number,
    default: day,
  },
  month:{
    // type: String,
    // default: new Intl.DateTimeFormat('en-US', options).format(date),
    type: Number,
    default: month,
  },
  year:{
    type: Number,
    default: year,
  },
  text: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Entry", EntrySchema);
