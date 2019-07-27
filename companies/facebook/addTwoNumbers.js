function addTwoStringNumbers(str1, str2) {
  let str1Split = str1.split('.');
  let str2Split = str2.split('.');

  str1Split.push('');
  str2Split.push('');

  str1Split = str1Split.slice(0,2);
  str2Split = str2Split.slice(0,2);

  console.log(str1Split);
  console.log(str2Split);

  // pad left side

  let longerLeft = getLongerString(str1Split[0], str2Split[0]);
  if (longerLeft === str1Split[0]) {
    str2Split[0] = "0".repeat(str1Split[0].length - str2Split[0].length) + str2Split[0];
  } else {
    str1Split[0] = "0".repeat(str2Split[0].length - str1Split[0].length) + str1Split[0];  
  }

  // pad right side
  let longerRight = getLongerString(str1Split[1], str2Split[1]);
  if (longerRight === str1Split[1]) {
    str2Split[1] = str2Split[1] + "0".repeat(str1Split[1].length - str2Split[1].length);
  } else {
    str1Split[1] = str1Split[1] + "0".repeat(str2Split[1].length - str1Split[1].length);
  }  

  // console.log(str1Split);
  // console.log(str2Split);

  let decimalsAdded = addTwoInts(str1Split[1], str2Split[1]);
  let decimalsToString = convertToString(decimalsAdded)
  let hasCarry = false;
  if (decimalsAdded.length > str1Split[1].length) {
    hasCarry = true;
    decimalsToString = decimalsToString.slice(1, decimalsToString.length);
    // console.log(decimalsToString);
  }
  // console.log(hasCarry)
  let intAdded = addTwoInts(str1Split[0], str2Split[0], (hasCarry ? 1 : 0));
  let intToString = convertToString(intAdded);
  console.log(decimalsToString.length)
  return (intAdded + (decimalsToString.length > 0 ? '.' + decimalsToString : ''));
  // console.log(intAdded + '.' + decimalsToString);


}

function convertToString(num) {
  return num.toString();
}

function getZeroesToRightAndLeft(num) {
  var splitted = num.split(".");
  return [(splitted[0] !== undefined ? splitted[0].length : 0), (splitted[1] !== undefined ? splitted[1].length : 0)];
}

function getLongerString(str1, str2) {
  if (str1.length >= str2.length) { return str1; } else { return str2; }
}

function addTwoInts(num1, num2, carry = 0) {
  let digits = {'0': 0,'1': 1,'2': 2,'3': 3,'4': 4,'5': 5,'6': 6,'7': 7,'8': 8,'9': 9}
  let longer = num1.length >= num2.length ? num1 : num2;
  let final = '';
  for (let i = longer.length - 1; i >= 0; i--) {
    let current = 0;
    let digit1 = (num1[i] !== undefined ? digits[num1[i]] : 0);
    let digit2 = (num2[i] !== undefined ? digits[num2[i]] : 0);
    current = digit1 + digit2 + carry;
    carry = Math.floor(current / 10);
    current = current % 10;
    final = parseInt(current) + final;
  }

  if (carry) {
    final = '1' + final;
  }
  return final;
}

/*
  
  3.233433
     12345 

*/

// console.log(addTwoInts('2001','0999'));
console.log(addTwoStringNumbers("4.933434", "12345.9") === "12350.833434");
console.log(addTwoStringNumbers("3.14", "0.86") === "4.00");
console.log(addTwoStringNumbers("3.14", "0.001") === "3.141");
console.log(addTwoStringNumbers("0", "10") === "10");
console.log(addTwoStringNumbers("0", "0") === "0");
console.log(addTwoStringNumbers("99999999999999999999999999", "21312321323213213213231231232"))
