const thumbWar = require("../thumbWar");
const utils = require("../utils");
const assert = require("assert");

function fn(implementation = () => {}) {
  const mockFn = (...args) => {
    mockFn.mocks.calls.push(args);
    return implementation(...args);
  };

  mockFn.mocks = { calls: [] };
  mockFn.mockImplementation = (newImplementation) =>
    (implementation = newImplementation);
  return mockFn;
}

function spyOn(object, prop) {
  const originalFunction = object[prop];
  object[prop] = fn();
  object[prop].mockRestore = () => (object[prop] = originalFunction);
}

spyOn(utils, "getWinner");
utils.getWinner.mockImplementation((player1, player2) => player1);

const winner = thumbWar("Kent C. Dodds", "Ken Wheeler");
assert.strictEqual(winner, "Kent C. Dodds");
assert.strictDeepEqual(utils.getWinner.mocks.calls, [
  ["Kent C. Dodds", "Ken Wheeler"],
  ["Kent C. Dodds", "Ken Wheeler"],
]);

utils.getWinner.mockRestore();
