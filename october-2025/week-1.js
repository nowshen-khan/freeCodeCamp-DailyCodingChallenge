/* ======================================================
📅 October 2025 - Week 1
====================================================== */

/* 
------------------------------------------------------
Problem 1: Binary to Decimal
------------------------------------------------------
Given a string representing a binary number, return its decimal equivalent as a number.

A binary number uses only the digits 0 and 1 to represent any number. To convert binary to decimal, multiply each digit by a power of 2 and add them together. Start by multiplying the rightmost digit by 2^0, the next digit to the left by 2^1, and so on. Once all digits have been multiplied by a power of 2, add the result together.

✅ Examples: 
The binary number 101 equals 5 in decimal because: 1 * 2^2 + 0 * 2^1 + 1 * 2^0 = 4 + 0 + 1 = 5
1. toDecimal("101") should return 5.
2. toDecimal("1010") should return 10.
3. toDecimal("10010") should return 18.
4. toDecimal("1010101") should return 85.
------------------------------------------------------
*/

function toDecimal(binary) {
	let decimal = 0;
	let num = binary.split("").reverse();

	for (let i = 0; i < num.length; i++) {
		if (num[i] === "1") {
			decimal += Math.pow(2, i);
		}
	}
	return decimal;
}
console.log(toDecimal("101")); // 5
console.log(toDecimal("1010")); // 10
console.log(toDecimal("10010")); // 18
console.log(toDecimal("1010101")); // 85

/* 
------------------------------------------------------
Problem 2: Decimal to Binary
------------------------------------------------------
Given a non-negative integer, return its binary representation as a string.

A binary number uses only the digits 0 and 1 to represent any number. To convert a decimal number to binary, repeatedly divide the number by 2 and record the remainder. Repeat until the number is zero. Read the remainders last recorded to first. For example, to convert 12 to binary:

12 ÷ 2 = 6 remainder 0
6 ÷ 2 = 3 remainder 0
3 ÷ 2 = 1 remainder 1
1 ÷ 2 = 0 remainder 1
12 in binary is 1100.

✅ Examples: 
1. toBinary(5) should return "101".
2. toBinary(12) should return "1100".
3. toBinary(50) should return "110010".
4. toBinary(99) should return "1100011".
------------------------------------------------------
*/

function toBinary(decimal) {
	let binary = "";
	while (decimal > 0) {
		let remainder = decimal % 2;
		binary = remainder + binary;
		decimal = Math.floor(decimal / 2);
	}
	return binary || "0";
}

console.log(toBinary(5));
console.log(toBinary(12));
console.log(toBinary(50));
console.log(toBinary(99));
