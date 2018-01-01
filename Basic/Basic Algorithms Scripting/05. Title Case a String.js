/* FreeCodeCamp Basic Algorithms Scripting Q5: <Tile Case a Sentence>

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

/* Iterative approach */
function titleCaseIter(str) {
  var strArr = str.split(" ");
  for (var i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].toLowerCase().split("");
    strArr[i][0] = strArr[i][0].toUpperCase();
    strArr[i] = strArr[i].join("");
  }
  return strArr.join(" ");
}

titleCaseIter("I'm a little tea pot");

titleCase("I'm a little tea pot");
