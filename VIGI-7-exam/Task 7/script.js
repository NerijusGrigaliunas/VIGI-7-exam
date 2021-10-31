/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objektą 
ir grąžins visus jo "keys" masyve.
-------------------------------------------------------------------------- */

/* ------------------------------ TASK 7 -----------------------------------
You'll find an object of car below

Write function "showObjectKeys", as an argument will receive an object, and will return all of its "keys" in new array.
-------------------------------------------------------------------------- */
const audi = {
  make: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};

//Yra tokia JS funkcija Object.keys() kuri Object keys grazina i masyva
console.log(Object.keys(audi));
