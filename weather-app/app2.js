//const request = require('request');
const yargs = require('yargs');
const axios = require('axios');
const weather = require('./weather/weather');
const geocode =require('./geocode/geocode');

const argv = yargs
    .options({
        a : {
            demand : true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help','h')
    .argv;

var address = encodeURIComponent(argv.address);
var geocodeurl = 'http://www.mapquestapi.com/geocoding/v1/address?key=YxnfFc1IQM1wUGUpbSkZEh6YTyweL6nw&location='+address;

axios.get(geocodeurl).then((response)=>{
    if(response.data.info.statuscode !== 0){
        throw new Error('unable to find');
    }
    var lat = response.data.results[0].locations[0].latLng.lat;
    var lng = response.data.results[0].locations[0].latLng.lat;
    var url = 'https://api.darksky.net/forecast/e512969cb8d3fe413dba9730f00e65f9/'+lat+','+lng;
    return axios.get(url);
}).then((response) => {
    console.log(response.data.currently.apparentTemperature);
}).catch((e) => {
    if(e.code === 'ENOTFOUND'){
        console.log('something');
    }
    console.log(e);
});