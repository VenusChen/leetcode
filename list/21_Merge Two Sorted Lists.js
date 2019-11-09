/**
 * Desc:
 * Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
 * Hint:
 * 1. 处理参数边界情况。
 * 2. 两个链表遍历当前节点都有值时，比较大小，放入结果链表。
 * 3. 其中有一个链表遍历完时，另一个链表剩余部分直接放到结果链表中。
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    //1. 注意异常情况的判断。
    if(!l1) return l2;
    if(!l2) return l1;
    let node1 = l1;
    let node2 = l2;
    //2. 注意保留好返回结果的头指针，为了方便增加哨兵节点
    let res = new ListNode(null);
    let head = res;
    while (node1 && node2) {
        if(node1.val<=node2.val) {
            res.next = new ListNode(node1.val);
            node1 = node1.next;
        }
        else {
            res.next = new ListNode(node2.val);
            node2 = node2.next;
        }
        res = res.next;
    }
    //3. 注意处理其中一个链表先遍历完的情况
    if(node1 && !node2) {
        res.next = node1;
    }
    if(!node1 && node2) {
        res.next = node2;
    }
    return head.next;
};

// console.log(mergeTwoLists({val:1, next:{val: 2, next:{val:4, next:null}}}, {val:1, next:{val:3, next:{val:4, next:null}}}));