const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const entriesController = require("../controllers/entries");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Entry Routes
router.get("/:id", ensureAuth, entriesController.getEntry);

router.post("/createEntry", entriesController.createEntry);

module.exports = router;
