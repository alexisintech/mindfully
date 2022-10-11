const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const entriesController = require("../controllers/entries");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Entry Routes
// router.get("/:id", ensureAuth, entriesController.getEntry);

router.post("/createEntry", entriesController.createBlankEntry);

router.get("/:date", entriesController.getDateEntries);

module.exports = router;
