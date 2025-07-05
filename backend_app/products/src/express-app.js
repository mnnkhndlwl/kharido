const express = require('express');
const cors  = require('cors');
const { products, appEvents,categories } = require('./api');


module.exports = async (app,channel) => {

    app.use(express.json({ limit: '2mb'}));
   // app.use(express.urlencoded({ extended: true, limit: '1mb'}));
    app.use(cors());
    app.use(express.static(__dirname + '/public'))

    //handle events
   // appEvents(app);

    //api
    products(app,channel);
    categories(app,channel);

    // error handling
   // app.use(HandleErrors);
    
}