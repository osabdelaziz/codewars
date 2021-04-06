function combat(health, damage) {
    if (health - damage < 0){
      return 0
    }else{
      return health - damage
    }
  }