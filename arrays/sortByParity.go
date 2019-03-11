func sortArrayByParity(A []int) []int {
    sorted := make([]int, len(A))
    
    leftPointerIdx := 0
    rightPointerIdx := len(A) - 1 
    
    for _, e := range A {
        if e % 2 == 0 {
            sorted[leftPointerIdx] = e
            leftPointerIdx += 1
        } else {
            sorted[rightPointerIdx] = e
            rightPointerIdx -= 1
        }
    }
    return sorted
}