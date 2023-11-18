const thumbWar = require("../thumbWar");
const utils = require("../utils");
const assert = require("assert");

const originalGetWinner = utils.getWinner;
utils.getWinner = (player1, player2) => player1;

const winner = thumbWar("Kent C. Dodds", "Ken Wheeler");
assert.strictEqual(winner, "Kent C. Dodds");

utils.getWinner = originalGetWinner;
