const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    transaction : {
      type:String
    },
    products: [
      {
        _id: String,
        banner: String,
        brand: String,
        category: String,
        name: String,
        price: Number,
        quantity: Number,
        regular_price: Number,
        store: String,
        subcategory: String,
        unit: String,
        weight: String,
      },
    ],
    total: {
      type: Number,
      required: true,
    },
    customer_id: {
      type: String,
      required: true,
    },
    address: {
      type: {
        type: String,
        enum: ["home", "hotel", "office", "other"],
        required: true,
      },
      completeAddress: {
        type: String,
        required: true,
      },
      latitude: {
        type: Number,
      },
      longitude: {
        type: Number,
      },
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

module.exports = mongoose.model("order", OrderSchema);
