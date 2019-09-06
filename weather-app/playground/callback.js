var getUser = (id, callback) => {
    var user = {
        id,
        name: 'vikram'
    };
    callback(user);
};

getUser('3423', (user) => {
    console.log(user);
});