/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
    let x = 1
  if (sumNum===0){
      return 1
  } else if(sumNum===1){
      return 1
  }else{
      for(sumNum;sumNum>0;sumNum--){
         x = x*sumNum

      }
  } return x
}