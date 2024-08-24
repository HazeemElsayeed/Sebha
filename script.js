"use strict";

let counter = 0;

//pluse
document.querySelector(".inc-btn").addEventListener("click", function () {
  counter++;
  document.querySelector(".counter").textContent = counter;
});

//minus
document.querySelector(".dec-btn").addEventListener("click", function () {
  if (counter > 0) {
    counter--;
  }
  document.querySelector(".counter").textContent = counter;
});

//reset
document.querySelector(".reset-btn").addEventListener("click", function () {
  counter = 0;
  document.querySelector(".counter").textContent = counter;
});

////////////////////////////
let currentCardIndex = 0;
const cards = document.querySelectorAll(".text-box > div");
const totalCards = cards.length;

function showCard(index) {
  cards.forEach((card, i) => {
    card.classList.remove("active");
    if (i === index) {
      card.classList.add("active");
    }
  });
}

document.querySelector(".next").addEventListener("click", function () {
  currentCardIndex = (currentCardIndex + 1) % totalCards;
  showCard(currentCardIndex);
});

document.querySelector(".prev").addEventListener("click", function () {
  currentCardIndex = (currentCardIndex - 1 + totalCards) % totalCards;
  showCard(currentCardIndex);
});

// Initialize by showing the first card
showCard(currentCardIndex);
