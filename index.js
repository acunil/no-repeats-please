"use strict";

function findPermutations(string) {
  // array to gather all permutations
  var permArray = [];

  // prevent unnecessary calculations if string is 1 character | break clause for recursion
  if (string.length === 1) return string;

  // iterate through string
  for (let i = 0; i < string.length; i++) {
    // variables for current character and all other characters
    let char = string[i];
    let remainingChars =
      string.slice(0, i) + string.slice(i + 1, string.length);

    // recursively run this function on progressivley shorter string
    for (let perm of findPermutations(remainingChars)) {
      permArray.push(char + perm);
    }
  }

  return permArray;
}

function permAlone(str) {
  // answer is always 1 if str.length is 1
  if (str.length === 1) return 1;

  // array to store all valid permutations ie. no consecutive letters
  var answer = [];

  // sort alphabetically
  var allPermutations = findPermutations(str).sort((a, b) =>
    a.localeCompare(b)
  );

  allPermutations.forEach((string) => {
    // true by default, if consecutive letter is found, changed to false
    var valid = true;

    // check all chars in string for same character either before or after
    for (let i = 0; i < string.length; i++) {
      if (string[i] === string[i - 1] || string[i] === string[i + 1])
        valid = false;
    }

    // if valid is still true, permutation has no consecutive letters so send to answer
    if (valid) answer.push(string);
  });

  return answer.length;
}

console.log(permAlone("abfdefa")); // 2640
