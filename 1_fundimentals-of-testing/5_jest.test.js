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
