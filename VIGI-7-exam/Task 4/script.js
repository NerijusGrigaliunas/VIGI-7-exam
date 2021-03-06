/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

/* ------------------------------ TASK 4 ENGLISH -----------------------------------
Write JS code, where all information about the cars will be printed from file "cars.json" (endpoint and file provided).

Each brand should have their own "card", where brand name and models should be printed.

Note: Card about the brand and models, must have minimum style.
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

window.addEventListener("load", (e) => {
  fetch(ENDPOINT)
    .then((res) => res.json())
    .then((data) => {
      createCards(data);
      style();
    });
});
function createCards(cars) {
  cars.forEach((cars) => {
    const newBrand = createDivBrand(cars.brand);
    const newModels = createDivModel(cars.models);
    const newCard = createDivCard();
    newCard.appendChild(newBrand);
    newCard.appendChild(newModels);
    document.getElementById("output").appendChild(newCard);
  });
}
function createDivCard() {
  const divCard = document.createElement("div");
  divCard.classList.add("carCard");
  return divCard;
}
function createDivBrand(textContent) {
  const divBrand = document.createElement("div");
  divBrand.classList.add("carBrand");
  divBrand.textContent = textContent;
  return divBrand;
}
function createDivModel(textContent) {
  const divModel = document.createElement("div");
  divModel.classList.add("carModel");
  divModel.textContent = textContent;
  return divModel;
}
function style() {
  const carCardStyle = document.getElementsByClassName("carCard");
  for (var i = 0; i < carCardStyle.length; i++) {
    carCardStyle[i].style.width = "33%";
    carCardStyle[i].style.padding = "0.5rem";
    carCardStyle[i].style.border = "0.2rem solid white";
    carCardStyle[i].style.background = "black";
    carCardStyle[i].style.color = "white";
  }
  const carBrandStyle = document.getElementsByClassName("carBrand");
  for (var i = 0; i < carBrandStyle.length; i++) {
    carBrandStyle[i].style.textAlign = "center";
    carBrandStyle[i].style.paddingBottom = "1rem";
    carBrandStyle[i].style.fontWeight = "bold";
    carBrandStyle[i].style.fontSize = "150%";
    carBrandStyle[i].style.margin = "1rem";
  }
  const carModelStyle = document.getElementsByClassName("carModel");
  for (var i = 0; i < carModelStyle.length; i++) {
    carModelStyle[i].style.color = "white";
    carModelStyle[i].style.margin = "1rem";
  }
  document.getElementById("output").style.display = "flex";
  document.getElementById("output").style.flexWrap = "wrap";
}
