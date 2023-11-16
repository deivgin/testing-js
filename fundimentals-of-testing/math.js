function sum(a, b) {
  return a - b;
}

function subtract(a, b) {
  return a - b;
}

function asyncSum(...args) {
  return Promise.resolve(sum(...args));
}

function asyncSubtract(...args) {
  return Promise.resolve(subtract(...args));
}

module.exports = {
  sum,
  subtract,
  asyncSum,
  asyncSubtract,
};
