var isValid = function(s) {
    //DECLARE STACK
    var stack = [];
    //SMALL INPUTS
    if (s.length % 2 !== 0) {
        return false;
    }
    if (s.length === 0) {
        return true;
    }
    //LOOP THROUGH INPUT STRING
    for (var x = 0; x < s.length; x++) {
        //IF OPENING BRAKCET
        if (s[x] === '(' || s[x] === '[' || s[x] === '{') {
            //PUSH TO STACK
            stack.push(s[x]);
        }
        //IF CLOSING BRACKET
        if (s[x] === ')') {
            //CHECK FOR MATCH
            if (stack[stack.length - 1] === '(') {
                //REMOVE FROM STACK
                stack.pop();
            }
        } else if (s[x] === ']') {
            if (stack[stack.length - 1] === '[') {
                stack.pop(); 
            }
        } else if (s[x] === '}') {
            if (stack[stack.length - 1] === '{') {
                stack.pop();
            }
        }
    }
    //IF STACK IS EMPTY
    if (!Array.isArray(stack) || !stack.length) {
        //RETURN TRUE
        return true;
    } else {
        //RETURN FALSE
        return false;
    }
};