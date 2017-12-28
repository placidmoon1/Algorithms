/* FreeCodeCamp Basic Algorithms Scripting Q5: Tile Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

*/

function titleCase(str) {
  var strArr = str.split(" ");
  for (var i = 0; i < strArr.length; i++) {
    var subStrArr = strArr[i].split("");
    subStrArr[0] = subStrArr[0].toUpperCase();
    for (var j = 1; j < subStrArr.length; j++) {
      subStrArr[j] = subStrArr[j].toLowerCase();
    }
    strArr[i] = subStrArr.join("");
  }
  return strArr.join(" ");
}

titleCase("I'm a little tea pot");
