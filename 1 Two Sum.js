/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const numMap = nums.reduce((map, number, index) => {
        map[number] = index;
        return map;
    },{});

    for (let i=0; i < nums.length; i++) {
        let checkforVal = target - nums[i];
        let j = numMap[checkforVal];
        if (j && j != i) {
            return [i, j];
        }
    }

    throw new Error("No solution was found? Is the input valid");
};