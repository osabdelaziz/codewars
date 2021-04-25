function uefaEuro2016(teams, scores){
    let teamOne = teams[0]
    let teamTwo = teams[1]
    if (scores[0] > scores[1]){
      return `At match ${teamOne} - ${teamTwo}, ${teamOne} won!`
    }else if(scores[0] < scores[1]){
      return `At match ${teamOne} - ${teamTwo}, ${teamTwo} won!`
    }else{
      return `At match ${teamOne} - ${teamTwo}, teams played draw.`
    }
  }