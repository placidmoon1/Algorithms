/*
FreeCodeCamp Basic Algorithms Scription Q8: <Repeat a String>

Repeat a given string (first argument) num times (second argument). 
Return an empty string if num is not a positive number.
*/

/* Iterative Approach */
function repeatStringNumTimesIter(str, num) {
  if (num < 0) {
    return "";
  }
  var resultString = "";
 for (var i = 0; i < num; i++) {
   resultString += str;
 }
  return resultString;
}
/* Recusrive Approach */
function repeatStringNumTimesRecur(str, num) {
  if (num <= 0) {
    return "";
  }
  return str + repeatStringNumTimes(str, num - 1);
}

/* One-line Approach */
function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : "";
}

/* Test Cases; all test cases should return "abcabcabc"*/
repeatStringNumTimesRecur("abc", 3);
repeatStringNumTimesIter("abc", 3);
