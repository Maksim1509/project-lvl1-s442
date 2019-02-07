import { getRandomInt, gameProcess } from '..';

const compare = (a, b) => {
  if (a > b) {
    return 1;
  } if (a < b) {
    return -1;
  }
  return 0;
};

const nod = (a, b) => {
  const c = [a, b];
  c.sort(compare);
  const iter = (x, y, div) => {
    if (y % div === 0 && x % div === 0) {
      return div;
    }
    return iter(x, y, div - 1);
  };
  return iter(c[0], c[1], c[0]);
};

const gcd = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  const question = `Question: ${number1} ${number2}`;
  const correctAnswer = nod(number1, number2);
  return [question, correctAnswer];
};

const startMessage = 'Find the greatest common divisor of given numbers.';
const startGame = () => gameProcess(gcd, startMessage);

export default startGame;
