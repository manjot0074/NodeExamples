const request = require('request');

var getWeather = (latitude, longitude, callback) => {
    request( {
        url: 'https://api.darksky.net/forecast/e512969cb8d3fe413dba9730f00e65f9/'+latitude+','+longitude,
        json: true
    }, (error, response, body) => {
        if(error){
            callback('Unable to connect to Google servers.');
        } else if(body.code === 400){
            callback('Something went wrong');
        } else {
            callback(undefined, body.currently.apparentTemperature);
        }  
    });
}

module.exports = {
    getWeather
};