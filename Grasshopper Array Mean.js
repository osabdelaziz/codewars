var findAverage = function (nums) {
    return  nums.reduce((total, value) => total + value, 0) / nums.length
  
  }