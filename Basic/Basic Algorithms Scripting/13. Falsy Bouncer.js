/* 
FreeCodeCamp Basic Algorithms Scripting Q13: <Falsy Bouncer> 

Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  function faltyBouncer(val) {
    if (isNaN(val)) {
      if (typeof(val) != 'string') {
        return false;
      }
    }
    return val != false && val != null && val != 0 && val != "" && val != undefined ;
  }
  filteredArray = arr.filter(faltyBouncer);
  return filteredArray;
}

/* One-line solution */
function bouncerOneLine(arr) {
  return arr.filter(Boolean);
}

bouncer([1, null, NaN, 2, undefined]);
