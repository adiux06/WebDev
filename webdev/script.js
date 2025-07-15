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

