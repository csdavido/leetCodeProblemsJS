function ListNode(val) {
    this.val = val;
    this.next = null;
}
 
var reverseList = function(head) {
    let prev = null;
    let cur = head;
    let next = null;

    while (cur != null) {
    	next = cur.next;
    	cur.next = prev;
    	prev = cur;
    	cur = next;
    }

    return prev;

};