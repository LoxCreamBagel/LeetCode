/**
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed 
 * by using the letters from magazine and false otherwise.
 * Each letter in magazine can only be used once in ransomNote.
 * Constraints:
 * 1 <= ransomNote.length, magazine.length <= 10^5
 * ransomNote and magazine consist of lowercase English letters.
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length < 1 || magazine.length < 1) return false;
  const letterBag = magazine.split("").reduce((letterBag, letter) => {
    if (letterBag[letter])
      letterBag[letter]++;
    else
      letterBag[letter] = 1;
    return letterBag
  }, {});
  
  for (let i = 0; i < ransomNote.length; i++) {
    if (!letterBag[ransomNote[i]])
      return false;
    else 
      letterBag[ransomNote[i]]--;
  }
  return true;
};