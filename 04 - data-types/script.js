// Strings
const firstName = 'Emilia';

// Number
const age = 20;
const temp = 67.9;

// Boolean
const hasKids = false;

// Null
const aptNumber = null;

// Undefined
let score;
const scoreTwo = undefined;

// Symbol
const id = Symbol('id');

// BigInt
const n = 73462364235232388873n;

// Reference Types
const numbers = [1, 2, 3, 4, 5, 6];

const person = {
	firstName: 'Emilia',
	lastName: 'Kożuch',
};

function sayHello() {
	console.log('Hello');
}
const output = sayHello();
console.log(output, typeof output);
