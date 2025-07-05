const mongoose = require("mongoose");
const { CustomerModel, AddressModel } = require("../models");

//Dealing with data base operations
class CustomerRepository {
  async CreateCustomer({ email, password, phone, salt }) {
    const customer = new CustomerModel({
      email,
      password,
      salt,
      phone,
      address: [],
    });

    const customerResult = await customer.save();
    return customerResult;
  }

  async allusers() {
    try {
      const customer = await CustomerModel.find().populate("address");
      return customer;
    } catch (error) {
      console.log(error);
    }
  }

  async CreateAddress({ _id, type, completeAddress, latitude, longitude }) {
    const profile = await CustomerModel.findById(_id);

    if (profile) {
      const newAddress = new AddressModel({
        type,
        completeAddress,
        latitude,
        longitude,
      });

      await newAddress.save();

      profile.address.push(newAddress);
    }

    return await profile.save();
  }

  async getAllAddresses({ _id }) {
    try {
      const customer = await CustomerModel.findById(_id).populate("address"); // populate method addresses la rha hai address collection se

      if (!customer) {
        // Customer not found
        return null;
      }

      const addresses = customer.address;

      return addresses;
    } catch (error) {
      // Handle any errors that occur during the database query
      console.error("Error fetching addresses:", error);
    }
  }

  async FindCustomer({ email }) {
    const existingCustomer = await CustomerModel.findOne({ email: email });
    return existingCustomer;
  }

  async FindCustomerById({ id }) {
    const existingCustomer = await CustomerModel.findById(id).populate(
      "address"
    );
    // existingCustomer.cart = [];
    // existingCustomer.orders = [];
    // existingCustomer.wishlist = [];

    // await existingCustomer.save();
    return existingCustomer;
  }

  async Wishlist(customerId) {
    const profile = await CustomerModel.findById(customerId).populate(
      "wishlist"
    );

    return profile.wishlist;
  }

  async AddWishlistItem(customerId, productData) {
    try {
      const product = {
        _id: productData._id,
        banner: productData.banner,
        brand: productData.brand,
        category: productData.category,
        name: productData.name,
        price: productData.price,
        quantity: productData.quantity,
        regular_price: productData.regular_price,
        store: productData.store,
        subcategory: productData.subcategory,
        weight: productData.weight,
      };

      const profile = await CustomerModel.findById(customerId).populate(
        "wishlist"
      );

      if (!profile) {
        throw new Error("Customer profile not found");
      }

      const wishlist = profile.wishlist || [];

      // Check if the product is already in the wishlist
      const isProductInWishlist = wishlist.some(
        (item) => item._id.toString() === product._id.toString()
      );

      if (isProductInWishlist) {
        // If the product is already in the wishlist, remove it
        const updatedWishlist = wishlist.filter(
          (item) => item._id.toString() !== product._id.toString()
        );
        profile.wishlist = updatedWishlist;
        // return false;
      } else {
        // If the product is not in the wishlist, add it
        wishlist.push(product);
        profile.wishlist = wishlist;
        // return true;
      }

      const profileResult = await profile.save();

      return profileResult.wishlist;
    } catch (error) {
      console.log(error);
    }
  }

  async AddCartItem(customerId, { _id, name, price, banner }, qty, isRemove) {
    const profile = await CustomerModel.findById(customerId).populate("cart");

    if (profile) {
      const cartItem = {
        product: { _id, name, price, banner },
        unit: qty,
      };

      let cartItems = profile.cart;

      if (cartItems.length > 0) {
        let isExist = false;
        cartItems.map((item) => {
          if (item.product._id.toString() === _id.toString()) {
            if (isRemove) {
              cartItems.splice(cartItems.indexOf(item), 1);
            } else {
              item.unit = qty;
            }
            isExist = true;
          }
        });

        if (!isExist) {
          cartItems.push(cartItem);
        }
      } else {
        cartItems.push(cartItem);
      }

      profile.cart = cartItems;

      return await profile.save();
    }

    throw new Error("Unable to add to cart!");
  }

  async AddOrderToProfile(customerId, order) {
    const profile = await CustomerModel.findById(customerId);

    if (profile) {
      if (profile.orders == undefined) {
        profile.orders = [];
      }
      profile.orders.push(order);

      profile.cart = [];

      const profileResult = await profile.save();

      return profileResult;
    }

    throw new Error("Unable to add to order!");
  }
}

module.exports = CustomerRepository;
