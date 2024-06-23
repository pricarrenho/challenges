/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const lists = [...list1, ...list2].sort();

  return lists;
};

// Input: list1 = [1,2,4], list2 = [1,3,4]

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
