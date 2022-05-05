const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide product title!"],
    },
    photo: String,
    description: {
      type: String,
      required: [true, "Please provide product description!"],
    },
    price: {
      type: Number,
      required: [true, "Please provide product price"],
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
