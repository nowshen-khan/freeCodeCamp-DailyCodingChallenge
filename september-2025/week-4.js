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
