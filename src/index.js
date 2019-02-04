import readlineSync from 'readline-sync';

export const nameRequest = request => readlineSync.question(request);

export const greeting = name => console.log(`'Hello ${name}!'`);
