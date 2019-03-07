function lonely(picture) {

	var rowCounts = Array.apply(null, Array(picture.length))
										.map(function(){return 0;});
	var colCounts = Array.apply(null, Array(picture[0].length))
										.map(function(){return 0;});

	var count = 0;
	
	picture.forEach(function(row, rowIndex) {
		row.forEach(function(thing, colIndex) {
			if (thing === 'B') { 
				rowCounts[rowIndex]++;
				colCounts[colIndex]++;
			}	
		});
	});

	for (var i = 0; i < picture[0].length; i++) {
	  var cols = 0;
		for (var j = 0; j < picture.length; j++) {
			var item = picture[j][i];
			if (item === 'B' && rowCounts[j] === 1 && colCounts[i] === 1) {
				count++;
			}
		}
	}
	return count;
}

picture = [
				['a','a','B'],
				['a','B','B'],
				['B','a','a']
];

console.log(lonely(picture))
