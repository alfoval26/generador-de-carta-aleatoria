window.addEventListener("load", () => {
let values=[
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
];

let symbol=[
    "♠", "♥", "♦","♣"
];
let colors = ["red","black"]

let cardSymbolHeader = document.getElementById("card-symbol-header");
let cardValue = document.getElementById("card-value");
let cardSymbolFooter = document.getElementById("card-symbol-footer");

let randomValues = Math.floor(Math.random()* values.length);
let randomSymbol = Math.floor(Math.random()* symbol.length);
let randomColors = Math.floor(Math.random()* colors.length);

cardSymbolHeader.style.color = colors[randomColors];
cardSymbolHeader.innerHTML =`<p>${symbol[randomSymbol]}</p>`;
cardValue.style.color = "black";
cardValue.innerHTML = `<p>${values[randomValues]}</p>`;
cardSymbolFooter.style.color = colors[randomColors];
cardSymbolFooter.innerHTML = `<p>${symbol[randomSymbol]}</p>`;

});