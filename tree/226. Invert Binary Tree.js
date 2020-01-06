/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * DFS
 * @param root
 */
var invertTree = function(root) {
    const stack = [root];

    while (stack.length) {
        const n = stack.pop();
        if(n) {
            [n.left, n.right] = [n.right, n.left];
            stack.push(n.left, n.right);
            // stack.push(n.right, n.left);
        }
    }

    return root;
};

/**
 * BFS
 * @param root
 */
var invertTree = function(root) {
    const stack = [root];

    while (stack.length) {
        const n = stack.shift();
        if(n) {
            [n.left, n.right] = [n.right, n.left];
            stack.push(n.left, n.right);
            // stack.push(n.right, n.left);
        }
    }

    return root;
};

/**
 * 递归
 */