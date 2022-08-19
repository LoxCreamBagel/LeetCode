/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    const stack = [];
    let node = head;
    do {
        stack.push(node.val);
        node = node.next;
    } while (node);
    
    node = head;
    let palindrome = true;
    do {
        palindrome = palindrome && (node.val === stack.pop());
        node = node.next;
    } while (node && palindrome);1
    
    return palindrome;
};