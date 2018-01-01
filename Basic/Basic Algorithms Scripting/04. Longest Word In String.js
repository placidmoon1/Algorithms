/* FreeCodeCamp Basic Algorithms Scripting Q4: <Find the Longest Word in a String>

Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

/* Iterative approach (O(n)) */
function findLongestWordIter(str) {
  var strArr = str.split(" ");
  var longestLength = 0;
  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i].length > longestLength) {
      longestLength = strArr[i].length;
    }
  }
  return longestLength;
}

/* Using JavaScript specific functions */
function findLongestWordJS(str) {
  return str.split(" ")
    .reduce(function(accVal, currVal){
              return Math.max(accVal, currVal.length);
            }, 0);
}
findLongestWordJS("The quick brown fox jumped over the lazy dog");/ /should return 6

findLongestWordIter("The quick brown fox jumped over the lazy dog"); //should return 6
