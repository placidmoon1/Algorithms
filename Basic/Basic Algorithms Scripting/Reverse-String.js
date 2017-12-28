/* FreeCodeCamp Basic Algorithms Scripting Q1

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

*/
function reverseString(str) {
  newStr = "";
  for (var i = str.length - 1 ; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

reverseString("hello");
