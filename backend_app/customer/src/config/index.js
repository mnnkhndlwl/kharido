const dotEnv = require("dotenv");

// if (process.env.NODE_ENV !== "prod") {
//   const configFile = `./.env.${process.env.NODE_ENV}`;
//   dotEnv.config({ path: configFile });
// } else {
//   dotEnv.config();
// }

require('dotenv').config();

module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  APP_SECRET: process.env.APP_SECRET,
  MSG_QUEUE_URL: process.env.MSG_QUEUE_URL,
  EXCHANGE_NAME: 'ONLINE_SHOPPING',
  SHOPPING_BINDING_KEY: 'SHOPPING_SERVICE',
  CUSTOMER_BINDING_KEY: 'CUSTOMER_SERVICE',
  QUEUE_NAME: 'CUSTOMER_QUEUE'
};
