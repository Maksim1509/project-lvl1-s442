import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello ${name}!`);
};

const pointToWin = 3;

const game = (currentGame, startPoints) => {
  if (startPoints === pointToWin) {
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

export const startGame = (currentGame, startMessege) => {
  console.log('Welcome to the Brain Games!');
  console.log(startMessege);

  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello ${name}!`);
  const isWin = game(currentGame, 0);

  if (isWin) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default greeting;
