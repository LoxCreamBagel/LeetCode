/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, 
 * return the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n)).
 * 
 * Constraints:
 * nums1.length == m; 0 <= m <= 1000
 * nums2.length == n; 0 <= n <= 1000
 * 1 <= m + n <= 2000
 * -10^6 <= nums1[i], nums2[i] <= 10^6
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const totalLength = nums1.length + nums2.length;
  if (totalLength < 1)
    throw Error("arrays too short < 0");
  
  if (totalLength > 2000)
    throw Error("arrays too long > 2000");

  let i = 0, j = 0, nums3 = [];
  while(i+j < totalLength) {
   nums3.push(
    nums1[i] <= nums2[j] ? nums1[i++] : nums2[j++]
   )
  }

  if (totalLength === 1) 
    return nums3[0];

  let k = Math.floor((totalLength-1)/2), l = Math.ceil((totalLength-1)/2);
  return (nums3[k] + nums3[l]) / 2;
};