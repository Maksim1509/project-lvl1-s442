import startGame from '..';
import getRandomInt from '../utils';

const createArithmeticProgression = (initialNum, stepSize, progressionLength) => {
  const iter = (startArray, firstNum) => {
    if (startArray.length === progressionLength) {
      return startArray;
    }
    return iter(startArray.concat(firstNum), firstNum + stepSize);
  };
  return iter([], initialNum);
};

const progressionLength = 10;

const getDataForGame = () => {
  const initialNum = getRandomInt(1, 100);
  const stepSize = getRandomInt(1, 100);
  const progression = createArithmeticProgression(initialNum, stepSize, progressionLength);
  const hiddenElementPosition = getRandomInt(0, progressionLength);
  const correctAnswer = progression[hiddenElementPosition];
  progression[hiddenElementPosition] = '..';
  return [`Question: ${progression.join(' ')}`, `${correctAnswer}`];
};
const gameDescription = 'What number is missing in the progression?';

export default () => startGame(getDataForGame, gameDescription);
