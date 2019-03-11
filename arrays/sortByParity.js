/**
 * @param {number[]} A
 * @return {number[]}
 */

Number.prototype.isEven = function() {
    return this % 2 === 0
}
var sortArrayByParity = function(A) {
    
    // creates an array of length
    var sorted = Array.apply(null, Array(A.length));
    
    var leftPointerIdx = 0;
    var rightPointerIdx = A.length - 1;
    
    A.forEach(function(e) {
       if (e.isEven()) {
         sorted[leftPointerIdx] = e;
         leftPointerIdx++;
       } else {
         sorted[rightPointerIdx] = e;
         rightPointerIdx--;
       }
    });
    
    return sorted;
};