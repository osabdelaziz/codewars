var countSheep = function (num){
    let newString = ''
    for(let i = 0; i < num; i++){
      newString += (i + 1) + ' sheep...'
    }
    return newString
  }