/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijas (oz) | Formul4: oz = kg * 35.274
Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

/* ------------------------------ TASK 1 ENGLISH ----------------------------
Write JS code, where user will be able to enter the weigth in kilograms (kg) and see the converted results into:
1. Pounds (lb) / formula: lb = kg * 2.2046;
2. Grams (g) / formula: g = kg / 0.0010000;
3. Ounces (oz) / formula: oz = kg * 35.274
Note: Results must be printed on form submit in <div id="output"></div> code block, also it must have minimum style.
------------------------------------------------------------------- */
const form = document.querySelector("form");

form.addEventListener("submit", formValues);

const output = document.querySelector(".output");

const showOutput = () => {
  output.style.display = "block";
};
function formValues(event) {
  event.preventDefault();

  const weight = +event.target.elements.weight.value;
  const weigthInPounds = weight * 2.2046;
  const weigthInGrams = weight / 0.001;
  const weigthInOunces = weight * 35.274;

  showOutput();
  const output = document.querySelector(".output");
  output.textContent = ` Your weight is: ${weight} kg. 
  It is ${weigthInPounds} lb.
  In grams it is ${weigthInGrams} g. 
  In Ounces ${weigthInOunces} oz.`;
}

const addNewElement = (element, newElement, phrase) => {
  element.innerHTML = `<${newElement}>${phrase}</${newElement}>`;
};
