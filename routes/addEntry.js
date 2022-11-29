const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const entriesController = require("../controllers/entries");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// /addEntry Routes

router.get("/blank", ensureAuth, entriesController.getBlankEntry);
router.get("/prompt", ensureAuth, entriesController.getPromptEntry);
router.post("/blank/createEntry", ensureAuth, entriesController.createBlankEntry);

module.exports = router;