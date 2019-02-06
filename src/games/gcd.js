const compare = (a, b) => {
  if (a > b) {
    return 1;
  } if (a < b) {
    return -1;
  }
  return 0;
};

const nod = (a, b) => {
  const c = [a, b];
  c.sort(compare);
  const iter = (x, y, del) => {
    if (y % del === 0 && x % del === 0) {
      return del;
    }
    return iter(x, y, del - 1);
  };
  return iter(c[0], c[1], c[0]);
};

const gcd = (number1, number2) => {
  const question = `Question: ${number1} ${number2}`;
  const correctAnswer = nod(number1, number2);
  return [question, correctAnswer];
};

export default gcd;
