let x; // create a variable but assign it no value

console.log(`x's value is ${x}`); // logs "x's value is undefined"


x = 5; // assign a value to x
console.log(`x's value is now ${x}`); // logs "x's value is 5"


const doggy = {
    name: "Rex",
    breed: "Labrador",
    age: 5
};

const y = doggy;

for (const key in y) {
    const element = y[key];
    console.log(key, element);
}

let dino = "lal" + "lol"; // concatenates two strings, resulting in "lallol"
console.log(dino); // logs "lolwut"

let dino2 = "lalala"

dino + dino2; // concatenates "lallol" and "lalala", resulting in "lallollalala"
console.log(dino + dino2); // logs "lallollalala"
console.log(dino.length + dino2.length); // logs "12"

let hemlo = "Hello i am Adi and this is Code for UpperCase all the Letters"
hemlo = hemlo.toUpperCase(); // converts the string to uppercase
console.log(hemlo); // logs the uppercase version of the string
hemlow = hemlo.toLowerCase(); // converts the string back to lowercase
console.log(hemlow); // logs the lowercase version of the string
console.log(typeof hemlow); // logs "string" indicating the type of hemlow is a string

let greeting = "     Hello, World!    ";
console.log(greeting.trim()); // removes whitespace from both ends of the string, logs "Hello, World!"

console.log(greeting.trim().toUpperCase()); // create chain to removes whitespace and converts to uppercase, logs "HELLO, WORLD!"

let replace = "haha that is so funny".replace("funny", "hilarious"); // replaces "funny" with "hilarious", but does not change the original string

console.log(replace); // logs "haha that is so hilarious"

let indexof = "Hello, World!".indexOf("World"); // finds the index of "World" in the string, which is 7
console.log(indexof); // logs 7

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

let product = "toy"

let price = 10.99 

let quantity = 3

console.log(`the price of ${quantity} ${product}s. the total is $${(price * quantity)}`)