var romanToInt = function(s) {
	const romNum = {
		I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
	}

	var count = 0;
	for (var x = 0; x < s.length; x++) {
		if (romNum[s[x]] < romNum[s[x + 1]]) {
			count -= romNum[s[x]];
			x++;
		}
		count += romNum[s[x]];
	}

	return count;
}