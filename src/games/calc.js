import startGame from '..';
import getRandomInt from '../utils';

const getRandomOperator = () => {
  let operator;
  const randomNum = getRandomInt(1, 4);
  switch (randomNum) {
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

const getDataForGame = () => {
  const firstNum = getRandomInt(1, 100);
  const secondNum = getRandomInt(1, 100);
  const operator = getRandomOperator();
  const question = `Question: ${firstNum} ${operator} ${secondNum}`;
  let correctAnswer;
  switch (operator) {
    case '+': correctAnswer = firstNum + secondNum;
      break;
    case '-': correctAnswer = firstNum - secondNum;
      break;
    case '*': correctAnswer = firstNum * secondNum;
      break;
    default: break;
  }
  return [question, `${correctAnswer}`];
};

const gameDescription = 'What is the result of the expression?';

export default () => startGame(getDataForGame, gameDescription);
