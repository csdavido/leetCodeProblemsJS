var isPalindrome = function(s) {
    //HANDLE EMPTY STRING
    if (s.length < 1) {
        return true;
    }
    
    //TAKE OUT OTHER CHARACTERS
    s = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    
    //REAR POINTER
    var y = s.length - 1;
    
    for (var x = 0; x <= y; x++) {
        if(s[x] != s[y]) {
            return false;
        } 
        //DECREMENT POINTER
        else {
            y--;
        }
    }
    
    //IF ALL MATCH
    return true;
};