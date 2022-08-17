/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const ROMAN_NUMERALS = {"": 0, "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000};
    const EXCEPTION_NUMERALS = ["IV", "IX", "XL", "XC", "CD", "CM"];
    
    // 1 <= s.length <= 15
    // if (s.length < 1 || s.length > 15) return 0;
    
    // create a running sum based on the math of the prior 2 characters seen
    let sum = 0;
    let priorS = "";
    
    // s only contains the characters in ROMAN_NUMERALS
    for (var i = 0; i < s.length ; i++) {
        let nextS = s[i];
        
        if (EXCEPTION_NUMERALS.includes(priorS+nextS)) {
            sum += ROMAN_NUMERALS[nextS] - ROMAN_NUMERALS[priorS];
            priorS = "";
        }
        else {
            sum = sum + ROMAN_NUMERALS[priorS];
            priorS = nextS;
        }
    }

    sum = sum + ROMAN_NUMERALS[priorS];
    
    return sum;
};