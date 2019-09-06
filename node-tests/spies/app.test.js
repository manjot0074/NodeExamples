const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveuser : expect.createSpy()
    }

    app.__set__('db', db);
    it('should call spy', () => {
        var spy = expect.createSpy();
        spy('Andrew', 25);
        expect(spy).toHaveBeenCalledWith('Andrew', 25);
    })

    it('should call saveUser spy', () => {
        var email = 'abc@test.com';
        var password = '123abc';
        app.handleSignUp(email, password);
        expect(db.saveuser).toHaveBeenCalledWith({email,password});
    });
})