/* 
FreeCodeCamp Basic Algorithms Scripting Q11: <Slasher Flick>

Return the remaining elements of an array after chopping off n elements from the head.
The head means the beginning of the array, or the zeroth index.
*/

function slasher(arr, howMany) {
  return arr.slice(howMany);
}
slasher([1, 2, 3], 2);