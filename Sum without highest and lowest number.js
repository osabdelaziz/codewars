function sumArray(array) {
    if(array && array.length > 1){
      newArray = array.sort((a,b) => a-b)
      return newArray.reduce((a,b) => a+b) - (newArray[0] + newArray[newArray.length - 1])
    }else{
      return 0
    }
    
  
  }