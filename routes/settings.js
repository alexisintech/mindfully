const express = require("express");
const router = express.Router();
const entriesController = require("../controllers/entries");
const promptsController = require("../controllers/prompts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// /settings Routes
router.get("/entries", ensureAuth, entriesController.getAllEntries);

router.get("/prompts", ensureAuth, promptsController.getAllPrompts);

router.post("/createPrompt", ensureAuth, promptsController.createPrompt);

module.exports = router;