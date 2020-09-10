let mainDiv;

window.onload = () => {
  mainDiv = document.getElementById("main");
  mainDiv.innerHTML =
    "<header><h1>Sign language</h1></header>" +
    '<img src="">' +
    '<div class="lettersContainer">' +
    '<div class="letter" id="letter1"><p></p></div>' +
    '<div class="letter" id="letter2"><p></p></div>' +
    '<div class="letter" id="letter3"><p></p></div>' +
    '<div class="letter" id="letter4"><p></p></div>' +
    '<div class="letter" id="letter5"><p></p></div>' +
    '<div class="letter" id="letter6"><p></p></div>' +
    '<div class="letter" id="letter7"><p></p></div>' +
    '<div class="letter" id="letter8"><p></p></div>' +
    "</div>";
};
