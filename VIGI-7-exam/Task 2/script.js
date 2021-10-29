/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

/* ------------------------------ TASK 2 ENGLISH ----------------------------
Write JS code, which will count how many times the button with text "CLICK ME" was clicked. Result of the clicks must be seen on the right side counting state block (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const button = document.getElementById("btn__element");
button.addEventListener("click", onClick);
let clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("btn__state").innerHTML = clicks;
}
