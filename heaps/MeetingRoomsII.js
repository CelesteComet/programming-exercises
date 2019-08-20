// LEETCODE 253
/**
 * @param {number[][]} intervals
 * @return {number} [[0,30], [5,10], [15,20]]
 */
var minMeetingRooms = function(intervals) {
    if (intervals.length === 0) { return 0; }
    if (intervals.lengnth === 1) { return 1; }
    let sortedIntervals = intervals.sort((a,b) => a[0] - b[0]);
    let rooms = [];
    for (let i = 0; i < sortedIntervals.length; i++) {
      rooms = rooms.sort((a,b) => a[1] - b[1]);
      if (rooms.length === 0) {
        rooms.push(sortedIntervals[i]);
      } else {
        // check currently lowest meetingroom, see if ending time of the room is less than or equal to starting time of meeting, if so replace
        if (rooms[0][1] <= sortedIntervals[i][0]) {
          rooms[0] = sortedIntervals[i];
        } else {
          rooms.push(sortedIntervals[i]);
        }
      }
    }
    return rooms.length;
};