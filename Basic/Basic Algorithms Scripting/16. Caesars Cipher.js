/*
FreeCodeCamp Basic Algorithms Scripting Q16: <Caesars Cipher>

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase.
Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) { // LBH QVQ VG!
  var ROT13Str = "";
  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);
    if (65 <= charCode && charCode <= 90) {
      if ( charCode > 77) {
        ROT13Str += String.fromCharCode(65 + (12 - (90 - charCode)));
      } else {
        ROT13Str += String.fromCharCode(charCode + 13);
      }
    } else {
      ROT13Str += str[i];
    }
  }
  return ROT13Str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
