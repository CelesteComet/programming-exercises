function addStrings(num1, num2) {
  let num1Split = num1.split('.');
  let num2Split = num2.split('.');

  num1Split.push('');
  num2Split.push('');

  num1Split = num1Split.slice(0, 2);
  num2Split = num2Split.slice(0, 2);

  let leftSidelonger = getLongerInt(num1Split[0], num2Split[0]);
  if (num1Split[0] === leftSidelonger) {
    num2Split[0] = '0'.repeat(num1Split[0].length - num2Split[0].length) + num2Split[0];
  } else {
    num1Split[0] = '0'.repeat(num2Split[0].length - num1Split[0].length) + num1Split[0];
  }

  let rightSidelonger = getLongerInt(num1Split[1], num2Split[1]);
  if (num1Split[1] === rightSidelonger) {
    num2Split[1] = num2Split[1] + '0'.repeat(num1Split[1].length - num2Split[1].length);
  } else {
    num1Split[1] = num1Split[1] + '0'.repeat(num2Split[1].length - num1Split[1].length);
  }

  let decimalString = addNums(num1Split[1], num2Split[1]);
  let hasCarry = false;
  if (decimalString.length > num1Split[1].length) {
    hasCarry = true;
  }
  let intString = addNums(num1Split[0], num2Split[0], (hasCarry ? 1 : 0));
  return intString + '.' + decimalString;
}

function getLongerInt(num1, num2) {
  return num1.length >= num2.length ? num1 : num2;
}

function addNums(num1, num2, carry = 0) {
  let ans = '';
  let map = {
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,    
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '0': 0
  };

  for (let i = num1.length - 1; i >= 0; i--) {
    let first = num1[i] !== undefined ? map[num1[i]] : 0;
    let second = num2[i] !== undefined ? map[num2[i]] : 0;
    let sum = first + second + carry;
    console.log('first', first);
    console.log('second', second);
    console.log('sum', sum);
    let current = sum % 10;
    carry = Math.floor(sum / 10);
    console.log(carry)
    console.log('current', current);
    ans = current.toString() + ans;
  }  

  if (carry) { 
    return carry + ans;
  } else {
    return ans;
  }
}

console.log(addStrings('0.23', '232.9'));