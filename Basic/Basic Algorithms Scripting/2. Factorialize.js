/* 
FreeCodeCamp Basic Algorithm Scripting Q2: <Factorialize a Number>

Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/

/* Parameter specification: Parameter has to be a non-negative integer */
/* Iterative Approach*/
function factorializeIter(num) {
  var iterSol = 1;
  for (var i = 1; i <= num; i++) {
    iterSol *= i;
  }
  return iterSol; // if num == 0, function would output 1 per initialization specification of var iterSol!
}

/* Recursive Approach */
function factorializeRecur(num) {
  if (num == 1 || num == 0) {
    return 1;
  }
  return num * factorialize(num-1);
}

/* Sample test should output 120 (1*2*3*4*5) */
factorializeIter(5);
factorializeRecur(5);
