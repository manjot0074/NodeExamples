const expect = require('expect');
const utils = require('./utils');

describe('utils', () => { 
    it('should add two numbers',() => {
        var res = utils.add(4,5);
        expect(res).toBe(9); 
    });
    
    it('should square a number',() => {
        var res = utils.squ(4);
        expect(res).toBe(16).toBeA('number');  
    });
    
    it('should verify first and last name',() => {
        var user = ({
            age : "25"
        });
        utils.setName(user, 'manjot Singh');
        expect(user).toEqual({
            age: "25",
            firstname: "manjot",
            lastName: "Singh"
        }).toBeA('object')
        .toInclude({
            firstname : "manjot"
        });
    
    });
        
});


it('should Async add',(done) => {
   utils.addAsync(4,3, sum =>{
        expect(sum).toBe(7);
        done();
   });
});