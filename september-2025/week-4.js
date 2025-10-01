/* ======================================================
📅 September 2025 - Week 4
====================================================== */

/* 
------------------------------------------------------
Problem 29: Longest Word
------------------------------------------------------
Given a sentence, return the longest word in the sentence.
Ignore periods (.) when determining word length.
If multiple words are ties for the longest, return the first one that occurs.

✅ Examples:
1. getLongestWord("coding is fun") should return "coding".
2. getLongestWord("Coding challenges are fun and educational.") should return "educational".
3. getLongestWord("This sentence has multiple long words.") should return "sentence".
------------------------------------------------------
*/
function getLongestWord(sentence) {
	const sen = sentence.replace(/[^\w\s]/g, "").split(" ");
	let longWord = sen[0];
	sen.forEach((word) => {
		word.length <= longWord.length ? longWord : (longWord = word);
	});
	return longWord;
}

console.log(getLongestWord("coding is fun")); // coding
console.log(getLongestWord("Coding challenges are fun and educational.")); // educational
console.log(getLongestWord("This sentence has multiple long words.")); // sentence

/* ======================================================
📅 September 2025 - Week 4
====================================================== */

/* 
------------------------------------------------------
Problem 30: Phone Number Formatter
------------------------------------------------------
Given a string of eleven digits, return the string 
as a phone number in this format: "+D (DDD) DDD-DDDD"

✅ Examples:
formatNumber("05552340182") → "+0 (555) 234-0182"
formatNumber("15554354792") → "+1 (555) 435-4792"
------------------------------------------------------
*/
function formatNumber(number) {
	return (
		"+" +
		number.slice(0, 1) +
		" (" +
		number.slice(1, 4) +
		") " +
		number.slice(4, 7) +
		"-" +
		number.slice(7)
	);
}
console.log(formatNumber("05552340182")); // +0 (555) 234-0182
console.log(formatNumber("15554354792")); // +1 (555) 435-4792
