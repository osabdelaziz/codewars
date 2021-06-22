
function describeAge(age){
    let s = "You're a(n) "
    return (age<13)?`${s}kid`:(age<18)?`${s}teenager`:(age<65)?`${s}adult`:`${s}elderly`;
    }