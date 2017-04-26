'use strict';

const express = require('express');
const router = new express.Router();
const request = require('request');
module.exports = router;

router.get('/:searchText', function (req, res) {
	console.log('inside routes');
  var responseToSend = {};
	var options =  {
    uri: 'http://api-3283.iheart.com/api/v1/catalog/searchAll',
    qs: {
      keywords: req.params.searchText,
      queryTrack: false,
      queryBundle: false,
      queryArtist: true,
      queryStation: false,
      queryFeaturedStation: false,
      queryTalkShow: false,
      queryTalkTheme: false,
      queryKeyWord: false,
      countryCode: 'US',
    },
    method: 'GET',
    json: true
  }

  var r = request( options
  , function(error, response, body){
     if (!error && response.statusCode == 200) {
      responseToSend = response.body;
      res.send(responseToSend);
    } else {
      console.error("Failed calling iHeart API", response.statusCode, response.statusMessage, body.error);
    }
  });
});