function calculateTip(amount, rating) {
    if(rating.toLowerCase() === 'excellent'){
      return Math.ceil(amount * .2)
    }else if(rating.toLowerCase() === 'great'){
      return Math.ceil(amount * .15)
    }else if(rating.toLowerCase() === 'good'){
      return Math.ceil(amount * .10)
    }else if(rating.toLowerCase()=== 'poor'){
      return Math.ceil(amount * .05)  
    }else if(rating.toLowerCase() === 'terrible'){
      return 0
    }else{
      return 'Rating not recognised'
    }
