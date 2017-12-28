/* FreeCodeCamp Basic Algorithms Scripting Q6: Return Largest Number in Arrays

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

*/

function largestOfFour(arr) {
  largestNumberOfEach = [];
  for (var i = 0; i < arr.length; i++) {
    var curLargeNum = 0;
    for (var j = 0; j <arr.length; j++) {
      if (arr[i][j] > curLargeNum) {
        curLargeNum = arr[i][j];
      }
    }
    largestNumberOfEach.push(curLargeNum);
  }
  return largestNumberOfEach;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
