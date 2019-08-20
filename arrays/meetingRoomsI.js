// LEETCODE 252
/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    intervals = intervals.sort((a,b) => a[0]-b[0]);
    let mergedIntervals = [intervals[0]];
  
    for (let interval of intervals.slice(1, intervals.length)) {
      if (interval[0] < mergedIntervals[mergedIntervals.length - 1][1]) {
        return false;
      } else {
        mergedIntervals.push(interval);
      }
    }
    return true;
};