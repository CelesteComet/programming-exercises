func floodFill(image [][]int, sr int, sc int, newColor int) [][]int {
    
    startingColor := image[sr][sc]
    
    queue := [][]int{[]int{sr,sc}}
    
    for (len(queue) > 0) {
        
        // pop from queue
        var popped []int;
        popped, queue = queue[len(queue)-1], queue[:len(queue)-1]
        
        // process the popped
        sr := popped[0]
        sc := popped[1]
        image[sr][sc] = newColor
        
        // for the rest 
        others := [][]int{[]int{1,0}, []int{-1,0}, []int{0,1}, []int{0,-1}}
        for _, set := range others {
            // get item
            sr := set[0] + sr
            sc := set[1] + sc
            
            notOutOfBounds := (sr >= 0 && sr < len(image)) && (sc >= 0 && sc < len(image[0]))
            if notOutOfBounds {
                isStartingColor := (image[sr][sc] == startingColor)
                colorIsNotNewColor := (image[sr][sc] != newColor);
                if isStartingColor && colorIsNotNewColor {
                    queue = append(queue, []int{sr,sc})
                }
            }
        }
    }
    return image
}