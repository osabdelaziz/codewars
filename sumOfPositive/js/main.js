function positiveSum(arr) {
    if(arr.length === 0){
    return 0
    }
    const positiveValues = arr.filter(num=> num >=0)
    if(positiveValues.length === 0){
    return 0
    }
    const result = positiveValues.reduce((sum, posNum) => sum + posNum)
    return result
  }
  
