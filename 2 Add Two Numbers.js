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
    let carry = 0;
    let node1 = l1;
    let node2 = l2;
    const tempHead = new ListNode(-1, null);
    let pNode = tempHead;

    do {
        let num1 = node1?.val ?? 0;
        let num2 = node2?.val ?? 0;

       
        let sum = num1 + num2 + carry;
        
        if ((sum / 10) >= 1) {
            carry = 1;
            sum = sum % 10;
        } else {
            carry = 0;
        }

        pNode.next = new ListNode(sum, null);
        pNode = pNode.next;
        node1 = node1?.next ?? null;
        node2 = node2?.next ?? null;
    } while (node1?.val !== undefined || node2?.val !== undefined || carry);

    return tempHead.next;
};