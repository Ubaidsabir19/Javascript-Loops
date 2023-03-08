// Nested loop code example with break statement

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === j) {
        break;           // break statement to break loop if i=j
      }
      console.log(`i = ${i}, j = ${j}`);
    }
  }
  