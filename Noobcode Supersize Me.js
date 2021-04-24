function superSize(num){
    let newNum = num.toString().split('').sort(function (a, b) { return b - a; }).join('')
    return Number(newNum)
  }