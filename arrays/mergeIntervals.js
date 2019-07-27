/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

  // if there is only one or none intervals
  if (intervals.length <= 1) {
    return intervals;
  }

  // sort by the start point
  let sortedIntervals = intervals.sort((a,b) => {return a[0] - b[0]});

  let prev = sortedIntervals[0];
  let result = [prev];

  for (let curr of sortedIntervals) {
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1]);

    } else {
      result.push(curr);
      prev = curr;      
    }
  }
  return result;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));