/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const sqrt5 = Math.sqrt(5);
    const stair = n + 1;
    return 1/sqrt5 * Math.pow((1 + sqrt5)/2, stair) - Math.pow((1 - sqrt5)/2, stair);
};
