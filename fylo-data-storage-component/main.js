const counter = document.querySelector(".counter");
const left = document.querySelector(".left");

const maxGB = 1000;
let number = 0;
let usedGB = 815;
let leftGB = 0;

const updateCounter = () => {
  if (number != usedGB) {
    number += 5;
    counter.textContent = `${number} GB`;
    setTimeout(updateCounter, 10);
  }
};

const updateLeft = () => {
  if (leftGB != maxGB - usedGB) {
    leftGB++;
    left.textContent = `${leftGB}`;
    setTimeout(updateLeft, 10);
  }
};

updateCounter();

updateLeft();
