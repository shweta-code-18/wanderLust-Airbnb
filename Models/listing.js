const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: String,
  image: String,
  // url: String,
  // filename: String,
  // filename: {
  //   type: String,
  // },
  // url: {
  //   type: String,
  //   default:
  //     "https://unsplash.com/photos/sky-phenomenon-above-pine-trees-near-body-of-water-s8Rg2rBpm9Y",
  //   set: (v) =>
  //     v === ""
  //       ? " https://unsplash.com/photos/sky-phenomenon-above-pine-trees-near-body-of-water-s8Rg2rBpm9Y"
  //       : v,
  // },

  price: Number,
  location: String,
  country: String,

  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],

  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
