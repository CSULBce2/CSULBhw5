const isEven = (n) => {
  if (!Number.isInteger(n)) {
    console.log("Not an integer: " + n);
    return false;
  }
  return (n & 1) === 0;
};

// Loop test 1–10
for (let i = 1; i <= 10; i++) {
  console.log(i + " -> " + isEven(i));
}

// Separate tests for 4 and 5
let check4 = isEven(4);
let check5 = isEven(5);
console.log("is 4 even? " + check4);
console.log("is 5 even? " + check5);
