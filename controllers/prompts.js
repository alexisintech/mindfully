const Prompt = require("../models/Prompt");
const Entry = require("../models/Entry");

module.exports = {
  getAllPrompts: async (req, res) => {
    try {
        const byYouPrompts = await Prompt.find({ user: req.user.id })
        const forYouPrompts = await Prompt.find( {user: '000000000000000000000001'} );
        res.render("prompts.ejs", { forYouPrompts: forYouPrompts, byYouPrompts: byYouPrompts, username: req.user.userName });
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
  getPrompt: async (req, res) => {
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
  createPromptEntry: async (req, res) => {
    try {
      await Entry.create({
        user: req.user.id,
        prompt: req.body.prompts,
        text: req.body.promptTextEntry,
      });
      console.log(req);
      console.log("Entry has been added!");
      res.redirect("/settings/prompts");
    } catch (err) {
      console.log(err);
    }
  },
};
