const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const entriesController = require("../controllers/entries");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// /dateEntry routes

router.get("/:date", entriesController.getDateEntries); // Get an entry for a specific date

module.exports = router;