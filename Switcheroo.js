function switchChars(c){
    if(c === 'a'){
      return 'b'
    }else if(c === 'b'){
      return 'a'
    }else{
      return c
    }
  }
    function switcheroo(x){
    return x.split('').map(switchChars).join('')
    
  }