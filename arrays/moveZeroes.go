func moveZeroes(nums []int) {
  index := 0
  for i := 0; i < len(nums); i++ {
    current := nums[i];
    if current != 0 {
      nums[i] = 0
      nums[index] = current
      index++
    }
  }
}