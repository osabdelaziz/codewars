function getAverage(marks){
    //TODO : calculate the downwar rounded average of the marks array
    return Math.floor(marks.reduce((x, y) => x + y) / marks.length);
  }