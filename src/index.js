import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello ${name}!`);
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const isEven = int => int % 2 === 0;
const sayYesOrNo = int => (isEven(int) ? 'yes' : 'no');

const game = (name, startPoints) => {
  const numberForQuestion = getRandomInt(1, 100);
  const correctAnswer = sayYesOrNo(numberForQuestion);
  const pointToFinish = 3;

  if (startPoints === pointToFinish) {
    return console.log(`Congratulations, ${name}!`);
  }

  console.log(`Question: ${numberForQuestion}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
        Let's try again, ${name}!`);
  }
  const currentPoints = answer === sayYesOrNo(numberForQuestion) ? startPoints + 1 : startPoints;
  return game(name, currentPoints);
};

export const gameEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello ${name}!`);

  return game(name, 0);
};

export default greeting;
