import { expect, it } from 'vitest'
import { roughlyEqual } from '../../src/helpers/vocab-content-helpers';

it(`GIVEN two string params that are equal ignoring case and whitespace
THEN roughlyEqual returns true`, () => {
  expect(roughlyEqual('  Hello ', 'hello')).toBe(true);
  expect(roughlyEqual('WORLD', 'world')).toBe(true);
});

it(`GIVEN two string params that are not equal even when ignoring case and whitespace 
THEN roughlyEqual returns false`, () => {
  expect(roughlyEqual('Hello', 'world')).toBe(false);
  expect(roughlyEqual('Test', 'Testing')).toBe(false);
});

