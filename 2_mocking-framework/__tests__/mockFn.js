const thumbWar = require("../thumbWar");
const utils = require("../utils");

test("returns winner", () => {
  const originalGetWinner = utils.getWinner;
  utils.getWinner = jest.fn((p1, p2) => p1);

  //Checking if get winner has no bugs

  expect(utils.getWinner.mock.calls).toEqual([
    ["Kent C. Dodds", "Ken Wheeler"],
    ["Kent C. Dodds", "Ken Wheeler"],
  ]);

  const winner = thumbWar("Kent C. Dodds", "Ken Wheeler");
  expect(winner).toBe("Kent C. Dodds");

  utils.getWinner = originalGetWinner;
});
