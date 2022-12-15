const mongoose = require("mongoose");

date = new Date();
const day = date.getDate();
const month = date.getMonth()+1;
const options = { month: 'long' };
const year = date.getFullYear();
const fullDateAsString = `${month}${day}${year}`
const fullDateAsNum = Number(fullDateAsString)
function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}
const time = `${addZero(date.getHours())}:${addZero(date.getMinutes())}`

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
    type: Number,
    default: month,
  },
  monthAsWord:{
    type: String,
    default: new Intl.DateTimeFormat('en-US', options).format(date),
  },
  year:{
    type: Number,
    default: year,
  },
  fullDate:{
    type: Number,
    default: fullDateAsNum,
  },
  time:{
    type: String,
    default: time,
  },
  prompt: {
    type: String,
    required: false,
  },
  text: {
    type: String,
  },
});

module.exports = mongoose.model("Entry", EntrySchema);
