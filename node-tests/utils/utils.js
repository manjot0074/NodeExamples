module.exports.add = (a,b) => a+b;

module.exports.squ = (a) => a*a;

module.exports.setName = (user, fullName) => {
    var names = fullName.split(' ');
    user.firstname = names[0];
    user.lastName = names[1];
    return user;
};

module.exports.addAsync = (a,b, callback) => {
    setTimeout(() =>{
        callback(a+b);
    }, 1000);
};