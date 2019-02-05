#!/usr/bin/env node
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const randomOperator = (a, b) => {
  const randomNumber = getRandomInt(1, 4);
  switch (randomNumber) {
    case 1: console.log(a + b);
      break;
    case 2: console.log(a - b);
      break;
    case 3: console.log(a * b);
      break;
    default: break;
  }
};

randomOperator(4, 2);
