function isUnique(string) {
  var map = {};
  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    console.log(char);
    if (map[char] !== undefined) {
      return false;
    }
    console.log(map);
    map[string] = string[i];
  }
  return true;
}

