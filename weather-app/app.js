//const request = require('request');
const yargs = require('yargs');

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

console.log(argv);

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    } else {
        console.log(results);
        weather.getWeather(results.lat, results.lng, (errorMessage, temperature) => {
            if(errorMessage){
                console.log(errorMessage);
            } else {
                console.log(temperature);
            }
        });
    }    
});





