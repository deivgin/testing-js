function fn(implementation) {
  const mockFn = (...args) => {
    mockFn.mocks.calls.push(args);
    return implementation(...args);
  };

  mockFn.mocks = { calls: [] };
  return mockFn;
}

module.exports = {
  getWinner: fn((p1, p2) => p1),
};
