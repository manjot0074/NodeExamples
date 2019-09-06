var request = require('request');

var geoCodeAdd = (address) => {
    
    return new Promise ((resolve, reject) => {
        var address = encodeURIComponent(address);
        request( {
            url: 'http://www.mapquestapi.com/geocoding/v1/address?key=YxnfFc1IQM1wUGUpbSkZEh6YTyweL6nw&location='+address,
            json: true
        }, (error, response, body) => {
            if(error){
                reject('Unable to connect to Google servers.');
            } else if(body.info.statuscode !== 0){
                reject('Something went wrong');
            } else {
                resolve({
                    street : body.results[0].locations[0].street,
                    lat : body.results[0].locations[0].latLng.lat,
                    lng : body.results[0].locations[0].latLng.lng
                });
            }
        });
    });
};

geoCodeAdd('test').then((result) => {
    console.log(result);
}).catch((errorMessage) =>{
    console.log(errorMessage);
})