
const NaturalNumbers = new RegExp(/^\d+$/g);
const ZeroFollowsOneTwo = /(?<!1|2)0/;
const TwoDigit = new RegExp(/1[0-9]|2[0-6]/)

/**
 * Given a string s containing only digits, return the number of ways to decode it.
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  // Length between 1 and 100
  if (s.length < 1 || s.length > 100)
    return 0;

  // Only Natural Numbers allowed
  if (!NaturalNumbers.test(s))
    return 0;

  return doWork(s);
};

/**
 * @param {string} s 
 */
const doWork = (s) => {
  // Nothing remaining in the string
  if (s.length === 0)
    return 1;

  // Ensure any 0 comes only after a 1 or 2
  if (s.search(ZeroFollowsOneTwo) !== -1)
    return 0;

  // 1 digit means 1 potential combo
  if (s.length === 1)
    return 1;

  // Check two numbers
  const twoChar = s.substring(0, 2) + "";

  let ways = 0;
  if (TwoDigit.test(twoChar))
    ways += doWork(s.substring(2));
  ways += doWork(s.substring(1));

  return ways;
}