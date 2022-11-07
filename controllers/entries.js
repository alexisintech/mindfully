const Entry = require("../models/Entry");
const Prompt = require("../models/Prompt");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const entries = await Entry.find({ user: req.user.id })
      let date = new Date();
      let dd = String(date.getDate()).padStart(2, '0');
      let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
      let yyyy = date.getFullYear();
      let todaysDate = mm + '/' + dd + '/' + yyyy;
	    function addZero(i) {
        if (i < 10) {i = "0" + i}
        return i;
      }
      const currentTime = `${addZero(date.getHours())}:${addZero(date.getMinutes())}`
      var currentHour = date.getHours()
      res.render("profile.ejs", { entries: entries, username: req.user.userName, currentTime: currentTime, currentHour: currentHour, todaysDate: todaysDate });
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
  getBlankEntry: async (req, res) => {
    try {
      res.render("blank.ejs");
    } catch (err) {
      console.log(err);
    }
  },
  getPromptEntry: async (req, res) => {
    try {
        const prompt = await Prompt.findById(req.params.id);
        const byYouPrompts = await Prompt.find({ user: req.user.id })
        const forYouPrompts = await Prompt.find( {user: '000000000000000000000001'} );
        const prompts = byYouPrompts.concat(forYouPrompts);
        res.render("promptEntry.ejs", { prompt: prompt, prompts: prompts });
    } catch (err) {
      console.log(err);
    }
  },
  getDateEntries: async (req, res) => {
    try {
      const entries = await Entry.find({ user: req.user.id })
      let dateEntries = [];
      for(let entry of entries){
        if(entry.fullDate == req.params.date){
          dateEntries.push(entry)
        }
      }
      if(dateEntries.length > 0){
        res.render("dateEntries.ejs", {entries: dateEntries})
      } else{res.render("nonefound.ejs")}
    } catch (err) {
      console.log(err);
    }
  },
  getEntry: async (req, res) => {
    try {
      const entry = await Entry.findById(req.params.id);
      res.render("entry.ejs", { entry: entry });
    } catch (err) {
      console.log(err);
    }
  },
  getAllEntries: async (req, res) => {
    try {
      const entries = await Entry.find({ user: req.user.id })
      res.render("allEntries.ejs", { entries: entries, username: req.user.userName });
    } catch (err) {
      console.log(err);
    }
  },
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
