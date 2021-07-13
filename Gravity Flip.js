const flip=(d, a)=>{
    if(d == 'R'){
      return a.sort((a,c) => a - c)
    }else{
      return a.sort((a,c) => c-a)
    }
  }