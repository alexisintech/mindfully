const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const entriesController = require("../controllers/entries");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// Main Routes
router.get("/", homeController.getIndex);
router.get("/profile", ensureAuth, entriesController.getProfile);
router.get("/about", ensureAuth, entriesController.getAbout)
router.get("/addEntry", ensureAuth, entriesController.getAddEntry);
router.get("/calendarEntries", ensureAuth, entriesController.getCalendarEntries);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;
