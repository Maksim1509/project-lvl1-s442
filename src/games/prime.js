import startGame from '..';
import getRandomInt from '../utils';

const isPrime = (num) => {
  if (num === 2) {
    return true;
  }
  if (num < 2 || num % 2 === 0) {
    return false;
  }
  const iter = (divisor) => {
    if (divisor === Math.round(num / 2)) {
      return true;
    } if (num % divisor === 0) {
      return false;
    }
    return iter(divisor + 1);
  };
  return iter(2);
};

const getDataForGame = () => {
  const numForQuestion = getRandomInt(1, 100);
  const question = `Question: ${numForQuestion}`;
  const correctAnswer = isPrime(numForQuestion) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => startGame(getDataForGame, gameDescription);
