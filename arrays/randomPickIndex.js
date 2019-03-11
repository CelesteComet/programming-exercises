/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums;
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    var possibilities = [];
    this.nums.forEach((num, i) => {
        if (num === target) {
            possibilities.push(i);
        } 
    })
    return possibilities[Math.floor(Math.random()*possibilities.length)];
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.pick(target)
 */