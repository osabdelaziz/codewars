function howManydays(month){
    var days;
    switch (month){
      case 2:
        return 28;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        return 30;
        break;
     default:
        return 31
    }
    return days;
  }