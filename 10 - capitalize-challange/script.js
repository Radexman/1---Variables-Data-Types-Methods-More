// const myString = 'developer';

// const myNewString = myString.charAt(0).toUpperCase() + myString.slice(1).toLowerCase();

// console.log(myNewString);

// const myString = 'DEVELOPER';

// const toProperCase = (string) => {
// 	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
// };

// console.log(toProperCase(myString));

// const getRandomChar = (string) => {
// 	return string.charAt(Math.floor(Math.random() * string.length));
// };

// console.log(getRandomChar(myString));
// let amount = 1;
// let x = parseInt(amount);
// x = +amount;
// x = Number(amount);
// amount = amount.toString();
// amount = parseFloat(amount);
// amount = Boolean(amount);
// console.log(amount, typeof amount);
// amount = String(amount);
// let x;
// let name = 'Emilia';
// let age = 20;
// x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';
// x = `Hello, my name is ${name} and I'm ${age} years old`;
// const s = new String('Hello World');
// x = s.length;
// x = typeof s;
// x = s[0];
// x = s.charAt(0);
// x = s.__proto__;
// x = s.toUpperCase();
// x = s.toLowerCase();
// x = s.charAt(0);
// x = s.indexOf('H');
// x = s.substring(1, 5);
// x = s.substring(6);
// x = s.includes('ello');
// x = s.slice(-11, -6);
// x = s.trim(' ');
// x = s.replace('World', 'Emilia');
// x = s.valueOf();
// x = s.split(' ');
// console.log(x, typeof x);

let myString = 'developeR';
const toPropperCase = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};
console.log(toPropperCase(myString));
