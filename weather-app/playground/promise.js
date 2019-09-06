var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Hey, it worked!');
    }, 2500);
});

somePromise.then((message) => {
    console.log(message);
})
.catch((errorMessage) => {
    console.log(errorMessage)
});