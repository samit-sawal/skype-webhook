'use strict';

// Imports dependencies and set up http server
const
  express = require('express'),
  bodyParser = require('body-parser'),
  app = express().use(bodyParser.json()),// creates express http server
  util = require('util'),
  request = require('request');

// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));

// Creates the endpoint for our webhook 
app.post('/webhook', (req, res) => {  
 
  let body = req.body;
  console.log('post req.headers:' +JSON.stringify(req.headers));
  console.log('post req.body:' +JSON.stringify(req.body));
  
    // Returns a '200 OK' response to all requests
    res.status(200).send('return from get webhook');

});

// Adds support for GET requests to our webhook
app.get('/webhook', (req, res) => {
  
  
      res.status(200).send('return from get in webhook');
    
    
  
});
