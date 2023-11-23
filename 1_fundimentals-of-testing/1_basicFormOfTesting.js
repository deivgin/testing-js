//Testings goal is to throw an error if the result is not equal to the expected value
//Job of testing frameworks is to make the testing error as clear as possible

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

const result = sum(3, 7);
const expected = 10;

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

const result2 = subtract(7, 3);
const expected2 = 4;

if (result2 !== expected2) {
  throw new Error(`${result} is not equal to ${expected}`);
}
