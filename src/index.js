import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello ${name}!`);
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const isEven = int => int % 2 === 0;
const sayYesOrNo = int => (isEven(int) ? 'yes' : 'no');

const game = (startPoints) => {
  const numberForQuestion = getRandomInt(1, 100);
  const correctAnswer = sayYesOrNo(numberForQuestion);
  const pointToFinish = 3;

  if (startPoints === pointToFinish) {
    return true;
  }

  console.log(`Question: ${numberForQuestion}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    return [answer, correctAnswer];
  }
  const currentPoints = answer === sayYesOrNo(numberForQuestion) ? startPoints + 1 : startPoints;
  return game(currentPoints);
};

export const gameEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello ${name}!`);

  const gameResult = game(0);

  if (gameResult === true) {
    return console.log(`Congratulations, ${name}!`);
  }
  return console.log(`'${gameResult[0]}' is wrong answer ;(. Correct answer was '${gameResult[1]}'.
      Let's try again, ${name}!`);
};

export default greeting;
