// LEETCODE 49
/**
 * @param {string[]} strs
 * @return {string[][]}
 */ // O(nklog(k))
/*
var groupAnagrams = function(strs) {
    let eachSorted = strs.map(s => s.split('').sort().join(''));
    let map = {};
    for (let i = 0; i < strs.length; i++) {
      let e = eachSorted[i];
      let real = strs[i];
      if (map[e] !== undefined) {
        map[e].push(real);
      } else {
        map[e] = [real];
      }      
    }
    return Object.values(map);
};
*/

var groupAnagrams = function(strs) {
   let strHashArr = strs.map(str => createStringHash(str));
   let map = {};
   strHashArr.forEach((hash, i) => {
       if (map[hash] !== undefined) {
         map[hash].push(strs[i])
       } else {
         map[hash] = [strs[i]];
       }
   });
  return Object.values(map);
};


function createStringHash(input) {
  let ans = '';
  let map = {};
  input.split('').forEach(c => {
    if (map[c] !== undefined) {
      map[c]++;
    }  else {
      map[c] = 1;
    }
  });
  let abcs = 'abcdefghijklmnopqrstuvwxyz'.split('');
  abcs.forEach(letter => {
    if (map[letter]) {
      ans += "#";
      ans += letter;
      ans += map[letter].toString();
    }              
  })
  return ans;
}