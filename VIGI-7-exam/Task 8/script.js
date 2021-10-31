/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

/* ------------------------------ TASK 8 --------------------------------------------
Create constructor function "Calculator" (use ES5 syntax), which will be able to create objects with 4 methods:

sum() - receives 2 numbers as arguments, and returns their sum.
subtraction() - receives 2 numbers as arguments, and returns the difference.
multiplication() - receives 2 numbers as arguments, and returns result of their multiplicaiton.
division() - receives 2 numbers as arguments, and returns result of their division.
------------------------------------------------------------------------------------ */
class Calculator {
  constructor() {
    this.sum = function sum(a, b) {
      return a + b;
    };
    this.sub = function subtraction(a, b) {
      return a - b;
    };
    this.multi = function multiplication(a, b) {
      return a * b;
    };
    this.div = function division(a, b) {
      return a / b;
    };
  }
}
const object = new Calculator();

console.log(object.sum(10, 10));
console.log(object.sub(10, 10));
console.log(object.multi(10, 10));
console.log(object.div(10, 10));
