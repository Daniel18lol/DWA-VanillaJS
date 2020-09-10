let mainDiv;
let letters;
let signImage;

function loadImage(imgIndex) {
  signImage = document.getElementById("signImg");
  signImage.style.backgroundImage = "url(" + letters.letters[imgIndex].image;
  +")";
}

window.onload = async () => {
  await fetch("https://dwaapi.juvasquez88.vercel.app/letters")
    .then((res) => res.json())
    .then((letterJSON) => {
      letters = letterJSON;
    })
    .catch((err) => {
      throw new Error(err.message);
    });
  mainDiv = document.getElementById("main");
  mainDiv.innerHTML =
    "<header><h1>Sign language</h1></header>" +
    '<div id="signImg"></div>' +
    '<div class="lettersContainer">' +
    '<div class="letter" id="letter1"><p onClick="loadImage(0)">' +
    letters.letters[0].letter.toUpperCase() +
    "</p></div>" +
    '<div class="letter" id="letter2"><p onClick="loadImage(1)">' +
    letters.letters[1].letter.toUpperCase() +
    "</p></div>" +
    '<div class="letter" id="letter3"><p onClick="loadImage(2)">' +
    letters.letters[2].letter.toUpperCase() +
    "</p></div>" +
    '<div class="letter" id="letter4"><p onClick="loadImage(3)">' +
    letters.letters[3].letter.toUpperCase() +
    "</p></div>" +
    '<div class="letter" id="letter5"><p onClick="loadImage(4)">' +
    letters.letters[4].letter.toUpperCase() +
    "</p></div>" +
    '<div class="letter" id="letter6"><p onClick="loadImage(5)">' +
    letters.letters[5].letter.toUpperCase() +
    "</p></div>" +
    '<div class="letter" id="letter7"><p onClick="loadImage(6)">' +
    letters.letters[6].letter.toUpperCase() +
    "</p></div>" +
    '<div class="letter" id="letter8"><p onClick="loadImage(7)">' +
    letters.letters[7].letter.toUpperCase() +
    "</p></div>" +
    "</div>";
};
