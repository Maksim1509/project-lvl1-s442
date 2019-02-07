import { startGame } from '..';
import getRandomInt from '../utils/utils';

const maxSizeProgression = 10;
const createArithmeticProgression = (initialNum, stepSize) => {
  const iter = (startArray, firstNum) => {
    if (startArray.length === maxSizeProgression) {
      return startArray;
    }
    return iter(startArray.concat(firstNum), firstNum + stepSize);
  };
  return iter([], initialNum);
};
const getDataForGame = () => {
  const initialNum = getRandomInt(1, 100);
  const stepSize = getRandomInt(1, 100);
  const arithmeticProgression = createArithmeticProgression(initialNum, stepSize);
  const missingNum = getRandomInt(0, 10);
  const correctAnswer = arithmeticProgression[missingNum];
  arithmeticProgression[missingNum] = '..';
  return [`Question: ${arithmeticProgression.join(' ')}`, correctAnswer];
};
const gameDescription = 'What number is missing in the progression?';

export default () => startGame(getDataForGame, gameDescription);
