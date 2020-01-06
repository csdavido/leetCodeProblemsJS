var isPalindrome = function(x) {
	const num = String(x).split('');

	while (num.length > 1) {
		//IF FIRST AND LAST DON'T MATCH
		if (num.shift() != num.pop()) {
			//NOT A PALINDROME
			return false;
		}
	}
	//IF ALL MATCH, IS A PALINDROME
	return true;
}