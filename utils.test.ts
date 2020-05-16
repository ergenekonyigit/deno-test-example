import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import * as utils from './utils.ts';

Deno.test("Sorted Array", function (): void {
  // given
  const x = [8, 1, 3, 6, 4, 7];
  const y = [5, 12, 32, 9, 2, 0];

  // when
  const sortedX = utils.sortArr((a, b) => a - b)(x)
  const sortedY = utils.sortArr((a, b) => b - a)(y)

  // then
  assertEquals(sortedX, [1, 3, 4, 6, 7, 8]);
  assertEquals(sortedY, [32, 12, 9, 5, 2, 0]);
});
