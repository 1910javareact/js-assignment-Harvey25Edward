/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    let x = someNum/2
   
    if(Number.isInteger(x)){
        return true
    }else{
        return false
    }

  
}