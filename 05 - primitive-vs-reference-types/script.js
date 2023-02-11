// This primitive types are stored in the stack
const name = 'John';
const age = 30;

// This reference values are stored in the heap
const person = {
	name: 'Brad',
	age: 40,
};
let newName = name;
newName = 'Johnatann';
let newPerson = person;

console.log(name, newName);
newPerson.name = 'Bradley';
console.log(person, newPerson);
