console.log('Starting app');

setTimeout( () => {
    console.log('inside');
}, 2000);

setTimeout ( () => {
    console.log('set');
}, 0);

console.log('Finishing app');
