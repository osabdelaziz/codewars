function validateCode (code) {
    if( /^1/.test(code) || /^2/.test(code) || /^3/.test(code) ){
      return true
    }else{
      return false
    }
  }