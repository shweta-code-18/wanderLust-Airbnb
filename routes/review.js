const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReviews, isLoggedIn, isReviewAuthor } = require("../middleware.js");
const reviewContoller = require("../controllers/review.js");

// POST Review Route
router.post(
  "/",
  isLoggedIn,
  validateReviews,
  wrapAsync(reviewContoller.createReview),
);

// DELETE Review Route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewContoller.destroyReview),
);

module.exports = router;
