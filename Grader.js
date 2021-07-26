function grader(score) {
    if(score > 1 || score < .6){
      return 'F'
    }else if(score >= .9){
      return 'A'
    }else if(score >= .8){
      return 'B'
    }else if(score >= .7){
      return 'C'
    }else if(score >= .6){
      return 'D'
    }
  }