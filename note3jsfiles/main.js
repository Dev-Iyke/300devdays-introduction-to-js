const person = {
    name: 'John',
    age: 30,
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };

person.greet()

/**
 * 
 * @param {string} name 
 * @param {number} cgpa 
 * @param {capAlphabet} grade 
 */

function Cie(name, cgpa, grade){
    this.name = name;
    this.cgpa = cgpa;
    this.grade = grade;
}
Cie.prototype.showStatus = function(){
    return `${this.name}, your grade was ${this.grade} and you are currently on ${this.cgpa}`
}

let obasi = new Cie("Ikechukwu Obasi", 3.95, "A")
console.log(obasi.showStatus())
class User {
    constructor(email) {
        this.email = email
    }

    validateEmail() {
        // Regular expression to validate email format
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(this.email)) {
            console.log("The email is valid")
            return this
        } else {
            console.log("The email is invalid")
            throw "The email does not meet our validation requirements"
        }
    }

    saveRecord() {
        console.log("The record was saved")
    }
}

//FROM MARV MAGIC HERE:

// const user1 = new User("me@.com")
// user1.validateEmail()
//     .saveRecord()


// Array.prototype.includes()

const arr = [1, 5, 3];
console.log(arr.includes(2)); // true


// Object.values() and Object.entries()

const obj = { a: 1, b: 2 };
console.log(Object.values(obj)); // [1, 2]
console.log(Object.entries(obj)); // [['a', 1], ['b', 2]]


// Rest/Spread Properties for Object Literals

const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 5 };
console.log(rest); // { b: 2, c: 3 }


// Optional Chaining

const obj1 = { a: { b: { c: 1 } } };
console.log(obj1?.a?.b?.c); // 1


// Nullish Coalescing Operator

function callAPI() {
    return null
}

const foo = callAPI() ?? 'nothing was returned';
console.log(foo); // 'default string'
