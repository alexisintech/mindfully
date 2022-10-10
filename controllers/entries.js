const Entry = require("../models/Entry");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const entries = await Entry.find({ user: req.user.id });
      res.render("profile.ejs", { numOfEntries: entries.length });
    } catch (err) {
      console.log(err);
    }
  },
  getAddEntry: async (req, res) => {
    try {
      const entries = await Entry.find({ user: req.user.id });
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
  getEntry: async (req, res) => {
    try {
      const entry = await Entry.findById(req.params.id);
      for(let entry of entries){
        var entryText = entry.text;
        var entryDay = entry.day;
        var entryMonth = entry.month;
        var entryYear = entry.year;
      }
      res.render("entry.ejs", { entryText: entryText, entryDay: entryDay, entryMonth: entryMonth, entryYear: entryYea });
    } catch (err) {
      console.log(err);
    }
  },
  getCalendarEntry: async (req, res) => {
    try {
      const entry = await Entry.findById(req.params.id);
      console.log(entry);
      res.render("entry.ejs", { entry: entry, user: req.user });
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
      console.log(req);
      console.log("Entry has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
};
