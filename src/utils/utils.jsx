export const calculateTotalPrice = (cartArr) => {
    let total = 0;
    cartArr.forEach((item) => (total += item.regular_price * item.quantity));
    return total;
  };