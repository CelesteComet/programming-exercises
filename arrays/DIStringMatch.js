/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    var large = S.length;
    var small = 0;
    var ans = [];
    
    S.split("").forEach((s, i) => {
        if (s === "D") {
            ans.push(large);
            large--;
        } else {
            ans.push(small);
            small++;
        }
        // if it is the last one
        if (i === S.length - 1) {
            if (s === 'D') {
                ans.push(small);       
            } else {
                ans.push(large);
            }
        }
    });
    
    return ans;
};

