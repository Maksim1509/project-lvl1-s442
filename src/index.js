import readlineSync from 'readline-sync';
import calc from './games/calc';
import even from './games/even';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello ${name}!`);
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const game = (typeOfGame, startPoints) => {
  const pointToFinish = 3;
  const numberForQuestion1 = getRandomInt(1, 100);
  const numberForQuestion2 = getRandomInt(1, 100);
  let currentGame;
  switch (typeOfGame) {
    case 'calc': currentGame = calc(numberForQuestion1, numberForQuestion2);
      break;
    case 'even': currentGame = even(numberForQuestion1);
      break;
    default: break;
  }

  if (startPoints === pointToFinish) {
    return true;
  }
  const [curentQuestion, curentRightAnswer] = currentGame;

  console.log(curentQuestion);
  const answer = readlineSync.question('Your answer: ');
  if (answer === `${curentRightAnswer}`) {
    console.log('Correct!');
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${curentRightAnswer}".`);
    return false;
  }
  const currentPoints = answer === `${curentRightAnswer}` ? startPoints + 1 : startPoints;
  return game(typeOfGame, currentPoints);
};

export const gameProcces = (typeOfGame, info) => {
  console.log('Welcome to the Brain Games!');
  console.log(info);
  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello ${name}!`);

  const gameResult = game(typeOfGame, 0);

  if (gameResult === true) {
    return console.log(`Congratulations, ${name}!`);
  }
  return console.log(`Let's try again, ${name}!`);
};

export default greeting;
