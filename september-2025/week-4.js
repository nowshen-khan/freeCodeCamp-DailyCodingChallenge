/* ======================================================
📅 September 2025 - Week 4
====================================================== */

/* 
------------------------------------------------------
Problem 27: Spam Detector
------------------------------------------------------
Given a phone number in the format "+A (BBB) CCC-DDDD", where each letter represents a digit as follows:

A represents the country code and can be any number of digits.
BBB represents the area code and will always be three digits.
CCC and DDDD represent the local number and will always be three and four digits long, respectively.
Determine if it's a spam number based on the following criteria:

The country code is greater than 2 digits long or doesn't begin with a zero (0).
The area code is greater than 900 or less than 200.
The sum of first three digits of the local number appears within last four digits of the local number.
The number has the same digit four or more times in a row (ignoring the formatting characters).

✅ Examples:
1. isSpam("+0 (200) 234-0182") should return false.
2. isSpam("+091 (555) 309-1922") should return true.
3. isSpam("+1 (555) 435-4792") should return true.
4. isSpam("+0 (955) 234-4364") should return true.
5. isSpam("+0 (155) 131-6943") should return true.
6. isSpam("+0 (555) 135-0192") should return true.
7. isSpam("+0 (555) 564-1987") should return true.
8. isSpam("+00 (555) 234-0182") should return false.
------------------------------------------------------
*/
function isSpam(number) {
	let numArray = number.split(" ");
	const countryCode = numArray[0].replace(/\D/g, "");
	const areaCode = parseInt(numArray[1].replace(/\D/g, ""), 10);
	const localNumber = numArray[2].split("-");

	const localCode = localNumber[0];
	const lastFour = localNumber[1];

	const sumLocal = localCode.split("").reduce((acc, d) => acc + Number(d), 0);

	// Rule 1: Country code
	if (countryCode.length > 2 || countryCode[0] !== "0") {
		return true; // spam
	}

	// Rule 2: Area code
	if (areaCode < 200 || areaCode > 900) {
		return true; // spam
	}

	// Rule 3: sumLocal appears in lastFour
	if (lastFour.includes(sumLocal.toString())) {
		return true; // spam
	}

	// Rule 4: Same digit 4+ times in a row
	const digitsOnly = number.replace(/\D/g, "");
	if (/(\d)\1{3,}/.test(digitsOnly)) {
		return true; // spam
	}

	return false; // not spam
}

// Test cases
console.log(isSpam("+0 (200) 234-0182")); // ?
console.log(isSpam("+091 (555) 309-1922")); // ?
console.log(isSpam("+1 (555) 435-4792")); // ?
console.log(isSpam("+0 (955) 234-4364")); // ?
console.log(isSpam("+0 (155) 131-6943")); // ?
console.log(isSpam("+0 (555) 135-0192")); // ?
console.log(isSpam("+0 (555) 564-1987")); // ?
console.log(isSpam("+00 (555) 234-0182")); // ?

/* 
------------------------------------------------------
Problem 28: CSV Header Parser
------------------------------------------------------
Given the first line of a comma-separated values (CSV) file, return an array containing the headings.

The first line of a CSV file contains headings separated by commas.
Remove any leading or trailing whitespace from each heading.

✅ Examples:
1. getHeadings("name,age,city") should return ["name", "age", "city"].
2. getHeadings("first name,last name,phone") should return ["first name", "last name", "phone"].
3. getHeadings("username , email , signup date ") should return ["username", "email", "signup date"].
------------------------------------------------------
*/
function getHeadings(csv) {
	let values = csv.split(",");
	values = values.map((values) => values.trim());
	return values;
}
console.log(getHeadings("name,age,city"));
console.log(getHeadings("first name,last name,phone"));
console.log(getHeadings("username , email , signup date "));
console.log(getHeadings("username , email , signup date "));

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
