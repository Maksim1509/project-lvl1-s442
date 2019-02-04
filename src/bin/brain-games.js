#!/usr/bin/env node
import { greeting, actualName } from '..';

const name = actualName('May i have your name? ');

greeting(name);
