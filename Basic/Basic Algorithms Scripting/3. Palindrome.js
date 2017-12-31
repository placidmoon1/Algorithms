/* FreeCodeCamp Basic Alhorithms Scripting Q3: Check for Palindromes
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters and turn everything lower case in order to check for palindromes.
We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
*/

/* Changing the whole string!*/
function palindromeWhole(str) {
  str = str.toLowerCase();
  re = /[^a-z0-9]+/gmi; //filters out every non alphanumeric character
  str = str.replace(re, "");
  for (i = 0; i < Math.floor((str.length)/2); i++) {
    if (str[i] != str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/* Changing only two characters that will be compared in one iteration (i.e. divide and conquer approach)*/
function palindromeDnD(str) {
  var start = 0;
  var end = str.length - 1;
  var regExp = /[^a-z0-9]+/i; // non-numerical characters
  while (start < end) {
    while (str[start].match(regExp)) { 
      start++;
      continue;     
    }
    while (str[end].match(regExp)) {
      end--;
      continue;
    }
    if (str[start].toLowerCase() != str[end].toLowerCase()) {
      return false;
    } else {
      start++;
      end--;
    }
  }
  return true;
}

var ans = palindromeDnD("eye"); //should return true
var ans = palindromeDnD("hello); //should return false
