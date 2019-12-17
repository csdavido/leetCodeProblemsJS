var getNext = function(n) {
    //GET NEXT NUMBER
    var sum = 0;
    
    while (n > 0) {
        //POP OFF A DIGIT
        var temp = n % 10;
        n = parseInt(n / 10);
        //ADD SQUARED VALUE TO SUM
        sum += parseInt(temp * temp);
    }
    return sum;
};

var isHappy = function(n) {
    //MAKE SET
    var hash = new Set();
    //CHECK N IS NOT IN SET & GREATER THAN 1
    while (n != 1 && !hash.has(n)) {
        //console.log("N: ", n);
        //ADD TO SET
        hash.add(n);
        //GET NEXT NUMBER
        n = getNext(n);
    }
    //ENDING CONDITION
    return n == 1;
};