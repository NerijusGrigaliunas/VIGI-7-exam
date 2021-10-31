/* ------------------------------ TASK 10 -----------------------------------
Write JS code, where the user will be able to enter number into form. Number cannot be less than 1 or more than 9. (1-9 included).

If wrong number was entered - error message appears, which will ask to enter correct number. 
Error message must be printed in <div class="error"> block.

If correct number was entered - table cell with that number must be colored (background color).

Once new number is entered - previous table cell changes background-color to white, and new number table cell bg changes. 

Feel free to use the html and css code provided, but you can also write your own. 
-------------------------------------------------------------------------- */

/* ------------------------------ TASK 10 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti skaičių, kuris turi būti ne mažiau 1, ir ne daugiau 9 (1-9 imtinai)

Jeigu įvesta neteisinga vertė - atsiranda "error" žinutė ir prašoma įvesti skaičių nuo 1 iki 9.
Error atvaizdavimas bloke - <div class="error">

Jeigu įvesta vertė tiko - nusispalvina to skaičiaus langelis lentelėje. 

Įvedus naują tinkantį skaičių, nusispalvina naujas atitinkamo skaičiaus
 langelis, o senas vėl tampa baltas.

Jeigu norite, galite naudotis turimu CSS, bet galite pasirašyti ir savo. 
-------------------------------------------------------------------------- */

const form = document.querySelector("form");

form.addEventListener("submit", formValues);

const error = document.querySelector(".error");

const showError = () => {
  error.style.visibility = "visible";
};

function formValues(event) {
  event.preventDefault();

  const number = +event.target.elements.number.value;

  let activeTd = document.getElementById(number);

  if (number > 1 && number < 10) {
    activeTd.style.backgroundColor = "red";
    error.style.visibility = "hidden";
  } else {
    showError();
  }
}
