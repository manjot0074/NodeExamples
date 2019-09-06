 const request = require('supertest');
 const expect = require('expect');

 var app = require('./server').app;

 it('should return hello world', (done) => {
    request(app)
    .get('/')
    .expect((res) => {
        expect(res.body).toInclude({
            error: "Page not found."
        })
    })
    .end(done);
 });



