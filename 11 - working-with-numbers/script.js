let x;
const num = new Number(5);
x = num.toString();
x = num.toString().length;
x = num.toFixed(2);
x = num.toPrecision(3);
x = num.toExponential(3);
x = num.toLocaleString('pl');
x = num.valueOf();
x = Number.MAX_VALUE;
x = Number.MIN_VALUE;
console.log(x, typeof x);

let num = new Number(10);
let x;
x = num.toString().length;
x = num.toFixed(2);
x = num.toPrecision(4);

console.log(x);
