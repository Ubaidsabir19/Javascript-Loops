// for loop example code

for (let i = 0; i < 5; i++) {
  console.log(i);
}


// for Loop inside the for loop

let x = 8;
let y = 5;
for (let i = 0; i < x; i++) {
    for(let j = 0; j < y; j++){
        console.log(j);
        break;              // it will break the loop
    }
    console.log(i);
  }


// continue used in for loop code example

  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      continue;
    }
    console.log(i);
  }