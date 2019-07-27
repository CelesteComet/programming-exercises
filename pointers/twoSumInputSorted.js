/** LEETCODE 167
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let low = 0;
    let high = numbers.length - 1;
    
    while (low < high) {
        let currentSum = numbers[low] + numbers[high];
        if (target === numbers[low] + numbers[high]) {
            return [low+1, high+1]; // because not zero based
        }
        
        if (currentSum > target) {
            high--;
        } else {
            low++;
        }
    }
};