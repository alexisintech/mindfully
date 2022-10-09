const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const entriesController = require("../controllers/entries");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Add Entry Routes
router.get("/blank", ensureAuth, entriesController.getBlank);
router.post("/blank/createEntry", ensureAuth, entriesController.createBlankEntry);

module.exports = router;