const Entry = require("../models/Entry");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const entries = await Entry.find({ user: req.user.id })
      res.render("profile.ejs", { entries: entries });
    } catch (err) {
      console.log(err);
    }
  },
  getAddEntry: async (req, res) => {
    try {
      res.render("addEntry.ejs", { user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getBlank: async (req, res) => {
    try {
      res.render("blank.ejs");
    } catch (err) {
      console.log(err);
    }
  },
  getDateEntries: async (req, res) => {
    try {
      const entries = await Entry.find({ fullDate: req.params.date })
      res.render("dateEntries.ejs", {entries: entries})
    } catch (err) {
      console.log(err);
    }
  },
  // getEntry: async (req, res) => {
  //   try {
  //     const entries = await Entry.findById(req.params.id);
  //     for(let entry of entries){
  //       var entryText = entry.text;
  //       var entryDay = entry.day;
  //       var entryMonth = entry.month;
  //       var entryYear = entry.year;
  //     }
  //     res.render("entry.ejs", { entryText: entryText, entryDay: entryDay, entryMonth: entryMonth, entryYear: entryYear });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
  getCalendarEntries: async (req, res) => {
    try {
      const entries = await Entry.find({ user: req.user.id })
      res.json(entries)
    } catch (err) {
      console.log(err);
    }
  },
  createBlankEntry: async (req, res) => {
    try {
      await Entry.create({
        user: req.user.id,
        text: req.body.blankTextEntry,
      });
      console.log("Entry has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
};
