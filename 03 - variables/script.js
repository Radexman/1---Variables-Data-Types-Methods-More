// Ways to declare variables
// var, let, const
let firstName = 'Radek';
let lastName = 'Siek';
console.log(firstName, lastName);
var age = 23;
console.log(age);

// Naming Conventions
// - Only letters, numbers, underscoresand dollar signs
// - Can't start with a number

// Multi-WwordFormatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// Reassigning variables
age = 31;
console.log(age);
let score;
score = 1;
console.log(score);
if (true) {
	score++;
}
console.log(score);

const x = 100;

let score1;

const arr = [1, 2, 3, 4];

arr.push('Maślanka');

console.table(arr);

const person = {
	name: 'Emilia',
	lastName: 'Kożuch',
	age: 20,
};

person.email = 'emilia.gmail';

console.table(person);

// Declare multiple values at once
let a, b, c;
const d = 10,
	e = 20,
	f = 30;
console.log(d);
console.log(a);
