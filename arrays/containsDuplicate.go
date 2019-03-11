func containsDuplicate(nums []int) bool {
    mMap := make(map[int]int)
    for _, e := range nums {
        if mMap[e] == 1 { return true }
        mMap[e] = 1 
    }
    return false 
}