var mergeTwoLists = function(l1, l2) {
    //BASE CASES
    if (!l1) {
    	return l2;
    }
    else if (!l2) {
    	return l1;
    }
    //RECURSIVE CASES
    if (l1.val < l2.val) {
    	l1.next = mergeTwoLists(l1.next, l2);
    	return l1;
    } else {
    	l2.next = mergeTwoLists(l1, l2.next);
    	return l2;
    }
};