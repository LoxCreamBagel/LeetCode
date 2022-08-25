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


  // Let's knock out easy usecases
  let n = nums1, m = nums2;

  // One of the lists is empty
  if (n.length === 0) {
    return listMedian(m);
  } else if (m.length === 0) {
    return listMedian(n);
  }

  // all of 1 list is less than the other list
  if (n[n.length-1] <= m[0]) {
    return stackedListMedian(n, m)
  } else if (m[m.length-1] <= n[0]) {
    return stackedListMedian(m, n);
  }    
  
  let i, j;
  do {
    // find the middle indexs
    i = Math.floor(n.length/2);
    j = Math.floor(m.length/2);

    // The median of both lists are the same
    // This is our median
    if (n[i] === m[j]) {
      return n[i];
    }

    // The median of n is smaller, search the upper portion
    // The median of m is larger, search the lower portion, inclusive
    else if (n[i] < m[j]) {
      n = n.slice(i, n.length);
      m = m.slice(0, j+1);
    } 
    
    // The median of n is larger, search the lower portion, inclusive
    // The median of m is larger, search the upper portion
    else {
      n = n.slice(0, i+1);
      m = m.slice(j, m.length);
    }
  } while (false);
    
    return -1;
};

// Only 1 list
const listMedian = function(n) {
  let k = Math.floor((n.length-1)/2), l = Math.ceil((n.length-1)/2);
  return (n[k] + n[l]) / 2;
}

// all of 1 list is less than the other list
const stackedListMedian = function (lower, upper) {
  const totalLength = lower.length + upper.length;
  const k = Math.floor((totalLength-1)/2), l = Math.ceil((totalLength-1)/2);

  let lowerMedian = (k < lower.length) ? lower[k] : upper[k - lower.length];
  let upperMedian = (l < lower.length) ? lower[l] : upper[l - lower.length];

  return (lowerMedian + upperMedian) / 2;
};

var binarySearch = function (nums, target) {

  let length = nums.length;
  let middle = Math.floor(length / 2);

  if (nums[middle] === target)
    return middle;
  
  if (length === 1)
    return -1;

  if ( target < nums[middle])
    return binarySearch(nums.slice(0, middle), target);

  if (target > nums[middle])
    return binarySearch(nums.slice(middle, length), target);
}
