const thumbWar = require("../thumbWar");
const utils = require("../utils");
const assert = require("assert");

function fn(implementation) {
  const mockFn = (...args) => {
    mockFn.mocks.calls.push(args);
    return implementation(...args);
  };

  mockFn.mocks = { calls: [] };
  return mockFn;
}

const originalGetWinner = utils.getWinner;
utils.getWinner = fn((player1, player2) => player1);

const winner = thumbWar("Kent C. Dodds", "Ken Wheeler");
assert.strictEqual(winner, "Kent C. Dodds");
assert.strictDeepEqual(utils.getWinner.mocks.calls, [
  ["Kent C. Dodds", "Ken Wheeler"],
  ["Kent C. Dodds", "Ken Wheeler"],
]);

utils.getWinner = originalGetWinner;
