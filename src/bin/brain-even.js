#!/usr/bin/env node
import { greeting, nameRequest } from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');
const name = nameRequest('May i have your name? ');

greeting(name);

const number = (min, max) => Math.floor(Math.random() * (max - min)) + min;
console.log(`Question: ${number(1, 100)}`);

const answer = nameRequest('Your answer: ');

console.log(answer);
