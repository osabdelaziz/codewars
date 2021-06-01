function sc(floor){
    if(floor <= 1){
      return ""
    }else if(floor <= 6){
      return `${"Aa~ ".repeat(floor-1)}Pa! Aa!`
    }else if(floor > 6){
      return `${"Aa~ ".repeat(floor-1)}Pa!`
    }
  }