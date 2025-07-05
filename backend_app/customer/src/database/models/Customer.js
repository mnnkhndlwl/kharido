const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CustomerSchema = new Schema(
  {
    email: String,
    password: String,
    salt: String,
    phone: String,
    isAdmin: {
      type: Boolean,
      default : false
    },
    address: [{ type: Schema.Types.ObjectId, ref: "address", require: true }],
    cart: [
      {
        product: {
          _id: { type: String, require: true },
          name: { type: String },
          banner: { type: String },
          price: { type: Number },
        },
        unit: { type: Number, require: true },
      },
    ],
    wishlist: [
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
        weight: String,
      },
    ],
    orders: [
      {
        _id: { type: String, required: true },
        total: { type: String },
        date: { type: Date, default: Date.now() },
      },
    ],
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        delete ret.salt;
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

module.exports = mongoose.model("customer", CustomerSchema);

// The toJSON option is provided to the schema, specifying a transformation function that is applied when converting the Customer
// document to JSON. This function removes sensitive fields such as password, salt, and __v (version key) from the JSON
// representation of the document.
