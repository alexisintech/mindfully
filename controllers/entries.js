const Entry = require("../models/Entry");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const entries = await Entry.find({ user: req.user.id });
      res.render("profile.ejs", { entries: entries, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getEntry: async (req, res) => {
    try {
      const entry = await Entry.findById(req.params.id);
      res.render("entry.ejs", { entry: entry, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createEntry: async (req, res) => {
    try {
      await Entry.create({
        user: req.user.id,
        text: req.body.text,
      });
      console.log("Entry has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
};
