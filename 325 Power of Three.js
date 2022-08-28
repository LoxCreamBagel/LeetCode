/**
 * Given an integer n, return true if it is a power of three. Otherwise, return false.
 * An integer n is a power of three, if there exists an integer x such that n == 3x.
 * Constraints: -2^31 <= n <= 2^31 - 1
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    if (n < 1) return false;
    if (n === 1) return true;

    const exp = Math.floor(Math.log(n) / Math.log(3));
    return (Math.pow(3, exp) === n)
};