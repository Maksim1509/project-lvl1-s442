#!/usr/bin/env node
import { greeting, nameRequest } from '..';

console.log('Welcome to the Brain Games!');

const name = nameRequest('May i have your name? ');

greeting(name);
