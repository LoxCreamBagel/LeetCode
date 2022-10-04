/**
 * Given a string s containing only digits, return the number of ways to decode it.
 * @param {string} s
 * @return {number}
 */
 const numDecodings = function (s) {
  // Length between 1 and 100
  if (s.length < 1 || s.length > 100)
    return 0;
    
  const NaturalNumbers = new RegExp(/^\d+$/g);
  // Only Natural Numbers allowed
  if (!NaturalNumbers.test(s))
    return 0;

  return doWork(s);
};

/**
 * @param {string} s 
 */
const doWork = (s) => {
  const ZeroFollowsOneTwo = /(?<!1|2)0/;
  const One0Two0 = new RegExp(/[12]0/);
  const TwoDigit = new RegExp(/1[1-9]|2[1-6]/);



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
  // Treat these as 1 character
  if (One0Two0.test(twoChar))
    return doWork(s.substring(2))
  
  if (!TwoDigit.test(twoChar))
    return doWork(s.substring(1));
  
  // a branch happens
  // count the number of 1s and 2s in a row, until they terminate
  // If s = [12]+[12]0 => AdjFib(s.length - 2)
  // if s = [12]+(1[3-9]|2[3-6]) => AdjFib(s.length)
  return  doWork(s.substring(1)) + doWork(s.substring(2));
   

  return ways;
}

console.log(numDecodings("121210564345654321210"))
console.log(numDecodings("21210"));

const phi = 1.618;
const AdjFibonacci = (n) => {
  n = n + 1;
  return Math.round((Math.pow(phi, n) - Math.pow(1-phi, n)) / Math.pow(5, 0.5));
}

console.log(AdjFibonacci(6-2))