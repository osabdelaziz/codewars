function numberToPower(number, power){
    let numPow = 1
    for(let i = 1; i <= power; i++){
       numPow *= number
    } 
    return numPow
  }