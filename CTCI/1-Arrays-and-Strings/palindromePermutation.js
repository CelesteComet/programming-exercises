function palindromePermutation(string) {

/*

btatb

btagtb


~ a palindrome needs 1 odd count and as many even counts
~ no odd counts and many even counts (bbcc)
~ space is not a consideration
~ can be fake words
~ one letter can be a palindrome
~ empty strings are palindromes


*/

  if (string.trim().length === 0 || string.trim().length === 1) {
    return true;
  }

  let counts = {};

  for (let i = 0; i < string.length; i++) {
    let char = string[i].toLowerCase();
    if (counts[char] !== undefined) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }


  var oddCounts = 0;
  Object.keys(counts).forEach(k => {
    if (counts[k] % 2 !== 0) {
      oddCounts++;
    }
  });

  if (oddCounts === 1) { return true; } else { return false; }
}

  console.log(palindromePermutation(" a"));




