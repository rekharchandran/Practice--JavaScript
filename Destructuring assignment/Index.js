/*
let a, b, rest;
[a, b] = [10, 20];
console.log(a);

console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);

*/

// Syntax
/*
let a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

// Stage 4(finished) proposal
({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}

//Desciption

const x = [1, 2, 3, 4, 5];
const [y, z] = x;

console.log(y);
console.log(z);

*/

//Array destructuring

const foo = ["one", "two", "three"];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"

//Assignment separate from declaration

let a, b;

[a, b] = [1, 2];
console.log(a);

//Default values

let p, q;
[a = 5, b = 7] = [1];
console.log(p);
console.log(q);
