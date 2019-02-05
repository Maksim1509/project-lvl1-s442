#!/usr/bin/env node
import { greeting, request, welcome } from '..';

console.log(welcome);

const name = request.question('May i have your name? ');

greeting(name);
