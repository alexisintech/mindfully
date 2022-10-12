const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const entriesController = require("../controllers/entries");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Add Entry Routes
router.get("/entries", ensureAuth, entriesController.getAllEntries);

module.exports = router;