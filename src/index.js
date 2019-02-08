import readlineSync from 'readline-sync';

const pointToWin = 3;

const game = (getDataForGame, startPoints) => {
  if (startPoints === pointToWin) {
    return true;
  }

  const [question, correctAnswer] = getDataForGame();
  console.log(question);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    return false;
  }
  const currentPoints = answer === correctAnswer ? startPoints + 1 : startPoints;
  return game(getDataForGame, currentPoints);
};

const startGame = (getDataForGame, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);

  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello ${name}!`);
  const isWin = game(getDataForGame, 0);

  if (isWin) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
export default startGame;
