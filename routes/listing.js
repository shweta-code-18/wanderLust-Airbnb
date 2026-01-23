const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListings } = require("../middleware.js");

const listingController = require("../controllers/listing.js");

//Index Route
router.get(
  "/",
  wrapAsync(listingController.index),
);

//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

//Show Route
router.get(
  "/:id",
  wrapAsync(listingController.showListing),
);

//Create Route
router.post(
  "/",
  isLoggedIn,
  validateListings,
  wrapAsync(listingController.createListing),
);

//Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm),
);

//Update Route
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  validateListings,
  wrapAsync(listingController.updateListing),
);

//Delete Route
router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.destroyListing),
);

module.exports = router;
