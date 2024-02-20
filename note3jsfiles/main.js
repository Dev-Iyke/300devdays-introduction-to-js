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