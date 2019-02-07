import { startGame } from '..';
import getRandomInt from '../utils';

const getGreatestDivisor = (firstNum, secondNum) => {
  const lowerNumber = firstNum > secondNum ? secondNum : firstNum;
  const highestNumber = firstNum > secondNum ? firstNum : secondNum;

  const iter = (highestNum, lowerNumb, div) => {
    if (highestNum % div === 0 && lowerNumb % div === 0) {
      return div;
    }
    return iter(highestNum, lowerNumb, div - 1);
  };
  return iter(highestNumber, lowerNumber, lowerNumber);
};

const getDataForGame = () => {
  const firstNum = getRandomInt(1, 100);
  const secondNum = getRandomInt(1, 100);
  const question = `Question: ${firstNum} ${secondNum}`;
  const correctAnswer = getGreatestDivisor(firstNum, secondNum);
  return [question, `${correctAnswer}`];
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

export default () => startGame(getDataForGame, gameDescription);
