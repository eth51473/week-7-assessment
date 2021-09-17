let falseTest = [1,2,3,4]
let trueTest = [0, 5, 10,-10,8]

sumZero = (nums) => {
  for(let i = 0; i<nums.length;i++) {
    let opposite = nums[i] * -1
    if(nums.indexOf(opposite)> -1){
      console.log('true')
      return true
    }else{
      console.log('false')
      return false
    }
  };
}
sumZero(falseTest)
sumZero(trueTest)
// Runtime  O(n^2) indexof has to iterate through the array 
