const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: String,
  image: {
    url: String,
    filename: String,
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
  },

  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
