function flatten(nestedList) {
  var flat = [];

  for (let i = 0; i < nestedList.length; i++) {
    var current = nestedList[i];

    if (current instanceof Array) {
      var currentFlattened = flatten(current);

      currentFlattened.forEach(e => {
        flat.push(e);
      })

    } else {
      flat.push(current);
    } 
  }

  return flat;
};

function flattenES6(nestedList) {
  return nestedList.reduce((flat, toBeFlattened) => {
    return flat.concat(Array.isArray(toBeFlattened) ? flattenES6(toBeFlattened) : toBeFlattened)
  }, [])
}



let notFlat = [[1,[],[3,2,3,[2]]],[]];
console.log(flattenES6(notFlat))

// let hugeFlat = Array(200000).fill([1]);
// console.log(flatten(hugeFlat));