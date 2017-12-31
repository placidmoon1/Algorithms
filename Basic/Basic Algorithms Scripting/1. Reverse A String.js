/* 
FreeCodeCamp Basic Algorithms Scripting Q1: <Reverse a String>

Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
*/

/* Reversing a sting using an iterative approach */
function reverseStringForLoop(str) {
  newStr = "";
  for (var i = str.length - 1 ; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

/* Reversing a string using javaScript functions*/
function reverseStringJSFunc(str) {
  return str.split(' ').reverse().join('');
}
reverseStringForLoop("hello");
reverseStringJSFunc("hello");
