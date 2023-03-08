"use strict";
// Nested loop code example
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === j) {
            break;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}
