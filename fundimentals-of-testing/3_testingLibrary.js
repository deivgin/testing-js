const { sum, subtract } = require("./math.js");

test("sum adds numbers", () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtract subtracts numbers", () => {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

function test(title, callback) {
  try {
    callback();
    console.log(`✅ Test: ${title} passed`);
  } catch (error) {
    console.error(`❌ Test: ${title} failed`);
    console.error(error);
  }
}

function expect(actual) {
  return {
    toBe: (expected) => {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}
