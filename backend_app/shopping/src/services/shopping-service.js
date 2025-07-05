const { ShoppingRepository } = require("../database");
const { FormateData } = require("../utils");
const stripe = require("stripe")(process.env.STRIPE_KEY);

// All Business logic will be here
class ShoppingService {
  constructor() {
    this.repository = new ShoppingRepository();
  }

  //payment service

  async CompletePayment(total) {
    try {
      // create a PaymentIntent
      console.log(total);
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total.amount * 100 , // Integer, usd -> pennies, eur -> cents
        currency: "usd",
        description: "Software development services",
        shipping: {
          name: "Jenny Rosen",
          address: {
            line1: "510 Townsend St",
            postal_code: "98140",
            city: "San Francisco",
            state: "CA",
            country: "US",
          },
        },
        automatic_payment_methods: {
          enabled: true,
        },
      });
      // Return the secret
      return FormateData({
        id: paymentIntent.id,
        client_secret: paymentIntent.client_secret,
      });
    } catch (e) {
      console.log(e);
      return FormateData({
        error: "Error in creating Payment Intent",
      });
    }
  }

  //shopping service

  async GetCart({ _id }) {
    const cartItems = await this.repository.Cart(_id);
    return FormateData(cartItems);
  }

  async PlaceOrder(userInput) {
    const { _id, transaction, products, total, address, status } = userInput;

    const orderResult = await this.repository.CreateNewOrder(
      _id,
      transaction,
      products,
      total,
      address,
      status
    );

    return FormateData(orderResult);
  }

  async GetOrders(customerId) {
    const orders = await this.repository.Orders(customerId);
    return FormateData(orders);
  }

  async GetAll() {
    const orders = await this.repository.GetOrders();
    return FormateData(orders);
  }

  async GetOrderDetails({ _id, orderId }) {
    const orders = await this.repository.Orders(productId);
    return FormateData(orders);
  }

  async ManageCart(customerId, item, qty, isRemove) {
    const cartResult = await this.repository.AddCartItem(
      customerId,
      item,
      qty,
      isRemove
    );
    return FormateData(cartResult);
  }

  async SubscribeEvents(payload) {
    payload = JSON.parse(payload);
    const { event, data } = payload;
    const { userId, product, qty } = data;

    switch (event) {
      case "ADD_TO_CART":
        this.ManageCart(userId, product, qty, false);
        break;
      case "REMOVE_FROM_CART":
        this.ManageCart(userId, product, qty, true);
        break;
      default:
        break;
    }
  }

  async GetOrderPayload(userId, order, event) {
    if (order) {
      const payload = {
        event: event,
        data: { userId, order },
      };

      return payload;
    } else {
      return FormateData({ error: "No Order Available" });
    }
  }
}

module.exports = ShoppingService;
