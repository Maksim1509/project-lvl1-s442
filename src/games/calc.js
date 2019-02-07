import { gameProcess } from '..';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const randomOperator = () => {
  let operator;
  const randomNumber = getRandomInt(1, 4);
  switch (randomNumber) {
    case 1: operator = '+';
      break;
    case 2: operator = '-';
      break;
    case 3: operator = '*';
      break;
    default: break;
  }
  return operator;
};

const calc = (number1, number2) => {
  const operator = randomOperator();
  const question = `Question: ${number1} ${operator} ${number2}`;
  let correctAnswer;
  switch (operator) {
    case '+': correctAnswer = number1 + number2;
      break;
    case '-': correctAnswer = number1 - number2;
      break;
    case '*': correctAnswer = number1 * number2;
      break;
    default: break;
  }
  return [question, correctAnswer];
};

const startMessage = 'What is the result of the expression?';
const startGame = () => gameProcess(calc, startMessage);

export default startGame;
