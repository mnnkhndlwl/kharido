const express = require('express');
const cors  = require('cors');
const { customer, appEvent } = require('./api');



module.exports = async (app,channel) => {

    app.use(express.json({ limit: '1mb'}));
    app.use(express.urlencoded({ extended: true, limit: '1mb'}));
    app.use(cors());
    app.use(express.static(__dirname + '/public'))

    //Listen to events//
   // appEvent(app);

    //api
    customer(app,channel);

    // error handling
   // app.use(HandleErrors);
    
}