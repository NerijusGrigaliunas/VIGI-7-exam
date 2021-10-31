/* ------------------------------ TASK 5 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atliks nurodytas užduotis:
1. funkcija "filterDogOwers" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins "users", kurie turi augintinį.
2. funkcija "filterAdults" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins masyvą su "users", kurie yra pilnamečiai.
-------------------------------------------------------------------------- */

/* ------------------------------ TASK 5 -----------------------------------
You'll find "users" array below.

Write:

1. function "filterDogOwners" - as an argument will receive an array, and once called returns only users, that has dog.

2. function "filterAdults" - as an argument will receive an array, and once called returns only users, that are adults according to their age.
-------------------------------------------------------------------------- */

const users = [
  { id: "1", name: "John Smith", age: 20, hasDog: true },
  { id: "2", name: "Ann Smith", age: 24, hasDog: false },
  { id: "3", name: "Tom Jones", age: 31, hasDog: true },
  { id: "4", name: "Rose Peterson", age: 17, hasDog: false },
  { id: "5", name: "Alex John", age: 25, hasDog: true },
  { id: "6", name: "Ronald Jones", age: 63, hasDog: true },
  { id: "7", name: "Elton Smith", age: 16, hasDog: true },
  { id: "8", name: "Simon Peterson", age: 30, hasDog: false },
  { id: "9", name: "Daniel Cane", age: 49, hasDog: true },
];

/*1. funkcija "filterDogOwers" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins "users", kurie turi augintinį.*/

function filterDogOwn(array) {
  const result = array
    .filter((user) => user.hasDog === true)
    .map((user) => user.name);
  return result;
}
console.log(filterDogOwn(users));

/*2. funkcija "filterAdults" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins masyvą su "users", kurie yra pilnamečiai.*/

function filterAdults(array) {
  const result = array
    .filter((user) => user.age >= 18)
    .map((user) => user.name);
  return result;
}
console.log(filterAdults(users));

/* 3. Papildomai pazaidziau, ir prie antros uzduoties pridejau, kad salia rodytu ir amziu*/

function filterAdultsWithAge(array) {
  const result = array
    .filter((user) => user.age >= 18)
    .map((user) => `${user.name} is ${user.age}`);
  return result;
}
console.log(filterAdultsWithAge(users));
