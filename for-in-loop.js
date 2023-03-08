"use strict";
// for-in loop code exapmle 
const person = { name: 'John', age: 30 };
for (const property in person) {
    console.log(`${property}: ${person[property]}`);
}
