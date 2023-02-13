// const myString = 'developer';

// const myNewString = myString.charAt(0).toUpperCase() + myString.slice(1).toLowerCase();

// console.log(myNewString);

const myString = 'developer';

const toProperCase = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

console.log(toProperCase(myString));
