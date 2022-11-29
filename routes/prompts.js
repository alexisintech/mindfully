const express = require("express");
const router = express.Router();
const entriesController = require("../controllers/entries");
const promptsController = require("../controllers/prompts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// /prompts Routes

router.post("/createEntry", ensureAuth, promptsController.createEntry);

module.exports = router;

module.exports = router;