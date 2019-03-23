/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    var myFloodFill = function(image, sr, sc, newColor, startingColor) {
        
        var queue = [[sr,sc]];
        while (queue.length) {
            var toProcess = queue.pop();
            var sr  = toProcess[0];
            var sc  = toProcess[1];
            
            // do process
            image[sr][sc] = newColor;
            
            // Add the rest to queue
            [[1,0],[-1,0],[0,1],[0,-1]].forEach(set => {
                var sr = toProcess[0] + set[0];
                var sc = toProcess[1] + set[1];
                
                // if it is not out of bounds and is the starting color
                var notOutOfBounds = (sr >= 0 && sr < image.length) && (sc >= 0 && sc < image[0].length);
                if (notOutOfBounds) {
                    var isStartingColor = (image[sr][sc] == startingColor);
                    var colorIsNotNewColor = (image[sr][sc] !== newColor);
                    if (isStartingColor && colorIsNotNewColor) {
                        queue.unshift([sr,sc]);
                    }
                }
            });
        }
        return image;
    }
    
    
    var startingColor = image[sr][sc];
    return myFloodFill(image, sr, sc, newColor, startingColor);
};