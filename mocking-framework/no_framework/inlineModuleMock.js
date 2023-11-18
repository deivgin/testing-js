function fn(implementation) {
  const mockFn = (...args) => {
    mockFn.mocks.calls.push(args);
    return implementation(...args);
  };

  mockFn.mocks = { calls: [] };
  return mockFn;
}

const utilsPath = require.resolve("../utils");
require.cache[utilsPath] = {
  id: utilsPath,
  filename: utilsPath,
  loaded: true,
  exports: {
    getWinner: fn((p1, p2) => p1),
  },
};

const thumbWar = require("../thumbWar");
const assert = require("assert");

const winner = thumbWar("Kent C. Dodds", "Ken Wheeler");
assert.strictEqual(winner, "Kent C. Dodds");
assert.strictDeepEqual(utils.getWinner.mocks.calls, [
  ["Kent C. Dodds", "Ken Wheeler"],
  ["Kent C. Dodds", "Ken Wheeler"],
]);

delete require.cache[utilsPath];
