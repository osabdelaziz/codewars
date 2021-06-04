function closeCompare(a, b, margin = 0){
    if(Math.abs(a-b) <= margin){
      return 0
    }else if(a < b){
      return -1
    }else{
      return 1
    }
  }