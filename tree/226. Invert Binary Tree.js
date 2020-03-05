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
 * 利用栈，后进先出
 * @param root
 */
var invertTree = function(root) {
    const stack = [root];

    while (stack.length) {
        const n = stack.pop();
        if(n) {                     //注意这里的node有值判断
            [n.left, n.right] = [n.right, n.left];
            stack.push(n.left, n.right);
            // stack.push(n.right, n.left);
        }
    }

    return root;
};

/**
 * BFS
 * 其实利用队列的特性，一边进一边出
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
 * 使用左右中后续遍历，保证叶子节点最先遍历
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var invertTree = function(root) {
    dfs(root);
    return root;
};

var dfs = (root)=>{
    if(root === null) {
        return null;
    }
    invertTree(root.left);
    invertTree(root.right);
    let tmp = root.left;
    root.left = root.right;
    root.right = tmp;
};