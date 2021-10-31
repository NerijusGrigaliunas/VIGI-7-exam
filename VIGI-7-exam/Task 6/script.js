/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atliks nurodytas užduotis:
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus visurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */

/* ------------------------------ TASK 6 -----------------------------------
You'll find "users" array below.

Write:

1. function "getUserAverageAge" - as an argument will receive an array, and once called returns all average age as number.

2. function "getUsersNames" - as an argument will receive an array, and once called returns all users names in new array.
-------------------------------------------------------------------------- */

const users = [
  { id: "1", name: "John Smith", age: 20 },
  { id: "2", name: "Ann Smith", age: 24 },
  { id: "3", name: "Tom Jones", age: 31 },
  { id: "4", name: "Rose Peterson", age: 17 },
  { id: "5", name: "Alex John", age: 25 },
  { id: "6", name: "Ronald Jones", age: 63 },
  { id: "7", name: "Elton Smith", age: 16 },
  { id: "8", name: "Simon Peterson", age: 30 },
  { id: "9", name: "Daniel Cane", age: 51 },
];

/* 1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus visurkį kaip skaičių.*/

function getUserAverageAge(usersArray) {
  const ageStr = usersArray.map((user) => user.age);
  let ageSum = 0;

  for (let i = 0; i < ageStr.length; i++) {
    ageSum += ageStr[i];
  }
  let result = Math.round(ageSum / ageStr.length);
  return result;
}
console.log(getUserAverageAge(users));

/*2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].*/

function getUsersNames(usersArray) {
  const result = usersArray.map((user) => user.name);
  return result;
}
console.log(getUsersNames(users));
