import { roughlyEqual } from '../../src/helpers/vocab-content-helpers';

test('returns true for strings that are equal ignoring case and whitespace', () => {
  expect(roughlyEqual('  Hello ', 'hello')).toBe(true);
  expect(roughlyEqual('WORLD', 'world')).toBe(true);
});

test('returns false for strings that are not equal', () => {
  expect(roughlyEqual('Hello', 'world')).toBe(false);
  expect(roughlyEqual('Test', 'Testing')).toBe(false);
});

test('returns true for strings with mixed case and extra spaces', () => {
  expect(roughlyEqual(' TeSt ', 'test')).toBe(true);
  expect(roughlyEqual(' Example ', 'example')).toBe(true);
});