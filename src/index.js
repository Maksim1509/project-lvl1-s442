import readlineSync from 'readline-sync';

export const actualName = ask => readlineSync.question(ask);

export const greeting = name => console.log(`'Hello ${name}!'`);
