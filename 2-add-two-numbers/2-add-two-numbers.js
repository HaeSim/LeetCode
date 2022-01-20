/**
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
var addTwoNumbers = function(l1, l2) {

    let flag = true
    let sum = new ListNode()
    let head = sum
    while(flag) {
        let temp1 = sum.val + (l1===null ? 0 : l1.val) + (l2===null ? 0 : l2.val) 
        let temp2 = 0
        if(temp1>=10) {
            temp1 = temp1-10
            temp2++
        }
        l1 = (l1===null ? null : l1.next)
        l2 = (l2===null ? null : l2.next)
        sum.val = temp1
        if(temp2 === 0 && l1 === null && l2 === null) {
            flag = false
        } else {
            sum.next = new ListNode(temp2, null)
            sum = sum.next
        }
    }
    return head
};