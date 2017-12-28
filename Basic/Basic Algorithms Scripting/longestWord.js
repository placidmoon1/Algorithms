/* FreeCodeCamp Basic Algorithms Scripting Q4: Find the Longest Word in a String

Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWord(str) {
  var strArr = str.split(" ");
  var longestLength = 0;
  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i].length > longestLength) {
      longestLength = strArr[i].length;
    }
  }
  return longestLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
