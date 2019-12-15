var romanToInt = function(s) {
    //RETURN VALUE
    var count = 0;
    //REVERSE LOOP THROUGH STRING
    for (var x = s.length - 1; x >= 0; x--) {
        if (s[x] === 'I') {
            count += 1;
        }
        if (s[x] === 'V') {
            if (x > 0 && s[x - 1] === 'I') {
                count += 4;
                s = s.split('IV').join('V');
                x--;
            } else {
                count += 5;   
            }
        }
        if (s[x] === 'X') {
            if (x > 0 && s[x - 1] === 'I') {
                count += 9;
                s = s.split('IX').join('X');
                x--;
            } else {
                count += 10;   
            }
        }
        if (s[x] === 'L') {
            if (x > 0 && s[x - 1] === 'X') {
                count += 40;
                s = s.split('XL').join('L');
                x--;
            } else {
                count += 50;   
            }
        }
        if (s[x] === 'C') {
            if (x > 0 && s[x - 1] === 'X') {
                count += 90;
                s = s.split('XC').join('C');
                x--;
            } else {
                count += 100;   
            }
        }
        if (s[x] === 'D') {
            if (x > 0 &&  s[x - 1] === 'C') {
                count += 400;
                s = s.split('CD').join('D');
                x--;
            } else {
                count += 500;   
            }
        }
        if (s[x] === 'M') {
            if (x > 0 && s[x - 1] === 'C') {
                count += 900;
                s = s.split('CM').join('M');
                x--;
            } else {
                count += 1000;   
            }
        }
    }
    return count;
};