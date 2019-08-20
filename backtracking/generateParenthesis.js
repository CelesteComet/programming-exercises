// LEETCODE 22
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let ans = [];
  backtrack(ans, "", 0, 0, n);
  return ans;
};

var backtrack = function(ans, curr, open, close, max) {
    if (curr.length == max * 2) {
      ans.push(curr);
      return;
    }
  
    if (open < max) {
      backtrack(ans, curr+"(", open+1, close, max);
    }
    if (close < open) {
      backtrack(ans, curr+")", open, close+1, max);
    }
};

/*

n = 1

()

n = 2

()()
(())

n = 3

()()()
(()())
(())()
()(())
((()))







*/