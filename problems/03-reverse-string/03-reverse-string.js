/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
 export function reverseStr(someStr) {
  strarr = someStr.split("")
  reversedarr = strarr.reverse()
joinedarr = reversedarr.join("")
return joinedarr
}
