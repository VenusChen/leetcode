/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/**
 * 递归，每个节点只关心自己的左右节点的高度即可
 * @param root
 * @return {number}
 */
var maxDepth = function(root) {
    if(root === null) {
        return 0;
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right))+1;
};

var maxDepth = function (root) {
    if(!root) {
        return 0;
    }
    let queue = [root];
    let depth = 0;
    while (queue.length > 0) {
        let len = queue.length;
        for(let i = 0; i < len; i++) {
            let node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        depth++;
    }

    return depth;
};
