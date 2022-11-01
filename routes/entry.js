const express = require("express");
const router = express.Router();
const entriesController = require("../controllers/entries");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// /entry Routes
router.get("/:id", ensureAuth, entriesController.getEntry);

router.post("/createEntry", entriesController.createBlankEntry);

module.exports = router;
