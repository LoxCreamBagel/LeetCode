function lengthOfLongestSubstring(s: string): number {
    if (s.length == 0) return 0;
    let longestSubstring = 0;
    let startIndex = 0;

    let charMap = {};
    let currentSubstring = 0;
    
    for(let i = 0; i < s.length; i++)
    {
        const c = s[i];

        if (charMap[c] >= startIndex) {
            // console.log("startIndex: " + startIndex + " i: " + i);
            startIndex = charMap[c] + 1;
            currentSubstring = i - startIndex;
        }

        charMap[c] = i;
        currentSubstring++;

        if (currentSubstring > longestSubstring) {
            longestSubstring = currentSubstring;
        }
    }

    return longestSubstring;
};