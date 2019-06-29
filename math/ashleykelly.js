/* 
  Kelly and Ashley does homework,
  Ashley has a headstart on P units of homework.
  Kelly can do K units of homework each day.
  Ashley can do A units of homework each day.
  How long will it take Kelly to surpass Ashley?
  Return -1 if impossible

  if kelly can do 2
  and ashley can do 1
  and ashley has a head of 3
  there is a diff of 1

  K = 2
  A = 1 + 3 = 4

  K = 4
  A = 2 + 3 = 5

*/

function minDaysToCatchUp(A, K, P) {
  // if ashley's rate is higher or equal to kelly's it is impossible to catch up
  if (A >= K) { return -1; }

  // if kelly's rate is already higher than ashley even with the head start
  if (K > A + P) { return 1; }
  
  let diff = K - A;
  let daysToGetEven = P/diff;
  return Math.round(daysToGetEven) + 1;    
}

console.log(minDaysToCatchUp(1,2,3));
console.log(minDaysToCatchUp(2,100,1));
console.log(minDaysToCatchUp(2,2,0));