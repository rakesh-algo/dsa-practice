/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const visitedNodes = new Set();
    let currentNode = head;

    while (currentNode) {
        if (visitedNodes.has(currentNode))
            return true;
        visitedNodes.add(currentNode);
        currentNode = currentNode.next;
    }
    return false;
};
