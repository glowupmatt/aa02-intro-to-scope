/*
Below is a solution for the Anagrams problem. Anagrams are words that contain
the same characters but not necessarily in the same order. The function returns
`true` if `word1` and `word2` are anagrams.

This solution only uses the `var` to declare all variables. The code runs as
expected, but could be improved. Refactor this solution to only use `let` and
`const` instead of `var`.

Which variables should be declared with `let`? Why?
Which variables should be declared with `const`? Why?
What are the potential consequences of declaring all variables with `var`, even
if the function gives you the correct output?

BONUS: If you have time after refactoring the variables, feel free to refactor
the logic to further improve this solution to only use one count object.
*/

const areAnagrams = (word1, word2) => {

  if (word1.length !== word2.length) return false;

  const charCount = {};

  for (let i = 0; i < word1.length; i++) {
    charCount[word1[i]] = (charCount[word1[i]] || 0) + 1;
    charCount[word2[i]] = (charCount[word2[i]] || 0) - 1;
  }
  for (let char in charCount) {
    if (charCount[char] !== 0) {
      return false;
    }
  }
  return true;
}

console.log(areAnagrams("cat", "act"));          // true
console.log(areAnagrams("restful", "fluster"));  // true
console.log(areAnagrams("cat", "dog"));          // false
console.log(areAnagrams("boot", "bootcamp"));    // false
console.log(areAnagrams('bott', 'boot'));        // false


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = areAnagrams;
} catch {}
