const mongoose = require("mongoose");
const { OrderModel, CartModel } = require("../models");
const { v4: uuidv4 } = require("uuid");

//Dealing with data base operations
class ShoppingRepository {
  async Orders(customer_id) {
    const orders = await OrderModel.find({ customer_id:customer_id});

    return orders;
  }

  async Cart(customerId) {
    const cartItems = await CartModel.find({ customerId: customerId });

    if (cartItems) {
      return cartItems;
    }

    throw new Error("Data Not found!");
  }



  async AddCartItem(customerId, item, qty, isRemove) {
    // return await CartModel.deleteMany();

    const cart = await CartModel.findOne({ customerId: customerId });

    const { _id } = item;

    if (cart) {
      let isExist = false;

      let cartItems = cart.items;

      if (cartItems.length > 0) {
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
      }

      if (!isExist && !isRemove) {
        cartItems.push({ product: { ...item }, unit: qty });
      }

      cart.items = cartItems;

      return await cart.save();
    } else {
      return await CartModel.create({
        customerId,
        items: [{ product: { ...item }, unit: qty }],
      });
    }
  }

  async GetOrders() {
    try {
      const all = await OrderModel.find();
      return all;
    } catch (error) {
      return {
        "error" : error
      }
    }
  }

  async CreateNewOrder(id,transaction, products, total, address, status) {
    //required to verify payment through TxnId

    try {
      const data = { id,transaction, products, total, address, status };

      const order = new OrderModel({
        customer_id: id,
        transaction: transaction,
        ...data,
      });
      const orderResult = await order.save();
      return orderResult;
    } catch (error) {
      console.log(error);
    }

    // const cart = await CartModel.findOne({ customerId: id })

    // if(cart){

    //     let amount = 0;

    //     let cartItems = cart.items;

    //     if(cartItems.length > 0){
    //         //process Order

    //         cartItems.map(item => {
    //             amount += parseInt(item.product.price) *  parseInt(item.unit);
    //         });

    //         const orderId = uuidv4();

    //         const order = new OrderModel({
    //             orderId,
    //             customerId,
    //             amount,
    //             status: 'received',
    //             items: cartItems
    //         })

    //         cart.items = [];

    //         const orderResult = await order.save();
    //         await cart.save();
    //         return orderResult;

    //     }

    // }
  }
}

module.exports = ShoppingRepository;
