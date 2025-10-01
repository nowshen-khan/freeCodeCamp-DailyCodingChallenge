/* Phone Number Formatter
Given a string of ten digits, return the string as a phone number in this format: "+D (DDD) DDD-DDDD".
Passed:1. formatNumber("05552340182") should return "+0 (555) 234-0182".
Passed:2. formatNumber("15554354792") should return "+1 (555) 435-4792".
*/

function formatNumber(number) {
	const num =
		"+" +
		number.slice(0, 1) +
		" (" +
		number.slice(1, 4) +
		") " +
		number.slice(4, 7) +
		"-" +
		number.slice(7);
	return num;
}

console.log(formatNumber("05552340182"));
console.log(formatNumber("15554354792"));
