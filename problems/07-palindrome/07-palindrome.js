/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */

function reverseStr(someStr) {
    strarr = someStr.split("")
    reversedarr = strarr.reverse()
  joinedarr = reversedarr.join("")
  return joinedarr
  }

function isPalindrome(someStr) {
  if(someStr ===  reverseStr(someStr)){
      return true
  }
  else {
      return false
  }
}
