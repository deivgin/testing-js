//We prime the cache to use this mock module instead of the real one.
require("../__no-framework-mocks__/utils");

const utilsPath = require.resolve("../utils");
const mockUtilsPath = require.resolve("../__no-framework-mocks__/utils");

require.cache[utilsPath] = require.cache[mockUtilsPath];

const thumbWar = require("../thumbWar");
const assert = require("assert");

const winner = thumbWar("Kent C. Dodds", "Ken Wheeler");
assert.strictEqual(winner, "Kent C. Dodds");
assert.strictDeepEqual(utils.getWinner.mocks.calls, [
  ["Kent C. Dodds", "Ken Wheeler"],
  ["Kent C. Dodds", "Ken Wheeler"],
]);

delete require.cache[utilsPath];
