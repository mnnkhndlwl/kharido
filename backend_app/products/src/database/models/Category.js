// brands categories hai or categories brands hai (alga badli)
const mongoose = require("mongoose");
const Category_Schema = new mongoose.Schema(
  {
    CategoryName: {
      type: String,
    },
    CategoryImage: {
      image_name: { type: String },
      image_url: { type: String },
      path: { type: String },
    },
    subcategory: [
      {
        name: { type: String },
        image: {
          image_name: { type: String },
          image_url: { type: String },
          path: { type: String },
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", Category_Schema);
