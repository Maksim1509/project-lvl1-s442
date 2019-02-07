import { startGame } from '..';
import getRandomInt from '../utils/utils';

const isEven = num => num % 2 === 0;
const sayYesOrNo = num => (isEven(num) ? 'yes' : 'no');

const getDataForGame = () => {
  const numberForQuestion = getRandomInt(1, 100);
  const question = `Question: ${numberForQuestion}`;
  const correctAnswer = sayYesOrNo(numberForQuestion);
  return [question, correctAnswer];
};
const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

export default () => startGame(getDataForGame, gameDescription);
