function countryLCA(arrays, validElems) {
	// create a mapping of each element to its parent
	var map = {};
	for (var i = 0; i < arrays.length; i++) {
		var array = arrays[i];
		var key = array[0];
		var elems = array.slice(1, array.length);
		elems.forEach(function(e){
			map[e] = key;
		})
	}

	var mem = {};

	var firstLCA = map[validElems[0]];
	var secondLCA = map[validElems[1]];

	mem[firstLCA] = true;
	mem[secondLCA] = true;

	while (firstLCA !== secondLCA) {
		if (map[firstLCA]) {
			firstLCA = map[firstLCA];	
		}

		if (map[secondLCA]) {
			secondLCA = map[secondLCA];
		}
		
		if (mem[firstLCA]) {
			return firstLCA;
		}
		if (mem[secondLCA]) {
			return secondLCA;
		}
	}
	return firstLCA;
}

var arr = [['Earth', 'South America','North America', 'Asia', 'Pacific', 'Africa'],
['Asia', 'China', 'Korea', 'Japan'],
['North America', 'USA', 'Canada'],
['South America', 'Brazil', 'Columbia'],
['Africa', 'Algeria', 'Lybia'],
['China', 'Beijing', 'Shanhai'],
['Japan', 'Tokyo', 'Kyoto'],
['Korea', 'Seoul']];

console.log(countryLCA(arr, ['Tokyo', 'Kyoto']));
console.log(countryLCA(arr, ['Beijing', 'Japan']));
console.log(countryLCA(arr, ['Seoul', 'Africa']));
