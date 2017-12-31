/* 
FreeCodeCamp Basic Algorithms Scripting Q7: <Confirm the Ending> 

Check if a string (first argument, str) ends with the given target string (second argument, target).
*/

/* One-line function */
function confirmEndingOneLine(str, target) {
  return str.endsWith() == target;
}

function confirmEnding(str, target) {
  // Assume target's length is always less than or equal to the ength of str
  lenTarget = target.length;
  endOfStr = str.substring(str.length - lenTarget);
  return target == endOfStr
}
