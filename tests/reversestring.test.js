const reverseString = require('../tasks/reversestring.js');

test('The string should be reversed', () => {
  expect(reverseString('string')).toBe('gnirts');
});