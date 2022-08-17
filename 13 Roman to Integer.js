/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function (s) {
    const ROMAN_NUMERALS = { "": 0, "I": 1, "IV": 4, "V": 5, "IX": 9, "X": 10, "XL": 40, "L": 50, "XC": 90, "C": 100, "CD": 400, "D": 500, "CM": 900, "M": 1000 };

    // 1 <= s.length <= 15
    if (s.length < 1 || s.length > 15) return -1;

    // create a running sum based on the math of the prior 2 characters seen
    let sum = 0;
    let priorS = "";

    // s only contains the characters in ROMAN_NUMERALS
    for (var i = 0; i < s.length; i++) {
        let nextS = s[i];
        if (!nextS) return -1;

        if (priorS && Object.hasOwn(ROMAN_NUMERALS, priorS + nextS)) {
            sum += ROMAN_NUMERALS[priorS+nextS];
            priorS = "";
        }
        else {
            sum += ROMAN_NUMERALS[priorS];
            priorS = nextS;
        }
    }

    sum += ROMAN_NUMERALS[priorS];

    return sum;
};