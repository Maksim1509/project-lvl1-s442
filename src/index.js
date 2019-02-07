import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello ${name}!`);
};

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const game = (currentGame, startPoints) => {
  const pointToFinish = 3;
  if (startPoints === pointToFinish) {
    return true;
  }

  const [curentQuestion, curentRightAnswer] = currentGame();
  console.log(curentQuestion);
  const answer = readlineSync.question('Your answer: ');

  if (answer === `${curentRightAnswer}`) {
    console.log('Correct!');
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${curentRightAnswer}".`);
    return false;
  }
  const currentPoints = answer === `${curentRightAnswer}` ? startPoints + 1 : startPoints;
  return game(currentGame, currentPoints);
};

export const gameProcess = (currentGame, startMessege) => {
  console.log('Welcome to the Brain Games!');
  console.log(startMessege);

  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello ${name}!`);
  const gameResult = game(currentGame, 0);

  if (gameResult === true) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default greeting;
