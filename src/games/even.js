import { gameProcess } from '..';

const isEven = int => int % 2 === 0;
const sayYesOrNo = int => (isEven(int) ? 'yes' : 'no');

const even = (number) => {
  const question = `Question: ${number}`;
  const correctAnswer = sayYesOrNo(number);
  return [question, correctAnswer];
};
const startMessege = 'Answer "yes" if number even otherwise answer "no".';

const startGame = () => gameProcess(even, startMessege);

export default startGame;
