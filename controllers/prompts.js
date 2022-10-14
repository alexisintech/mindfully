const Prompt = require("../models/Prompt");
const Entry = require("../models/Entry");

module.exports = {
  getAllPrompts: async (req, res) => {
    try {
        const prompts = await Prompt.find()
        res.render("prompts.ejs", { prompts: prompts, username: req.user.userName });
    } catch (err) {
      console.log(err);
    }
  },
  createPrompt: async (req, res) => {
    try {
      await Prompt.create({
        user: req.user.id,
        text: req.body.createPrompt,
      });
      console.log("Prompt has been added!");
      res.redirect("/settings/prompts");
    } catch (err) {
      console.log(err);
    }
  },
//   getForYouPrompts: async (req, res) => {
//     try {
//       const forYouPrompts = await Prompt.find( {user: 000000000000000000000001} );
//       res.render("prompts.ejs", { forYouPrompts: forYouPrompts });
//     } catch (err) {
//       console.log(err);
//     }
//   },
//   getByYouPrompts: async (req, res) => {
//     try {
//       const byYouPrompts = await Prompt.find({ user: req.user.id })
//       if(byYouPrompts.length > 0){
//         res.render("prompts.ejs", { byYouPrompts: byYouPrompts });
//       } else{res.render("prompts.ejs")}
//     } catch (err) {
//       console.log(err);
//     }
//   },
  getPrompt: async (req, res) => {
    try {
        const prompt = await Prompt.findById(req.params.id);
        res.render("promptEntry.ejs", { prompt: prompt });
    } catch (err) {
      console.log(err);
    }
  },
  createPromptEntry: async (req, res) => {
    try {
      await Entry.create({
        user: req.user.id,
        prompt: req.body.prompt,
        text: req.body.promptTextEntry,
      });
      console.log(req.body);
      console.log(req);
      console.log("Entry has been added!");
      res.redirect("/settings/prompts");
    } catch (err) {
      console.log(err);
    }
  },
};
