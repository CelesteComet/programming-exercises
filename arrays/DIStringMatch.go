func diStringMatch(S string) []int {
    var small int = 0
    var large int = len(S)
    var ans = make([]int, len(S) + 1)
    
    for i,e := range S {
        if string(e) == "I" {
            ans[i] = small
            small++
        } else {
            ans[i] = large
            large--
        }
        
        if (i == len(S) - 1) {
            if string(e) == "I" {
                ans[i+1] = small
            } else {
                ans[i+1] = large
            }                
        }
    }
    return ans
}