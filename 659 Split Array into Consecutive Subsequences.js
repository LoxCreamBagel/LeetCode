/**
 * is it possible to seperate the given array of numbers into subsqeuences with the following params:
 *      All Subsequence must be at least length 3
 *      All Subsequence itmes must ascend by 1 each index
 * @param {number[]} nums
 * @return {boolean}

 */
 var isPossible = function(nums) {
    if (!nums || nums.length < 3) return false;

    const subseq = [];
    let lowestSeq = 0;
    
    for (let i=0; i < nums.length; i++) {
        const val = nums[i];
        let maxSeqIndex = subseq.length - 1;
        let seq = lowestSeq;

        
        let placed = false;
        do {
            // There is no subsequences in progress at this index
            if (!subseq[seq]) {
                subseq.push([val]);
                placed = true;
            }

            // This is a duplicate number. Try the next subsequence
            else if ((val - subseq[seq].slice(-1).pop()) === 0) {
                seq += 1;
            }

            // This value is valid for this subsequence
            else if ((val - subseq[seq].slice(-1).pop()) === 1) {
                // If there are no subsequences after this or the length is too short, place it
                if (subseq[seq].length < 3 || seq === maxSeqIndex) {
                    subseq[seq].push(val);
                    placed = true;
                }

                // there is at least 1 subsequence after this one
                else {
                    // check if the subsequences after this one, need the value
                    let countback = maxSeqIndex;
                    while (countback >= seq && !placed) {
                        // A future sequence needed this
                        if ((val - subseq[countback].slice(-1).pop()) === 1) {
                            subseq[countback].push(val);
                            placed = true;
                        } else {
                            // Future didn't need, check next moving backwards
                            countback -= 1;
                        }
                    }
                }
                
            }

            // This value is too large to be placed in the current subsequence
            else if ((val - subseq[seq].slice(-1).pop()) > 1) {

                // fast fail if the subsequence is not long enough to meet requirements
                if (subseq[seq].length < 3) {
                    return false;
                }
                // Try the next subsequence
                // set the lowest possible subsequence to the next subsequence
                else {
                    seq += 1;
                    lowestSeq = seq;
                } 
            }
        } while (!placed);
    } 

    return (subseq.findIndex(sequence => sequence.length < 3) === -1);
};
