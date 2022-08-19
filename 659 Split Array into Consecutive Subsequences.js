/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isPossible = function(nums) {
    if (nums.length < 3) 
        return false;
    
    let groups = [];
    let lowestSubI = 0;
    
    // Scenario 1, increasing numbers, no repeates
    for(let i=0; i<nums.length;i++) {
        let placed = false;
        let gi = lowestSubI;
        do {
            // bucket is empty
            if (!groups[gi]?.length) {
                groups[gi] = [nums[i]];
                placed = true;
            }
            
            // 1 more than current bucket, add to subsqeuence
            else if (nums[i] - groups[gi].at(-1) === 1) {
                groups[gi].push(nums[i]);
                placed = true;
            } 
            
            // Same number, move to next bucket and try again
            else if (nums[i] - groups[gi].at(-1) === 0) {
                gi += 1;
            } 
        
            // number too large for subsequence    
            else if (nums[i] - groups[gi].at(-1) > 1) {
                // Current sequence is too short!
                if (groups[gi].length < 3) {
                    return false;
                }
                // re-adjust our lowest staring subsequence and keep trying to place
                else {
                    gi += 1;
                    lowestSubI = gi;
                }
            }
        } while (!placed);
    }
    
    return (groups.findIndex(group => group.length < 3) === -1);
};
