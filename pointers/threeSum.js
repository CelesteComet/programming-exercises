var threeSum = function(nums, target = 0) {
  let result = [];
  nums = nums.sort((a,b) => a - b);
  // keep last two because we need 3 in total
  for (let i = 0; i < nums.length - 2; i++) {

    // skip ones we've seen past the first
    if (i > 0 && nums[i-1] === nums[i]) { continue; }

    // two pointer two sum method
    let low = i + 1;
    let high = nums.length - 1;

    while (low < high) {
      let sum = nums[low] + nums[high] + nums[i];
      if (sum < target) {
        low++;
      } else if (sum > target) {
        high--;
      } else {
        result.push([nums[i], nums[low], nums[high]]);
        while (low < high && nums[low] === nums[low+1]) {
          low++;
        }
        while (low < high && nums[high] === nums[high-1]) {
          high--;
        }
        low++;
        high--;
      }
    }
  }
  return result;
};

/* USING A TWO SUM METHOD */
/*
var threeSum = function(nums) {
    nums = nums.sort((a,b) => a-b);
    let res = [];
    for (let i = 0; i < nums.length - 2; i++) {
        let prevIsSame = (i > 0 && nums[i-1] === nums[i]);
        if (prevIsSame) { continue; }
        let curr = nums[i];
        let complement = 0 - curr; // number to find to make it zero
        let rest = nums.slice(i+1, nums.length);
        let twosArray = twoSum(rest, complement);
        if (twosArray.length) {
            twosArray.forEach(arr => {
                res.push([curr].concat(arr));
            });
        }
    }
    return res;
};

var twoSum = function(nums, target) {
   // nums is sorted 
   let res = [];
   let low = 0;
   let high = nums.length - 1;
   while (low < high) {
       let sum = nums[low] + nums[high];
       if (sum === target) {
           let foundArr = [nums[low], nums[high]];
           res.push(foundArr);
           
           while (low < high && nums[low+1] === nums[low]) {
               low++;
           }
           
           while (low < high && nums[high-1] === nums[high]) {
               high--
           }
           low++;
           high--;
       } else if (sum > target) { high--; } else { low++; }
   } 
   return res;
};
*/