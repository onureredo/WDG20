import { it } from 'vitest';
import { test } from 'vitest';
import { describe } from 'vitest';

import filter from './example.js';
import { expect } from 'vitest';

describe('Example Test', () => {
  test('Greater than 10', () => {
    // AAA
    // arrange
    const arr = [0, 10, 20, 30];
    const fn = function greaterThan10(n) {
      return n > 10;
    };
    const expectedOutput = [20, 30];

    // act
    const result = filter(arr, fn);

    // assert
    expect(result).toStrictEqual(expectedOutput);
    // expect(123).toBe(expectedOutput) // result === expectedOutput
  });
  test('Should filter out everything except first index', () => {
    // AAA
    // arrange
    const arr = [1, 2, 3];
    const fn = function firstIndex(n, i) {
      return i === 0;
    };
    const expectedOutput = [1];

    // act
    const result = filter(arr, fn);

    // assert
    expect(result).toStrictEqual(expectedOutput);
  });
});
