/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

/* ------------------------------ TASK 3 ENGLISH -----------------------------------
Write JS code, which will allow the user to click on button "Show users" and print users from Github API (enpoint provided below).

Onclick:
1. Users should be printed in <div id="output"></div> block;
1.1. Information about the users : "login" & "avatar_url" values;
2. Message "Press "Show Users" button to see users" should disappear;

Note: Information about each user (user card) must have minimum style.
-------------------------------------------------------------------------- */
const ENDPOINT = "https://api.github.com/users";
document.getElementById("btn").addEventListener("click", showUsers);

function showUsers() {
  document.getElementById("message").remove();
  document.getElementById("output").style.backgroundColor = "#222222";
  fetch(ENDPOINT)
    .then((res) => res.json())
    .then((data) => {
      const card = createCards(data);
      style();
    });
}
function createCards(users) {
  users.forEach((user) => {
    const newDiv = createDivId(user.login);
    const newImg = createElmImg(user.avatar_url);
    const newCard = createDivCard();
    newCard.appendChild(newDiv);
    newCard.appendChild(newImg);
    document.getElementById("output").appendChild(newCard);
  });
}
function createDivCard() {
  const divCard = document.createElement("div");
  divCard.classList.add("userCard");
  return divCard;
}
function createDivId(textContent) {
  const divId = document.createElement("div");
  divId.classList.add("userId");
  divId.textContent = textContent;
  return divId;
}
function createElmImg(src) {
  const elmImg = document.createElement("img");
  elmImg.classList.add("userImg");
  elmImg.src = src;
  return elmImg;
}

function style() {
  const userCardStyle = document.getElementsByClassName("userCard");
  for (var i = 0; i < userCardStyle.length; i++) {
    userCardStyle[i].style.width = "33%";
    userCardStyle[i].style.padding = "0.5rem";
    userCardStyle[i].style.border = "0.1rem solid grey";
    userCardStyle[i].style.borderRadius = "15px";
    userCardStyle[i].style.margin = "2px";
    userCardStyle[i].style.backgroundColor = "grey";
  }
  const userIdStyle = document.getElementsByClassName("userId");
  for (var i = 0; i < userIdStyle.length; i++) {
    userIdStyle[i].style.textAlign = "center";
    userIdStyle[i].style.paddingBottom = "1rem";
    userIdStyle[i].style.fontWeight = "bold";
    userIdStyle[i].style.fontSize = "200%";
    userIdStyle[i].style.textTransform = "uppercase";
  }
  const userImgStyle = document.getElementsByClassName("userImg");
  for (var i = 0; i < userImgStyle.length; i++) {
    userImgStyle[i].style.width = "100%";
    userImgStyle[i].style.borderRadius = "50%";
  }
  document.getElementById("output").style.display = "flex";
  document.getElementById("output").style.flexWrap = "wrap";
}
