/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfFour = function (n) {
    if (n === 1) return true;
    if (n < 1) return false;
    if (n % 4 !== 0) return false;
    return (n === Math.pow(4, Math.round(Math.log(n) / Math.log(4))));
};