var square = (x) => {
    var result = x*x;
    return result;
};

var user = {
    name: 'Andres',
    sayHi : () => {
        console.log(arguments);
        console.log(`hi ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`hi ${this.name}`);
    }
}
user.sayHiAlt('1','2','3');
user.sayHi('1','2');
console.log(square(9));