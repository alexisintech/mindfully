const express = require("express");
const router = express.Router();
const entriesController = require("../controllers/entries");
const promptsController = require("../controllers/prompts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// /settings Routes
router.get("/entries", ensureAuth, entriesController.getAllEntries);

router.get("/prompts", ensureAuth, promptsController.getAllPrompts);

// router.get("/prompts/foryou", ensureAuth, promptsController.getForYouPrompts);

// router.get("/prompts/byyou", ensureAuth, promptsController.getByYouPrompts);

router.get("/prompts/:id", ensureAuth, promptsController.getPrompt);

router.post("/prompts/createEntry", ensureAuth, promptsController.createPromptEntry);

module.exports = router;