/**
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function (l1, l2) {
    let sum = linkedListToNumber(l1) + linkedListToNumber(l2);
    return arrayToLinkedList([...`${sum}`]);
};

var linkedListToNumber = function (head) {
    let sum = 0;
    let p = 0;
    let node = head;
    do {
        sum += node.val * Math.pow(10, p);
        node = node.next
        p++;
    } while (node);
    return sum;
}

var arrayToLinkedList = function(list) {
    return list.reduce((head, val) => {
        const stack = new ListNode(val, head);
        return stack;
    }, null);
}