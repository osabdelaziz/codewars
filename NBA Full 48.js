function pointsPer48(ppg, mpg) {
    if(ppg === 0 || mpg === 0){
      return 0
    }else{
      return Number((ppg / mpg * 48).toFixed(1))
    }
  }