const request = require('request');

var geocodeAddress = (address, callback) => {
    var address = encodeURIComponent(address);
    request( {
        url: 'http://www.mapquestapi.com/geocoding/v1/address?key=YxnfFc1IQM1wUGUpbSkZEh6YTyweL6nw&location='+address,
        json: true
    }, (error, response, body) => {
        if(error){
            callback('Unable to connect to Google servers.');
        } else if(body.info.statuscode !== 0){
            callback('Something went wrong');
        } else {
            callback( undefined, {
                street : body.results[0].locations[0].street,
                lat : body.results[0].locations[0].latLng.lat,
                lng : body.results[0].locations[0].latLng.lng
            });
        }
    });
};

module.exports = {
    geocodeAddress
};