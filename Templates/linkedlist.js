const { createListNode, createCycle, listNodeToArray } = require('linkedlist');
global.listNodeToArray = listNodeToArray;
global.createListNode = createListNode;
global.createCycle = createCycle;

// paste

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {

    let slow = head
    let fast = head

   while(fast!= undefined && fast.next!=undefined)
    {
        slow = slow.next
        fast = fast.next.next
        if(slow==fast) return true
    }
    return false
};



let head = createListNode([3, 2, 0, -4])
createCycle(head, 1)
console.log(hasCycle(head))


