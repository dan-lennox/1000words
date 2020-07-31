/**
 * Misc Helper Functions.
 */

/**
 * Randomize an array's contents.
 *
 * Fisher-Yates shuffle.
 *
 * @param array
 *   The array to shuffle.
 */
export function shuffleArray(array: Array<any>) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}