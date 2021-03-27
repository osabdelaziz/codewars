function sumArray(array) {
    newArray = array.sort((a,b) => a-b)
    return newArray.reduce((a,b) => a+b) - (newArray[0] + newArray[newArray.length - 1])
  
  }