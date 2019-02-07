import { getRandomInt, gameProcess } from '..';

const arithmeticProgression = (number1, number2) => {
  const iter = (arr, newNumber, count) => {
    if (arr.length === 10) {
      return arr;
    }
    return iter(arr.concat(newNumber), newNumber + count, count);
  };
  return iter([], number1, number2);
};
const task = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  const arr = arithmeticProgression(number1, number2);
  const randomNumber = getRandomInt(0, 10);
  const correctAnswer = arr[randomNumber];
  arr[randomNumber] = '..';
  return [`Question: ${arr.join(' ')}`, correctAnswer];
};
const startMessage = 'What number is missing in the progression?';
const startGame = () => gameProcess(task, startMessage);
export default startGame;
