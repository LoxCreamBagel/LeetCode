/**
 * You are given an integer n. We reorder the digits in any order (including the original order)
 *  such that the leading digit is not zero.
 * Return true if and only if we can do this so that the resulting number is a power of two.
 * Constraints: 
 * 1 <= n <= 10^9 aka 1 billion
 * @param {number} n
 * @return {boolean}
 */
 var reorderedPowerOf2 = function (n) {
  if (n < 1 || n >= Math.pow(10, 9)) {
    return false;
  }
  
  if (powerOf(n, 2)) {
    return true;
  }

  const nList = `${n}`.split("");
  if (nList.length > 9) return false;
  console.log(nList)
  return canMakeWord(nList, powersOf2[nList.length]);
};

/**
 * Map of powers of 2 under 1 Billion grouped by length
 */
const powersOf2 = { 
  1: ['1', '2', '4', '8'],
  2: ['16', '32', '64'],
  3: ['128', '256', '512'],
  4: ['1024', '2048', '4096', '8192'],
  5: ['16384', '32768', '65536'],
  6: ['131072', '262144', '524288'],
  7: ['1048576', '2097152', '4194304', '8388608'],
  8: ['16777216', '33554432', '67108864'],
  9: ['134217728', '268435456', '536870912'],
}

const canMakeWord = function(letters, words) {
  console.log(letters)
  console.log(words)
  const letterMap = letters.reduce(frequencyMap, {});
  const uniqueLetters = Object.keys(letterMap);
  console.log(uniqueLetters)
  console.log(letterMap)

  const results = words.map(word=> {
    const wLMap = word.split("").reduce(frequencyMap, {});
    for (const key of uniqueLetters) {
      if (!wLMap[key])  {
          return false;
      }
      else if (wLMap[key] !== letterMap[key]) {
        return false;
      }
    }
    return true;
  }).reduce((total, result) => total || result, false)
  return results;
}

const frequencyMap = function(letterBag, letter) {
  if (letterBag[letter])
    letterBag[letter]++;
  else
    letterBag[letter] = 1;
  return letterBag
}

/**
 * Returns true if the number is a power of the base
 * @param {number} number 
 * @param {number} base 
 * @returns {boolean}
 */
const powerOf = function (number, base) {
  if (number < 1) return false;
  if (number === 1) return true;
  return (number === Math.pow(base, Math.floor(Math.log(number) / Math.log(base))));
}