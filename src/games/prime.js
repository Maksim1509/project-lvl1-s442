import { startGame } from '..';
import getRandomInt from '../utils';


const primeNum = 1;

const isPrimeNum = (num) => {
  const iter = (divisibleNum, divisor) => {
    if (divisor === primeNum) {
      return true;
    } if (divisibleNum % divisor === 0) {
      return false;
    }
    return iter(divisibleNum, divisor - 1);
  };
  return iter(num, Math.floor(num / 2));
};

const getDataForGame = () => {
  const numForQuestion = getRandomInt(1, 100);
  const question = `Question: ${numForQuestion}`;
  const correctAnswer = isPrimeNum(numForQuestion) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => startGame(getDataForGame, gameDescription);
