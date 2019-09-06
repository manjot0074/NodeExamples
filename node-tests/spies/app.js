var db = require('./db.js');

module.exports.handleSignUp = (email, password) => {
    db.saveuser({
        email,
        password
    })
};