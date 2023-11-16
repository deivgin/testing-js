const { asyncSum, asyncSubtract } = require("./math.js");

test("sum adds numbers", async () => {
  const result = await asyncSum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtract subtracts numbers", async () => {
  const result = await asyncSubtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

async function test(title, callback) {
  try {
    await callback();
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
