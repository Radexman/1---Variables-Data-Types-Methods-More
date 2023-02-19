const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);
console.log(x, y);

const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;
console.log(sumOutput);

const difference = x - y;
const differenceOutput = `${x} - ${y} = ${difference}`;
console.log(differenceOutput);

const product = x * y;
const productOutput = `${x} * ${y} = ${product}`;
console.log(productOutput);

let quotient = x / y;
const quotientOutput = `${x} / ${y} = ${quotient}`;
console.log(quotientOutput);

const reminder = x % y;
const reminderOutput = `${x} % ${y} = ${reminder}`;
console.log(reminderOutput);
