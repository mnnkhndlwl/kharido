export const calculateTotalPrice = (cartArr) => {
    let total = 0;
    cartArr.forEach((item) => (total += item.regular_price * item.quantity));
    return total;
  };

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-indexed
    const year = date.getFullYear();
  
    // Pad single-digit day and month with leading zeros
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
  
    return `${formattedDay}/${formattedMonth}/${year}`;
  };  