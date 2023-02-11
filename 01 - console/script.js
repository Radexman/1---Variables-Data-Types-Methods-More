console.group('simple');
console.log('Hello!');
console.log('Radek', 23, false);
let x = 100;
console.log(x);
console.error('Something is wrong!');
console.warn('This is your last warning');
console.groupEnd('simple');
const person = {
	name: 'Radek',
	age: 23,
};
console.table(person);

const styles = 'padding: 10px; background-color: white; color: green;';
console.log('%cHello', styles);
