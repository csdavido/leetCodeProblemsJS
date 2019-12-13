var reverse = function(x) {
    //CONVERT X TO STRING
    var holder = x.toString();
    //RETURN VALUE
    var res = '';
    //IF NEGATIVE NUMBER
    if (holder[0] === '-') {
        //ADD '-' TO RETURN STRING
        res += '-';
        //REMOVE FROM X STRING
        holder = holder.slice(1);
        //IF THERE IS A 0 IN THE FIRST DIGIT
    } else if (holder[holder.length - 1] === 0) {
        //REVOCE FROM X STRING
        holder = holder.slice(0, holder.length - 1);
    }
    //REVERS THROUGH X STRING IN REVERSE
    for (var x = holder.length - 1; x >= 0; x--) {
        //ADD ELEMENT FROM X STRING TO RETURN STRING
        res += holder[x];
    }
    //CHECK FOR OVERFLOW
    if (parseInt(res) > (Math.pow(2, 31) -1) || parseInt(res) < (Math.pow(-2, 31))) {
        return 0;    
    }
    return res;
    
};