var fizzBuzz = function(n) {
    var solution = [];
    var i = 0;
    for (var x = 1; x <= n; x++) {
        if (x % 3 === 0 && x % 5 === 0) {
            solution[i] = "FizzBuzz";
        } 
        else if (x % 3 === 0) {
            solution[i] = "Fizz";
        }
        else if (x % 5 === 0) {
            solution[i] = "Buzz";
        } 
        else {
            solution[i] = x.toString();
        }
        i++;
    }
    return solution;
};