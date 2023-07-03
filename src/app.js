/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let card = document.getElementById("card");
  let suits = ["♠", "♣", "♥", "♦"];
  let cardNumbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "K",
    "Q",
    "J",
    "A"
  ];

  let suitIndex = getRandomNumber(0, 3);
  let cardNumberIndex = getRandomNumber(0, 12);

  let suit = suits[suitIndex];
  let cardNumber = cardNumbers[cardNumberIndex];

  card.getElementsByClassName("top-left-icon")[0].textContent = suit;
  card.getElementsByClassName("bottom-right-icon")[0].textContent = suit;
  card.getElementsByClassName("number")[0].textContent = cardNumber;
};

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
