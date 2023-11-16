const { sum, subtract } = require("./math.js");

function expect(actual) {
  return {
    toBe: (expected) => {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}

expect(sum(3, 7)).toBe(10);
expect(subtract(7, 3)).toBe(4);
