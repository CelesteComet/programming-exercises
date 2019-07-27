
/**
 LEETCODE 415
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2, carry = 0) {
    let map = {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9
    };
    
    let longer = getLongerString(num1, num2);
    let shorter = getShorterString(num1, num2);
    shorter = '0'.repeat(longer.length - shorter.length) + shorter;
    let final = [];
    
    for (let i = longer.length - 1; i >= 0; i--) {
        let firstNum = map[longer[i]];
        let secondNum = shorter[i] !== undefined ? map[shorter[i]] : 0;
        let sum = firstNum + secondNum + carry;
        carry = Math.floor(sum / 10);
        let current = sum % 10;
        final.unshift(current);
    }
    
    if (carry) { final.unshift(carry); }
    return final.join('');
};

function getLongerString(num1, num2) {
    return num1.length >= num2.length ? num1 : num2
}
    
function getShorterString(num1, num2) {
    return num1.length >= num2.length ? num2 : num1
}